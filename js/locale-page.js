(function () {
  const frame = document.querySelector('iframe[data-daily-locale]');
  if (!frame) return;
  const day = new URLSearchParams(window.location.search).get('day');
  if (day !== null && /^\d+$/.test(day)) {
    const target = new URL(frame.getAttribute('src'), window.location.origin);
    target.searchParams.set('day', day);
    frame.src = target.pathname + target.search;
  }
}());
