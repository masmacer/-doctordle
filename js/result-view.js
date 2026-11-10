import { createTranslator } from './locale.js';

function escapeText(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

// Share output only; never modify saved guesses or scores.
export function buildShareMarks(snapshot, won, maxAttempts = 6) {
  const history = Array.isArray(snapshot.guessHistory) ? snapshot.guessHistory : [];
  return Array.from({ length: maxAttempts }, (_, index) => {
    if (index >= snapshot.guessCount) return '⬛';
    const result = history[index] && history[index].result;
    if (result === 'correct') return '🟩';
    if (result === 'skip') return '⬜';
    if (result === 'wrong') return '🟥';
    // Compatibility with snapshots that have a count but no full history.
    return won && index === snapshot.guessCount - 1 ? '🟩' : '🟥';
  });
}

// Presentation only. Outcomes and statistics are supplied by the existing engines.
export function renderCaseResult({ title, summary, won, guesses, eyebrow, streak = null, format = 'Daily', locale = 'en' }) {
  const t = createTranslator(locale);
  const heading = t(won ? 'Correct diagnosis' : 'Answer revealed');
  const stamp = `<svg class="result-stamp result-stamp--${won ? 'solved' : 'reviewed'}" viewBox="0 0 168 76" role="img" aria-label="${t(won ? 'Case solved' : 'Case reviewed')}"><g fill="none" stroke="currentColor"><rect x="5" y="5" width="158" height="66" rx="5" stroke-width="2.6"/><rect x="10" y="10" width="148" height="56" rx="2" stroke-width="1" stroke-dasharray="9 2 4 2"/><path d="M23 50h23m76 0h23" stroke-width="1.4"/></g><text x="84" y="39" text-anchor="middle" class="result-stamp__word">${t(won ? 'SOLVED' : 'REVIEWED')}</text><text x="84" y="55" text-anchor="middle" class="result-stamp__brand">DOCTORDLE</text></svg>`;
  const secondary = streak === null
    ? `<span class="result-stat__label">${t('Format')}</span><span class="result-stat__value">${escapeText(t(format))}</span>`
    : `<span class="result-stat__label">${t('Current streak')}</span><span class="result-stat__value">${Number(streak)}</span>`;
  return `<section class="result-card result-card--${won ? 'win' : 'loss'}"><div class="result-card__topline"><p class="result-card__eyebrow">${escapeText(eyebrow)}</p>${stamp}</div><div class="result-card__header"><div><p class="result-card__copy">${heading}</p><h3 class="result-card__title">${escapeText(title)}</h3></div></div><div class="result-card__meta"><div class="result-stat"><span class="result-stat__label">${t('Guesses used')}</span><span class="result-stat__value">${Number(guesses)} / 6</span></div><div class="result-stat">${secondary}</div></div>${summary ? `<details class="result-explanation" open><summary>${t('Why this diagnosis?')}</summary><p>${escapeText(summary)}</p></details>` : ''}</section>`;
}
