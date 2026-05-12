function slugifyLabel(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'case';
}

function normalizeCase(entry, index) {
  const title = String(entry && entry.answer ? entry.answer : `Case ${index + 1}`);
  const legacyId = Number.isFinite(entry && entry.id) ? entry.id : index + 1;
  const token = `case-${legacyId}-${slugifyLabel(title)}`;
  const clues = Array.isArray(entry && entry.clues) ? [...entry.clues] : [];

  return {
    token,
    legacyId,
    order: index,
    title,
    answers: [title.toLowerCase()],
    clues,
    summary: entry && entry.description ? String(entry.description) : '',
    studyDecks: {
      first: entry && entry.ankiStep1 ? String(entry.ankiStep1) : '',
      second: entry && entry.ankiStep2 ? String(entry.ankiStep2) : ''
    }
  };
}

const rawEntries = Array.isArray(window.__DDLE_CASES__) ? window.__DDLE_CASES__ : [];
const normalizedCases = rawEntries.map(normalizeCase);
const tokenIndex = new Map(normalizedCases.map((item) => [item.token, item]));
const legacyIndex = new Map(normalizedCases.map((item) => [item.legacyId, item]));

const diagnosisDictionary = (() => {
  if (Array.isArray(window.__DDLE_DICTIONARY__) && window.__DDLE_DICTIONARY__.length) {
    return [...new Set(window.__DDLE_DICTIONARY__.map((item) => String(item).trim()).filter(Boolean))].sort();
  }

  return normalizedCases.map((item) => item.title);
})();

export function listCases() {
  return normalizedCases;
}

export function countCases() {
  return normalizedCases.length;
}

export function findCaseByDayIndex(dayIndex) {
  if (!normalizedCases.length) return null;
  const safeIndex = ((dayIndex % normalizedCases.length) + normalizedCases.length) % normalizedCases.length;
  return normalizedCases[safeIndex] || null;
}

export function findCaseByToken(token) {
  return tokenIndex.get(token) || null;
}

export function findCaseByLegacyId(legacyId) {
  return legacyIndex.get(legacyId) || null;
}

export function getDiagnosisDictionary() {
  return diagnosisDictionary;
}

export function resolveDiagnosis(query) {
  const normalized = String(query || '').trim().toLowerCase();
  if (!normalized) return null;

  const exactMatch = normalizedCases.find((item) => item.answers.includes(normalized));
  if (exactMatch) {
    return {
      label: exactMatch.title,
      legacyId: exactMatch.legacyId,
      token: exactMatch.token
    };
  }

  const dictionaryMatch = diagnosisDictionary.find((item) => item.toLowerCase() === normalized);
  if (!dictionaryMatch) return null;

  const catalogMatch = normalizedCases.find((item) => item.title.toLowerCase() === normalized);
  return {
    label: dictionaryMatch,
    legacyId: catalogMatch ? catalogMatch.legacyId : null,
    token: catalogMatch ? catalogMatch.token : null
  };
}