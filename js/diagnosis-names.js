// Explicit equivalences only: parenthetical qualifiers may identify different diseases.
export function normalizeDiagnosis(value) {
  return String(value || '').toLowerCase().normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

export function stripAcronymSuffix(value) {
  return String(value || '').replace(/\s*\(([A-Z0-9-]{2,10})\)\s*$/g, ' ');
}

const groups = [
  ['Herpes zoster', 'Shingles', 'Varicella Zoster (Shingles)', 'Varicella Zoster Virus (Shingles)'],
  ['Atopic dermatitis', 'Atopic Dermatitis (Eczema)'],
  ['Tinea corporis', 'Tinea Corporis (Ringworm)'],
  ['Tinea pedis', "Tinea Pedis (Athlete's Foot)"],
  ['Urticaria', 'Urticaria (Hives)'],
  ['Vulvovaginal candidiasis', 'Vulvovaginal candidiasis (Yeast infection)'],
  ['Nursemaid\'s elbow', "Radial Head Subluxation (Nursemaid's Elbow)", 'Radial head subluxation'],
  ['Scabies', 'Sarcoptes scabiei (Scabies)'],
  ['Botulism', 'Botulism (Clostridium botulinum)'],
  ['Mucormycosis', 'Mucor and Rhizopus spp. (Mucormycosis)'],
  ['Trichomoniasis', 'Trichomoniasis (Trichomonas vaginalis)'],
  ['Ludwig Angina', "Ludwig's angina"],
  ['Hepatitis A virus infection', 'Hepatitis A Virus (HAV)'],
  ['Acute Disseminated Encephalomyelitis (ADEM)', 'Acute Disseminated (Postinfectious) Encephalomyelitis'],
  ['Major Depressive Disorder with Seasonal Pattern', 'Major Depressive Disorder with Seasonal Pattern (Seasonal Affective Disorder)']
];

function basicForms(value) {
  return [...new Set([normalizeDiagnosis(value), normalizeDiagnosis(stripAcronymSuffix(value))].filter(Boolean))];
}

const aliasIndex = new Map();
for (const group of groups) {
  const forms = [...new Set(group.flatMap(basicForms))];
  for (const form of forms) {
    if (aliasIndex.has(form)) throw new Error(`Conflicting diagnosis alias: ${form}`);
    aliasIndex.set(form, forms);
  }
}

export function buildAnswerForms(value) {
  return [...new Set(basicForms(value).flatMap(form => aliasIndex.get(form) || [form]))];
}

export function getDiagnosisAliases() {
  return groups.flat();
}
