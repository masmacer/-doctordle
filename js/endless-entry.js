import {
  findCaseByLegacyId,
  getDiagnosisDictionary,
  listCases,
  resolveDiagnosis
} from './casebook.js';
import { createRoundSession } from './round-session.js';
import { readEndlessBundle, writeEndlessBundle } from './storage.js';

const modes = {
  challenge: 'challenge',
  practice: 'practice'
};

const selectors = {
  input: () => document.getElementById('diagnosis-search'),
  submit: () => document.getElementById('diagnosis-commit'),
  suggestions: () => document.getElementById('diagnosis-menu'),
  feedback: () => document.getElementById('round-pulse'),
  clues: () => document.getElementById('casefile-clues'),
  attempts: () => document.getElementById('round-ledger'),
  reveal: () => document.getElementById('notes-toggle'),
  resultButton: () => document.getElementById('results-toggle'),
  next: () => document.getElementById('queue-advance'),
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
  challengeToggle: () => document.getElementById('track-pressure'),
  practiceToggle: () => document.getElementById('track-lab'),
  statsButton: () => document.getElementById('session-records'),
  modeChip: () => document.getElementById('mode-chip-value'),
  primaryLabel: () => document.getElementById('record-primary-label'),
  primaryValue: () => document.getElementById('record-primary-value'),
  primarySubtext: () => document.getElementById('record-primary-subtext'),
  secondaryLabel: () => document.getElementById('record-secondary-label'),
  secondaryValue: () => document.getElementById('record-secondary-value'),
  secondarySubtext: () => document.getElementById('record-secondary-subtext')
};

const storageScope = document.body && document.body.dataset && document.body.dataset.endlessScope
  ? document.body.dataset.endlessScope
  : 'endless';
const topicMeta = storageScope === 'dental'
  ? {
      title: 'Doctordle Dental Edition',
      challengeTitle: 'Doctordle Dental Challenge',
      practiceTitle: 'Doctordle Dental Practice',
      pageUrl: 'https://doctordle.net/games/doctordle-for-dentist',
      fileSlug: 'doctordle-dental'
    }
  : {
      title: 'Doctordle Endless',
      challengeTitle: 'Doctordle Endless Challenge',
      practiceTitle: 'Doctordle Endless Practice',
      pageUrl: 'https://doctordle.net/games/doctordle-endless',
      fileSlug: 'doctordle-endless'
    };
const allCases = listCases();
let store = readEndlessBundle(storageScope);
let activeMode = store.mode === modes.practice ? modes.practice : modes.challenge;
let currentCase = null;
let session = createRoundSession({ legacyId: -1, title: '', clues: [] });
let selectedGuess = null;
let latestOutcome = null;

function shuffleLegacyIds() {
  const ids = allCases.map((entry) => entry.legacyId);
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const temp = ids[index];
    ids[index] = ids[swapIndex];
    ids[swapIndex] = temp;
  }
  return ids;
}

function getModeSession(mode = activeMode) {
  return store.sessions[mode];
}

function getModeStats(mode = activeMode) {
  return store.stats[mode];
}

function persistStore() {
  store.mode = activeMode;
  writeEndlessBundle(store, storageScope);
}

function ensureQueue(mode = activeMode) {
  const modeSession = getModeSession(mode);
  if (!modeSession.queue.length) {
    modeSession.queue = shuffleLegacyIds();
    if (modeSession.currentId) {
      modeSession.queue = modeSession.queue.filter((entry) => entry !== modeSession.currentId);
    }
  }
}

function syncFeedback(message, tone) {
  const node = selectors.feedback();
  if (!node) return;
  node.textContent = message;
  node.className = tone || '';
}

function hideSuggestions() {
  const node = selectors.suggestions();
  if (node) node.style.display = 'none';
}

function setInputsEnabled(enabled) {
  const input = selectors.input();
  const button = selectors.submit();
  if (input) {
    input.disabled = !enabled;
    input.placeholder = enabled ? 'Search for a diagnosis or leave blank to reveal the next clue' : currentCase ? currentCase.title : 'Round complete';
  }
  if (button) {
    button.disabled = !enabled;
    button.textContent = enabled ? 'Submit Guess' : 'Round Complete';
  }
  if (!enabled) hideSuggestions();
}

function hydrateCurrentCase() {
  const modeSession = getModeSession();
  if (!modeSession.currentId) {
    ensureQueue();
    modeSession.currentId = modeSession.queue.shift() || allCases[0].legacyId;
    modeSession.guessCount = 0;
    modeSession.gameCompleted = false;
    modeSession.guessedIds = [];
    modeSession.guessHistory = [];
  }

  currentCase = findCaseByLegacyId(modeSession.currentId) || allCases[0] || null;
  session = createRoundSession(currentCase || { legacyId: -1, title: '', clues: [] }, {
    attempts: modeSession.guessCount,
    completed: modeSession.gameCompleted,
    guessedKeys: modeSession.guessedIds,
    history: modeSession.guessHistory
  });
}

function syncSessionState() {
  const modeSession = getModeSession();
  const snapshot = session.snapshot();
  modeSession.currentId = currentCase ? currentCase.legacyId : modeSession.currentId;
  modeSession.guessCount = snapshot.guessCount;
  modeSession.gameCompleted = snapshot.gameCompleted;
  modeSession.guessedIds = [...snapshot.guessedIds];
  modeSession.guessHistory = [...snapshot.guessHistory];
  persistStore();
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

function renderHistory() {
  const node = selectors.attempts();
  if (!node) return;
  const snapshot = session.snapshot();
  node.innerHTML = snapshot.guessHistory.map((entry, index) => {
    const badge = entry.result === 'correct' ? 'Correct' : entry.result === 'skip' ? 'Skip' : 'Miss';
    return `<div class="attempt-row ${entry.result}"><span>Guess ${index + 1}: ${entry.name}</span><span class="attempt-icon">${badge}</span></div>`;
  }).join('');
}

function renderSummary() {
  const summary = selectors.summary();
  const row = selectors.deckRow();
  const deckOne = selectors.deckOne();
  const deckTwo = selectors.deckTwo();
  if (!currentCase) return;

  if (summary) summary.textContent = currentCase.summary;
  if (row) row.style.display = currentCase.studyDecks.first || currentCase.studyDecks.second ? 'flex' : 'none';
  if (deckOne) deckOne.style.display = currentCase.studyDecks.first ? 'inline-block' : 'none';
  if (deckTwo) deckTwo.style.display = currentCase.studyDecks.second ? 'inline-block' : 'none';
}

function renderStatus() {
  const modeLabel = selectors.modeChip();
  const primaryLabel = selectors.primaryLabel();
  const primaryValue = selectors.primaryValue();
  const primarySubtext = selectors.primarySubtext();
  const secondaryLabel = selectors.secondaryLabel();
  const secondaryValue = selectors.secondaryValue();
  const secondarySubtext = selectors.secondarySubtext();
  const challengeToggle = selectors.challengeToggle();
  const practiceToggle = selectors.practiceToggle();
  const resultButton = selectors.resultButton();
  const next = selectors.next();
  const stats = getModeStats();
  const modeSession = getModeSession();

  if (modeLabel) modeLabel.textContent = activeMode === modes.challenge ? 'Challenge Mode' : 'Practice Mode';
  if (primaryLabel) primaryLabel.textContent = activeMode === modes.challenge ? 'Current Streak' : 'Correct Guesses';
  if (primaryValue) primaryValue.textContent = String(activeMode === modes.challenge ? stats.currentStreak : stats.wins);
  if (primarySubtext) primarySubtext.textContent = activeMode === modes.challenge ? 'Open stats' : 'Solved across this topic';
  if (secondaryLabel) secondaryLabel.textContent = activeMode === modes.challenge ? 'Best Streak' : 'Cases Played';
  if (secondaryValue) secondaryValue.textContent = String(activeMode === modes.challenge ? stats.bestStreak : stats.played);
  if (secondarySubtext) secondarySubtext.textContent = activeMode === modes.challenge ? 'Highest streak so far' : 'Rounds started in this topic';
  if (challengeToggle) challengeToggle.classList.toggle('active', activeMode === modes.challenge);
  if (practiceToggle) practiceToggle.classList.toggle('active', activeMode === modes.practice);
  if (resultButton) resultButton.style.display = session.snapshot().gameCompleted ? 'inline-flex' : 'none';
  if (next) next.style.display = session.snapshot().gameCompleted ? 'block' : 'none';
}

function buildOutcomeCard(title, subtitle, theme, snapshot) {
  const guessesUsed = snapshot ? snapshot.guessCount : 0;
  const guessesLeft = Math.max(0, 6 - guessesUsed);
  const outcomeLabel = theme === 'win' ? 'Solved' : 'Complete';
  return `<section class="result-card result-card--${theme}"><p class="result-card__eyebrow">${activeMode === modes.challenge ? 'Challenge Result' : 'Practice Result'}</p><div class="result-card__header"><div><h3 class="result-card__title">${title}</h3><p class="result-card__copy">${subtitle}</p></div><span class="result-card__badge">${outcomeLabel}</span></div><div class="result-card__meta"><div class="result-stat"><span class="result-stat__label">Guesses Used</span><span class="result-stat__value">${guessesUsed}/6</span></div><div class="result-stat"><span class="result-stat__label">Guesses Left</span><span class="result-stat__value">${guessesLeft}</span></div></div></section>`;
}

function createOutcomePayload(snapshot, won) {
  if (!snapshot || !snapshot.gameCompleted || !currentCase) return null;
  const title = won ? `Diagnosis confirmed: ${currentCase.title}` : `Round complete: ${currentCase.title}`;
  const subtitle = won
    ? `You solved the case in ${snapshot.guessCount} of 6 guesses.`
    : 'No guesses remain. Review the summary, then start the next case when you are ready.';
  return {
    html: buildOutcomeCard(title, subtitle, won ? 'win' : 'loss', snapshot),
    shareText: buildShareText(snapshot, won)
  };
}

function presentOutcome(payload, options = {}) {
  latestOutcome = payload;
  if (!payload) return;
  openModal(payload.html, { ...options, shareText: payload.shareText });
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

function buildChallengeShareCardData({ won, guesses, streakBeforeRound, streakAfterRound, bestStreak }) {
  const relevantStreak = won ? streakAfterRound : streakBeforeRound;
  return {
    won,
    guesses,
    streakAfterRound,
    bestStreak,
    rank: getChallengeRank(relevantStreak, won)
  };
}

function buildChallengeShareCardHtml(data, caseTitle) {
  const summary = data.won
    ? `Solved in ${data.guesses}/6 guesses.`
    : `Missed after ${data.guesses}/6 guesses.`;
  return `<section class="challenge-share-card"><div class="challenge-share-topline"><div><div class="challenge-share-kicker">${topicMeta.challengeTitle}</div><h3 class="challenge-share-title">${data.rank.title}</h3></div><span class="challenge-share-pill">${data.won ? 'Win' : 'Miss'}</span></div><p class="challenge-share-diagnosis">Diagnosis: ${caseTitle}</p><p class="challenge-share-subtitle">${summary} ${data.rank.subtitle}</p><div class="challenge-share-grid"><div class="challenge-share-stat"><span class="challenge-share-stat-label">Guesses</span><span class="challenge-share-stat-value">${data.guesses}/6</span></div><div class="challenge-share-stat"><span class="challenge-share-stat-label">Streak</span><span class="challenge-share-stat-value">${data.streakAfterRound}</span></div><div class="challenge-share-stat"><span class="challenge-share-stat-label">Best</span><span class="challenge-share-stat-value">${data.bestStreak}</span></div></div><div class="challenge-share-footer">${data.rank.flavor}</div></section>`;
}

function buildChallengeShareSvg(data) {
  const roundLabel = data.won ? 'WIN' : 'MISS';
  const footer = data.won ? 'Keep the streak alive.' : 'Reload. Re-enter. Reclaim the crown.';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7b3f00"/><stop offset="55%" stop-color="#a85a00"/><stop offset="100%" stop-color="#f2b66d"/></linearGradient></defs><rect width="1200" height="630" rx="36" fill="url(#bg)"/><text x="70" y="86" fill="#fff5eb" font-size="26" font-family="Segoe UI, Arial, sans-serif" letter-spacing="4">${topicMeta.challengeTitle.toUpperCase()}</text><text x="70" y="190" fill="#fffaf3" font-size="74" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${data.rank.title}</text><text x="70" y="255" fill="#fff4e8" font-size="34" font-family="Segoe UI, Arial, sans-serif">${data.rank.subtitle}</text><text x="70" y="305" fill="#ffe8cf" font-size="28" font-family="Segoe UI, Arial, sans-serif">${data.rank.flavor}</text><rect x="70" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/><rect x="390" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/><rect x="710" y="365" width="300" height="140" rx="22" fill="rgba(255,248,242,0.15)" stroke="rgba(255,248,242,0.26)"/><text x="105" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">ROUND</text><text x="105" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${roundLabel}</text><text x="425" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">GUESSES</text><text x="425" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${data.guesses}/6</text><text x="745" y="410" fill="#ffead1" font-size="22" letter-spacing="3" font-family="Segoe UI, Arial, sans-serif">BEST STREAK</text><text x="745" y="475" fill="#ffffff" font-size="52" font-weight="800" font-family="Segoe UI, Arial, sans-serif">${data.bestStreak}</text><text x="70" y="575" fill="#fff5eb" font-size="24" font-family="Segoe UI, Arial, sans-serif">${footer}</text></svg>`;
}

function downloadChallengeShareImage(data) {
  const svg = buildChallengeShareSvg(data);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const image = new Image();

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const context = canvas.getContext('2d');
    if (context) context.drawImage(image, 0, 0);
    URL.revokeObjectURL(url);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${topicMeta.fileSlug}-${data.won ? 'win' : 'miss'}.png`;
    link.click();
  };

  image.onerror = () => {
    URL.revokeObjectURL(url);
  };

  image.src = url;
}

function buildSuggestions(query) {
  const node = selectors.suggestions();
  if (!node) return;
  node.innerHTML = '';
  if (!query) {
    node.style.display = 'none';
    return;
  }

  const lower = query.toLowerCase();
  const snapshot = session.snapshot();
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

function buildStatsMarkup(mode = activeMode) {
  const stats = getModeStats(mode);
  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;
  const streakBlock = mode === modes.challenge
    ? `<div class="scores-cell"><div class="scores-value">${stats.currentStreak}</div><div class="scores-desc">Current Streak</div></div><div class="scores-cell"><div class="scores-value">${stats.bestStreak}</div><div class="scores-desc">Best Streak</div></div>`
    : '';

  return `<div style="margin-top:1rem"><p style="margin:0 0 0.35rem;font-size:0.72rem;letter-spacing:0.14em;text-transform:uppercase;color:#9e7552">${mode === modes.challenge ? 'Challenge Mode' : 'Practice Mode'} Stats</p><div class="scores-grid"><div class="scores-cell"><div class="scores-value">${stats.played}</div><div class="scores-desc">Cases Played</div></div><div class="scores-cell"><div class="scores-value">${stats.wins}</div><div class="scores-desc">Correct Guesses</div></div><div class="scores-cell"><div class="scores-value">${winRate}%</div><div class="scores-desc">Win Rate</div></div>${streakBlock}</div></div>`;
}

function openModal(html, options = {}) {
  const body = selectors.modalBody();
  const footer = selectors.modalFooter();
  const overlay = selectors.modal();
  if (!body || !footer || !overlay) return;

  const { shareText = null, actions = [], statsMode = activeMode } = options;

  body.innerHTML = `${html}${buildStatsMarkup(statsMode)}`;
  footer.innerHTML = '';

  actions.forEach((action) => {
    const button = document.createElement('button');
    button.className = 'btn-share';
    button.textContent = action.label;
    button.addEventListener('click', () => action.onClick(button));
    footer.appendChild(button);
  });

  if (shareText) {
    const button = document.createElement('button');
    button.className = 'btn-share';
    button.textContent = 'Copy Result';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareText);
        const hint = selectors.copyState();
        if (hint) {
          hint.style.display = 'block';
          window.setTimeout(() => { hint.style.display = 'none'; }, 1800);
        }
        button.textContent = 'Copied';
        window.setTimeout(() => { button.textContent = 'Copy Result'; }, 1800);
      } catch {
        button.textContent = 'Copy failed';
        window.setTimeout(() => { button.textContent = 'Copy Result'; }, 1800);
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

function buildShareText(snapshot, won) {
  if (activeMode === modes.challenge) {
    const stats = getModeStats(modes.challenge);
    const marks = [];
    for (let index = 1; index <= 6; index += 1) {
      if (index < snapshot.guessCount) marks.push('🟥');
      else if (index === snapshot.guessCount) marks.push(won ? '🟩' : '🟥');
      else marks.push('⬛');
    }
    return `${topicMeta.challengeTitle}\n${won ? `Solved in ${snapshot.guessCount}/6 guesses` : `Unsolved after ${snapshot.guessCount}/6 guesses`}\n${marks.join(' ')}\nBest streak: ${stats.bestStreak}\n#doctordle\nPlay: ${topicMeta.pageUrl}`;
  }

  const marks = [];
  for (let index = 1; index <= 6; index += 1) {
    if (index < snapshot.guessCount) marks.push('🟥');
    else if (index === snapshot.guessCount) marks.push(won ? '🟩' : '🟥');
    else marks.push('⬛');
  }
  const scoreLine = won ? `Solved in ${snapshot.guessCount}/6 guesses` : `Unsolved after ${snapshot.guessCount}/6 guesses`;
  return `${topicMeta.practiceTitle}\n${scoreLine}\n${marks.join(' ')}\n#doctordle\nPlay: ${topicMeta.pageUrl}`;
}

function updateStatsForResult(won) {
  const stats = getModeStats();
  const snapshot = session.snapshot();
  stats.played += 1;
  if (won) {
    stats.wins += 1;
    stats.dist[snapshot.guessCount] = (stats.dist[snapshot.guessCount] || 0) + 1;
    if (activeMode === modes.challenge) {
      stats.currentStreak += 1;
      stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
    }
  } else if (activeMode === modes.challenge) {
    stats.currentStreak = 0;
  }
}

function settleRound(result) {
  const challengeStatsBeforeRound = activeMode === modes.challenge
    ? { currentStreak: getModeStats(modes.challenge).currentStreak, bestStreak: getModeStats(modes.challenge).bestStreak }
    : null;

  syncSessionState();
  renderClues();
  renderHistory();
  renderStatus();

  if (result.status === 'correct') {
    updateStatsForResult(true);
    syncSessionState();
    renderSummary();
    renderStatus();
    setInputsEnabled(false);
    syncFeedback('Correct. Move on when you are ready.', 'correct');
    const outcome = createOutcomePayload(result.snapshot, true);

    if (activeMode === modes.challenge) {
      const challengeStats = getModeStats(modes.challenge);
      const challengeShare = buildChallengeShareCardData({
        won: true,
        guesses: result.snapshot.guessCount,
        streakBeforeRound: challengeStatsBeforeRound ? challengeStatsBeforeRound.currentStreak : 0,
        streakAfterRound: challengeStats.currentStreak,
        bestStreak: challengeStats.bestStreak
      });
      presentOutcome(
        {
          html: buildChallengeShareCardHtml(challengeShare, currentCase.title),
          shareText: outcome ? outcome.shareText : buildShareText(result.snapshot, true)
        },
        {
          actions: [
            { label: 'Next Challenge', onClick: () => { closeModal(); moveToNextCase(); } },
            { label: 'Download Share Card', onClick: () => downloadChallengeShareImage(challengeShare) }
          ],
          statsMode: modes.challenge
        }
      );
      return;
    }

    presentOutcome(outcome, {
      actions: [
        { label: 'Next Case', onClick: () => { closeModal(); moveToNextCase(); } }
      ],
      statsMode: activeMode
    });
    return;
  }

  if (result.status === 'exhausted') {
    updateStatsForResult(false);
    syncSessionState();
    renderSummary();
    renderStatus();
    setInputsEnabled(false);
    syncFeedback('No guesses remaining. The round is complete.', 'incorrect');
    const outcome = createOutcomePayload(result.snapshot, false);

    if (activeMode === modes.challenge) {
      const challengeStats = getModeStats(modes.challenge);
      const challengeShare = buildChallengeShareCardData({
        won: false,
        guesses: result.snapshot.guessCount,
        streakBeforeRound: challengeStatsBeforeRound ? challengeStatsBeforeRound.currentStreak : 0,
        streakAfterRound: challengeStats.currentStreak,
        bestStreak: Math.max(challengeStats.bestStreak, challengeStatsBeforeRound ? challengeStatsBeforeRound.bestStreak : challengeStats.bestStreak)
      });
      presentOutcome(
        {
          html: buildChallengeShareCardHtml(challengeShare, currentCase.title),
          shareText: outcome ? outcome.shareText : buildShareText(result.snapshot, false)
        },
        {
          actions: [
            { label: 'Next Challenge', onClick: () => { closeModal(); moveToNextCase(); } },
            { label: 'Download Share Card', onClick: () => downloadChallengeShareImage(challengeShare) }
          ],
          statsMode: modes.challenge
        }
      );
      return;
    }

    presentOutcome(outcome, {
      actions: [
        { label: 'Next Case', onClick: () => { closeModal(); moveToNextCase(); } }
      ],
      statsMode: activeMode
    });
    return;
  }

  if (result.status === 'duplicate') {
    syncFeedback('You already guessed that diagnosis.', 'incorrect');
    return;
  }

  syncFeedback(result.status === 'wrong' ? 'Not quite right.' : '', result.status === 'wrong' ? 'incorrect' : 'info');
}

function submitGuess() {
  const input = selectors.input();
  const rawValue = input ? input.value.trim() : '';
  const resolved = selectedGuess || (rawValue ? (() => {
    const match = resolveDiagnosis(rawValue);
    if (!match) return null;
    return { key: match.legacyId || match.label, label: match.label };
  })() : null);

  if (rawValue && !resolved) {
    syncFeedback('Choose a diagnosis from the list, or leave it blank to reveal the next clue.', 'incorrect');
    return;
  }

  const result = session.submitTurn(resolved ? resolved.key : null, resolved ? resolved.label : 'Skipped');
  settleRound(result);

  if (input) input.value = '';
  selectedGuess = null;
  hideSuggestions();
}

function moveToNextCase() {
  const modeSession = getModeSession();
  ensureQueue();
  modeSession.currentId = modeSession.queue.shift() || allCases[0].legacyId;
  modeSession.guessCount = 0;
  modeSession.gameCompleted = false;
  modeSession.guessedIds = [];
  modeSession.guessHistory = [];
  persistStore();
  selectedGuess = null;
  latestOutcome = null;
  hydrateCurrentCase();
  renderSummary();
  renderClues();
  renderHistory();
  renderStatus();
  setInputsEnabled(true);
  syncFeedback('', '');
  const card = selectors.card();
  if (card) card.classList.remove('flipped');
  const reveal = selectors.reveal();
  if (reveal) reveal.textContent = 'View Summary';
}

function switchMode(mode) {
  if (mode === activeMode) return;
  activeMode = mode;
  selectedGuess = null;
  latestOutcome = null;
  hideSuggestions();
  hydrateCurrentCase();
  renderSummary();
  renderClues();
  renderHistory();
  renderStatus();
  setInputsEnabled(!session.snapshot().gameCompleted);
  syncFeedback('', '');
  persistStore();
}

function showStatsOnly() {
  openModal('<div style="padding:0.9rem;background:linear-gradient(135deg,#f6f1ea 0%,#ecdcca 100%);border-radius:14px;border:2px solid #d9c0a8;margin-bottom:0.6rem"><p style="margin:0 0 0.2rem;font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;color:#9e7552">Stats</p><h3 style="margin:0;font-size:1.2rem;line-height:1.1;color:#7b3f00">Your totals at a glance.</h3></div>', { statsMode: activeMode });
}

function wireEvents() {
  const input = selectors.input();
  const submit = selectors.submit();
  const reveal = selectors.reveal();
  const resultButton = selectors.resultButton();
  const card = selectors.card();
  const next = selectors.next();
  const close = selectors.modalClose();
  const challengeToggle = selectors.challengeToggle();
  const practiceToggle = selectors.practiceToggle();
  const statsButton = selectors.statsButton();
  const deckOne = selectors.deckOne();
  const deckTwo = selectors.deckTwo();

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
      if (!latestOutcome) {
        const snapshot = session.snapshot();
        if (!snapshot.gameCompleted) return;
        const won = snapshot.guessHistory.some((entry) => entry.result === 'correct');
        latestOutcome = createOutcomePayload(snapshot, won);
      }
      if (latestOutcome) openModal(latestOutcome.html, { shareText: latestOutcome.shareText, statsMode: activeMode });
    });
  }
  if (reveal && card) {
    reveal.addEventListener('click', () => {
      const flipped = card.classList.toggle('flipped');
      reveal.textContent = flipped ? 'Back to Case' : 'View Summary';
    });
  }
  if (next) next.addEventListener('click', moveToNextCase);
  if (close) close.addEventListener('click', closeModal);
  if (selectors.modal()) {
    selectors.modal().addEventListener('click', (event) => {
      if (event.target === selectors.modal()) closeModal();
    });
  }
  if (challengeToggle) challengeToggle.addEventListener('click', () => switchMode(modes.challenge));
  if (practiceToggle) practiceToggle.addEventListener('click', () => switchMode(modes.practice));
  if (statsButton) statsButton.addEventListener('click', showStatsOnly);
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
}

function boot() {
  wireEvents();
  hydrateCurrentCase();
  renderSummary();
  renderClues();
  renderHistory();
  renderStatus();
  setInputsEnabled(!session.snapshot().gameCompleted);
}

boot();