(function () {
  var DATASETS = [
    {
      id: 'general',
      name: 'General Medicine',
      script: '/js/games.js',
      pagePath: '/',
      modeLabel: 'Daily'
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      script: '/js/emergency-cases.js',
      pagePath: '/games/doctordle-emergency',
      modeLabel: 'Emergency'
    },
    {
      id: 'dermatology',
      name: 'Dermatology',
      script: '/js/dermatology-cases.js',
      pagePath: '/games/doctordle-dermatology',
      modeLabel: 'Dermatology'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      script: '/js/pediatrics-cases.js',
      pagePath: '/games/doctordle-pediatrics',
      modeLabel: 'Pediatrics'
    },
    {
      id: 'gi',
      name: 'Digestive Health',
      script: '/js/gi-cases.js',
      pagePath: '/games/doctordle-digestive-health',
      modeLabel: 'Digestive'
    },
    {
      id: 'womens-health',
      name: "Women's Health",
      script: '/js/womens-health-cases.js',
      pagePath: '/games/doctordle-womens-health',
      modeLabel: "Women's Health"
    },
    {
      id: 'cardiology',
      name: 'Cardiology',
      script: '/js/cardiology-cases.js',
      pagePath: '/games/doctordle-cardiology',
      modeLabel: 'Cardiology'
    },
    {
      id: 'dental',
      name: 'Dental',
      script: '/js/dental-cases.js',
      pagePath: '/games/doctordle-for-dentist',
      modeLabel: 'Dental'
    },
    {
      id: 'mental-health',
      name: 'Mental Health',
      script: '/js/mental-health-cases.js',
      pagePath: '/games/doctordle-mental-health',
      modeLabel: 'Mental Health'
    }
  ];

  var state = {
    activeTopic: 'all',
    search: '',
    items: []
  };

  var selectors = {
    grid: function () { return document.getElementById('library-grid'); },
    count: function () { return document.getElementById('library-count'); },
    search: function () { return document.getElementById('library-search'); },
    filters: function () { return document.getElementById('library-filters'); },
    status: function () { return document.getElementById('library-status'); }
  };

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function shortText(value, maxLength) {
    var text = String(value || '').trim();
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength - 1).trim() + '…';
  }

  function takeLeadSentence(value) {
    var text = String(value || '').trim();
    if (!text) return '';
    var match = text.match(/^(.+?[.?!])(\s|$)/);
    return match ? match[1] : text;
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function uniqueStrings(values) {
    var seen = Object.create(null);
    return values.filter(function (value) {
      var key = String(value || '');
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = url;
      script.async = false;
      script.onload = resolve;
      script.onerror = function () { reject(new Error('Failed to load ' + url)); };
      document.head.appendChild(script);
    });
  }

  async function loadDataset(dataset) {
    window.__DDLE_CASES__ = undefined;
    await loadScript(dataset.script + '?cb=case-library');
    var cases = Array.isArray(window.__DDLE_CASES__) ? window.__DDLE_CASES__.slice() : [];
    return cases.map(function (entry, index) {
      return {
        topicId: dataset.id,
        topicName: dataset.name,
        topicPath: dataset.pagePath,
        modeLabel: dataset.modeLabel,
        caseId: Number.isFinite(entry && entry.id) ? entry.id : index + 1,
        answer: String(entry && entry.answer ? entry.answer : 'Untitled'),
        clues: Array.isArray(entry && entry.clues) ? entry.clues.slice() : [],
        description: String(entry && entry.description ? entry.description : '')
      };
    });
  }

  function groupCases(items) {
    var grouped = Object.create(null);

    items.forEach(function (item) {
      var key = normalizeText(item.answer);
      if (!grouped[key]) {
        grouped[key] = {
          id: key,
          answer: item.answer,
          summary: item.description,
          lead: takeLeadSentence(item.description),
          topics: [],
          topicIds: [],
          cases: [],
          searchText: ''
        };
      }

      grouped[key].cases.push(item);
      grouped[key].topics.push(item.topicName);
      grouped[key].topicIds.push(item.topicId);

      if (!grouped[key].summary && item.description) grouped[key].summary = item.description;
      if (!grouped[key].lead && item.description) grouped[key].lead = takeLeadSentence(item.description);
    });

    return Object.keys(grouped).map(function (key) {
      var group = grouped[key];
      var topicNames = uniqueStrings(group.topics);
      var topicIds = uniqueStrings(group.topicIds);
      var lead = group.lead || takeLeadSentence(group.summary);
      var keywordText = topicNames.join(' ') + ' ' + group.cases.map(function (item) {
        return item.answer + ' ' + item.description + ' ' + item.clues.join(' ');
      }).join(' ');

      return {
        id: group.id,
        answer: group.answer,
        summary: group.summary,
        lead: lead,
        topics: topicNames,
        topicIds: topicIds,
        cases: group.cases,
        searchText: normalizeText(keywordText)
      };
    }).sort(function (a, b) {
      return a.answer.localeCompare(b.answer);
    });
  }

  function buildTopicFilters(items) {
    var counts = { all: items.length };
    DATASETS.forEach(function (dataset) {
      counts[dataset.id] = 0;
    });

    items.forEach(function (item) {
      item.topicIds.forEach(function (topicId) {
        counts[topicId] = (counts[topicId] || 0) + 1;
      });
    });

    return [{ id: 'all', label: 'All Topics', count: counts.all }].concat(DATASETS.map(function (dataset) {
      return {
        id: dataset.id,
        label: dataset.name,
        count: counts[dataset.id] || 0
      };
    }).filter(function (entry) {
      return entry.count > 0;
    }));
  }

  function renderFilters(filters) {
    var host = selectors.filters();
    if (!host) return;
    host.innerHTML = filters.map(function (filter) {
      var active = filter.id === state.activeTopic;
      return '<button class="library-filter' + (active ? ' is-active' : '') + '" type="button" data-topic="' + escapeHtml(filter.id) + '">' +
        '<span>' + escapeHtml(filter.label) + '</span>' +
        '<strong>' + filter.count + '</strong>' +
      '</button>';
    }).join('');

    host.querySelectorAll('[data-topic]').forEach(function (button) {
      button.addEventListener('click', function () {
        state.activeTopic = button.getAttribute('data-topic') || 'all';
        renderFilters(filters);
        renderGrid();
      });
    });
  }

  function filterItems(items) {
    return items.filter(function (item) {
      var topicMatch = state.activeTopic === 'all' || item.topicIds.indexOf(state.activeTopic) >= 0;
      var searchMatch = !state.search || item.searchText.indexOf(state.search) >= 0;
      return topicMatch && searchMatch;
    });
  }

  function buildWikiLink(answer) {
    return 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(String(answer || ''));
  }

  function buildBackSummary(item) {
    return shortText(item.summary || item.lead || 'This diagnosis appears in the Doctordle case bank.', 420);
  }

  function renderGrid() {
    var grid = selectors.grid();
    var count = selectors.count();
    var status = selectors.status();
    if (!grid || !count) return;

    var filtered = filterItems(state.items);
    count.textContent = filtered.length + ' diagnoses';
    if (status) {
      status.textContent = filtered.length
        ? 'Search by diagnosis, clue language, or topic. Open any card for clue patterns and a related mode link.'
        : 'No matches yet. Try a broader query or switch topic filters.';
    }

    grid.innerHTML = filtered.map(function (item) {
      var topics = item.topics.map(function (topic) {
        return '<span class="library-chip">' + escapeHtml(topic) + '</span>';
      }).join('');

      return '<article class="library-card">' +
        '<div class="library-card__flip">' +
          '<section class="library-card__face library-card__face--front">' +
            '<div class="library-card__head">' +
              '<div>' +
                '<h2>' + escapeHtml(item.answer) + '</h2>' +
                '<p class="library-card__lead">' + escapeHtml(shortText(item.lead || item.summary, 220)) + '</p>' +
              '</div>' +
              '<span class="library-card__count">' + item.cases.length + ' case' + (item.cases.length === 1 ? '' : 's') + '</span>' +
            '</div>' +
            '<div class="library-chip-row">' + topics + '</div>' +
            '<div></div>' +
            '<p class="library-card__hint">Click card for more</p>' +
          '</section>' +
          '<section class="library-card__face library-card__face--back">' +
            '<div class="library-card__body library-card__body--scroll">' +
              '<p class="library-card__backcopy">' + escapeHtml(buildBackSummary(item)) + '</p>' +
            '</div>' +
            '<div class="library-actions">' +
              '<a class="library-action" href="' + escapeHtml(buildWikiLink(item.answer)) + '" target="_blank" rel="noopener noreferrer" data-no-flip="true">Open Wikipedia</a>' +
            '</div>' +
          '</section>' +
        '</div>' +
      '</article>';
    }).join('');

    grid.querySelectorAll('.library-card').forEach(function (card) {
      var pointerState = null;

      card.addEventListener('pointerdown', function (event) {
        if (event.pointerType === 'mouse' || event.pointerType === 'touch' || event.pointerType === 'pen') {
          pointerState = { x: event.clientX, y: event.clientY };
        }
      });

      card.addEventListener('click', function (event) {
        if (event.target && event.target.closest('[data-no-flip="true"]')) {
          return;
        }

        var selection = window.getSelection ? String(window.getSelection()) : '';
        if (selection && selection.trim()) {
          return;
        }

        if (pointerState) {
          var movedX = Math.abs((event.clientX || 0) - pointerState.x);
          var movedY = Math.abs((event.clientY || 0) - pointerState.y);
          if (movedX > 6 || movedY > 6) {
            pointerState = null;
            return;
          }
        }

        card.classList.toggle('is-flipped');
        pointerState = null;
      });
    });
  }

  function wireSearch() {
    var input = selectors.search();
    if (!input) return;
    input.addEventListener('input', function () {
      state.search = normalizeText(input.value);
      renderGrid();
    });
  }

  async function boot() {
    var status = selectors.status();

    try {
      if (status) status.textContent = 'Loading diagnoses and topic case banks…';
      var loaded = [];
      for (var i = 0; i < DATASETS.length; i += 1) {
        loaded = loaded.concat(await loadDataset(DATASETS[i]));
      }
      state.items = groupCases(loaded);
      renderFilters(buildTopicFilters(state.items));
      wireSearch();
      renderGrid();
    } catch (error) {
      if (status) status.textContent = 'We could not load the case library right now.';
      if (selectors.grid()) {
        selectors.grid().innerHTML = '<article class="library-card library-card--error"><h2>Case Library unavailable</h2><p>Please try refreshing the page. One of the case datasets failed to load.</p></article>';
      }
    }
  }

  boot();
}());
