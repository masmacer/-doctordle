function slugifyLabel(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'case';
}

function normalizeDiagnosis(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function stripParentheticalSegments(value) {
  return String(value || '').replace(/\([^)]*\)/g, ' ');
}

function stripAcronymSuffix(value) {
  return String(value || '').replace(/\s*\(([A-Z0-9-]{2,10})\)\s*$/g, ' ');
}

function buildAnswerForms(title) {
  const forms = new Set();
  const normalizedTitle = normalizeDiagnosis(title);
  const acronymBaseTitle = normalizeDiagnosis(stripAcronymSuffix(title));

  if (normalizedTitle) forms.add(normalizedTitle);
  if (acronymBaseTitle) forms.add(acronymBaseTitle);

  return [...forms];
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
    answers: buildAnswerForms(title),
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

function buildUniqueAnswerIndex(cases) {
  const counts = new Map();
  cases.forEach((item) => {
    item.answers.forEach((answer) => {
      counts.set(answer, (counts.get(answer) || 0) + 1);
    });
  });

  const index = new Map();
  cases.forEach((item) => {
    item.answers.forEach((answer) => {
      if (counts.get(answer) === 1) index.set(answer, item);
    });
  });
  return index;
}

const answerIndex = buildUniqueAnswerIndex(normalizedCases);

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
  const normalized = normalizeDiagnosis(query);
  if (!normalized) return null;

  const exactMatch = answerIndex.get(normalized);
  if (exactMatch) {
    return {
      label: exactMatch.title,
      legacyId: exactMatch.legacyId,
      token: exactMatch.token
    };
  }

  const normalizedBase = normalizeDiagnosis(stripAcronymSuffix(query));
  if (normalizedBase && normalizedBase !== normalized) {
    const baseMatch = answerIndex.get(normalizedBase);
    if (baseMatch) {
      return {
        label: baseMatch.title,
        legacyId: baseMatch.legacyId,
        token: baseMatch.token
      };
    }
  }

  const dictionaryMatch = diagnosisDictionary.find((item) => normalizeDiagnosis(item) === normalized);
  if (!dictionaryMatch) return null;

  const catalogMatch = answerIndex.get(normalized) || (normalizedBase ? answerIndex.get(normalizedBase) : null);
  return {
    label: dictionaryMatch,
    legacyId: catalogMatch ? catalogMatch.legacyId : null,
    token: catalogMatch ? catalogMatch.token : null
  };
}
