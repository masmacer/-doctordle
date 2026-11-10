// Report through the public page's tag, rather than an iframe's internal-traffic tag.
export function trackFriendEvent(name, properties = {}, source = window) {
  if (!['click', 'share', 'open', 'start', 'complete'].includes(name)) return;
  const params = {};
  for (const key of ['game', 'language', 'game_mode', 'share_result', 'invite_status', 'round_state', 'outcome', 'guesses_used', 'has_target']) {
    if (['string', 'number', 'boolean'].includes(typeof properties[key])) params[key] = properties[key];
  }
  try {
    let host = source;
    // External embeds keep their own tag; never call an unrelated site's analytics.
    while (host.parent !== host) {
      try { if (host.parent.location.origin !== source.location.origin) break; }
      catch { break; }
      host = host.parent;
    }
    if (typeof host.gtag === 'function') host.gtag('event', `friend_challenge_${name}`, params);
  } catch { /* Analytics must not interrupt play or sharing. */ }
}
