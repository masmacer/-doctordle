(function () {
  const frames = Array.from(document.querySelectorAll('iframe[data-topic-scope]'));
  if (!frames.length) return;

  const frameMap = new Map(frames.map((frame) => [frame.dataset.topicScope, frame]));
  const params = new URLSearchParams(window.location.search);
  if(params.get('play')==='challenge') frames.forEach(frame=>{
    const url=new URL(frame.getAttribute('src'),window.location.origin);
    url.searchParams.set('play','challenge');frame.src=url.pathname+url.search;
  });
  if (params.has('challenge')) frames.forEach(frame => {
    const url = new URL(frame.getAttribute('src'),window.location.origin);
    const challenge = params.get('challenge');
    url.searchParams.set('challenge',challenge.length<=64?challenge:'unavailable');
    if (/^[1-6]$/.test(params.get('target')||'')) url.searchParams.set('target',params.get('target'));
    if (url.href!==frame.src) frame.src=url.pathname+url.search;
  });

  function applyHeight(frame, height) {
    if (!frame || !Number.isFinite(height)) return;
    frame.style.height = `${Math.max(200, Math.ceil(height))}px`;
  }

  window.addEventListener('message', (event) => {
    const data = event.data || {};
    if (data.type !== 'ddle-topic-shell-height') return;
    const frame = frameMap.get(data.scope);
    if (!frame) return;
    if (event.origin !== window.location.origin || event.source !== frame.contentWindow) return;
    applyHeight(frame, data.height);
  });
}());
