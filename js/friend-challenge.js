import { currentContentVersion } from './case-content-revisions.js';

export function parseFriendChallenge(params, cases = null) {
  const match = /^(1|2)\.([1-9]\d{0,5})$/.exec(params.get('challenge') || '');
  if (!match) return null;
  const contentVersion = Number(match[1]), caseId = Number(match[2]);
  if (contentVersion > currentContentVersion || (cases && !cases.some(record => record.legacyId === caseId))) return null;
  const target = params.get('target');
  return { caseId, contentVersion, targetGuesses: /^[1-6]$/.test(target || '') ? Number(target) : null };
}

export function buildFriendChallengeUrl(pageUrl, caseId, contentVersion, targetGuesses = null) {
  if (!Number.isSafeInteger(caseId) || caseId < 1 || ![1,2].includes(contentVersion)) throw Error('Invalid challenge');
  const url = new URL(pageUrl);
  if (!['https:','http:'].includes(url.protocol)) throw Error('Invalid page URL');
  url.pathname = url.pathname.replace(/\.html$/, '');
  url.search = '';url.hash = '';
  // Numeric identity only: the legacy case token contains the diagnosis name.
  url.searchParams.set('challenge', `${contentVersion}.${caseId}`);
  if (Number.isInteger(targetGuesses) && targetGuesses >= 1 && targetGuesses <= 6) url.searchParams.set('target', targetGuesses);
  return url.href;
}

export function forwardFriendChallenge(source, destination) {
  const invite = parseFriendChallenge(source);
  if (!invite) return;
  destination.set('challenge', `${invite.contentVersion}.${invite.caseId}`);
  if (invite.targetGuesses) destination.set('target', invite.targetGuesses);
}

function friendKey(scope, invite) {
  if (!/^[a-z-]+$/.test(scope) || !Number.isSafeInteger(invite.caseId) || invite.caseId < 1 || ![1,2].includes(invite.contentVersion)) throw Error('Invalid challenge scope');
  return `ddle_friend_${scope}_v${invite.contentVersion}_case_${invite.caseId}`;
}

export function readFriendRound(scope, invite, storage = null) {
  try {
    storage = storage || window.localStorage;
    const saved = JSON.parse(storage.getItem(friendKey(scope, invite)) || 'null');
    if (!saved || saved.currentId !== invite.caseId || saved.contentVersion !== invite.contentVersion || !Number.isInteger(saved.guessCount) || saved.guessCount < 0 || saved.guessCount > 6 || !Array.isArray(saved.guessHistory) || saved.guessHistory.length !== saved.guessCount || !Array.isArray(saved.guessedIds) || typeof saved.gameCompleted !== 'boolean') return null;
    if (saved.guessHistory.some(row => !['correct','wrong','skip'].includes(row.result) || typeof row.name !== 'string' || row.name.length > 256)) return null;
    return { currentId: saved.currentId, contentVersion: saved.contentVersion, guessCount: saved.guessCount, gameCompleted: saved.gameCompleted, guessedIds: [...saved.guessedIds], guessHistory: saved.guessHistory.map(row => ({name:row.name,result:row.result})) };
  } catch { return null; }
}

export function writeFriendRound(scope, invite, round, storage = null) {
  try { (storage || window.localStorage).setItem(friendKey(scope, invite), JSON.stringify(round));return true; } catch { return false; }
}

export async function copyShareText(text) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text);return; } catch { /* Try the browser's legacy copy path. */ }
  }
  const previous = document.activeElement;
  const field = document.createElement('textarea');
  field.value = text;field.setAttribute('readonly','');field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
  document.body.appendChild(field);field.select();
  try { if (!document.execCommand('copy')) throw Error('Copy unavailable'); }
  finally { field.remove();previous?.focus({preventScroll:true}); }
}

export async function shareFriendChallenge({title,text,url}) {
  if (navigator.share && (!navigator.canShare || navigator.canShare({title,text,url}))) {
    try { await navigator.share({title,text,url});return 'shared'; }
    catch (error) { if (error.name === 'AbortError') return 'cancelled'; }
  }
  await copyShareText(`${title}\n${text}\n${url}`);
  return 'copied';
}
