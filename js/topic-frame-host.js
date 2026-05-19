(function () {
  const frames = Array.from(document.querySelectorAll('iframe[data-topic-scope]'));
  if (!frames.length) return;

  const frameMap = new Map(frames.map((frame) => [frame.dataset.topicScope, frame]));

  function applyHeight(frame, height) {
    if (!frame || !Number.isFinite(height)) return;
    frame.style.height = `${Math.max(760, Math.ceil(height))}px`;
  }

  window.addEventListener('message', (event) => {
    const data = event.data || {};
    if (data.type !== 'ddle-topic-shell-height') return;
    const frame = frameMap.get(data.scope);
    if (!frame) return;
    applyHeight(frame, data.height);
  });
}());
