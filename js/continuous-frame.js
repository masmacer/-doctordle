(function () {
  const params = new URLSearchParams(window.location.search);
  const locale = ['it', 'pt'].includes(params.get('lang')) ? params.get('lang') : 'en';
  const scope = document.body.dataset.endlessScope || 'endless';
  const pages = {
    endless: '/games/doctordle-endless',
    dental: '/games/doctordle-for-dentist',
    'mental-health': '/games/doctordle-mental-health'
  };
  if (!pages[scope]) return;
  if (params.get('hub') !== '1') {
    // Old embed links still reach the chooser; the actual game uses hub=1.
    window.location.replace(window.parent === window ? (locale === 'en' ? pages[scope] : `/${locale}${pages[scope]}`) : `/embed/doctordle-topic.embed.html?topic=${encodeURIComponent(scope)}&lang=${locale}`);
    return;
  }
  const mode = params.get('mode') === 'practice' ? 'practice' : 'challenge';
  document.body.classList.add('topic-play');
  document.body.dataset.initialMode = mode;
  document.body.dataset.locale = locale;
  document.body.dataset.gameMode = mode === 'practice' ? 'challenge' : 'daily';
  document.body.dataset.hubReturnEnabled = 'true';
  function reportHeight() {
    if (window.parent === window) return;
    const height = Math.ceil(document.querySelector('main').getBoundingClientRect().height);
    window.parent.postMessage({ type: 'ddle-topic-game-height', scope, height }, window.location.origin);
  }
  window.addEventListener('load', reportHeight);
  window.addEventListener('resize', reportHeight);
  if ('ResizeObserver' in window) new ResizeObserver(reportHeight).observe(document.querySelector('main'));
}());
