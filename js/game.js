// game.js — Doctordle game logic

(function () {
  'use strict';

  // ── Cookie helpers ──────────────────────────────────────────────
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
  }
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }
  function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  // ── localStorage helpers ────────────────────────────────────────
  function lsGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function lsSet(key, val) {
    try { localStorage.setItem(key, val); } catch {}
  }
  function lsRemove(key) {
    try { localStorage.removeItem(key); } catch {}
  }

  // ── State ───────────────────────────────────────────────────────
  const MAX_GUESSES = 6;

  let cookiesAccepted = false;
  let gameData = null;       // current GAMES entry
  let guessCount = 0;
  let gameCompleted = false;
  let selectedId = null;     // id from autocomplete
  let guessedIds = [];
  let guessHistory = [];     // [{name, result}]

  // Stats
  const defaultStats = () => ({
    played: 0, wins: 0, currentStreak: 0, longestStreak: 0,
    lastDate: null, dist: { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 }
  });
  let stats = defaultStats();

  // ── DOM refs ────────────────────────────────────────────────────
  const guessInput    = () => document.getElementById('guess-input');
  const submitBtn     = () => document.getElementById('submit-btn');
  const suggestionsEl = () => document.getElementById('suggestions');
  const resultMsg     = () => document.getElementById('result-msg');
  const clueList      = () => document.getElementById('clue-list');
  const historyEl     = () => document.getElementById('guess-history');
  const summaryBtn    = () => document.getElementById('summary-btn');
  const cardInner     = () => document.getElementById('card-flip-inner');
  const backText      = () => document.getElementById('back-description');
  const ankiRow       = () => document.getElementById('anki-row');
  const anki1Btn      = () => document.getElementById('anki1-btn');
  const anki2Btn      = () => document.getElementById('anki2-btn');
  const cookieBanner  = () => document.getElementById('cookie-banner');
  const modalOverlay  = () => document.getElementById('modal-overlay');
  const modalBody     = () => document.getElementById('modal-body');
  const modalActions  = () => document.getElementById('modal-actions');
  const copyConfirm   = () => document.getElementById('copy-confirm');

  // ── Game selection: pick today's game deterministically ─────────
  function getTodayGame() {
    const start = new Date('2025-01-01T00:00:00');
    const now   = new Date();
    const days  = Math.floor((now - start) / 864e5);
    return GAMES[days % GAMES.length];
  }

  function gameStateKey() {
    const d = new Date().toDateString();
    return `ddle_${gameData.id}_${d}`;
  }

  // ── Render clues ─────────────────────────────────────────────────
  function renderClues(revealed) {
    const list = clueList();
    if (!list) return;
    list.innerHTML = '';
    gameData.clues.forEach((clue, i) => {
      const li = document.createElement('li');
      li.className = 'clue-item';
      if (i === 0 || i < revealed) {
        li.textContent = clue;
        if (i > 0) li.classList.add('revealed');
      } else {
        li.classList.add('locked');
        li.textContent = `Clue ${i + 1} — guess to reveal`;
      }
      list.appendChild(li);
    });
  }

  // ── Render guess history ─────────────────────────────────────────
  function renderHistory() {
    const el = historyEl();
    if (!el) return;
    el.innerHTML = guessHistory.map((g, i) => {
      const icon = g.result === 'correct' ? '✓' : g.result === 'skip' ? '—' : '✗';
      return `<div class="guess-history-item ${g.result}">
        <span>${i + 1}. ${g.name}</span>
        <span class="guess-history-icon">${icon}</span>
      </div>`;
    }).join('');
  }

  // ── Show a clue with animation ───────────────────────────────────
  function revealClue(index) {
    const items = clueList()?.querySelectorAll('.clue-item');
    if (!items || !items[index]) return;
    const li = items[index];
    li.textContent = gameData.clues[index];
    li.classList.remove('locked');
    li.classList.add('revealed');
  }

  function revealAllClues() {
    gameData.clues.forEach((_, i) => revealClue(i));
  }

  // ── Set result message ───────────────────────────────────────────
  function setMsg(text, type) {
    const el = resultMsg();
    if (!el) return;
    el.textContent = text;
    el.className = type || '';
  }

  // ── Disable / enable input ────────────────────────────────────────
  function disableInput(placeholderText) {
    const inp = guessInput();
    const btn = submitBtn();
    if (inp) { inp.disabled = true; inp.placeholder = placeholderText || ''; }
    if (btn) { btn.disabled = true; btn.textContent = 'Game Complete'; }
    hideSuggestions();
  }

  function enableInput() {
    const inp = guessInput();
    const btn = submitBtn();
    if (inp) { inp.disabled = false; inp.placeholder = 'Diagnosis…'; }
    if (btn) { btn.disabled = false; btn.textContent = 'Submit'; }
  }

  // ── Autocomplete ──────────────────────────────────────────────────
  function hideSuggestions() {
    const s = suggestionsEl();
    if (s) s.style.display = 'none';
  }

  function buildSuggestions(query) {
    const s = suggestionsEl();
    if (!s) return;
    s.innerHTML = '';
    if (!query) { s.style.display = 'none'; return; }

    const lower = query.toLowerCase();
    const matches = DISEASE_LIST.filter(d => d.toLowerCase().includes(lower));
    if (!matches.length) { s.style.display = 'none'; return; }

    matches.forEach(name => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';

      // Find id in GAMES if exists
      const entry = GAMES.find(g => g.answer.toLowerCase() === name.toLowerCase());
      const id = entry ? entry.id : name; // use name as id fallback

      const alreadyGuessed = guessedIds.includes(id);
      if (alreadyGuessed) {
        div.classList.add('already-guessed');
        div.textContent = name + ' (already guessed)';
        div.addEventListener('click', e => e.stopPropagation());
      } else {
        div.textContent = name;
        div.addEventListener('click', () => {
          guessInput().value = name;
          selectedId = id;
          hideSuggestions();
        });
      }
      s.appendChild(div);
    });
    s.style.display = 'block';
  }

  // ── Save / load game state ────────────────────────────────────────
  function saveState() {
    if (!cookiesAccepted) return;
    const state = { guessCount, gameCompleted, guessedIds, guessHistory };
    lsSet(gameStateKey(), JSON.stringify(state));
  }

  function loadState() {
    if (!cookiesAccepted) return false;
    const raw = lsGet(gameStateKey());
    if (!raw) return false;
    try {
      const s = JSON.parse(raw);
      guessCount    = s.guessCount    || 0;
      gameCompleted = s.gameCompleted || false;
      guessedIds    = s.guessedIds    || [];
      guessHistory  = s.guessHistory  || [];
      renderHistory();
      renderClues(guessCount);          // re-apply revealed clues
      if (gameCompleted) {
        revealAllClues();
        disableInput(gameData.answer);
        showSummaryButton();
      }
      return true;
    } catch { return false; }
  }

  // ── Stats ─────────────────────────────────────────────────────────
  function loadStats() {
    const raw = getCookie('ddle_stats');
    if (!raw) return;
    try { stats = { ...defaultStats(), ...JSON.parse(raw) }; } catch {}
  }

  function saveStats() { setCookie('ddle_stats', JSON.stringify(stats), 365); }

  function updateStats(won, guesses) {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 864e5).toDateString();
    stats.played++;
    if (won) {
      stats.wins++;
      stats.dist[guesses] = (stats.dist[guesses] || 0) + 1;
      stats.currentStreak = stats.lastDate === yesterday ? stats.currentStreak + 1 : 1;
      if (stats.currentStreak > stats.longestStreak) stats.longestStreak = stats.currentStreak;
    } else {
      stats.currentStreak = 0;
    }
    stats.lastDate = today;
    saveStats();
  }

  // ── Show summary (flip card) button ──────────────────────────────
  function showSummaryButton() {
    const btn = summaryBtn();
    if (!btn) return;
    btn.style.display = 'block';
    // populate back of card
    const desc = backText();
    if (desc) desc.textContent = gameData.description;
    // anki buttons
    if (gameData.ankiStep1 && anki1Btn()) {
      anki1Btn().style.display = 'inline-block';
      ankiRow().style.display = 'flex';
    }
    if (gameData.ankiStep2 && anki2Btn()) {
      anki2Btn().style.display = 'inline-block';
      ankiRow().style.display = 'flex';
    }
  }

  // ── Modal ─────────────────────────────────────────────────────────
  function openModal(html, shareText, showStats, won, guesses) {
    const body = modalBody();
    if (!body) return;

    let content = html;
    if (showStats) {
      content += buildStatsHTML(won ? guesses : null);
    }
    body.innerHTML = content;

    // Share button
    const actions = modalActions();
    if (actions) {
      actions.innerHTML = '';
      if (shareText) {
        const btn = document.createElement('button');
        btn.className = 'btn-share';
        btn.textContent = '📋 Copy Result';
        btn.onclick = () => {
          navigator.clipboard.writeText(shareText).then(() => {
            btn.textContent = '✓ Copied!';
            setTimeout(() => { btn.textContent = '📋 Copy Result'; }, 2000);
            if (typeof gtag === 'function') { gtag('event', 'share', { method: 'copy_result', content_type: 'daily' }); }
            const cc = copyConfirm();
            if (cc) { cc.style.display = 'block'; setTimeout(() => cc.style.display = 'none', 2000); }
          }).catch(() => {
            btn.textContent = '⚠ Copy failed';
            setTimeout(() => { btn.textContent = '📋 Copy Result'; }, 2000);
          });
        };
        actions.appendChild(btn);
      }
    }

    const overlay = modalOverlay();
    if (overlay) overlay.classList.add('open');
  }

  function closeModal() {
    const overlay = modalOverlay();
    if (overlay) overlay.classList.remove('open');
  }

  function buildStatsHTML(highlightGuess) {
    const winPct = stats.played ? Math.round(stats.wins / stats.played * 100) : 0;
    const maxDist = Math.max(1, ...Object.values(stats.dist));

    let distHTML = '';
    for (let i = 1; i <= 6; i++) {
      const cnt = stats.dist[i] || 0;
      const w   = cnt ? Math.max(20, cnt / maxDist * 100) : 0;
      const hl  = highlightGuess === i ? 'highlight' : '';
      distHTML += `<div class="dist-row">
        <span class="dist-label">${i}</span>
        <div class="dist-bar-wrap">
          ${cnt ? `<div class="dist-bar ${hl}" style="width:${w}%"><span>${cnt}</span></div>` : ''}
        </div>
      </div>`;
    }

    return `<div style="margin-top:1rem">
      <h4 style="color:#7b3f00;margin-bottom:0.75rem">📊 Your Statistics</h4>
      <div class="stats-grid">
        <div class="stat-item"><div class="stat-number">${stats.played}</div><div class="stat-label">Played</div></div>
        <div class="stat-item"><div class="stat-number">${winPct}%</div><div class="stat-label">Win Rate</div></div>
        <div class="stat-item"><div class="stat-number">${stats.currentStreak}</div><div class="stat-label">Streak</div></div>
        <div class="stat-item"><div class="stat-number">${stats.longestStreak}</div><div class="stat-label">Best Streak</div></div>
      </div>
      <h4 style="color:#7b3f00;margin-bottom:0.5rem">Guess Distribution</h4>
      ${distHTML}
    </div>`;
  }

  function buildShareText(won, guesses) {
    const days = Math.floor((Date.now() - new Date('2025-01-01').getTime()) / 864e5);
    const emojis = [];
    for (let i = 1; i <= 6; i++) {
      if (i < guesses) emojis.push('🟥');
      else if (i === guesses) emojis.push(won ? '🟩' : '🟥');
      else emojis.push('⬛');
    }
    return `Doctordle #${days}\n🏥 ${emojis.join(' ')}\n\nhttps://doctordle.org`;
  }

  // ── Core guess logic ──────────────────────────────────────────────
  function submitGuess() {
    if (gameCompleted || !cookiesAccepted) return;

    const inp   = guessInput();
    const value = inp ? inp.value.trim() : '';

    // Resolve id
    let id = selectedId;
    if (!id && value) {
      const found = GAMES.find(g => g.answer.toLowerCase() === value.toLowerCase());
      if (found) { id = found.id; selectedId = found.id; }
      else {
        // Check DISEASE_LIST match
        const dMatch = DISEASE_LIST.find(d => d.toLowerCase() === value.toLowerCase());
        if (!dMatch) {
          setMsg('Please select a valid disease or leave blank', 'incorrect');
          return;
        }
        id = dMatch; // use name as id for non-answer diseases
      }
    }

    // Duplicate check
    if (id && guessedIds.includes(id)) {
      setMsg("You've already guessed this!", 'incorrect');
      return;
    }

    guessCount++;
    if (id) guessedIds.push(id);

    const isCorrect = id && (
      (typeof id === 'number' && id === gameData.id) ||
      (typeof id === 'string' && id.toLowerCase() === gameData.answer.toLowerCase())
    );

    const name = id
      ? (GAMES.find(g => g.id === id)?.answer || (typeof id === 'string' ? id : 'Unknown'))
      : 'Skipped';

    if (isCorrect) {
      gameCompleted = true;
      guessHistory.push({ name, result: 'correct' });
      renderHistory();
      revealAllClues();
      updateStats(true, guessCount);
      saveState();
      disableInput(gameData.answer);
      showSummaryButton();
      setMsg('Correct! 🎉', 'correct');
      const msg = `<div style="padding:0.75rem;background:#e6f4ea;border-radius:8px;border:2px solid #2e7d32;margin-bottom:0.5rem"><strong>🎉 Correct! The diagnosis was ${gameData.answer}.</strong></div>`;
      openModal(msg, buildShareText(true, guessCount), true, true, guessCount);
    } else {
      if (guessCount >= MAX_GUESSES) {
        gameCompleted = true;
        guessHistory.push({ name, result: id ? 'wrong' : 'skip' });
        renderHistory();
        revealAllClues();
        updateStats(false, guessCount);
        saveState();
        disableInput(gameData.answer);
        showSummaryButton();
        setMsg('Game over!', 'incorrect');
        const msg = `<div style="padding:0.75rem;background:#fff3e0;border-radius:8px;border:2px solid #e65100;margin-bottom:0.5rem"><strong>❌ Game Over! The diagnosis was ${gameData.answer}.</strong></div>`;
        openModal(msg, buildShareText(false, guessCount), true, false, guessCount);
      } else {
        // Reveal next clue (index = guessCount, since clue 0 is always shown)
        if (guessCount <= 5) revealClue(guessCount);
        if (value && id) setMsg('Incorrect!', 'incorrect');
        // else blank = skip, no message
        guessHistory.push({ name, result: id ? 'wrong' : 'skip' });
        renderHistory();
        saveState();
      }
    }

    if (inp) inp.value = '';
    selectedId = null;
    hideSuggestions();
  }

  // ── Anki copy ────────────────────────────────────────────────────
  function copyAnki(btn, tag) {
    const orig = btn.textContent;
    navigator.clipboard.writeText('tag:' + tag).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = orig, 2000);
    });
  }

  // ── Cookie flow ───────────────────────────────────────────────────
  function accept() {
    cookiesAccepted = true;
    setCookie('ddle_consent', '1', 365);
    hideBanner();
    initGame();
  }

  function decline() {
    cookiesAccepted = false;
    hideBanner();
    disableInput('Accept cookies to play');
    setMsg('Enable cookies to play', 'info');
  }

  function hideBanner() {
    const b = cookieBanner();
    if (b) b.style.display = 'none';
  }

  // ── Init ──────────────────────────────────────────────────────────
  function initGame() {
    loadStats();
    const hasState = loadState();
    enableInput();

    if (hasState && gameCompleted) {
      setMsg("You've already played today! Come back tomorrow.", 'info');
    } else if (!hasState) {
      renderClues(0);
    }
  }

  function boot() {
    gameData = getTodayGame();
    renderClues(0);

    // wire up input
    const inp = guessInput();
    if (inp) {
      inp.addEventListener('input', function () {
        if (!cookiesAccepted || gameCompleted) return;
        selectedId = null;
        buildSuggestions(this.value.trim());
      });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') submitGuess();
      });
    }

    // submit button
    const btn = submitBtn();
    if (btn) btn.addEventListener('click', submitGuess);

    // summary / flip
    const sb = summaryBtn();
    if (sb) sb.addEventListener('click', () => {
      const inner = cardInner();
      if (!inner) return;
      const flipped = inner.classList.toggle('flipped');
      sb.textContent = flipped ? '← Clues' : '+ Diagnosis Summary';
    });

    // anki buttons
    if (anki1Btn()) anki1Btn().addEventListener('click', () => copyAnki(anki1Btn(), gameData.ankiStep1));
    if (anki2Btn()) anki2Btn().addEventListener('click', () => copyAnki(anki2Btn(), gameData.ankiStep2));

    // modal close
    const mo = modalOverlay();
    if (mo) mo.addEventListener('click', e => { if (e.target === mo) closeModal(); });
    const mc = document.getElementById('modal-close');
    if (mc) mc.addEventListener('click', closeModal);

    // stats button
    const statsBtn = document.getElementById('stats-btn');
    if (statsBtn) statsBtn.addEventListener('click', () => {
      if (!cookiesAccepted) return;
      modalBody().innerHTML = buildStatsHTML(null);
      modalActions().innerHTML = '';
      modalOverlay().classList.add('open');
    });

    // cookie buttons
    document.getElementById('cookie-accept')?.addEventListener('click', accept);
    document.getElementById('cookie-decline')?.addEventListener('click', decline);

    // close suggestions on outside click
    document.addEventListener('click', e => {
      const s = suggestionsEl(); const inp2 = guessInput();
      if (s && inp2 && !inp2.contains(e.target) && !s.contains(e.target)) hideSuggestions();
    });

    // check consent
    if (getCookie('ddle_consent') === '1') {
      cookiesAccepted = true;
      initGame();
    } else {
      const b = cookieBanner();
      if (b) b.style.display = 'flex';
      disableInput('Accept cookies to play');
    }
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
