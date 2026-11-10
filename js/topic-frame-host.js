(function () {
  const frames = Array.from(document.querySelectorAll('iframe[data-topic-scope]'));
  if (!frames.length) return;

  const frameMap = new Map(frames.map((frame) => [frame.dataset.topicScope, frame]));

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
