import { gameMessages } from './game-messages.js';

export function normalizeLocale(value) {
  const language = String(value || 'en').toLowerCase().split('-')[0];
  return language === 'it' || language === 'pt' ? language : 'en';
}

const messages = {
  it: {
    'Stats': 'Statistiche',
    'Daily Casefile': 'Caso clinico del giorno',
    'Read the case. Guess the diagnosis.': 'Leggi gli indizi. Trova la diagnosi.',
    '6 calls max': 'Fino a 6 tentativi',
    '1 clue revealed at the start': 'Un indizio per iniziare',
    'Blank guess reveals the next clue': 'Invia senza risposta per un altro indizio',
    'Start with one clue. Each wrong guess reveals another detail. You have six guesses to find the diagnosis.': 'Un caso clinico, sei tentativi. Ogni risposta errata rivela un nuovo indizio: scegli quando formulare la tua diagnosi.',
    'Case': 'Caso clinico', 'Diagnosis Summary': 'Spiegazione della diagnosi',
    'Search for a diagnosis or leave blank to reveal the next clue': 'Cerca una diagnosi in italiano o inglese',
    'Submit Guess': 'Invia diagnosi', 'View Summary': 'Leggi la spiegazione',
    'Results & Share': 'Risultato e condivisione', 'Back to Case': 'Torna agli indizi',
    'Leave the field blank to reveal the next clue. Repeated guesses are blocked.': 'Per un nuovo indizio, invia senza scrivere una risposta. Non puoi ripetere la stessa diagnosi.',
    "We store your round state locally so today's file and your running record resume without friction.": 'Con il tuo consenso, salviamo progressi e statistiche in questo browser. Non serve un account; cancellando i dati del sito perderai i salvataggi locali.',
    'Save Progress & Play': 'Salva i progressi e gioca', 'Not Now': 'Non ora',
    'Copied to clipboard.': 'Risultato copiato.', 'Copy Result': 'Copia risultato',
    'Copied': 'Copiato', 'Copy failed': 'Copia non riuscita',
    'Storage Required': 'Salvataggio richiesto', 'Local storage is required to save progress': 'Consenti il salvataggio locale per giocare',
    'Round Complete': 'Caso completato', 'Correct': 'Corretta', 'Skip': 'Saltato', 'Miss': 'Errata',
    'Skipped': 'Saltato', 'Guess {n}': 'Tentativo {n}',
    'Clue {n} unlocks after the next miss': 'Indizio {n}: si sblocca dopo il prossimo tentativo',
    'Case #{n}': 'Caso n. {n}', 'Daily Stats': 'Le tue statistiche',
    'Games Played': 'Partite giocate', 'Win Rate': 'Casi risolti',
    'Current Streak': 'Serie attuale', 'Best Streak': 'Serie migliore',
    'Guesses used': 'Tentativi usati', 'Format': 'Modalità', 'Daily': 'Giornaliera',
    'Current streak': 'Serie attuale', 'Correct diagnosis': 'Diagnosi corretta',
    'Answer revealed': 'Diagnosi svelata', 'Why this diagnosis?': 'Perché questa diagnosi?',
    'Case solved': 'Caso risolto', 'Case reviewed': 'Caso rivisto',
    'SOLVED': 'RISOLTO', 'REVIEWED': 'RIVISTO',
    'Correct. The case is complete.': 'Diagnosi corretta! Il caso è risolto.',
    'No guesses remaining. The case is complete.': 'Tentativi esauriti. Leggi la diagnosi e la spiegazione.',
    'You already guessed that diagnosis.': 'Hai già provato questa diagnosi.',
    'Not quite right.': 'Non è la diagnosi corretta. Ecco un nuovo indizio.',
    'Choose a diagnosis from the list, or leave it blank to reveal the next clue.': 'Scegli una diagnosi dall’elenco, oppure invia senza risposta per sbloccare un indizio.',
    'Progress saving is off, so this round cannot be resumed.': 'Il salvataggio è disattivato. Consenti il salvataggio locale per iniziare.',
    'Archive replay restored.': 'Partita dell’archivio ripristinata.',
    "Today's file is already closed.": 'Hai già completato il caso di oggi.',
    'Solved in {n}/6 guesses': 'Risolto in {n}/6 tentativi',
    'Unsolved after {n}/6 guesses': 'Non risolto dopo {n}/6 tentativi',
    'Play': 'Gioca', 'used': 'già provata', 'Daily Result': 'Risultato del giorno',
    'Sound on': 'Audio attivo', 'Sound off': 'Audio disattivato',
    'Mute sound': 'Disattiva audio', 'Enable sound': 'Attiva audio',
    'Close results': 'Chiudi il risultato',
    'English case notice': 'Questo caso non è ancora disponibile in italiano: gli indizi e la spiegazione sono in inglese. La partita e i progressi restano gli stessi.',
    'Translation coverage': 'I casi clinici e le spiegazioni sono disponibili in italiano. Puoi cercare diagnosi in italiano o in inglese.'
  },
  pt: {
    'Stats': 'Estatísticas',
    'Daily Casefile': 'Caso clínico do dia',
    'Read the case. Guess the diagnosis.': 'Leia as pistas. Descubra o diagnóstico.',
    '6 calls max': 'Até 6 tentativas', '1 clue revealed at the start': 'Uma pista para começar',
    'Blank guess reveals the next clue': 'Envie em branco para ver outra pista',
    'Start with one clue. Each wrong guess reveals another detail. You have six guesses to find the diagnosis.': 'Um caso clínico e seis tentativas. Cada resposta errada revela uma nova pista: decida quando enviar sua hipótese diagnóstica.',
    'Case': 'Caso clínico', 'Diagnosis Summary': 'Explicação do diagnóstico',
    'Search for a diagnosis or leave blank to reveal the next clue': 'Busque um diagnóstico em português ou inglês',
    'Submit Guess': 'Enviar diagnóstico', 'View Summary': 'Ver explicação',
    'Results & Share': 'Resultado e compartilhar', 'Back to Case': 'Voltar às pistas',
    'Leave the field blank to reveal the next clue. Repeated guesses are blocked.': 'Envie em branco para revelar outra pista. Não é possível repetir o mesmo diagnóstico.',
    "We store your round state locally so today's file and your running record resume without friction.": 'Com sua permissão, salvamos seu progresso e suas estatísticas neste navegador. Não é preciso criar conta. Ao apagar os dados do site, você perde o histórico local.',
    'Save Progress & Play': 'Salvar progresso e jogar', 'Not Now': 'Agora não',
    'Copied to clipboard.': 'Resultado copiado.', 'Copy Result': 'Copiar resultado',
    'Copied': 'Copiado', 'Copy failed': 'Não foi possível copiar',
    'Storage Required': 'Permita o salvamento', 'Local storage is required to save progress': 'Permita o salvamento local para jogar',
    'Round Complete': 'Caso concluído', 'Correct': 'Correto', 'Skip': 'Pulado', 'Miss': 'Incorreto',
    'Skipped': 'Pulado', 'Guess {n}': 'Tentativa {n}',
    'Clue {n} unlocks after the next miss': 'Pista {n}: liberada após a próxima tentativa',
    'Case #{n}': 'Caso nº {n}', 'Daily Stats': 'Suas estatísticas',
    'Games Played': 'Partidas', 'Win Rate': 'Taxa de acerto',
    'Current Streak': 'Sequência atual', 'Best Streak': 'Melhor sequência',
    'Guesses used': 'Tentativas usadas', 'Format': 'Modo', 'Daily': 'Diário',
    'Current streak': 'Sequência atual', 'Correct diagnosis': 'Diagnóstico correto',
    'Answer revealed': 'Diagnóstico revelado', 'Why this diagnosis?': 'Por que esse diagnóstico?',
    'Case solved': 'Caso resolvido', 'Case reviewed': 'Caso revisado',
    'SOLVED': 'RESOLVIDO', 'REVIEWED': 'REVISADO',
    'Correct. The case is complete.': 'Diagnóstico correto! Caso resolvido.',
    'No guesses remaining. The case is complete.': 'As tentativas acabaram. Confira o diagnóstico e a explicação.',
    'You already guessed that diagnosis.': 'Você já tentou esse diagnóstico.',
    'Not quite right.': 'Ainda não. Uma nova pista foi revelada.',
    'Choose a diagnosis from the list, or leave it blank to reveal the next clue.': 'Escolha um diagnóstico da lista ou envie em branco para revelar outra pista.',
    'Progress saving is off, so this round cannot be resumed.': 'O salvamento está desativado. Permita o salvamento local para começar.',
    'Archive replay restored.': 'Partida do arquivo restaurada.',
    "Today's file is already closed.": 'Você já concluiu o caso de hoje.',
    'Solved in {n}/6 guesses': 'Resolvido em {n}/6 tentativas',
    'Unsolved after {n}/6 guesses': 'Não resolvido após {n}/6 tentativas',
    'Play': 'Jogue', 'used': 'já tentado', 'Daily Result': 'Resultado do dia',
    'Sound on': 'Som ligado', 'Sound off': 'Som desligado',
    'Mute sound': 'Desligar som', 'Enable sound': 'Ligar som',
    'Close results': 'Fechar resultado',
    'English case notice': 'Este caso ainda não tem versão em português: as pistas e a explicação estão em inglês. A partida e o progresso são os mesmos.',
    'Translation coverage': 'Os casos clínicos e as explicações estão disponíveis em português. A busca aceita diagnósticos em português ou inglês.'
  }
};

export function createTranslator(locale = 'en') {
  const language = normalizeLocale(locale);
  const dictionary = messages[language] || {};
  return (key, values = {}) => (dictionary[key] || (language !== 'en' && gameMessages[key]?.[language === 'it' ? 0 : 1]) || key).replace(/\{(\w+)\}/g, (match, name) => String(values[name] ?? match));
}

export function translateGameDom(root, locale) {
  if (!root || normalizeLocale(locale) === 'en') return;
  const t = createTranslator(locale);
  const walker = document.createTreeWalker(root, 4);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script, style')) continue;
    const text = node.nodeValue.trim();
    const translated = t(text);
    if (text && translated !== text) node.nodeValue = node.nodeValue.replace(text, translated);
  }
  root.querySelectorAll('[aria-label], [title], [placeholder]').forEach(element => {
    for (const attribute of ['aria-label', 'title', 'placeholder']) {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, t(value));
    }
  });
}

export function localizeStaticGame(locale) {
  const t = createTranslator(locale);
  document.documentElement.lang = normalizeLocale(locale) === 'pt' ? 'pt-BR' : normalizeLocale(locale);
  const elements = ['.brief-kicker', '.brief-headline', '.brief-chip', '.brief-copy', '.section-label', '#roundnotes-heading', '#diagnosis-commit', '.intake-helper', '#storage-gate p', '#storage-gate-allow', '#storage-gate-deny', '#roundsheet-flash'];
  document.querySelectorAll(elements.join(',')).forEach(node => { node.textContent = t(node.textContent.trim()); });
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.getElementById('roundsheet-close')?.setAttribute('aria-label', t('Close results'));
  document.getElementById('diagnosis-search')?.setAttribute('aria-label', t('Search for a diagnosis or leave blank to reveal the next clue'));
  translateGameDom(document.body, locale);
}
