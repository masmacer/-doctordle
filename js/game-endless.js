// game-endless.js — Doctordle endless game logic

(function () {
  'use strict';

  const MAX_GUESSES = 6;
  const STORAGE_KEY = 'ddle_endless_v1';
  const MODES = {
    challenge: 'challenge',
    practice: 'practice'
  };

  let store = defaultStore();
  let currentMode = MODES.challenge;
  let gameData = null;
  let guessCount = 0;
  let gameCompleted = false;
  let selectedId = null;
  let guessedIds = [];
  let guessHistory = [];

  function defaultDist() {
    return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  }

  function defaultSession() {
    return {
      queue: [],
      currentId: null,
      guessCount: 0,
      gameCompleted: false,
      guessedIds: [],
      guessHistory: []
    };
  }

  function defaultStore() {
    return {
      mode: MODES.challenge,
      stats: {
        challenge: {
          played: 0,
          wins: 0,
          currentStreak: 0,
          bestStreak: 0,
          dist: defaultDist()
        },
        practice: {
          played: 0,
          wins: 0,
          dist: defaultDist()
        }
      },
      sessions: {
        challenge: defaultSession(),
        practice: defaultSession()
      }
    };
  }

  function lsGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }

  function loadStore() {
    const raw = lsGet(STORAGE_KEY);
    if (!raw) {
      store = defaultStore();
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      store = {
        ...defaultStore(),
        ...parsed,
        stats: {
          ...defaultStore().stats,
          ...parsed.stats,
          challenge: {
            ...defaultStore().stats.challenge,
            ...(parsed.stats && parsed.stats.challenge),
            dist: {
              ...defaultDist(),
              ...(parsed.stats && parsed.stats.challenge && parsed.stats.challenge.dist)
            }
          },
          practice: {
            ...defaultStore().stats.practice,
            ...(parsed.stats && parsed.stats.practice),
            dist: {
              ...defaultDist(),
              ...(parsed.stats && parsed.stats.practice && parsed.stats.practice.dist)
            }
          }
        },
        sessions: {
          challenge: {
            ...defaultSession(),
            ...(parsed.sessions && parsed.sessions.challenge)
          },
          practice: {
            ...defaultSession(),
            ...(parsed.sessions && parsed.sessions.practice)
          }
        }
      };
    } catch {
      store = defaultStore();
    }
  }

  function saveStore() {
    lsSet(STORAGE_KEY, JSON.stringify(store));
  }

  function shuffleIds() {
    const ids = GAMES.map(game => game.id);
    for (let i = ids.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ids[i];
      ids[i] = ids[j];
      ids[j] = temp;
    }
    return ids;
  }

  function getSession(mode) {
    return store.sessions[mode];
  }

  function getStats(mode) {
    return store.stats[mode];
  }

  function ensureQueue(mode) {
    const session = getSession(mode);
    if (!session.queue.length) {
      session.queue = shuffleIds();
      if (session.currentId) {
        session.queue = session.queue.filter(id => id !== session.currentId);
      }
    }
  }

  function setCurrentGameById(id) {
    gameData = GAMES.find(game => game.id === id) || GAMES[0];
  }

  function persistRoundState() {
    const session = getSession(currentMode);
    session.currentId = gameData ? gameData.id : session.currentId;
    session.guessCount = guessCount;
    session.gameCompleted = gameCompleted;
    session.guessedIds = [...guessedIds];
    session.guessHistory = [...guessHistory];
    saveStore();
  }

  function consumeNextCase() {
    const session = getSession(currentMode);
    ensureQueue(currentMode);
    session.currentId = session.queue.shift();
    session.guessCount = 0;
    session.gameCompleted = false;
    session.guessedIds = [];
    session.guessHistory = [];
    setCurrentGameById(session.currentId);
    guessCount = 0;
    gameCompleted = false;
    guessedIds = [];
    guessHistory = [];
    selectedId = null;
    saveStore();
  }

  function restoreOrStartRound() {
    const session = getSession(currentMode);
    if (!session.currentId) {
      consumeNextCase();
      return;
    }

    setCurrentGameById(session.currentId);
    guessCount = session.guessCount || 0;
    gameCompleted = !!session.gameCompleted;
    guessedIds = [...(session.guessedIds || [])];
    guessHistory = [...(session.guessHistory || [])];
    selectedId = null;
  }

  const guessInput = () => document.getElementById('guess-input');
  const submitBtn = () => document.getElementById('submit-btn');
  const suggestionsEl = () => document.getElementById('suggestions');
  const resultMsg = () => document.getElementById('result-msg');
  const clueList = () => document.getElementById('clue-list');
  const historyEl = () => document.getElementById('guess-history');
  const summaryBtn = () => document.getElementById('summary-btn');
  const nextCaseBtn = () => document.getElementById('next-case-btn');
  const cardInner = () => document.getElementById('card-flip-inner');
  const backText = () => document.getElementById('back-description');
  const ankiRow = () => document.getElementById('anki-row');
  const anki1Btn = () => document.getElementById('anki1-btn');
  const anki2Btn = () => document.getElementById('anki2-btn');
  const modalOverlay = () => document.getElementById('modal-overlay');
  const modalBody = () => document.getElementById('modal-body');
  const modalActions = () => document.getElementById('modal-actions');
  const copyConfirm = () => document.getElementById('copy-confirm');

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function setMsg(text, type) {
    const element = resultMsg();
    if (!element) return;
    element.textContent = text;
    element.className = type || '';
  }

  function hideSuggestions() {
    const suggestions = suggestionsEl();
    if (suggestions) suggestions.style.display = 'none';
  }

  function renderClues(revealed) {
    const list = clueList();
    if (!list || !gameData) return;
    list.innerHTML = '';
    gameData.clues.forEach((clue, index) => {
      const item = document.createElement('li');
      item.className = 'clue-item';
      if (index === 0 || index < revealed) {
        item.textContent = clue;
        if (index > 0) item.classList.add('revealed');
      } else {
        item.classList.add('locked');
        item.textContent = `Clue ${index + 1} — guess to reveal`;
      }
      list.appendChild(item);
    });
  }

  function revealClue(index) {
    const items = clueList() ? clueList().querySelectorAll('.clue-item') : null;
    if (!items || !items[index]) return;
    const item = items[index];
    item.textContent = gameData.clues[index];
    item.classList.remove('locked');
    item.classList.add('revealed');
  }

  function revealAllClues() {
    if (!gameData) return;
    gameData.clues.forEach((_, index) => revealClue(index));
  }

  function renderHistory() {
    const element = historyEl();
    if (!element) return;
    element.innerHTML = guessHistory.map((guess, index) => {
      const icon = guess.result === 'correct' ? '✓' : guess.result === 'skip' ? '—' : '✗';
      return `<div class="guess-history-item ${guess.result}">
        <span>${index + 1}. ${guess.name}</span>
        <span class="guess-history-icon">${icon}</span>
      </div>`;
    }).join('');
  }

  function disableInput(placeholderText) {
    const input = guessInput();
    const button = submitBtn();
    if (input) {
      input.disabled = true;
      input.placeholder = placeholderText || '';
    }
    if (button) {
      button.disabled = true;
      button.textContent = 'Round Complete';
    }
    hideSuggestions();
  }

  function enableInput() {
    const input = guessInput();
    const button = submitBtn();
    if (input) {
      input.disabled = false;
      input.placeholder = 'Diagnosis…';
      input.value = '';
    }
    if (button) {
      button.disabled = false;
      button.textContent = 'Submit';
    }
  }

  function hideSummaryButton() {
    const button = summaryBtn();
    if (!button) return;
    button.style.display = 'none';
    button.textContent = '+ Diagnosis Summary';
    const inner = cardInner();
    if (inner) inner.classList.remove('flipped');
    if (ankiRow()) ankiRow().style.display = 'none';
    if (anki1Btn()) anki1Btn().style.display = 'none';
    if (anki2Btn()) anki2Btn().style.display = 'none';
  }

  function showSummaryButton() {
    const button = summaryBtn();
    if (!button || !gameData) return;
    button.style.display = 'block';
    button.textContent = '+ Diagnosis Summary';
    if (backText()) backText().textContent = gameData.description;
    if (gameData.ankiStep1 && anki1Btn()) {
      anki1Btn().style.display = 'inline-block';
      ankiRow().style.display = 'flex';
    }
    if (gameData.ankiStep2 && anki2Btn()) {
      anki2Btn().style.display = 'inline-block';
      ankiRow().style.display = 'flex';
    }
  }

  function copyAnki(button, tag) {
    if (!tag) return;
    const original = button.textContent;
    navigator.clipboard.writeText('tag:' + tag).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = original;
      }, 2000);
    });
  }

  function buildSuggestions(query) {
    const suggestions = suggestionsEl();
    if (!suggestions) return;
    suggestions.innerHTML = '';
    if (!query) {
      suggestions.style.display = 'none';
      return;
    }

    const lower = query.toLowerCase();
    const matches = DISEASE_LIST.filter(name => name.toLowerCase().includes(lower)).slice(0, 40);
    if (!matches.length) {
      suggestions.style.display = 'none';
      return;
    }

    matches.forEach(name => {
      const entry = GAMES.find(game => game.answer.toLowerCase() === name.toLowerCase());
      const id = entry ? entry.id : name;
      const alreadyGuessed = guessedIds.includes(id);
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      if (alreadyGuessed) {
        item.classList.add('already-guessed');
        item.textContent = `${name} (already guessed)`;
      } else {
        item.textContent = name;
        item.addEventListener('click', () => {
          if (guessInput()) guessInput().value = name;
          selectedId = id;
          hideSuggestions();
        });
      }
      suggestions.appendChild(item);
    });

    suggestions.style.display = 'block';
  }

  function updateModeSummary() {
    const modeLabel = document.getElementById('status-mode');
    const primaryLabel = document.getElementById('status-primary-label');
    const primaryValue = document.getElementById('status-primary-value');
    const secondaryLabel = document.getElementById('status-secondary-label');
    const secondaryValue = document.getElementById('status-secondary-value');
    const remainingValue = document.getElementById('status-remaining');
    const primarySubtext = document.querySelector('#status-primary-chip .status-chip-subtext');
    const secondarySubtext = document.querySelector('#status-secondary-chip .status-chip-subtext');
    const remainingSubtext = document.querySelector('#status-remaining-chip .status-chip-subtext');
    const challengeBtn = document.getElementById('challenge-mode-btn');
    const practiceBtn = document.getElementById('practice-mode-btn');
    const session = getSession(currentMode);
    const stats = getStats(currentMode);
    const remaining = session.queue.length + (session.currentId && !session.gameCompleted ? 1 : 0);

    if (challengeBtn) challengeBtn.classList.toggle('active', currentMode === MODES.challenge);
    if (practiceBtn) practiceBtn.classList.toggle('active', currentMode === MODES.practice);

    if (currentMode === MODES.challenge) {
      if (modeLabel) modeLabel.textContent = 'Challenge';
      if (primaryLabel) primaryLabel.textContent = 'Current Streak';
      if (primaryValue) primaryValue.textContent = String(stats.currentStreak);
      if (secondaryLabel) secondaryLabel.textContent = 'Best Streak';
      if (secondaryValue) secondaryValue.textContent = String(stats.bestStreak);
      if (primarySubtext) primarySubtext.textContent = 'Tap for stats';
      if (secondarySubtext) secondarySubtext.textContent = stats.bestStreak >= 10 ? 'Mythic run' : 'Career high';
    } else {
      if (modeLabel) modeLabel.textContent = 'Practice';
      if (primaryLabel) primaryLabel.textContent = 'Cases Solved';
      if (primaryValue) primaryValue.textContent = String(stats.wins);
      if (secondaryLabel) secondaryLabel.textContent = 'Cases Played';
      if (secondaryValue) secondaryValue.textContent = String(stats.played);
      if (primarySubtext) primarySubtext.textContent = 'Solved in practice';
      if (secondarySubtext) secondarySubtext.textContent = 'Volume tracker';
    }

    if (remainingValue) remainingValue.textContent = String(remaining || 0);
    if (remainingSubtext) remainingSubtext.textContent = gameCompleted ? 'Tap for next case' : 'Queue remaining';
  }

  function getChallengeRank(streak, won) {
    if (won && streak >= 18) return { title: 'Actually Unfair', subtitle: 'This streak has left the group chat.', flavor: 'The cases are not even mad anymore. They are impressed.' };
    if (won && streak >= 12) return { title: 'Screenshot This', subtitle: 'You are posting this run somewhere and you know it.', flavor: 'Every new case is starting to look like free content.' };
    if (won && streak >= 8) return { title: 'Different Beast', subtitle: 'This is getting disrespectful in a very public way.', flavor: 'The board keeps loading cases and you keep deleting them.' };
    if (won && streak >= 5) return { title: 'Too Locked In', subtitle: 'You are reading these clues like they owe you money.', flavor: 'At this pace, even the distractors are feeling unsafe.' };
    if (won && streak >= 3) return { title: 'In Your Bag', subtitle: 'The run has real juice now.', flavor: 'Keep pressing. This is one good screenshot away from ego inflation.' };
    if (won) return { title: 'We Move', subtitle: 'First case handled.', flavor: 'No parade yet. Keep stacking them.' };
    if (streak >= 10) return { title: 'Cinema', subtitle: 'The streak is over, but the aura survived.', flavor: 'That was not a collapse. That was prestige television.' };
    if (streak >= 5) return { title: 'Tough Scene', subtitle: 'Painful miss. Strong run.', flavor: 'You were one answer away from being extremely annoying.' };
    return { title: 'Queue Again', subtitle: 'Unfortunate. Regroup.', flavor: 'The only respectable response is hitting next case immediately.' };
  }

  function buildChallengeShareCardData(won, guesses) {
    const challengeStats = getStats(MODES.challenge);
    const streakAfterRound = challengeStats.currentStreak;
    const bestStreak = challengeStats.bestStreak;
    const previousStreak = won ? Math.max(0, streakAfterRound - 1) : bestStreak > challengeStats.currentStreak ? bestStreak : 0;
    const relevantStreak = won ? streakAfterRound : previousStreak;
    const rank = getChallengeRank(relevantStreak, won);

    return {
      won,
      guesses,
      streakAfterRound,
      bestStreak,
      rank
    };
  }

  function buildChallengeShareCardHtml(data) {
    return `<div class="challenge-share-card">
      <div class="challenge-share-kicker">Doctordle Endless Challenge</div>
      <div class="challenge-share-title">${escapeHtml(data.rank.title)}</div>
      <div class="challenge-share-subtitle">${escapeHtml(data.rank.subtitle)}<br>${escapeHtml(data.rank.flavor)}</div>
      <div class="challenge-share-grid">
        <div class="challenge-share-stat">
          <span class="challenge-share-stat-label">Round</span>
          <span class="challenge-share-stat-value">${data.won ? 'Win' : 'Miss'}</span>
        </div>
        <div class="challenge-share-stat">
          <span class="challenge-share-stat-label">Guesses</span>
          <span class="challenge-share-stat-value">${data.guesses}/${MAX_GUESSES}</span>
        </div>
        <div class="challenge-share-stat">
          <span class="challenge-share-stat-label">Best Streak</span>
          <span class="challenge-share-stat-value">${data.bestStreak}</span>
        </div>
      </div>
      <div class="challenge-share-footer">Doctordle Endless · Challenge Mode · ${escapeHtml(data.won ? 'Keep farming clips.' : 'Reset. Requeue. Restore the aura.')}</div>
    </div>`;
  }

  function buildChallengeShareSvg(data) {
    const title = escapeHtml(data.rank.title);
    const subtitle = escapeHtml(data.rank.subtitle);
    const flavor = escapeHtml(data.rank.flavor);
    const roundLabel = escapeHtml(data.won ? 'WIN' : 'MISS');
    const footer = escapeHtml(data.won ? 'Keep the streak alive.' : 'Reload. Re-enter. Reclaim the crown.');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#7b3f00"/>
          <stop offset="55%" stop-color="#a85a00"/>
          <stop offset="100%" stop-color="#f2b66d"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" rx="36" fill="url(#bg)"/>
      <text x="70" y="86" fill="#fff5eb" font-size="26" font-family="Segoe UI, Arial, sans-serif" letter-spacing="4">DOCTORDLE ENDLESS CHALLENGE</text>
      <text x="70" y="190" fill="#fffaf3" font-size="74" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${title}</text>
      <text x="70" y="255" fill="#fff4e8" font-size="34" font-family="Segoe UI, Arial, sans-serif">${subtitle}</text>
      <text x="70" y="305" fill="#ffe8cf" font-size="28" font-family="Segoe UI, Arial, sans-serif">${flavor}</text>
      <rect x="70" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/>
      <rect x="390" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/>
      <rect x="710" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/>
      <text x="105" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">ROUND</text>
      <text x="105" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${roundLabel}</text>
      <text x="425" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">GUESSES</text>
      <text x="425" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${data.guesses}/${MAX_GUESSES}</text>
      <text x="745" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">BEST STREAK</text>
      <text x="745" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${data.bestStreak}</text>
      <text x="70" y="575" fill="#fff5eb" font-size="24" font-family="Segoe UI, Arial, sans-serif">${footer}</text>
    </svg>`;
  }

  function downloadChallengeShareImage(data) {
    const svg = buildChallengeShareSvg(data);
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const image = new Image();

    image.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      URL.revokeObjectURL(url);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `doctordle-endless-${currentMode}-${data.won ? 'win' : 'miss'}.png`;
      link.click();
    };

    image.onerror = function () {
      URL.revokeObjectURL(url);
    };

    image.src = url;
  }

  function buildStatsHTML() {
    const stats = getStats(currentMode);
    const winPct = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;
    const maxDist = Math.max(1, ...Object.values(stats.dist));

    let distHtml = '';
    for (let guess = 1; guess <= 6; guess += 1) {
      const count = stats.dist[guess] || 0;
      const width = count ? Math.max(20, (count / maxDist) * 100) : 0;
      distHtml += `<div class="dist-row">
        <span class="dist-label">${guess}</span>
        <div class="dist-bar-wrap">
          ${count ? `<div class="dist-bar" style="width:${width}%"><span>${count}</span></div>` : ''}
        </div>
      </div>`;
    }

    const streakBlock = currentMode === MODES.challenge
      ? `<div class="stat-item"><div class="stat-number">${stats.currentStreak}</div><div class="stat-label">Streak</div></div>
         <div class="stat-item"><div class="stat-number">${stats.bestStreak}</div><div class="stat-label">Best Streak</div></div>`
      : `<div class="stat-item"><div class="stat-number">${stats.wins}</div><div class="stat-label">Solved</div></div>
         <div class="stat-item"><div class="stat-number">${stats.played}</div><div class="stat-label">Played</div></div>`;

    return `<div style="margin-top:1rem">
      <h4 style="color:#7b3f00;margin-bottom:0.75rem">📊 ${currentMode === MODES.challenge ? 'Challenge' : 'Practice'} Statistics</h4>
      <div class="stats-grid">
        <div class="stat-item"><div class="stat-number">${stats.played}</div><div class="stat-label">Played</div></div>
        <div class="stat-item"><div class="stat-number">${winPct}%</div><div class="stat-label">Win Rate</div></div>
        ${streakBlock}
      </div>
      <h4 style="color:#7b3f00;margin-bottom:0.5rem">Guess Distribution</h4>
      ${distHtml}
    </div>`;
  }

  function openModal(html, actions) {
    const body = modalBody();
    const actionsWrap = modalActions();
    if (!body || !actionsWrap) return;

    body.innerHTML = html;
    actionsWrap.innerHTML = '';

    (actions || []).forEach(action => {
      const button = document.createElement('button');
      button.className = 'btn-share';
      button.textContent = action.label;
      button.addEventListener('click', () => action.onClick(button));
      actionsWrap.appendChild(button);
    });

    const overlay = modalOverlay();
    if (overlay) overlay.classList.add('open');
  }

  function closeModal() {
    const overlay = modalOverlay();
    if (overlay) overlay.classList.remove('open');
  }

  function buildShareText(won, guesses) {
    const stats = getStats(MODES.challenge);
    const emojis = [];
    for (let index = 1; index <= MAX_GUESSES; index += 1) {
      if (index < guesses) emojis.push('🟥');
      else if (index === guesses) emojis.push(won ? '🟩' : '🟥');
      else emojis.push('⬛');
    }
    return `Doctordle Endless (${currentMode})\n🏥 ${emojis.join(' ')}\nChallenge best streak: ${stats.bestStreak}\n\nhttps://doctordle.org`;
  }

  function copyResult(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      if (btn) {
        btn.textContent = '✓ Copied!';
        setTimeout(() => { btn.textContent = '📋 Copy Result'; }, 2000);
      }
      const confirm = copyConfirm();
      if (confirm) {
        confirm.style.display = 'block';
        setTimeout(() => { confirm.style.display = 'none'; }, 1800);
      }
    }).catch(() => {
      if (btn) {
        btn.textContent = '⚠ Copy failed';
        setTimeout(() => { btn.textContent = '📋 Copy Result'; }, 2000);
      }
    });
  }

  function updateStats(won, guesses) {
    const stats = getStats(currentMode);
    stats.played += 1;
    if (won) {
      stats.wins += 1;
      stats.dist[guesses] = (stats.dist[guesses] || 0) + 1;
    }
    if (currentMode === MODES.challenge) {
      if (won) {
        stats.currentStreak += 1;
        if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak;
      } else {
        stats.currentStreak = 0;
      }
    }
  }

  function finishRound(won) {
    gameCompleted = true;
    revealAllClues();
    disableInput(gameData.answer);
    showSummaryButton();
    if (nextCaseBtn()) nextCaseBtn().style.display = 'block';
    persistRoundState();
    updateModeSummary();

    const shareText = buildShareText(won, guessCount);
    const boxColor = won ? '#e6f4ea' : '#fff3e0';
    const borderColor = won ? '#2e7d32' : '#e65100';
    const title = won
      ? `🎉 Correct! The diagnosis was ${gameData.answer}.`
      : `❌ Round Over! The diagnosis was ${gameData.answer}.`;
    const challengeShare = currentMode === MODES.challenge ? buildChallengeShareCardData(won, guessCount) : null;
    const challengeShareHtml = challengeShare ? `<div style="margin-bottom:0.9rem">${buildChallengeShareCardHtml(challengeShare)}</div>` : '';

    openModal(
      `${challengeShareHtml}<div style="padding:0.75rem;background:${boxColor};border-radius:8px;border:2px solid ${borderColor};margin-bottom:0.5rem"><strong>${title}</strong></div>${buildStatsHTML()}`,
      [
        {
          label: currentMode === MODES.challenge ? 'Next Challenge' : 'Next Case',
          onClick: () => {
            closeModal();
            goToNextCase();
          }
        },
        ...(challengeShare ? [{
          label: '🖼 Download Share Card',
          onClick: () => downloadChallengeShareImage(challengeShare)
        }] : []),
        {
          label: '📋 Copy Result',
          onClick: (btn) => copyResult(shareText, btn)
        }
      ]
    );
  }

  function submitGuess() {
    if (gameCompleted || !gameData) return;

    const input = guessInput();
    const value = input ? input.value.trim() : '';

    let id = selectedId;
    if (!id && value) {
      const foundGame = GAMES.find(game => game.answer.toLowerCase() === value.toLowerCase());
      if (foundGame) {
        id = foundGame.id;
        selectedId = foundGame.id;
      } else {
        const foundName = DISEASE_LIST.find(name => name.toLowerCase() === value.toLowerCase());
        if (!foundName) {
          setMsg('Please select a valid disease or leave blank', 'incorrect');
          return;
        }
        id = foundName;
      }
    }

    if (id && guessedIds.includes(id)) {
      setMsg("You've already guessed this!", 'incorrect');
      return;
    }

    guessCount += 1;
    if (id) guessedIds.push(id);

    const isCorrect = id && (
      (typeof id === 'number' && id === gameData.id) ||
      (typeof id === 'string' && id.toLowerCase() === gameData.answer.toLowerCase())
    );

    const name = id
      ? (GAMES.find(game => game.id === id)?.answer || (typeof id === 'string' ? id : 'Unknown'))
      : 'Skipped';

    if (isCorrect) {
      guessHistory.push({ name, result: 'correct' });
      renderHistory();
      updateStats(true, guessCount);
      persistRoundState();
      setMsg(currentMode === MODES.challenge ? 'Correct! Streak alive.' : 'Correct! Ready for the next case.', 'correct');
      finishRound(true);
    } else {
      guessHistory.push({ name, result: id ? 'wrong' : 'skip' });
      renderHistory();
      if (guessCount >= MAX_GUESSES) {
        updateStats(false, guessCount);
        persistRoundState();
        setMsg(currentMode === MODES.challenge ? 'Missed. Streak reset.' : 'Case complete. Review and continue.', 'incorrect');
        finishRound(false);
      } else {
        if (guessCount <= 5) revealClue(guessCount);
        if (value && id) setMsg('Incorrect!', 'incorrect');
        if (!value) setMsg('Skipped. New clue revealed.', 'info');
        persistRoundState();
      }
    }

    if (input) input.value = '';
    selectedId = null;
    hideSuggestions();
    saveStore();
  }

  function goToNextCase() {
    closeModal();
    hideSummaryButton();
    if (nextCaseBtn()) nextCaseBtn().style.display = 'none';
    consumeNextCase();
    renderRound();
  }

  function renderRound() {
    updateModeSummary();
    hideSuggestions();
    renderHistory();
    renderClues(guessCount);
    if (backText() && gameData) backText().textContent = gameData.description;

    if (gameCompleted) {
      revealAllClues();
      disableInput(gameData.answer);
      showSummaryButton();
      if (nextCaseBtn()) nextCaseBtn().style.display = 'block';
    } else {
      enableInput();
      hideSummaryButton();
      if (nextCaseBtn()) nextCaseBtn().style.display = 'none';
    }
  }

  function switchMode(mode) {
    if (mode === currentMode) return;
    persistRoundState();
    currentMode = mode;
    store.mode = mode;
    restoreOrStartRound();
    renderRound();
    saveStore();
  }

  function openStats() {
    openModal(buildStatsHTML(), []);
  }

  function boot() {
    loadStore();
    currentMode = store.mode === MODES.practice ? MODES.practice : MODES.challenge;
    restoreOrStartRound();
    renderRound();

    const input = guessInput();
    if (input) {
      input.addEventListener('input', function () {
        selectedId = null;
        buildSuggestions(this.value.trim());
      });
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') submitGuess();
      });
    }

    submitBtn()?.addEventListener('click', submitGuess);
    nextCaseBtn()?.addEventListener('click', goToNextCase);
    document.getElementById('challenge-mode-btn')?.addEventListener('click', () => switchMode(MODES.challenge));
    document.getElementById('practice-mode-btn')?.addEventListener('click', () => switchMode(MODES.practice));
    document.getElementById('stats-btn')?.addEventListener('click', openStats);
    document.getElementById('status-primary-chip')?.addEventListener('click', openStats);
    document.getElementById('status-secondary-chip')?.addEventListener('click', openStats);
    document.getElementById('status-remaining-chip')?.addEventListener('click', () => {
      if (gameCompleted) goToNextCase();
    });

    summaryBtn()?.addEventListener('click', () => {
      const inner = cardInner();
      const button = summaryBtn();
      if (!inner || !button) return;
      const flipped = inner.classList.toggle('flipped');
      button.textContent = flipped ? '← Clues' : '+ Diagnosis Summary';
    });

    if (anki1Btn()) {
      anki1Btn().addEventListener('click', () => copyAnki(anki1Btn(), gameData && gameData.ankiStep1));
    }
    if (anki2Btn()) {
      anki2Btn().addEventListener('click', () => copyAnki(anki2Btn(), gameData && gameData.ankiStep2));
    }

    modalOverlay()?.addEventListener('click', event => {
      if (event.target === modalOverlay()) closeModal();
    });
    document.getElementById('modal-close')?.addEventListener('click', closeModal);

    document.addEventListener('click', event => {
      const suggestions = suggestionsEl();
      const inputEl = guessInput();
      if (suggestions && inputEl && !inputEl.contains(event.target) && !suggestions.contains(event.target)) {
        hideSuggestions();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', boot);
})();