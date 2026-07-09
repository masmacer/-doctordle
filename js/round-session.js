function normalizeGuess(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function stripAcronymSuffix(value) {
  return String(value || '').replace(/\s*\(([A-Z0-9-]{2,10})\)\s*$/g, ' ');
}

function answerForms(value) {
  const forms = new Set();
  const normalized = normalizeGuess(value);
  const acronymBase = normalizeGuess(stripAcronymSuffix(value));

  if (normalized) forms.add(normalized);
  if (acronymBase) forms.add(acronymBase);

  return [...forms];
}

export function matchesCaseAnswer(caseRecord, guessKey, guessLabel) {
  if (typeof guessKey === 'number') {
    return guessKey === caseRecord.legacyId;
  }

  const acceptedAnswers = Array.isArray(caseRecord.answers) && caseRecord.answers.length
    ? caseRecord.answers
    : answerForms(caseRecord.title);
  const guessedAnswers = answerForms(guessLabel);

  return guessedAnswers.some((answer) => acceptedAnswers.includes(answer));
}

export function createRoundSession(caseRecord, options = {}) {
  const maxAttempts = Number.isFinite(options.maxAttempts) ? options.maxAttempts : 6;
  const state = {
    attempts: Number.isFinite(options.attempts) ? options.attempts : 0,
    completed: !!options.completed,
    guessedKeys: Array.isArray(options.guessedKeys) ? [...options.guessedKeys] : [],
    history: Array.isArray(options.history) ? [...options.history] : []
  };

  function snapshot() {
    return {
      guessCount: state.attempts,
      gameCompleted: state.completed,
      guessedIds: [...state.guessedKeys],
      guessHistory: [...state.history]
    };
  }

  function submitTurn(guessKey, guessLabel) {
    if (state.completed) {
      return { status: 'locked', snapshot: snapshot() };
    }

    if (guessKey && state.guessedKeys.includes(guessKey)) {
      return { status: 'duplicate', snapshot: snapshot() };
    }

    state.attempts += 1;
    if (guessKey) state.guessedKeys.push(guessKey);

    const guessedName = guessKey ? guessLabel : 'Skipped';
    const correct = !!guessKey && matchesCaseAnswer(caseRecord, guessKey, guessLabel);

    if (correct) {
      state.completed = true;
      state.history.push({ name: guessedName, result: 'correct' });
      return { status: 'correct', snapshot: snapshot() };
    }

    const exhausted = state.attempts >= maxAttempts;
    state.history.push({ name: guessedName, result: guessKey ? 'wrong' : 'skip' });
    if (exhausted) state.completed = true;

    return {
      status: exhausted ? 'exhausted' : guessKey ? 'wrong' : 'skip',
      revealIndex: state.attempts,
      snapshot: snapshot()
    };
  }

  function revealCount() {
    return state.completed ? caseRecord.clues.length : Math.max(1, state.attempts + 1);
  }

  return {
    snapshot,
    submitTurn,
    revealCount
  };
}
