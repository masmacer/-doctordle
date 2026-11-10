import { createTranslator } from './locale.js';

const soundKey = 'ddle_sound_enabled_v1';
let soundEnabled = true;
let audioContext = null;

export function installSuccessFeedback(container = null) {
  try { soundEnabled = window.localStorage.getItem(soundKey) !== '0'; } catch { /* Optional preference. */ }
  // Specialty games use the shared control in the parent shell, not one per iframe.
  if (!container && document.body?.classList?.contains('topic-play')) return;
  const toolbar = container || document.querySelector('.daily-game-toolbar') || document.querySelector('.endless-toolbar') || document.querySelector('main');
  if (!toolbar || document.getElementById('sound-toggle')) return;
  const button = document.createElement('button');
  button.id = 'sound-toggle';
  button.className = 'sound-toggle';
  button.type = 'button';
  const update = () => {
    const t = createTranslator(document.documentElement?.lang || 'en');
    button.setAttribute('aria-pressed', String(soundEnabled));
    button.title = `${t(soundEnabled ? 'Sound on' : 'Sound off')} — ${t(soundEnabled ? 'Mute sound' : 'Enable sound')}`;
    button.setAttribute('aria-label', button.title);
    button.innerHTML = `<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M11 4 6 8H3v8h3l5 4Z"/>${soundEnabled ? '<path d="M15 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>' : '<path d="m16 9 6 6m0-6-6 6"/>'}</svg><span>${t(soundEnabled ? 'Sound on' : 'Sound off')}</span>`;
  };
  button.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    try { window.localStorage.setItem(soundKey, soundEnabled ? '1' : '0'); } catch { /* Session-only if unavailable. */ }
    if (!soundEnabled && audioContext?.state === 'running') void audioContext.suspend().catch(() => {});
    update();
  });
  update();
  toolbar.appendChild(button);
}

async function playSuccessSound() {
  // The parent toolbar can change this preference while a game iframe is open.
  try { soundEnabled = window.localStorage.getItem(soundKey) !== '0'; } catch { /* Keep the session preference. */ }
  if (!soundEnabled || document.hidden) return;
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    if (!audioContext || audioContext.state === 'closed') audioContext = new Audio();
    if (audioContext.state === 'suspended') await audioContext.resume();
    if (!soundEnabled || document.hidden || audioContext.state !== 'running') return;
    const start = audioContext.currentTime;
    // A soft rising major chord, synthesized locally; no audio downloads.
    [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
      const tone = audioContext.createOscillator();
      const envelope = audioContext.createGain();
      const time = start + index * 0.085;
      tone.type = 'sine';
      tone.frequency.setValueAtTime(frequency, time);
      envelope.gain.setValueAtTime(0, time);
      envelope.gain.linearRampToValueAtTime(0.035, time + 0.015);
      envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.24);
      tone.connect(envelope);
      envelope.connect(audioContext.destination);
      tone.start(time);
      tone.stop(time + 0.26);
      tone.onended = () => { tone.disconnect(); envelope.disconnect(); };
    });
  } catch { /* Blocked audio must never interrupt a game or result. */ }
}

export function celebrateSuccess(overlay) {
  const card = overlay?.querySelector('.result-card--win');
  if (!card || card.dataset.celebrated) return;
  card.dataset.celebrated = 'true';
  void playSuccessSound();
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  card.classList.add('is-fresh-win');
  const burst = document.createElement('span');
  burst.className = 'success-burst';
  burst.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 16; index++) {
    const spark = document.createElement('i');
    const angle = index / 16 * Math.PI * 2;
    spark.style.setProperty('--spark-x', `${Math.cos(angle) * (65 + index % 3 * 15)}px`);
    spark.style.setProperty('--spark-y', `${Math.sin(angle) * 65 + 22}px`);
    spark.style.setProperty('--spark-turn', `${index * 47}deg`);
    spark.style.setProperty('--spark-delay', `${index % 4 * 18}ms`);
    burst.appendChild(spark);
  }
  card.querySelector('.result-card__topline')?.appendChild(burst);
  window.setTimeout(() => {
    burst.remove();
    card.classList.remove('is-fresh-win');
  }, 1100);
}
