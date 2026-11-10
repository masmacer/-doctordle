import { renderCaseResult, buildShareMarks } from './result-view.js';
import { installSuccessFeedback, celebrateSuccess } from './success-feedback.js';
import { normalizeLocale, createTranslator, localizeStaticGame, translateGameDom } from './locale.js';
import { createLocalizedCasebook } from './localized-casebook.js';
import { loadCaseTranslations } from './translation-registry.js';
import { applyContentRevision, currentContentVersion, savedContentVersion } from './case-content-revisions.js';
import { localizedPath } from './localized-routes.js';
import { trackFriendEvent } from './friend-analytics.js';
import { installShareCardPreview } from './share-card-preview.js';
import {parseFriendChallenge,buildFriendChallengeUrl,readFriendRound,writeFriendRound,shareFriendChallenge,copyShareText} from './friend-challenge.js';
import {
  findCaseByLegacyId as findCanonicalCase,
  getDiagnosisDictionary,
  listCases,
  resolveDiagnosis as resolveCanonicalDiagnosis
} from './casebook.js';
import { createRoundSession } from './round-session.js';
import { createEndlessBundle, readEndlessBundle, writeEndlessBundle } from './storage.js';

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
const bodyData = document.body && document.body.dataset ? document.body.dataset : {};
const locale = normalizeLocale(bodyData.locale);
await loadCaseTranslations(locale);
const t = createTranslator(locale);
const friendParams = new URLSearchParams(window.location.search);
const friendInvite = parseFriendChallenge(friendParams, listCases());
const invalidFriendInvite = friendParams.has('challenge') && !friendInvite;
const localizedBook = createLocalizedCasebook(locale, getDiagnosisDictionary(), resolveCanonicalDiagnosis, { scope: storageScope, cases: listCases() });
const findCaseByLegacyId = (id, version) => applyContentRevision(localizedBook.localize(findCanonicalCase(id)), { scope: storageScope, locale, version });
const resolveDiagnosis = query => localizedBook.resolve(query);
const allowPractice = bodyData.allowPractice !== 'false';
const hubReturnEnabled = bodyData.hubReturnEnabled === 'true';
const defaultMeta = storageScope === 'dental'
  ? {
      title: 'Doctordle Dental Edition',
      challengeTitle: 'Doctordle Dental Challenge',
      practiceTitle: 'Doctordle Dental Practice',
      pageUrl: 'https://doctordle.net/games/doctordle-for-dentist',
      fileSlug: 'doctordle-dental'
    }
  : storageScope === 'mental-health'
    ? {
        title: 'Doctordle Mental Health',
        challengeTitle: 'Doctordle Mental Health Challenge',
        practiceTitle: 'Doctordle Mental Health Practice',
        pageUrl: 'https://doctordle.net/games/doctordle-mental-health',
        fileSlug: 'doctordle-mental-health'
      }
    : {
        title: 'Doctordle Endless',
        challengeTitle: 'Doctordle Endless Challenge',
        practiceTitle: 'Doctordle Endless Practice',
        pageUrl: 'https://doctordle.net/games/doctordle-endless',
        fileSlug: 'doctordle-endless'
      };
const topicMeta = {
  title: bodyData.topicTitle || defaultMeta.title,
  challengeTitle: bodyData.challengeTitle || defaultMeta.challengeTitle,
  practiceTitle: bodyData.practiceTitle || defaultMeta.practiceTitle,
  pageUrl: bodyData.pageUrl || defaultMeta.pageUrl,
  fileSlug: bodyData.fileSlug || defaultMeta.fileSlug
};
if (locale !== 'en') {
  const name = storageScope === 'endless' ? t('Doctordle Endless') : bodyData.topicTitle && !['dental','mental-health'].includes(storageScope) ? bodyData.topicTitle : `Doctordle ${t(storageScope === 'dental' ? 'Dental' : 'Mental Health')}`;
  topicMeta.title = name;
  if (!bodyData.challengeTitle) topicMeta.challengeTitle = `${name} · ${t('Challenge')}`;
  if (!bodyData.practiceTitle) topicMeta.practiceTitle = `${name} · ${t('Practice')}`;
  if (!bodyData.pageUrl) topicMeta.pageUrl = `https://doctordle.net${localizedPath(new URL(defaultMeta.pageUrl).pathname, locale)}`;
}
const allCases = listCases().map(record => localizedBook.localize(record));
let store = friendParams.has('challenge') ? createEndlessBundle() : readEndlessBundle(storageScope);
if (friendInvite) store.sessions.challenge = { ...store.sessions.challenge, ...readFriendRound(storageScope, friendInvite), currentId: friendInvite.caseId, contentVersion: friendInvite.contentVersion };
const initialMode = bodyData.initialMode === modes.practice || bodyData.initialMode === modes.challenge
  ? bodyData.initialMode : store.mode;
let activeMode = friendInvite ? modes.challenge : allowPractice && initialMode === modes.practice ? modes.practice : modes.challenge;
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
  if (friendInvite) { writeFriendRound(storageScope, friendInvite, getModeSession()); return; }
  if (invalidFriendInvite) return;
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
  node.textContent = t(message);
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
    input.placeholder = enabled ? t('Search for a diagnosis or leave blank to reveal the next clue') : currentCase ? currentCase.title : t('Round Complete');
  }
  if (button) {
    button.disabled = !enabled;
    button.textContent = t(enabled ? 'Submit Guess' : 'Round Complete');
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
    modeSession.contentVersion = currentContentVersion;
  }

  currentCase = findCaseByLegacyId(modeSession.currentId, savedContentVersion(modeSession)) || allCases[0] || null;
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
  let notice = document.getElementById('case-language-notice');
  if (locale !== 'en' && currentCase.untranslated) {
    if (!notice) { notice = document.createElement('p'); notice.id = 'case-language-notice'; notice.className = 'intake-helper'; node.before(notice); }
    notice.textContent = t('English case notice');
  } else { notice?.remove(); }
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
      item.textContent = t('Clue {n} unlocks after the next miss', { n: index + 1 });
    }
    node.appendChild(item);
  });
}

function renderHistory() {
  const node = selectors.attempts();
  if (!node) return;
  const snapshot = session.snapshot();
  node.innerHTML = snapshot.guessHistory.map((entry, index) => {
    const badge = t(entry.result === 'correct' ? 'Correct' : entry.result === 'skip' ? 'Skip' : 'Miss');
    const label = entry.result === 'skip' ? t('Skipped') : localizedBook.display(entry.name);
    const safe = String(label).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    return `<div class="attempt-row ${entry.result}"><span>${t('Guess {n}', { n: index + 1 })}: ${safe}</span><span class="attempt-icon">${badge}</span></div>`;
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
  if (friendInvite) {
    if (modeLabel) modeLabel.textContent = t('Friend challenge');
    if (primaryLabel) primaryLabel.textContent = t('Guesses used');
    if (primaryValue) primaryValue.textContent = `${session.snapshot().guessCount} / 6`;
    if (secondaryLabel) secondaryLabel.textContent = t('Friend’s score');
    if (secondaryValue) secondaryValue.textContent = friendInvite.targetGuesses ? `${friendInvite.targetGuesses} / 6` : '—';
    if (next) next.style.display = 'none';
  }
  translateGameDom(document.querySelector('main'), locale);
}

function buildOutcomeCard(won, snapshot) {
  const card = renderCaseResult({
    title: currentCase.title, summary: currentCase.summary,
    won, guesses: snapshot ? snapshot.guessCount : 0,
    eyebrow: friendInvite ? 'Friend challenge' : activeMode === modes.challenge ? 'Challenge Result' : 'Practice Result',
    format: friendInvite ? 'Friend challenge' : activeMode === modes.challenge ? 'Challenge' : 'Practice',
    streak:!friendInvite && activeMode === modes.challenge ? getModeStats().currentStreak : null, locale
  });
  if(!friendInvite?.targetGuesses || !won) return card;
  const comparison = snapshot.guessCount < friendInvite.targetGuesses ? 'You beat your friend’s score!' : snapshot.guessCount === friendInvite.targetGuesses ? 'You matched your friend’s score!' : 'Case solved! Share it with another friend.';
  return `${card}<p class="friend-comparison">${t(comparison)}</p>`;
}

function createOutcomePayload(snapshot, won, before = null) {
  if (!snapshot || !snapshot.gameCompleted || !currentCase) return null;
  return {
    html: buildOutcomeCard(won, snapshot),
    shareText: buildShareText(snapshot, won),
    cardData: !friendInvite && activeMode === modes.challenge ? {
      kind:'challenge', locale, won, snapshot, topic:t(topicMeta.title), pageUrl:topicMeta.pageUrl,
      streak:won?getModeStats().currentStreak:before?.currentStreak??null,
      best:getModeStats().bestStreak,
      newBest:!!won && !!before && getModeStats().currentStreak>before.bestStreak
    } : null
  };
}

function presentOutcome(payload, options = {}) {
  latestOutcome = payload;
  if (!payload) return;
  openModal(payload.html, { ...options, shareText: payload.shareText, cardData:payload.cardData });
  if (options.celebrate) celebrateSuccess(selectors.modal());
}

function buildHubActions() {
  if (!hubReturnEnabled) return [];
  return [{
    label: 'Back to Modes', icon: 'modes',
    onClick: () => {
      window.parent.postMessage({ type: 'ddle-topic-back', scope: storageScope }, '*');
    }
  }];
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
  const searchKey = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const matches = localizedBook.dictionary.filter((label) => searchKey(label).includes(searchKey(lower))).slice(0, 12);
  if (!matches.length) {
    node.style.display = 'none';
    return;
  }

  matches.forEach((label) => {
    const resolved = resolveDiagnosis(label);
    const guessKey = resolved && resolved.legacyId ? resolved.legacyId : resolved ? resolved.label : label;
    const disabled = snapshot.guessedIds.includes(guessKey);
    const option = document.createElement('div');
    option.className = `autocomplete-item${disabled ? ' used-guess' : ''}`;
    option.textContent = disabled ? `${label} (${t('used')})` : label;
    if (!disabled) {
      option.addEventListener('click', () => {
        const input = selectors.input();
        if (input) input.value = label;
        selectedGuess = { key: guessKey, label: resolved ? resolved.label : label };
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

  return `<div style="margin-top:1rem"><p style="margin:0 0 0.35rem;font-size:0.72rem;letter-spacing:0.14em;text-transform:uppercase;color:#9e7552">${t(mode === modes.challenge ? 'Challenge Mode' : 'Practice Mode')} · ${t('Stats')}</p><div class="scores-grid"><div class="scores-cell"><div class="scores-value">${stats.played}</div><div class="scores-desc">Cases Played</div></div><div class="scores-cell"><div class="scores-value">${stats.wins}</div><div class="scores-desc">Correct Guesses</div></div><div class="scores-cell"><div class="scores-value">${winRate}%</div><div class="scores-desc">Win Rate</div></div>${streakBlock}</div></div>`;
}

let disposeShareCard = null;

function openModal(html, options = {}) {
  disposeShareCard?.();disposeShareCard=null;
  const body = selectors.modalBody();
  const footer = selectors.modalFooter();
  const overlay = selectors.modal();
  if (!body || !footer || !overlay) return;

  const { shareText = null, actions = [], statsMode = activeMode } = options;

  body.innerHTML = `${html}${friendInvite ? `<p class="friend-round-note">${t('Friend challenges have separate progress and do not change your streak.')}</p>` : buildStatsMarkup(statsMode)}`;
  footer.innerHTML = '';
  footer.classList.add('roundsheet-actions--endless');

  function actionButton(label, icon) {
    const button = document.createElement('button');
    button.type = 'button';button.className = 'btn-share';
    button.innerHTML = `<svg class="ui-icon" aria-hidden="true" focusable="false"><use href="/images/ui-icons.svg#${icon}" /></svg><span class="button-label"></span>`;
    button.querySelector('.button-label').textContent = t(label);
    return button;
  }
  const relabel = (button,label) => { button.querySelector('.button-label').textContent = t(label); };

  actions.forEach((action) => {
    const button = actionButton(action.label, action.icon || (action.label === 'Back to Modes' ? 'modes' : 'arrow'));
    button.addEventListener('click', () => action.onClick(button));
    footer.appendChild(button);
  });

  if (shareText) {
    const inviteButton = actionButton('Challenge a Friend','share');
    inviteButton.dataset.action = 'friend';
    inviteButton.addEventListener('click', async () => {
      inviteButton.disabled = true;
        const analyticsContext = { game: storageScope, language: locale, game_mode: friendInvite ? 'friend' : activeMode };
        trackFriendEvent('click', analyticsContext);
      const snapshot = session.snapshot(), won = snapshot.guessHistory.some(row=>row.result==='correct');
      const url = buildFriendChallengeUrl(topicMeta.pageUrl,currentCase.legacyId,savedContentVersion(getModeSession()),won?snapshot.guessCount:null);
      const text = t(won ? 'Can you match or beat {n} guesses?' : 'Can you solve this case in six guesses?', {n:snapshot.guessCount});
      try {
        const result = await shareFriendChallenge({title:topicMeta.title,text,url});
          trackFriendEvent('share', {...analyticsContext, share_result: result});
        if(result!=='cancelled')relabel(inviteButton,result==='copied'?'Challenge link copied':'Share opened');
        } catch { trackFriendEvent('share', {...analyticsContext, share_result: 'failed'});relabel(inviteButton,'Copy failed'); }
      finally { inviteButton.disabled = false;window.setTimeout(()=>relabel(inviteButton,'Challenge a Friend'),2200); }
    });
    footer.appendChild(inviteButton);
    const button = actionButton('Copy Result','copy');
    button.dataset.action = 'copy-result';
    button.addEventListener('click', async () => {
      try {
        await copyShareText(shareText);
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'share_copy', { game: storageScope, game_mode: friendInvite ? 'friend' : activeMode });
        }
        const hint = selectors.copyState();
        if (hint) {
          hint.style.display = 'block';
          window.setTimeout(() => { hint.style.display = 'none'; }, 1800);
        }
        relabel(button,'Copied');
        window.setTimeout(() => relabel(button,'Copy Result'), 1800);
      } catch {
        relabel(button,'Copy failed');
        window.setTimeout(() => relabel(button,'Copy Result'), 1800);
      }
    });
    footer.appendChild(button);
  }

  if(shareText && options.cardData) disposeShareCard=installShareCardPreview({body,footer,data:options.cardData,filename:`${topicMeta.fileSlug}-streak.png`});
  overlay.classList.add('open');
  translateGameDom(body, locale);
  translateGameDom(footer, locale);
}

function closeModal() {
  disposeShareCard?.();disposeShareCard=null;
  const overlay = selectors.modal();
  if (overlay) overlay.classList.remove('open');
}

function buildShareText(snapshot, won) {
  const marks = buildShareMarks(snapshot, won);
  const challengeUrl = buildFriendChallengeUrl(topicMeta.pageUrl,currentCase.legacyId,savedContentVersion(getModeSession()),won?snapshot.guessCount:null);
  if (friendInvite) return `${topicMeta.title} · ${t('Friend challenge')}\n${t(won ? 'Solved in {n}/6 guesses' : 'Unsolved after {n}/6 guesses',{n:snapshot.guessCount})}\n${marks.join(' ')}\n#doctordle\n${t('Play')}: ${challengeUrl}`;
  if (activeMode === modes.challenge) {
    const stats = getModeStats(modes.challenge);
    return `${topicMeta.challengeTitle}\n${t(won ? 'Solved in {n}/6 guesses' : 'Unsolved after {n}/6 guesses', { n: snapshot.guessCount })}\n${marks.join(' ')}\n${t('Best streak')}: ${stats.bestStreak}\n#doctordle\n${t('Play')}: ${challengeUrl}`;
  }

  const scoreLine = t(won ? 'Solved in {n}/6 guesses' : 'Unsolved after {n}/6 guesses', { n: snapshot.guessCount });
  return `${topicMeta.practiceTitle}\n${scoreLine}\n${marks.join(' ')}\n#doctordle\n${t('Play')}: ${challengeUrl}`;
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

  if (friendInvite && ['correct','exhausted'].includes(result.status)) {
    const won = result.status === 'correct';
    trackFriendEvent('complete', {game:storageScope, language:locale, game_mode:'friend', outcome:won?'won':'lost', guesses_used:result.snapshot.guessCount, has_target:!!friendInvite.targetGuesses});
    renderSummary();setInputsEnabled(false);
    syncFeedback(won ? 'Correct. Move on when you are ready.' : 'No guesses remaining. The round is complete.',won?'correct':'incorrect');
    presentOutcome(createOutcomePayload(result.snapshot,won),{actions:buildHubActions(),celebrate:won});
    return;
  }
  if (result.status === 'correct') {
    updateStatsForResult(true);
    syncSessionState();
    renderSummary();
    renderStatus();
    setInputsEnabled(false);
    syncFeedback('Correct. Move on when you are ready.', 'correct');
    const outcome = createOutcomePayload(result.snapshot, true, challengeStatsBeforeRound);


    presentOutcome(outcome, {
      celebrate: true,
      actions: [
        { label: activeMode===modes.challenge?'Next Challenge':'Next Case', onClick: () => { closeModal(); moveToNextCase(); } },
        ...buildHubActions()
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
    const outcome = createOutcomePayload(result.snapshot, false, challengeStatsBeforeRound);


    presentOutcome(outcome, {
      actions: [
        { label: activeMode===modes.challenge?'Next Challenge':'Next Case', onClick: () => { closeModal(); moveToNextCase(); } },
        ...buildHubActions()
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
  if (friendInvite || invalidFriendInvite) return;
  const modeSession = getModeSession();
  ensureQueue();
  modeSession.currentId = modeSession.queue.shift() || allCases[0].legacyId;
  modeSession.guessCount = 0;
  modeSession.gameCompleted = false;
  modeSession.guessedIds = [];
  modeSession.guessHistory = [];
  modeSession.contentVersion = currentContentVersion;
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
  if (friendInvite || invalidFriendInvite) return;
  if (!allowPractice && mode === modes.practice) return;
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
      if (latestOutcome) openModal(latestOutcome.html, { cardData:latestOutcome.cardData, shareText: latestOutcome.shareText, statsMode: activeMode, actions: buildHubActions() });
    });
  }
  if (reveal && card) {
    reveal.addEventListener('click', () => {
      const flipped = card.classList.toggle('flipped');
      reveal.textContent = t(flipped ? 'Back to Case' : 'View Summary');
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
  if (allowPractice && practiceToggle) practiceToggle.addEventListener('click', () => switchMode(modes.practice));
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
  localizeStaticGame(locale);
  installSuccessFeedback();
  if (invalidFriendInvite) {
    trackFriendEvent('start', {game:storageScope, language:locale, game_mode:'friend', invite_status:'invalid'});
    const main = document.querySelector('main');
    main.replaceChildren();
    const message = document.createElement('p');message.className = 'case-language-notice';message.textContent = t('This challenge link is unavailable. Choose a mode to keep playing.');main.appendChild(message);
    return;
  }
  if (friendInvite) {
    const saved = getModeSession();
    trackFriendEvent('start', {game:storageScope, language:locale, game_mode:'friend', invite_status:'valid', round_state:saved.gameCompleted?'completed':saved.guessCount?'resumed':'new', has_target:!!friendInvite.targetGuesses});
    document.body.classList.add('friend-play');
    const note = document.createElement('p');note.className = 'friend-round-note';note.textContent = t('Friend challenges have separate progress and do not change your streak.');document.querySelector('main').prepend(note);
  }
  if (!allowPractice && !friendInvite) {
    store.mode = modes.challenge;
    writeEndlessBundle(store, storageScope);
  }
  wireEvents();
  hydrateCurrentCase();
  renderSummary();
  renderClues();
  renderHistory();
  renderStatus();
  setInputsEnabled(!session.snapshot().gameCompleted);
}

boot();
