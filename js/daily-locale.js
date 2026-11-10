import { normalizeLocale, localizeStaticGame } from './locale.js';

const params = new URLSearchParams(window.location.search);
const locale = normalizeLocale(params.get('lang'));
localizeStaticGame(locale);
const roots = { en: '/', it: '/it/', pt: '/pt/' };
window.__DDLE_DAILY_CONFIG__ = {
  ...(window.__DDLE_DAILY_CONFIG__ || {}),
  locale,
  // Intentionally share the original Daily scope. Language is presentation only.
  scope: 'daily',
  shareTitle: locale === 'it' ? 'Doctordle italiano' : locale === 'pt' ? 'Doctordle em português' : 'Doctordle Daily',
  pageUrl: `https://doctordle.net${roots[locale]}`
};
document.title = locale === 'it' ? 'Doctordle italiano — caso del giorno' : locale === 'pt' ? 'Doctordle em português — caso do dia' : 'Doctordle Daily';
await import('./daily-entry.js');
