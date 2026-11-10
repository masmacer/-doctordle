import { normalizeLocale, createTranslator, translateGameDom } from './locale.js';
import { localizedPath } from './localized-routes.js';
import { installSuccessFeedback } from './success-feedback.js';

(function () {
	const params = new URLSearchParams(window.location.search);
	const locale = normalizeLocale(params.get('lang'));
	const t = createTranslator(locale);
	document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
	installSuccessFeedback(document.getElementById('topic-sound-controls'));
	const topics = window.__DDLE_TOPICS__ || {};
	const slug = params.get('topic');
	const continuousTopics = window.__DDLE_CONTINUOUS_TOPICS__ || {};
	const hasPractice = Object.prototype.hasOwnProperty.call(continuousTopics, slug);
	const topic = hasPractice ? continuousTopics[slug] : topics[slug];
	if (!topic) {
		document.body.innerHTML = '<p style="padding:1rem;text-align:center;color:#7b3f00">Unknown topic.</p>';
		return;
	}

	if (window.parent === window) {
		window.location.replace(localizedPath(topic.pagePath, locale));
		return;
	}

	const launchDate = new Date(window.__DDLE_TOPIC_LAUNCH_DATE__ || '2026-05-19T00:00:00');
	const todayIndex = Math.max(0, Math.floor((Date.now() - launchDate.getTime()) / 864e5));
	const nodes = {
		hub: document.getElementById('topic-hub'),
		gameShell: document.getElementById('topic-game-shell'),
		frame: document.getElementById('topic-game-frame'),
		kicker: document.getElementById('topic-kicker'),
		title: document.getElementById('topic-title'),
		copy: document.getElementById('topic-copy'),
		dailyCase: document.getElementById('daily-case-value'),
		dailyReset: document.getElementById('daily-reset-value'),
		openStats: document.getElementById('topic-stats-open'),
		statsPanel: document.getElementById('topic-stats-panel'),
		closeStats: document.getElementById('topic-stats-close')
	};

	function readCookie(name) {
		const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
		return match ? decodeURIComponent(match[1]) : null;
	}

	function parseJson(rawValue, fallback) {
		if (!rawValue) return fallback;
		try { return JSON.parse(rawValue); } catch { return fallback; }
	}

	function normalizeScope(scope) {
		return String(scope || 'daily').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'daily';
	}

	function getDailyStats(scope) {
		const normalized = normalizeScope(scope);
		const key = normalized === 'daily' ? 'ddle_stats' : `ddle_stats_${normalized}`;
		return {
			played: 0,
			wins: 0,
			currentStreak: 0,
			longestStreak: 0,
			...parseJson(readCookie(key), {})
		};
	}

	function getChallengeStats(scope, mode = 'challenge') {
		const normalized = normalizeScope(scope);
		const key = normalized === 'endless' ? 'ddle_endless_v1' : `ddle_endless_${normalized}_v1`;
		let bundle = {};
		try { bundle = parseJson(window.localStorage.getItem(key), null) || {}; } catch { /* Storage may be unavailable. */ }
		const stats = bundle.stats && bundle.stats[mode] ? bundle.stats[mode] : {};
		return {
			played: 0,
			wins: 0,
			currentStreak: 0,
			bestStreak: 0,
			...stats
		};
	}

	function setText(id, value) {
		const node = document.getElementById(id);
		if (node) node.textContent = value;
	}

	function renderDistribution(id, distribution) {
		const values = Array.from({ length: 6 }, (_, index) => {
			const count = Number(distribution && distribution[index + 1]);
			return Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
		});
		const total = values.reduce((sum, count) => sum + count, 0);
		const max = Math.max(1, ...values);
		const points = values.map((count, index) => [32 + index * 58, 108 - count / max * 80]);
		const label = values.map((count, index) => t('{n} guesses: {count} solved cases', {n:index+1,count})).join('; ');
		const ticks = points.map(([x], index) => `<text x="${x}" y="130" text-anchor="middle">${index + 1}</text>`).join('');
		const plot = total ? `<polyline points="${points.map(point => point.join(',')).join(' ')}" class="guess-chart__line" />${points.map(([cx, cy], index) => `<circle cx="${cx}" cy="${cy}" r="4" class="guess-chart__point"><title>${t('{n} guesses: {count} solved cases', {n:index+1,count:values[index]})}</title></circle>`).join('')}` : '';
		document.getElementById(id).innerHTML = `<p class="guess-chart__heading">Solved by guess count <span>${t('{n} solved', {n:total})}</span></p><svg viewBox="0 0 360 142" role="img" aria-label="${label}"><path d="M32 28H322M32 68H322M32 108H322" class="guess-chart__grid" /><text x="22" y="32" text-anchor="end">${max}</text><text x="22" y="112" text-anchor="end">0</text>${ticks}${plot}${total ? '' : '<text x="177" y="65" text-anchor="middle" class="guess-chart__empty">Your first solved case starts the chart.</text>'}</svg><p class="guess-chart__caption">Guesses used · completed wins only</p>`;
	}

	function renderTopicStats() {
		const daily = hasPractice ? getChallengeStats(topic.slug, 'challenge') : getDailyStats(topic.slug);
		const challenge = getChallengeStats(topic.slug, hasPractice ? 'practice' : 'challenge');
		const dailyWinRate = daily.played ? Math.round((daily.wins / daily.played) * 100) : 0;
		const challengeWinRate = challenge.played ? Math.round((challenge.wins / challenge.played) * 100) : 0;

		setText('daily-stats-played', String(daily.played || 0));
		setText('daily-stats-winrate', `${dailyWinRate}%`);
		setText('daily-stats-current', String(daily.currentStreak || 0));
		setText('daily-stats-best', String((hasPractice ? daily.bestStreak : daily.longestStreak) || 0));
		setText('challenge-stats-played', String(challenge.played || 0));
		setText('challenge-stats-winrate', `${challengeWinRate}%`);
		setText('challenge-stats-current', String(challenge.currentStreak || 0));
		setText('challenge-stats-best', String(challenge.bestStreak || 0));
		if (hasPractice) {
			setText('challenge-stats-current', String(challenge.wins || 0));
			const distribution = Array.from({ length: 6 }, (_, index) => Math.max(0, Number(challenge.dist?.[index + 1]) || 0));
			const solved = distribution.reduce((sum, value) => sum + value, 0);
			setText('challenge-stats-best', solved ? (distribution.reduce((sum, value, index) => sum + value * (index + 1), 0) / solved).toFixed(1) : '—');
		}
		renderDistribution('daily-distribution', daily.dist);
		renderDistribution('challenge-distribution', challenge.dist);
		translateGameDom(nodes.statsPanel, locale);
	}

	function nextReset() {
		const value = new Date();
		value.setHours(24, 0, 0, 0);
		return value;
	}

	function updateCountdown() {
		if (hasPractice) return;
		const remaining = Math.max(0, nextReset().getTime() - Date.now());
		const hours = Math.floor(remaining / 36e5);
		const minutes = Math.floor((remaining % 36e5) / 6e4);
		const seconds = Math.floor((remaining % 6e4) / 1000);
		nodes.dailyReset.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}

	function frameSrc(mode) {
		if (hasPractice) return `${topic.gameFrame}?mode=${mode === 'daily' ? 'challenge' : 'practice'}&hub=1&lang=${locale}`;
		const suffix = mode === 'daily' ? 'daily' : 'challenge';
		return `/embed/doctordle-topic-${suffix}.embed.html?topic=${encodeURIComponent(slug)}&hub=1&lang=${locale}`;
	}

	function reportParentHeight() {
		// Measure content, not the iframe viewport: viewport height cannot shrink itself.
		const height = Math.ceil(document.querySelector('main').getBoundingClientRect().height);
		window.parent.postMessage({ type: 'ddle-topic-shell-height', scope: topic.slug, height }, '*');
	}

	function showHub() {
		delete document.body.dataset.gameMode;
		document.body.dataset.view = 'chooser';
		renderTopicStats();
		nodes.statsPanel.hidden = false;
		nodes.openStats.setAttribute('aria-expanded', 'true');
		nodes.frame.src = 'about:blank';
		nodes.gameShell.hidden = true;
		nodes.hub.dataset.playing = 'false';
		nodes.copy.textContent = t('Choose how you want to play.');
		for (const value of ['daily', 'challenge']) {
			document.getElementById(`mode-${value}`).setAttribute('aria-pressed', 'false');
		}
		window.requestAnimationFrame(reportParentHeight);
	}

	function showMode(mode) {
		// Reserve the chooser's space before loading a shorter game.
		const stage = document.querySelector('main');
		stage.style.minHeight = `${Math.ceil(stage.getBoundingClientRect().height)}px`;
		document.body.dataset.view = 'game';
		document.body.dataset.gameMode = mode;
		nodes.statsPanel.hidden = true;
		nodes.openStats.setAttribute('aria-expanded', 'false');
		nodes.hub.hidden = false;
		nodes.hub.dataset.playing = 'true';
		nodes.copy.textContent = t('One patient. Six guesses. Follow the clues.');
		nodes.gameShell.hidden = false;
		for (const value of ['daily', 'challenge']) {
			document.getElementById(`mode-${value}`).setAttribute('aria-pressed', String(mode === value));
		}
		nodes.frame.title = `${t(topic.name)} · ${t(hasPractice ? (mode === 'daily' ? 'Challenge' : 'Practice') : (mode === 'daily' ? 'Daily case' : 'Challenge'))}`;
		nodes.frame.src = frameSrc(mode);
		window.requestAnimationFrame(reportParentHeight);
	}

	function openStats() {
		if (!nodes.statsPanel.hidden) {
			closeStats();
			return;
		}
		renderTopicStats();
		nodes.statsPanel.hidden = false;
		nodes.openStats.setAttribute('aria-expanded', 'true');
		nodes.statsPanel.scrollIntoView({ block: 'nearest' });
		nodes.closeStats.focus();
	}

	function closeStats() {
		nodes.statsPanel.hidden = true;
		nodes.openStats.setAttribute('aria-expanded', 'false');
		nodes.openStats.focus();
	}

	document.title = locale === 'en' ? topic.pageTitle : `Doctordle · ${t(topic.name)}`;
	nodes.kicker.textContent = t('SPECIALTY PRACTICE');
	nodes.title.textContent = t(topic.name);
	nodes.copy.textContent = t('One patient. Six guesses. Follow the clues.');
	nodes.dailyCase.textContent = t('Case #{n}', { n: todayIndex + 1 });
	if (hasPractice) {
		nodes.kicker.textContent = t('CONTINUOUS PLAY');
		const first = document.getElementById('mode-daily');
		const second = document.getElementById('mode-challenge');
		first.querySelector('.mode-choice__title').firstChild.textContent = 'Challenge ';
		second.querySelector('.mode-choice__title').firstChild.textContent = 'Practice ';
		first.querySelector('.mode-choice__description').textContent = 'Solve each case in six guesses and build your streak.';
		second.querySelector('.mode-choice__description').textContent = 'Work through clinical cases at your own pace.';
		first.querySelector('.mode-choice__meta').innerHTML = `<span>${t('Streak challenge')}</span><span class="mode-choice__note">${slug === 'endless' ? t('Mixed specialties · No daily limit') : t('{topic} cases · No daily limit', {topic:t(topic.name)})}</span>`;
		second.querySelector('.mode-choice__meta').innerHTML = '<span>Low-pressure practice</span><span class="mode-choice__note">Separate progress · Same case pool</span>';
		first.querySelector('.mode-choice__action').firstChild.textContent = 'Play challenge ';
		second.querySelector('.mode-choice__action').firstChild.textContent = 'Start practice ';
		const headings = document.querySelectorAll('.topic-stats-card h3');
		headings[0].textContent = 'Challenge';
		headings[1].textContent = 'Practice';
		setText('topic-stats-copy', slug === 'endless' ? t('Your challenge and practice results across all specialties.') : t('Your challenge and practice results in {topic}.', {topic:t(topic.name)}));
		const practiceLabels = document.querySelectorAll('.topic-stats-card:last-child .topic-stats-pill__label');
		practiceLabels[2].textContent = 'Solved';
		practiceLabels[3].textContent = 'Avg guesses';
	}

	document.getElementById('mode-daily').addEventListener('click', () => showMode('daily'));
	document.getElementById('topic-back').addEventListener('click', () => {
		showHub();
		document.getElementById('mode-daily').focus();
	});
	document.getElementById('mode-challenge').addEventListener('click', () => showMode('challenge'));
	nodes.openStats.addEventListener('click', openStats);
	nodes.closeStats.addEventListener('click', closeStats);
	window.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && document.body.dataset.view === 'game' && !nodes.statsPanel.hidden) closeStats();
	});

	window.addEventListener('message', (event) => {
		if (event.origin !== window.location.origin || event.source !== nodes.frame.contentWindow) return;
		const data = event.data || {};
		if (data.type === 'ddle-topic-back' && data.scope === topic.slug) {
			showHub();
			return;
		}
		if (data.type === 'ddle-topic-game-height' && data.scope === topic.slug && Number.isFinite(data.height)) {
			nodes.frame.style.height = `${Math.max(200, Math.ceil(data.height))}px`;
			window.requestAnimationFrame(reportParentHeight);
		}
	});

	let stageWidth = window.innerWidth;
	window.addEventListener('resize', () => {
		if (window.innerWidth !== stageWidth) {
			stageWidth = window.innerWidth;
			document.querySelector('main').style.minHeight = '';
		}
		reportParentHeight();
	});
	if ('ResizeObserver' in window) {
		const resizeObserver = new ResizeObserver(() => reportParentHeight());
		resizeObserver.observe(document.querySelector('main'));
	}

	updateCountdown();
	if (!hasPractice) window.setInterval(updateCountdown, 1000);
	translateGameDom(document.body, locale);
	showHub();
}());
