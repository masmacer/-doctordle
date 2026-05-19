const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const mainFile = path.join(root, 'js', 'games.js');
const topicFiles = [
  ['emergency', path.join(root, 'js', 'emergency-cases.js')],
  ['dermatology', path.join(root, 'js', 'dermatology-cases.js')],
  ['pediatrics', path.join(root, 'js', 'pediatrics-cases.js')],
  ['gi', path.join(root, 'js', 'gi-cases.js')],
  ['womens', path.join(root, 'js', 'womens-health-cases.js')],
  ['cardiology', path.join(root, 'js', 'cardiology-cases.js')],
  ['dental', path.join(root, 'js', 'dental-cases.js')],
  ['mental', path.join(root, 'js', 'mental-health-cases.js')]
];

const publishedCount = Number(process.argv[2] || 39);
const baseChunkSize = Number(process.argv[3] || 2);

function loadWindowCases(filePath) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(filePath, 'utf8'), context, { filename: filePath });
  return context.window.__DDLE_CASES__ || [];
}

function normalizeAnswer(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function canonicalAnswer(answer) {
  const normalized = normalizeAnswer(answer);
  const aliases = new Map([
    ['oral lichen planus', 'lichen planus']
  ]);
  return aliases.get(normalized) || normalized;
}

function extractSection(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error(`Could not find section between ${startMarker} and ${endMarker}`);
  }
  return {
    start,
    end,
    body: source.slice(start + startMarker.length, end).trim().replace(/;$/, '')
  };
}

function loadMainData() {
  const source = fs.readFileSync(mainFile, 'utf8');
  const gamesSection = extractSection(source, 'const GAMES = ', 'const DISEASE_LIST =');
  const dictionarySection = extractSection(source, 'const DISEASE_LIST = ', 'window.__DDLE_CASES__ = GAMES;');
  const games = Function(`return ${gamesSection.body};`)();
  const dictionary = Function(`return ${dictionarySection.body};`)();
  return { source, gamesSection, dictionarySection, games, dictionary };
}

function cloneCase(entry) {
  return {
    answer: entry.answer,
    clues: [...entry.clues],
    description: entry.description,
    ankiStep1: entry.ankiStep1 || '',
    ankiStep2: entry.ankiStep2 || ''
  };
}

function buildTopicCandidates(existingCases) {
  const existingSet = new Set(existingCases.map((entry) => canonicalAnswer(entry.answer)));
  const pickedSet = new Set();
  const topicQueues = new Map();

  for (const [topicName, filePath] of topicFiles) {
    const topicCases = loadWindowCases(filePath);
    const uniqueCases = [];

    for (const entry of topicCases) {
      const key = canonicalAnswer(entry.answer);
      if (existingSet.has(key) || pickedSet.has(key)) continue;
      pickedSet.add(key);
      uniqueCases.push({ topic: topicName, case: cloneCase(entry) });
    }

    topicQueues.set(topicName, uniqueCases);
  }

  return topicQueues;
}

function buildInterleavedTopicCases(topicQueues) {
  const queues = new Map(
    [...topicQueues.entries()].map(([topicName, entries]) => [topicName, [...entries]])
  );
  const merged = [];
  let lastTopic = null;

  while (true) {
    const candidates = [...queues.entries()]
      .filter(([, entries]) => entries.length)
      .sort((left, right) => right[1].length - left[1].length);

    if (!candidates.length) break;

    let chosen = candidates.find(([topicName]) => topicName !== lastTopic);
    if (!chosen) chosen = candidates[0];

    const [topicName, entries] = chosen;
    const nextEntry = entries.shift();
    merged.push(nextEntry);
    lastTopic = topicName;
  }

  return merged;
}

function weaveCases(prefixCases, baseFutureCases, topicCases) {
  const output = [...prefixCases];
  const baseQueue = [...baseFutureCases].map(cloneCase);
  const topicQueue = [...topicCases];

  while (baseQueue.length || topicQueue.length) {
    for (let index = 0; index < baseChunkSize && baseQueue.length; index += 1) {
      output.push(baseQueue.shift());
    }

    if (topicQueue.length) {
      output.push(cloneCase(topicQueue.shift().case));
    }
  }

  return output.map((entry, index) => ({
    id: index + 1,
    answer: entry.answer,
    clues: [...entry.clues],
    description: entry.description,
    ankiStep1: entry.ankiStep1 || '',
    ankiStep2: entry.ankiStep2 || ''
  }));
}

function buildDictionary(existingDictionary, mergedCases) {
  const seen = new Set();
  const output = [];

  for (const item of existingDictionary) {
    const value = String(item || '').trim();
    if (!value) continue;
    const key = normalizeAnswer(value);
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(value);
  }

  for (const entry of mergedCases) {
    const value = String(entry.answer || '').trim();
    const key = normalizeAnswer(value);
    if (!value || seen.has(key)) continue;
    seen.add(key);
    output.push(value);
  }

  return output;
}

function renderGames(cases) {
  const body = cases
    .map((entry) =>
      `  {\n` +
      `    id: ${entry.id},\n` +
      `    answer: ${JSON.stringify(entry.answer)},\n` +
      `    clues: ${JSON.stringify(entry.clues, null, 2).replace(/^/gm, '    ')},\n` +
      `    description: ${JSON.stringify(entry.description)},\n` +
      `    ankiStep1: ${JSON.stringify(entry.ankiStep1 || '')},\n` +
      `    ankiStep2: ${JSON.stringify(entry.ankiStep2 || '')}\n` +
      `  }`
    )
    .join(',\n');

  return `const GAMES = [\n${body}\n];\n\n`;
}

function renderDictionary(values) {
  const body = values.map((value) => `  ${JSON.stringify(value)}`).join(',\n');
  return `const DISEASE_LIST = [\n${body}\n];\n\n`;
}

function main() {
  const { source, gamesSection, dictionarySection, games, dictionary } = loadMainData();
  if (publishedCount < 0 || publishedCount > games.length) {
    throw new Error(`publishedCount ${publishedCount} is outside the main pool length ${games.length}`);
  }

  const lockedCases = games.slice(0, publishedCount).map(cloneCase);
  const futureCases = games.slice(publishedCount).map(cloneCase);
  const topicQueues = buildTopicCandidates(games);
  const interleavedTopicCases = buildInterleavedTopicCases(topicQueues);
  const mergedGames = weaveCases(lockedCases, futureCases, interleavedTopicCases);
  const mergedDictionary = buildDictionary(dictionary, mergedGames);

  const beforeGames = source.slice(0, gamesSection.start);
  const betweenSections = source.slice(gamesSection.end, dictionarySection.start);
  const afterDictionary = source.slice(dictionarySection.end);
  const nextSource =
    beforeGames +
    renderGames(mergedGames) +
    betweenSections +
    renderDictionary(mergedDictionary) +
    afterDictionary;

  fs.writeFileSync(mainFile, nextSource, 'utf8');

  const insertedCount = interleavedTopicCases.length;
  const topicBreakdown = Object.fromEntries(
    [...topicQueues.entries()].map(([topicName, entries]) => [topicName, entries.length])
  );

  console.log(JSON.stringify({
    publishedCount,
    originalCount: games.length,
    insertedCount,
    newCount: mergedGames.length,
    topicBreakdown
  }, null, 2));
}

main();
