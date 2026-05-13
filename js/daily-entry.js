import { findCaseByDayIndex, getDiagnosisDictionary, resolveDiagnosis } from './casebook.js';
import { createRoundSession } from './round-session.js';
import {
  acceptConsent,
  createDailyStats,
  declineConsent,
  getConsentState,
  hasCompletedPrimaryDay,
  hasConsent,
  readDailyState,
  readDailyStats,
  writeDailyState,
  writeDailyStats
} from './storage.js';

const launchDate = new Date('2026-04-11T00:00:00');
const msPerDay = 864e5;
const maxAttempts = 6;

const selectors = {
  input: () => document.getElementById('diagnosis-search'),
  submit: () => document.getElementById('diagnosis-commit'),
  suggestions: () => document.getElementById('diagnosis-menu'),
  feedback: () => document.getElementById('round-pulse'),
  clues: () => document.getElementById('casefile-clues'),
  attempts: () => document.getElementById('round-ledger'),
  reveal: () => document.getElementById('notes-toggle'),
  resultButton: () => document.getElementById('results-toggle'),
  card: () => document.getElementById('caseflip-panel'),
  summary: () => document.getElementById('roundnotes-copy'),
  deckRow: () => document.getElementById('study-actions'),
  deckOne: () => document.getElementById('study-save-step1'),
  deckTwo: () => document.getElementById('study-save-step2'),
  modal: () => document.getElementById('roundsheet-modal'),
  modalBody: () => document.getElementById('roundsheet-body'),
  modalFooter: () => document.getElementById('roundsheet-actions'),
  modalClose: () => document.getElementById('roundsheet-close'),
  copyState: () => document.getElementById('roundsheet-flash'),
  consentBar: () => document.getElementById('storage-gate'),
  consentAccept: () => document.getElementById('storage-gate-allow'),
  consentDecline: () => document.getElementById('storage-gate-deny')
};

const todayIndex = Math.floor((Date.now() - launchDate.getTime()) / msPerDay);
const requestedDay = Number.parseInt(new URLSearchParams(window.location.search).get('day'), 10);
const dayIndex = Number.isInteger(requestedDay) && requestedDay >= 0 && requestedDay <= todayIndex ? requestedDay : todayIndex;
const archiveMode = dayIndex < todayIndex;
const replayMode = archiveMode && hasCompletedPrimaryDay(dayIndex);

const currentCase = findCaseByDayIndex(dayIndex);
let stats = createDailyStats();
let session = createRoundSession(currentCase || { legacyId: -1, title: '', clues: [] });
let selectedGuess = null;
let latestOutcome = null;

function setFeedback(message, tone) {
  const node = selectors.feedback();
  if (!node) return;
  node.textContent = message;
  node.className = tone || '';
}

function hideSuggestions() {
  const node = selectors.suggestions();
  if (node) node.style.display = 'none';
}

function setInputEnabled(enabled, placeholder, disabledLabel = 'Storage Required') {
  const input = selectors.input();
  const button = selectors.submit();
  if (input) {
    input.disabled = !enabled;
    input.placeholder = placeholder || (enabled ? 'Search for a diagnosis or leave blank to reveal the next clue' : 'Local storage is required to save progress');
  }
  if (button) {
    button.disabled = !enabled;
    button.textContent = enabled ? 'Submit Guess' : disabledLabel;
  }
  if (!enabled) hideSuggestions();
}

function renderClues() {
  const node = selectors.clues();
  if (!node || !currentCase) return;
  const visible = session.revealCount();
  node.innerHTML = '';

  currentCase.clues.forEach((clue, index) => {
    const item = document.createElement('li');
    item.className = 'clue-item';
    if (index < visible) {
      item.textContent = clue;
      if (index > 0) item.classList.add('revealed');
    } else {
      item.classList.add('locked');
      item.textContent = `Clue ${index + 1} unlocks after the next miss`;
    }
    node.appendChild(item);
  });
}

function renderHistory(snapshot) {
  const node = selectors.attempts();
  if (!node) return;
  node.innerHTML = snapshot.guessHistory.map((entry, index) => {
    const icon = entry.result === 'correct' ? 'Correct' : entry.result === 'skip' ? 'Skip' : 'Miss';
    return `<div class="attempt-row ${entry.result}"><span>Guess ${index + 1}: ${entry.name}</span><span class="attempt-icon">${icon}</span></div>`;
  }).join('');
}

function populateSummary() {
  if (!currentCase) return;
  const summary = selectors.summary();
  const row = selectors.deckRow();
  const deckOne = selectors.deckOne();
  const deckTwo = selectors.deckTwo();

  if (summary) summary.textContent = currentCase.summary;
  if (row) row.style.display = currentCase.studyDecks.first || currentCase.studyDecks.second ? 'flex' : 'none';
  if (deckOne) deckOne.style.display = currentCase.studyDecks.first ? 'inline-block' : 'none';
  if (deckTwo) deckTwo.style.display = currentCase.studyDecks.second ? 'inline-block' : 'none';
}

function syncRevealButton(snapshot) {
  const button = selectors.reveal();
  const resultButton = selectors.resultButton();
  if (!button) return;
  if (!snapshot.gameCompleted) {
    button.style.display = 'none';
    if (resultButton) resultButton.style.display = 'none';
    return;
  }

  button.style.display = 'block';
  button.textContent = 'View Summary';
  if (resultButton) {
    resultButton.style.display = 'block';
    resultButton.textContent = 'Results & Share';
  }
}

function buildOutcomeCard(title, subtitle, theme, snapshot) {
  const guessesUsed = snapshot ? snapshot.guessCount : 0;
  const guessesLeft = Math.max(0, maxAttempts - guessesUsed);
  const outcomeLabel = theme === 'win' ? 'Solved' : 'Complete';
  return `<section class="result-card result-card--${theme}"><p class="result-card__eyebrow">Daily Result</p><div class="result-card__header"><div><h3 class="result-card__title">${title}</h3><p class="result-card__copy">${subtitle}</p></div><span class="result-card__badge">${outcomeLabel}</span></div><div class="result-card__meta"><div class="result-stat"><span class="result-stat__label">Guesses Used</span><span class="result-stat__value">${guessesUsed}/${maxAttempts}</span></div><div class="result-stat"><span class="result-stat__label">Guesses Left</span><span class="result-stat__value">${guessesLeft}</span></div></div></section>`;
}

function createOutcomePayload(snapshot) {
  if (!snapshot || !snapshot.gameCompleted || !currentCase) return null;
  const won = snapshot.guessHistory.some((entry) => entry.result === 'correct');
  const title = won ? `Diagnosis confirmed: ${currentCase.title}` : `Case complete: ${currentCase.title}`;
  const subtitle = won
    ? `You solved the case in ${snapshot.guessCount} of ${maxAttempts} guesses.`
    : 'You are out of guesses. The full summary is open below for review.';
  return {
    html: buildOutcomeCard(title, subtitle, won ? 'win' : 'loss', snapshot),
    shareText: buildShareText(snapshot, won)
  };
}

function presentOutcome(snapshot) {
  latestOutcome = createOutcomePayload(snapshot);
  if (!latestOutcome) return;
  openModal(latestOutcome.html, latestOutcome.shareText);
}

function openModal(html, shareText) {
  const body = selectors.modalBody();
  const footer = selectors.modalFooter();
  const overlay = selectors.modal();
  if (!body || !footer || !overlay) return;

  body.innerHTML = `${html}${buildStatsMarkup()}`;
  footer.innerHTML = '';

  if (shareText) {
    const copyIcon = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="vertical-align:-2px;margin-right:5px"><rect x="1" y="4" width="9" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 4V2a1 1 0 011-1h7a2 2 0 012 2v9a2 2 0 01-2 2H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    const button = document.createElement('button');
    button.className = 'btn-share';
    button.innerHTML = copyIcon + 'Copy Result';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareText);
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'share_copy', { game: 'daily', mode: 'daily' });
        }
        const hint = selectors.copyState();
        if (hint) {
          hint.style.display = 'block';
          window.setTimeout(() => { hint.style.display = 'none'; }, 1800);
        }
        button.textContent = 'Copied';
        window.setTimeout(() => { button.innerHTML = copyIcon + 'Copy Result'; }, 1800);
      } catch {
        button.textContent = 'Copy failed';
        window.setTimeout(() => { button.innerHTML = copyIcon + 'Copy Result'; }, 1800);
      }
    });
    footer.appendChild(button);
  }

  overlay.classList.add('open');
}

function closeModal() {
  const overlay = selectors.modal();
  if (overlay) overlay.classList.remove('open');
}

function buildStatsMarkup() {
  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;
  return `<div style="margin-top:1rem"><p style="margin:0 0 0.35rem;font-size:0.72rem;letter-spacing:0.14em;text-transform:uppercase;color:#9e7552">Daily Stats</p><div class="scores-grid"><div class="scores-cell"><div class="scores-value">${stats.played}</div><div class="scores-desc">Games Played</div></div><div class="scores-cell"><div class="scores-value">${winRate}%</div><div class="scores-desc">Win Rate</div></div><div class="scores-cell"><div class="scores-value">${stats.currentStreak}</div><div class="scores-desc">Current Streak</div></div><div class="scores-cell"><div class="scores-value">${stats.longestStreak}</div><div class="scores-desc">Best Streak</div></div></div></div>`;
}

function buildShareText(snapshot, won) {
  const marks = [];
  for (let index = 1; index <= maxAttempts; index += 1) {
    if (index < snapshot.guessCount) marks.push('🟥');
    else if (index === snapshot.guessCount) marks.push(won ? '🟩' : '🟥');
    else marks.push('⬛');
  }
  const scoreLine = won
    ? `Solved in ${snapshot.guessCount}/6 guesses`
    : `Unsolved after ${snapshot.guessCount}/6 guesses`;
  return `Doctordle Daily #${dayIndex + 1}\n${scoreLine}\n${marks.join(' ')}\n#doctordle\nPlay: https://doctordle.net`;
}

function updateStats(won, snapshot) {
  if (archiveMode) return;
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - msPerDay).toDateString();
  stats.played += 1;
  if (won) {
    stats.wins += 1;
    stats.dist[snapshot.guessCount] = (stats.dist[snapshot.guessCount] || 0) + 1;
    stats.currentStreak = stats.lastDate === yesterday ? stats.currentStreak + 1 : 1;
    stats.longestStreak = Math.max(stats.longestStreak, stats.currentStreak);
  } else {
    stats.currentStreak = 0;
  }
  stats.lastDate = today;
  writeDailyStats(stats);
}

function persistSnapshot(snapshot) {
  if (!hasConsent()) return;
  writeDailyState(dayIndex, replayMode, snapshot);
}

function restoreSnapshot() {
  if (!hasConsent() || replayMode) return null;
  return readDailyState(dayIndex, replayMode);
}

function applySnapshot(snapshot) {
  session = createRoundSession(currentCase, {
    attempts: snapshot && snapshot.guessCount,
    completed: snapshot && snapshot.gameCompleted,
    guessedKeys: snapshot && snapshot.guessedIds,
    history: snapshot && snapshot.guessHistory
  });
  renderClues();
  renderHistory(session.snapshot());
  syncRevealButton(session.snapshot());
  if (snapshot && snapshot.gameCompleted) {
    setInputEnabled(false, currentCase.title, 'Round Complete');
    populateSummary();
    latestOutcome = createOutcomePayload(snapshot);
  }
}

function buildSuggestions(query) {
  const node = selectors.suggestions();
  if (!node) return;
  node.innerHTML = '';
  if (!query) {
    node.style.display = 'none';
    return;
  }

  const snapshot = session.snapshot();
  const lower = query.toLowerCase();
  const matches = getDiagnosisDictionary().filter((label) => label.toLowerCase().includes(lower)).slice(0, 12);
  if (!matches.length) {
    node.style.display = 'none';
    return;
  }

  matches.forEach((label) => {
    const resolved = resolveDiagnosis(label);
    const guessKey = resolved && resolved.legacyId ? resolved.legacyId : label;
    const disabled = snapshot.guessedIds.includes(guessKey);
    const option = document.createElement('div');
    option.className = `autocomplete-item${disabled ? ' used-guess' : ''}`;
    option.textContent = disabled ? `${label} (used)` : label;
    if (!disabled) {
      option.addEventListener('click', () => {
        const input = selectors.input();
        if (input) input.value = label;
        selectedGuess = { key: guessKey, label };
        hideSuggestions();
      });
    }
    node.appendChild(option);
  });

  node.style.display = 'block';
}

function settleRound(result) {
  const snapshot = result.snapshot;
  renderClues();
  renderHistory(snapshot);
  persistSnapshot(snapshot);

  if (result.status === 'correct') {
    updateStats(true, snapshot);
    populateSummary();
    syncRevealButton(snapshot);
    setInputEnabled(false, currentCase.title, 'Round Complete');
    setFeedback('Correct. The case is complete.', 'correct');
    presentOutcome(snapshot);
    return;
  }

  if (result.status === 'exhausted') {
    updateStats(false, snapshot);
    populateSummary();
    syncRevealButton(snapshot);
    setInputEnabled(false, currentCase.title, 'Round Complete');
    setFeedback('No guesses remaining. The case is complete.', 'incorrect');
    presentOutcome(snapshot);
    return;
  }

  setFeedback(result.status === 'duplicate' ? 'You already guessed that diagnosis.' : result.status === 'wrong' ? 'Not quite right.' : '', result.status === 'wrong' ? 'incorrect' : 'info');
}

function submitGuess() {
  if (!hasConsent()) return;
  const input = selectors.input();
  const rawValue = input ? input.value.trim() : '';
  const resolved = selectedGuess || (rawValue ? (() => {
    const match = resolveDiagnosis(rawValue);
    if (!match) return null;
    return { key: match.legacyId || match.label, label: match.label };
  })() : null);

  if (rawValue && !resolved) {
    setFeedback('Choose a diagnosis from the list, or leave it blank to reveal the next clue.', 'incorrect');
    return;
  }

  const result = session.submitTurn(resolved ? resolved.key : null, resolved ? resolved.label : 'Skipped');
  settleRound(result);

  if (input) input.value = '';
  selectedGuess = null;
  hideSuggestions();
}

function wireEvents() {
  const input = selectors.input();
  const submit = selectors.submit();
  const reveal = selectors.reveal();
  const resultButton = selectors.resultButton();
  const card = selectors.card();
  const close = selectors.modalClose();
  const deckOne = selectors.deckOne();
  const deckTwo = selectors.deckTwo();
  const accept = selectors.consentAccept();
  const decline = selectors.consentDecline();

  if (input) {
    input.addEventListener('input', () => {
      selectedGuess = null;
      buildSuggestions(input.value.trim());
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') submitGuess();
    });
  }

  if (submit) submit.addEventListener('click', submitGuess);
  if (resultButton) {
    resultButton.addEventListener('click', () => {
      if (!latestOutcome) latestOutcome = createOutcomePayload(session.snapshot());
      if (latestOutcome) openModal(latestOutcome.html, latestOutcome.shareText);
    });
  }
  if (reveal && card) {
    reveal.addEventListener('click', () => {
      const flipped = card.classList.toggle('flipped');
      reveal.textContent = flipped ? 'Back to Case' : 'View Summary';
    });
  }
  if (close) close.addEventListener('click', closeModal);
  if (selectors.modal()) {
    selectors.modal().addEventListener('click', (event) => {
      if (event.target === selectors.modal()) closeModal();
    });
  }
  if (deckOne) {
    deckOne.addEventListener('click', async () => {
      await navigator.clipboard.writeText(`tag:${currentCase.studyDecks.first}`);
    });
  }
  if (deckTwo) {
    deckTwo.addEventListener('click', async () => {
      await navigator.clipboard.writeText(`tag:${currentCase.studyDecks.second}`);
    });
  }
  if (accept) {
    accept.addEventListener('click', () => {
      acceptConsent();
      const bar = selectors.consentBar();
      if (bar) bar.style.display = 'none';
      stats = readDailyStats();
      setInputEnabled(true);
      applySnapshot(restoreSnapshot());
    });
  }
  if (decline) {
    decline.addEventListener('click', () => {
      declineConsent();
      const bar = selectors.consentBar();
      if (bar) bar.style.display = 'none';
      setInputEnabled(false, 'Local storage is required to save progress');
      setFeedback('Progress saving is off, so this round cannot be resumed.', 'info');
    });
  }
}

function boot() {
  if (!currentCase) return;
  wireEvents();
  renderClues();
  populateSummary();
  syncRevealButton(session.snapshot());

  if (hasConsent()) {
    const bar = selectors.consentBar();
    if (bar) bar.style.display = 'none';
    stats = readDailyStats();
    setInputEnabled(true);
    applySnapshot(restoreSnapshot());
    if (session.snapshot().gameCompleted) {
      setFeedback(archiveMode ? 'Archive replay restored.' : 'Today\'s file is already closed.', 'info');
    }
    return;
  }

  if (getConsentState() === '0') {
    const bar = selectors.consentBar();
    if (bar) bar.style.display = 'none';
  }
  setInputEnabled(false, 'Local storage is required to save progress');
}

boot();