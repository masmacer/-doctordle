import qrcode from './vendor/qrcode.js';
import { buildShareMarks } from './result-view.js';
import { createTranslator } from './locale.js';

const words = {
  daily: ['DAILY CHALLENGE', 'SFIDA DEL GIORNO', 'DESAFIO DIÁRIO'],
  challenge: ['STREAK CHALLENGE', 'SFIDA A SERIE', 'DESAFIO DE SEQUÊNCIA'],
  motto: ['ONE PATIENT. SIX GUESSES.', 'UN PAZIENTE. SEI TENTATIVI.', 'UM PACIENTE. SEIS TENTATIVAS.'],
  streak: ['{n} in a row.', '{n} casi di fila.', '{n} casos seguidos.'],
  ended: ['Streak ended.', 'Serie interrotta.', 'Sequência encerrada.'],
  run: ['A {n}-case run.', 'Una serie di {n} casi.', 'Uma sequência de {n} casos.'],
  solved: ['Case solved.', 'Caso risolto.', 'Caso resolvido.'],
  reviewed: ['Case reviewed.', 'Caso rivisto.', 'Caso revisado.'],
  guesses: ['THIS CASE · GUESSES USED', 'QUESTO CASO · TENTATIVI USATI', 'ESTE CASO · TENTATIVAS USADAS'],
  best: ['PERSONAL BEST', 'MIGLIOR SERIE', 'MELHOR SEQUÊNCIA'],
  newBest: ['NEW BEST', 'NUOVO RECORD', 'NOVO RECORDE'],
  dailyCta: ['How will you do today?', 'Come te la cavi oggi?', 'Como você se sai hoje?'],
  cta: ['How far can your streak go?', 'Quanto durerà la tua serie?', 'Até onde vai sua sequência?'],
  join: ['Join the streak challenge', 'Prova la sfida a serie', 'Entre no desafio de sequência'],
  dailyJoin: ['Try the daily challenge', 'Prova il caso del giorno', 'Experimente o desafio diário'],
  scan: ['SCAN TO PLAY', 'SCANSIONA E GIOCA', 'ESCANEIE E JOGUE']
};
const quips = {
  streak: ['The differential never stood a chance.', 'La diagnosi differenziale non aveva scampo.', 'O diagnóstico diferencial nem teve chance.'],
  record: ['Confidence rising. Sample size questionable.', 'Autostima in salita. Campione poco rappresentativo.', 'Confiança em alta. Tamanho da amostra questionável.'],
  first: ['One guess. Time to become insufferable.', 'Un tentativo. Ora chi mi sopporta più?', 'Uma tentativa. Agora ninguém me aguenta.'],
  sixth: ['Not luck. An unnecessarily long differential.', 'Non è fortuna. È una diagnosi differenziale fin troppo lunga.', 'Não foi sorte. Foi um diferencial desnecessariamente longo.'],
  loss: ['Turns out, vibes aren’t diagnostic.', 'A quanto pare, «a sensazione» non è una diagnosi.', 'Pelo visto, achismo não fecha diagnóstico.']
};

export function shareCardQuip(data) {
  const lang=data.locale==='it'?1:data.locale==='pt'?2:0;
  const key=!data.won?'loss':data.newBest?'record':data.snapshot.guessCount===1?'first':data.snapshot.guessCount===6?'sixth':'streak';
  return quips[key][lang];
}
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));

export function shareCardDestination(pageUrl, kind) {
  const url = new URL(pageUrl);
  if (url.origin !== 'https://doctordle.net') throw Error('Invalid share destination');
  url.pathname = url.pathname.replace(/\.html$/, '');url.search = '';url.hash = '';
  if (kind === 'challenge') url.searchParams.set('play','challenge');
  return url.href;
}

export function buildShareCardCaption(data) {
  const lang=data.locale==='it'?1:data.locale==='pt'?2:0;
  const t=createTranslator(data.locale);
  const templates={
    daily:['Doctordle Daily #{n}','Doctordle · Caso del giorno #{n}','Doctordle · Caso do dia #{n}'],
    streak:['{n} cases in a row on Doctordle!','{n} casi di fila su Doctordle!','{n} casos seguidos no Doctordle!'],
    run:['My {n}-case streak ended on Doctordle.','La mia serie di {n} casi su Doctordle si ferma qui.','Minha sequência de {n} casos no Doctordle terminou.'],
    ended:['My streak ended on Doctordle.','La mia serie su Doctordle si ferma qui.','Minha sequência no Doctordle terminou.'],
    thisCase:['This case: {n}/6 guesses','Questo caso: {n}/6 tentativi','Este caso: {n}/6 tentativas']
  };
  const phrase=(key,n)=>templates[key][lang].replace('{n}',String(n));
  const heading=data.kind==='daily'?phrase('daily',data.dayNumber):data.won?phrase('streak',data.streak??0):phrase(data.streak?'run':'ended',data.streak);
  const lines=[heading];
  if(data.kind==='daily') lines.push(t(data.won?'Solved in {n}/6 guesses':'Unsolved after {n}/6 guesses',{n:data.snapshot.guessCount}));
  else {
    if(data.topic)lines.push(data.topic);
    lines.push(`${t('Best streak')}: ${data.best}`,phrase('thisCase',data.snapshot.guessCount));
  }
  lines.push(buildShareMarks(data.snapshot,data.won).join(' '),shareCardQuip(data),words[data.kind==='daily'?'dailyJoin':'cta'][lang],'#doctordle',shareCardDestination(data.pageUrl,data.kind));
  return lines.join('\n');
}

export function buildShareCardSvg(data) {
  const {kind, locale='en', won, snapshot, topic='', dayNumber, streak=null, best=0, newBest=false} = data;
  const daily = kind === 'daily', lang = locale === 'it' ? 1 : locale === 'pt' ? 2 : 0;
  const w = (key, n) => words[key][lang].replace('{n}', String(n));
  const t = createTranslator(locale), url = shareCardDestination(data.pageUrl,kind);
  const measure = typeof document === 'undefined' ? null : document.createElement('canvas').getContext('2d');
  const text = (value,x,y,size,color='#243630',extra='',width=780) => {
    if(measure) measure.font=`${extra.includes('font-weight')?'800':'400'} ${size}px Arial`;
    const spacing=Number(/letter-spacing="([\d.]+)"/.exec(extra)?.[1]||0);
    const estimated=(measure?measure.measureText(String(value)).width:[...String(value)].length*.65*size)+spacing*[...String(value)].length;
    const fit = Math.min(size, size*width/Math.max(1,estimated));
    return `<text x="${x}" y="${y}" font-size="${fit}" fill="${color}" stroke="none" ${extra}>${escape(value)}</text>`;
  };
  const center = (value,y,size,color='#243630',extra='',width=780) => text(value,450,y,size,color,`text-anchor="middle" ${extra}`,width);
  const headline = daily ? w(won?'solved':'reviewed') : won ? w('streak',streak ?? 0) : !streak ? w('ended') : w('run',streak);
  const accent = won ? '#23785e' : '#9b7457';
  const qr = qrcode(0,'M');qr.addData(url,'Byte');qr.make();
  const count = qr.getModuleCount(), moduleSize = 140/(count+8);
  let qrPath = '';
  for(let row=0;row<count;row++) for(let col=0;col<count;col++) if(qr.isDark(row,col)) {
    const x=(col+4)*moduleSize,y=(row+4)*moduleSize;
    qrPath+=`M${x.toFixed(3)} ${y.toFixed(3)}h${moduleSize.toFixed(3)}v${moduleSize.toFixed(3)}h-${moduleSize.toFixed(3)}z`;
  }
  const colors = {'🟩':'#1c7b63','🟥':'#cc8b77','⬜':'#ffffff','⬛':'#e7e8df'};
  const marks = buildShareMarks(snapshot,won).map((mark,i)=>`<rect x="${246+i*70}" y="684" width="58" height="58" rx="11" fill="${colors[mark]}" stroke="${mark==='⬜'?'#9eaaa0':colors[mark]}" stroke-width="2"/>${mark==='🟩'?`<path d="M${262+i*70} 713l9 9 17-22" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`:''}`).join('');
  const stampWord = newBest && won ? w('newBest') : t(won?'SOLVED':'REVIEWED');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200"><rect width="900" height="1200" fill="#f7f4ec"/><g font-family="Arial, sans-serif"><g fill="none" stroke="#17715d" stroke-linecap="round"><rect x="54" y="54" width="37" height="37" rx="11" stroke-width="1.5"/><path d="M61 75h7l4-10 6 18 3-8h6" stroke-width="2.5" stroke-linejoin="round"/></g>${text('Doctordle',103,84,34,'#243630','font-weight="800"')}${text(w(daily?'daily':'challenge'),846,67,14,'#627668','text-anchor="end" letter-spacing="1.3"',420)}${text(daily?t('Case #{n}',{n:dayNumber}):topic,846,89,15,'#627668','text-anchor="end"',420)}<path d="M54 122H846" stroke="#d9ded5"/>${text(w('motto'),54,184,16,'#627668','font-weight="700" letter-spacing="2"')}${text(headline,54,290,daily?77:92,'#243630','font-weight="800"',770)}${text(shareCardQuip(data),54,337,23,'#6e7c72','',780)}<g transform="rotate(-9 450 460)" fill="none" stroke="${accent}"><rect x="305" y="389" width="290" height="148" rx="8" stroke-width="3"/><rect x="314" y="398" width="272" height="130" rx="2" stroke-width="1"/>${center('DOCTORDLE',427,12,accent,'letter-spacing="3"')}${center(stampWord,477,43,accent,'font-weight="800"',250)}${center(w(daily?'daily':'challenge'),509,11,accent,'letter-spacing="1"',250)}</g>${center(w('guesses'),585,14,'#718075','font-weight="700" letter-spacing="1.7"')}${center(`${snapshot.guessCount} / 6`,655,70,accent,'font-weight="800"')}${marks}${daily?center(t('Case #{n}',{n:dayNumber}),820,25,'#314a3e','font-weight="700"'):`${center(best,812,33,'#314a3e','font-weight="700"')}${center(w('best'),845,14,'#718075','letter-spacing="1.3"')}`}<rect x="54" y="954" width="792" height="198" rx="18" fill="#173e32"/>${text(w(daily?'dailyCta':'cta'),86,1010,28,'white','font-weight="700"',545)}${text(w(daily?'dailyJoin':'join'),86,1044,17,'#bed2c3','',545)}${text('doctordle.net',86,1110,19,'white','font-weight="700"')}<g transform="translate(681 976)"><rect width="140" height="140" fill="white" rx="4"/><path d="${qrPath}" fill="#102c23" shape-rendering="crispEdges"/></g>${text(w('scan'),751,1135,10,'#d7e5d9','text-anchor="middle" letter-spacing=".7"',170)}</g></svg>`;
}

export async function renderShareCard(data) {
  const svg = buildShareCardSvg(data);
  const image = new Image();
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  await image.decode();
  const canvas = document.createElement('canvas');canvas.width=900;canvas.height=1200;
  const context = canvas.getContext('2d');if(!context)throw Error('Canvas unavailable');
  context.drawImage(image,0,0);
  const blob = await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob)throw Error('Image unavailable');
  return blob;
}
