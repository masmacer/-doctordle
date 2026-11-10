(function () {
  const options = ['en', 'it', 'pt'];
  const current = document.documentElement.lang.toLowerCase().split('-')[0];
  const names = { en: 'English', it: 'Italiano', pt: 'Português' };
  const isArchive = /\/archive(?:\.html)?\/?$/.test(window.location.pathname);
  const gamePath = window.location.pathname.replace(/^\/(?:it|pt)(?=\/)/, '').match(/^\/games\/doctordle-[a-z-]+(?:\.html)?$/)?.[0];
  const isDaily = /^\/(?:index\.html|play\.html)?$/.test(window.location.pathname) || /^\/(?:it|pt)\/(?:index\.html)?$/.test(window.location.pathname);
  const day = new URLSearchParams(window.location.search).get('day');
  const browserLanguage = (navigator.languages || [navigator.language]).map(value => String(value).toLowerCase().split('-')[0]).find(value => options.includes(value));
  document.querySelectorAll('.language-menu').forEach(menu => {
    menu.querySelectorAll('[data-language]').forEach(link => {
      const language = link.dataset.language;
      const root = language === 'en' ? '/' : `/${language}/`;
      const url = new URL(gamePath ? root + gamePath.slice(1).replace(/\.html$/, '') : isArchive ? `${root}archive` : root, window.location.origin);
      if (isDaily && day !== null && /^\d+$/.test(day)) url.searchParams.set('day', day);
      link.href = url.pathname + url.search;
      if (language === current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
      if (language === browserLanguage && language !== current) {
        const hint = document.createElement('small');
        hint.textContent = current === 'it' ? 'Consigliata' : current === 'pt' ? 'Sugerido' : 'Suggested';
        link.appendChild(hint);
      }
    });
    const label = menu.querySelector('.language-menu__current');
    if (label) label.textContent = names[current] || names.en;
    menu.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    menu.addEventListener('toggle', () => {
      if (menu.open) document.querySelectorAll('.language-menu').forEach(other => { if (other !== menu) other.open = false; });
    });
  });
  document.addEventListener('click', event => {
    document.querySelectorAll('.language-menu[open]').forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
  });
  // Browser language is a suggestion only. Never navigate or change content automatically.
}());
