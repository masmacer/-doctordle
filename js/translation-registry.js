import { localizedCases as seed } from './case-translations.js';
import { topicCaseMap } from './translations/topic-case-map.js';
import { topicExtraTranslations } from './translations/topic-extra.js';

export const mainTranslations = {
  it: { ...seed.it },
  pt: { ...seed.pt }
};
const loading = new Map();
export async function loadCaseTranslations(locale) {
  if (locale !== 'it' && locale !== 'pt') return;
  if (!loading.has(locale)) loading.set(locale, import(`./translations/${locale}/index.js`).then(module => {
    Object.assign(mainTranslations[locale], module.default);
  }));
  await loading.get(locale);
}

// Topic IDs are local to each bank. Reuse only an audited exact-content link.
export function getCaseTranslation(locale, scope, legacyId) {
  if (scope === 'daily' || scope === 'endless' || scope === 'general') return mainTranslations[locale]?.[legacyId];
  const mainId = topicCaseMap[scope]?.[legacyId];
  return mainId ? mainTranslations[locale]?.[mainId] : topicExtraTranslations[locale]?.[scope]?.[legacyId];
}
