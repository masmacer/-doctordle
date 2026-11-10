import { readDailyState } from './storage.js';
import { normalizeLocale } from './locale.js';

const locale = normalizeLocale(document.documentElement.lang);
const language = locale === 'pt' ? 'pt-BR' : locale;
const roots = { en: '/', it: '/it/', pt: '/pt/' };
const text = locale === 'it' ? { solved: 'Risolto', missed: 'Non risolto', play: 'Gioca', unplayed: 'Da giocare', count: 'casi' }
  : { solved: 'Resolvido', missed: 'Não resolvido', play: 'Jogar', unplayed: 'Não jogado', count: 'casos' };
const grid = document.getElementById('arc-grid');
const search = document.getElementById('arc-search');
const counter = document.getElementById('arc-count');
const entries = [];
const today = new Date();
today.setHours(0, 0, 0, 0);
const cursor = new Date('2026-04-11T00:00:00');
for (let index = 0; cursor <= today; index++, cursor.setDate(cursor.getDate() + 1)) {
  const date = new Date(cursor);
  const replay = readDailyState(index, true);
  const result = replay?.gameCompleted ? replay : readDailyState(index, false);
  const state = result?.gameCompleted ? (result.guessHistory?.some(guess => guess.result === 'correct') ? 'win' : 'loss') : date.getTime() === today.getTime() ? 'today' : 'unplayed';
  entries.push({ index, date, state, month: new Intl.DateTimeFormat(language, { month: 'long', year: 'numeric' }).format(date), label: new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(date), iso: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}` });
}
entries.reverse();
function render() {
  const query = search.value.trim().toLocaleLowerCase(language);
  const matches = entries.filter(item => !query || `#${item.index + 1} ${item.iso} ${item.month} ${item.label}`.toLocaleLowerCase(language).includes(query));
  grid.replaceChildren();
  let previousMonth;
  for (const item of matches) {
    if (item.month !== previousMonth) {
      const heading = document.createElement('div');
      heading.className = 'arc-month';
      heading.textContent = item.month;
      grid.appendChild(heading);
      previousMonth = item.month;
    }
    const link = document.createElement('a');
    link.className = `arc-card arc-card--${item.state}`;
    link.href = `${roots[locale]}?day=${item.index}`;
    const status = item.state === 'win' ? text.solved : item.state === 'loss' ? text.missed : item.state === 'today' ? text.play : text.unplayed;
    link.setAttribute('aria-label', `#${item.index + 1}, ${item.label}, ${status}`);
    for (const [className, value] of [['arc-card__num', `#${item.index + 1}`], ['arc-card__date', item.label], ['arc-card__result', item.state === 'win' ? '✓' : item.state === 'loss' ? '×' : item.state === 'today' ? text.play : '·']]) {
      const span = document.createElement('span');
      span.className = className;
      span.textContent = value;
      link.appendChild(span);
    }
    grid.appendChild(link);
  }
  counter.textContent = `${matches.length} ${text.count}`;
}
search.addEventListener('input', render);
render();
