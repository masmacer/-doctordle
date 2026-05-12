function readLocalValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocalValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function removeLocalValue(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function parseJson(rawValue, fallback) {
  if (!rawValue) return fallback;
  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

function readCookieValue(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookieValue(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

export function createDailyStats() {
  return {
    played: 0,
    wins: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastDate: null,
    dist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };
}

export function hasConsent() {
  const value = readCookieValue('ddle_consent');
  return value === '1' || value === 'accepted';
}

export function acceptConsent() {
  writeCookieValue('ddle_consent', '1', 365);
}

export function declineConsent() {
  writeCookieValue('ddle_consent', '0', 365);
}

export function getConsentState() {
  return readCookieValue('ddle_consent');
}

export function getDailyStorageKey(dayIndex, replayMode) {
  return replayMode ? `ddle_day_${dayIndex}_replay` : `ddle_day_${dayIndex}`;
}

export function readDailyState(dayIndex, replayMode) {
  return parseJson(readLocalValue(getDailyStorageKey(dayIndex, replayMode)), null);
}

export function writeDailyState(dayIndex, replayMode, value) {
  return writeLocalValue(getDailyStorageKey(dayIndex, replayMode), JSON.stringify(value));
}

export function clearDailyState(dayIndex, replayMode) {
  return removeLocalValue(getDailyStorageKey(dayIndex, replayMode));
}

export function hasCompletedPrimaryDay(dayIndex) {
  const record = readDailyState(dayIndex, false);
  return !!(record && record.gameCompleted);
}

export function readDailyStats() {
  const parsed = parseJson(readCookieValue('ddle_stats'), {});
  return {
    ...createDailyStats(),
    ...parsed,
    dist: {
      ...createDailyStats().dist,
      ...(parsed && parsed.dist)
    }
  };
}

export function writeDailyStats(value) {
  writeCookieValue('ddle_stats', JSON.stringify(value), 365);
  return true;
}

export function createEndlessBundle() {
  return {
    mode: 'challenge',
    stats: {
      challenge: {
        played: 0,
        wins: 0,
        currentStreak: 0,
        bestStreak: 0,
        dist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
      },
      practice: {
        played: 0,
        wins: 0,
        dist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
      }
    },
    sessions: {
      challenge: {
        queue: [],
        currentId: null,
        guessCount: 0,
        gameCompleted: false,
        guessedIds: [],
        guessHistory: []
      },
      practice: {
        queue: [],
        currentId: null,
        guessCount: 0,
        gameCompleted: false,
        guessedIds: [],
        guessHistory: []
      }
    }
  };
}

export function getEndlessStorageKey(scope = 'endless') {
  const normalizedScope = String(scope || 'endless')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'endless';

  return normalizedScope === 'endless'
    ? 'ddle_endless_v1'
    : `ddle_endless_${normalizedScope}_v1`;
}

export function readEndlessBundle(scope = 'endless') {
  const parsed = parseJson(readLocalValue(getEndlessStorageKey(scope)), {});
  const base = createEndlessBundle();

  return {
    ...base,
    ...parsed,
    stats: {
      challenge: {
        ...base.stats.challenge,
        ...(parsed.stats && parsed.stats.challenge),
        dist: {
          ...base.stats.challenge.dist,
          ...(parsed.stats && parsed.stats.challenge && parsed.stats.challenge.dist)
        }
      },
      practice: {
        ...base.stats.practice,
        ...(parsed.stats && parsed.stats.practice),
        dist: {
          ...base.stats.practice.dist,
          ...(parsed.stats && parsed.stats.practice && parsed.stats.practice.dist)
        }
      }
    },
    sessions: {
      challenge: {
        ...base.sessions.challenge,
        ...(parsed.sessions && parsed.sessions.challenge)
      },
      practice: {
        ...base.sessions.practice,
        ...(parsed.sessions && parsed.sessions.practice)
      }
    }
  };
}

export function writeEndlessBundle(value, scope = 'endless') {
  return writeLocalValue(getEndlessStorageKey(scope), JSON.stringify(value));
}