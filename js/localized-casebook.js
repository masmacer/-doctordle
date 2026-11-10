import { normalizeLocale } from './locale.js';
import { diagnosisNames } from './case-translations.js';
import { normalizeDiagnosis, buildAnswerForms } from './diagnosis-names.js';
import { getCaseTranslation } from './translation-registry.js';

export function createLocalizedCasebook(locale, dictionary, resolveCanonical, { scope = 'daily', cases = [] } = {}) {
  const language = normalizeLocale(locale);
  const nameIndex = language === 'it' ? 1 : 2;
  const reverse = new Map();
  const displays = new Map();
  function addName(label, canonical) {
    const key = normalizeDiagnosis(label);
    const previous = reverse.get(key);
    if (previous && previous.canonical !== canonical && !buildAnswerForms(previous.canonical).some(form => buildAnswerForms(canonical).includes(form))) throw new Error(`Ambiguous localized diagnosis: ${label}`);
    if (!previous) reverse.set(key, { label, canonical });
  }
  if (language !== 'en') for (const record of cases) {
    const translation = getCaseTranslation(language, scope, record.legacyId);
    if (!translation) continue;
    displays.set(normalizeDiagnosis(record.title), translation.title);
    addName(translation.title, record.title);
  }
  if (language !== 'en') for (const row of diagnosisNames) {
    const resolved = resolveCanonical(row[0]);
    if (!resolved) continue;
    displays.set(normalizeDiagnosis(row[0]), row[nameIndex][0]);
    const translatedTitle = scope === 'daily' || scope === 'endless' ? getCaseTranslation(language, scope, resolved.legacyId)?.title : undefined;
    for (const label of [...row[nameIndex], translatedTitle].filter(Boolean)) {
      addName(label, row[0]);
    }
  }
  return {
    dictionary: [...new Set([...dictionary, ...[...reverse.values()].map(item => item.label)])].sort((a, b) => a.localeCompare(b, language)),
    resolve(query) {
      const alias = reverse.get(normalizeDiagnosis(query));
      return resolveCanonical(alias ? alias.canonical : query);
    },
    display(label) { return displays.get(normalizeDiagnosis(label)) || label; },
    localize(record) {
      if (!record || language === 'en') return record;
      const translation = getCaseTranslation(language, scope, record.legacyId);
      if (!translation || translation.clues.length !== record.clues.length) return { ...record, untranslated: true };
      // Preserve answers, legacy ID, token and order for matching and old saved rounds.
      return { ...record, title: translation.title, clues: [...translation.clues], summary: translation.summary, untranslated: false };
    }
  };
}
