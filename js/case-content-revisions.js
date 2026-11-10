import { topicCaseMap } from './translations/topic-case-map.js';

export const currentContentVersion = 2;
// Preserve every Daily date already published when this revision was authored.
export const revisedDailyStart = '2026-11-11';

const patches = {
  47: {
    it: { summary: 'Il mutismo selettivo è un disturbo d’ansia in cui il bambino non riesce sistematicamente a parlare in determinate situazioni sociali, pur parlando normalmente in altre. È spesso associato ad ansia sociale e va distinto dai disturbi del linguaggio e dello sviluppo.' }
  },
  53: {
    pt: { clues: { 0: 'Um homem de 39 anos não fumante apresenta falta de ar progressiva e menor tolerância ao exercício.' } }
  },
  63: {
    en: { clues: { 5: 'Staging imaging identifies the primary tongue lesion and a single ipsilateral cervical lymph node consistent with metastatic involvement, with no distant metastases identified.' } },
    it: { clues: { 5: 'Gli esami di stadiazione mostrano la lesione primitiva della lingua e un singolo linfonodo cervicale omolaterale compatibile con interessamento metastatico, senza evidenza di metastasi a distanza.' } },
    pt: { clues: { 5: 'Os exames de estadiamento mostram a lesão primária da língua e um único linfonodo cervical do mesmo lado compatível com acometimento metastático, sem evidência de metástases à distância.' } }
  },
  66: {
    en: { clues: { 0: 'A 24-year-old man is brought to the emergency department by his family. For the past ten days, he has slept only a few hours each night but says he is not tired. He has spent his life savings on several new business ventures.' } },
    it: { clues: { 0: 'Un uomo di 24 anni viene accompagnato in pronto soccorso dai familiari. Da dieci giorni dorme solo poche ore per notte, ma dice di non essere stanco. Ha investito tutti i suoi risparmi in diverse nuove iniziative imprenditoriali.' } },
    pt: { clues: { 0: 'Um homem de 24 anos é levado ao pronto-socorro pela família. Há dez dias, dorme apenas algumas horas por noite, mas diz que não está cansado. Ele gastou todas as suas economias em vários novos empreendimentos.' } }
  },
  303: {
    it: { clues: { 4: 'Sfrutta spesso i colleghi con minore anzianità professionale a proprio vantaggio, sostenendo di saper semplicemente giocare meglio di loro.' } },
    pt: { clues: { 4: 'Explora frequentemente colegas de nível hierárquico inferior para obter vantagens, afirmando apenas saber jogar melhor que eles.' } }
  },
  315: {
    it: { clues: { 0: 'Un uomo di 59 anni riferisce un dolore epigastrico che descrive come un rosicchiamento, insieme a sazietà precoce.' } },
    pt: { clues: { 0: 'Um homem de 59 anos refere dor epigástrica do tipo roedura e saciedade precoce.' } }
  },
  327: {
    it: { summary: 'Il disturbo acuto da stress presenta sintomi intrusivi, dissociativi, di evitamento e aumentata attivazione nel periodo da tre giorni a un mese dopo un trauma. Le caratteristiche dissociative sono rilevanti rispetto al disturbo post-traumatico da stress. Una terapia cognitivo-comportamentale precoce focalizzata sul trauma riduce il rischio di evoluzione; la maggior parte delle persone guarisce senza trattamento formale.' }
  },
  428: {
    pt: { clues: { 1: 'Durante os episódios, apresenta automatismos, como estalar os lábios e movimentos desajeitados com as mãos.' } }
  },
  429: {
    pt: { clues: { 1: 'A lesão é perolada e tem bordas elevadas e arredondadas.' } }
  },
  499: {
    en: { clues: { 5: 'Low energy availability lowers leptin levels and raises cortisol levels. These two hormonal changes suppress the hypothalamic GnRH pulse generator.' } },
    it: { clues: { 5: 'La bassa disponibilità energetica riduce i livelli di leptina e aumenta quelli di cortisolo. Queste due alterazioni ormonali sopprimono il generatore ipotalamico degli impulsi di GnRH.' } },
    pt: { clues: { 5: 'A baixa disponibilidade energética reduz os níveis de leptina e eleva os de cortisol. Essas duas alterações hormonais suprimem o gerador hipotalâmico de pulsos de GnRH.' } }
  },
  501: {
    it: { summary: 'Il lupus eritematoso sistemico è una malattia autoimmune multisistemica che può interessare cute, articolazioni, sierose, reni, cellule del sangue e sistema nervoso. Gli ANA sono molto sensibili, mentre anti-dsDNA e anti-Sm sono più specifici.' },
    pt: { summary: 'O lúpus eritematoso sistêmico é uma doença autoimune multissistêmica que pode afetar pele, articulações, serosas, rins, células sanguíneas e sistema nervoso. O FAN é muito sensível, enquanto os anticorpos anti-DNA de dupla hélice e anti-Sm são mais específicos.' }
  },
  505: {
    pt: { summary: 'A glicogenose tipo IV decorre de deficiência da enzima ramificadora do glicogênio, com acúmulo anormal de poliglicossanos no fígado, músculos e outros tecidos. Muitos pacientes desenvolvem cirrose progressiva e insuficiência hepática na infância.' }
  },
  506: {
    pt: { summary: 'A nefropatia diabética é uma doença renal crônica decorrente do diabetes, caracterizada por albuminúria progressiva, queda da função renal e glomeruloesclerose nodular. O controle da pressão arterial e o bloqueio do sistema renina-angiotensina-aldosterona são medidas terapêuticas fundamentais.' }
  },
  517: {
    pt: { clues: { 5: 'Esta forma de obstrução do intestino grosso geralmente requer cirurgia.' } }
  },
  519: {
    pt: { summary: 'A aspiração de corpo estranho frequentemente se apresenta com engasgo súbito, tosse persistente, sibilância unilateral ou pneumonia recorrente localizada. A broncoscopia é diagnóstica e terapêutica.' }
  },
  520: {
    pt: { clues: { 0: 'Um homem de 38 anos é internado após um impacto em alta velocidade que causou trauma torácico fechado.' } }
  },
  523: {
    pt: { clues: { 4: 'Devido aos episódios recorrentes, está sendo considerado um tratamento da papila menor.' } }
  },
  528: {
    pt: { clues: { 4: 'Às vezes, ela elimina ao tossir tampões de muco acastanhados.' } }
  },
  529: {
    pt: { clues: { 3: 'Ele tem obesidade e tosse crônica, fatores que aumentaram seu risco.' } }
  },
  531: {
    pt: { clues: { 4: 'É iniciada urgentemente ceftriaxona por via sistêmica.' } }
  },
  532: {
    pt: { clues: { 4: 'É prescrito um macrolídeo por via oral.' } }
  },
  533: {
    pt: { summary: 'A síndrome de Wiskott-Aldrich é uma doença ligada ao X, caracterizada por eczema, infecções recorrentes e trombocitopenia com plaquetas pequenas. Decorre de mutações no gene WAS e pode exigir transplante de células-tronco hematopoéticas.' }
  },
  534: {
    it: { summary: 'La sindrome di Job, o sindrome da iper-IgE, è un’immunodeficienza primaria caratterizzata da eczema, infezioni stafilococciche ricorrenti, persistenza dei denti decidui, tratti grossolani del volto e IgE molto elevate. Molti casi sono dovuti a mutazioni di STAT3.' },
    pt: { clues: { 5: 'Esta imunodeficiência primária está classicamente associada a mutações em STAT3.' }, summary: 'A síndrome de Job, também chamada síndrome de hiper-IgE, é uma imunodeficiência primária caracterizada por eczema, infecções estafilocócicas recorrentes, retenção de dentes decíduos, fácies grosseira e IgE muito elevada. Muitos casos são causados por mutações em STAT3.' }
  }
};

const topicPatches = {
  emergency: {
    44: { it: { summary: 'La trombosi del plesso emorroidario esterno si presenta con dolore anale improvviso e una tumefazione perianale dolente. La maggior parte dei casi migliora con misure conservative; in pazienti selezionati con trombosi acuta l’escissione può essere utile.' } }
  }
};

export function savedContentVersion(savedState) {
  // Missing metadata means an existing legacy round, never the latest version.
  return savedState?.contentVersion === currentContentVersion ? currentContentVersion : 1;
}

export function dailyContentVersion({ launchDate, dayIndex, savedState = null }) {
  if (savedState) return savedContentVersion(savedState);
  // Calendar dates match archive labels, including places with daylight saving.
  const date = new Date(launchDate);
  date.setDate(date.getDate() + dayIndex);
  const localDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  return localDate >= revisedDailyStart ? currentContentVersion : 1;
}

export function applyContentRevision(record, { scope = 'daily', locale = 'en', version = 1 } = {}) {
  if (!record || version !== currentContentVersion) return record;
  const mainId = ['daily','endless','general'].includes(scope) ? record.legacyId : topicCaseMap[scope]?.[record.legacyId];
  const patch = patches[mainId]?.[locale] || topicPatches[scope]?.[record.legacyId]?.[locale];
  if (!patch) return record;
  const clues = [...record.clues];
  for (const [index,text] of Object.entries(patch.clues || {})) clues[Number(index)] = text;
  return { ...record, clues, ...(patch.summary ? { summary: patch.summary } : {}) };
}
