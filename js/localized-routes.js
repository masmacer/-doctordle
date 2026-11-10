import { normalizeLocale } from './locale.js';

export function localizedPath(pagePath, locale) {
  const language = normalizeLocale(locale);
  const path = pagePath.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  return language === 'en' ? path : `/${language}${path}`;
}
