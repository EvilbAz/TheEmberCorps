(() => {
  const root = document.querySelector('[data-ambient-player]');
  if (!root) return;

  const base = document.body?.dataset.base || '';
  const tracks = [
    ['Wild Pass', 'wild_pass.ogg'],
    ['The City Remembers', 'the_city_remembers.ogg'],
    ['Mist Above the Pines', 'mist_above_the_pines.ogg'],
    ['Beneath the Hunter’s Moon', 'beneath_the_hunters_moon.ogg'],
    ['A Light Left Burning', 'a_light_left_burning.ogg'],
    ['Embers at Dawn', 'embers_at_dawn.ogg'],
    ['Ancient Tracks', 'ancient_tracks.ogg'],
    ['Hollow Moon', 'hollow_moon.ogg'],
    ['Hunt Drums', 'hunt_drums.ogg'],
    ['Where the Roads End', 'where_the_roads_end.ogg']
  ];

  const audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = Number(localStorage.getItem('ember-ambient-volume') || 0.34);

  let index = Number(localStorage.getItem('ember-ambient-track') || 0);
  if (!Number.isInteger(index) || index < 0 || index >= tracks.length) index = 0;

  const toggle = root.querySelector('[data-ambient-toggle]');
  const panel = root.querySelector('[data-ambient-panel]');
  const title = root.querySelector('[data-ambient-title]');
  const count = root.querySelector('[data-ambient-count]');
  const play = root.querySelector('[data-ambient-play]');
  const prev = root.querySelector('[data-ambient-prev]');
  const next = root.querySelector('[data-ambient-next]');
  const volume = root.querySelector('[data-ambient-volume]');
  const progress = root.querySelector('[data-ambient-progress]');

  const sourceFor = (file) => `${base}/assets/audio/ember/${file}`.replace(/\/+/g, '/');

  function updateMeta() {
    const [name, file] = tracks[index];
    title.textContent = name;
    count.textContent = `${index + 1} / ${tracks.length}`;
    localStorage.setItem('ember-ambient-track', String(index));
    if (audio.src !== new URL(sourceFor(file), location.href).href) audio.src = sourceFor(file);
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: name,
        artist: 'Ember Corps',
        album: 'Ember Theme Ambience'
      });
    }
  }

  function setPlaying(state) {
    toggle.classList.toggle('is-playing', state);
    toggle.setAttribute('aria-pressed', String(state));
    play.textContent = state ? 'Ⅱ' : '▶';
    play.setAttribute('aria-label', state ? 'Pause ambience' : 'Play ambience');
  }

  async function start() {
    updateMeta();
    try {
      await audio.play();
      setPlaying(true);
    } catch (_) {
      setPlaying(false);
    }
  }

  function pause() {
    audio.pause();
    setPlaying(false);
  }

  function changeTrack(delta, autoplay = true) {
    index = (index + delta + tracks.length) % tracks.length;
    audio.src = '';
    updateMeta();
    if (autoplay) start();
  }

  toggle.addEventListener('click', (event) => {
    if (event.shiftKey) {
      root.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(root.classList.contains('is-open')));
      return;
    }
    audio.paused ? start() : pause();
  });

  toggle.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    root.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(root.classList.contains('is-open')));
  });

  root.querySelector('[data-ambient-panel-toggle]')?.addEventListener('click', () => {
    root.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(root.classList.contains('is-open')));
  });

  play.addEventListener('click', () => audio.paused ? start() : pause());
  prev.addEventListener('click', () => changeTrack(-1));
  next.addEventListener('click', () => changeTrack(1));

  volume.value = Math.round(audio.volume * 100);
  volume.addEventListener('input', () => {
    audio.volume = Math.max(0, Math.min(1, Number(volume.value) / 100));
    localStorage.setItem('ember-ambient-volume', String(audio.volume));
  });

  audio.addEventListener('ended', () => changeTrack(1));
  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('timeupdate', () => {
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.style.width = `${pct}%`;
  });
  audio.addEventListener('error', () => {
    title.textContent = 'Ambience unavailable';
    setPlaying(false);
  });

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) {
      root.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', start);
    navigator.mediaSession.setActionHandler('pause', pause);
    navigator.mediaSession.setActionHandler('previoustrack', () => changeTrack(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => changeTrack(1));
  }

  updateMeta();
})();
