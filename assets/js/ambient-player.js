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
    ['Where the Roads End', 'where_the_roads_end.ogg'],
    ['Night Market Stomp', 'night_market_stomp.ogg'],
    ['Rain on the Eaves', 'rain_on_the_eaves.ogg'],
    ['Switchback Relay', 'switchback_relay.ogg']
  ];

  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key,value) => { try { localStorage.setItem(key,value); } catch {} };
  const audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = Math.max(0, Math.min(1, Number(read('ember-ambient-volume') ?? 0.34) || 0));

  const files = tracks.map(([, file]) => file);
  const rotationKey = 'ember-ambient-rotation';
  function shuffle(list) {
    const result = list.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function validCycle(list) {
    return Array.isArray(list) && list.length === files.length &&
      new Set(list).size === files.length && list.every(file => files.includes(file));
  }

  let stored;
  try { stored = JSON.parse(read(rotationKey)); } catch {}
  let order, previousCycle = [], nextCycle = [], position = 0;
  if (validCycle(stored?.order) && Number.isInteger(stored.position) &&
      stored.position >= 0 && stored.position < files.length) {
    order = stored.order;
    position = stored.position;
    if (validCycle(stored.nextCycle)) nextCycle = stored.nextCycle;
    if (validCycle(stored.previousCycle)) previousCycle = stored.previousCycle;
  } else {
    const legacy = read('ember-ambient-track');
    const first = (legacy !== null && files[Number(legacy)]) || shuffle(files.slice(-3))[0];
    order = [first, ...shuffle(files.filter(file => file !== first))];
  }

  function storeRotation() {
    save(rotationKey, JSON.stringify({ order, previousCycle, nextCycle, position }));
  }

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
    const file = order[position];
    const name = tracks[files.indexOf(file)][0];
    title.textContent = name;
    count.textContent = `${position + 1} / ${tracks.length}`;
    storeRotation();
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
    toggle.setAttribute('aria-label', state ? 'Pause Ember ambience' : 'Play Ember ambience');
    play.textContent = state ? 'Ⅱ' : '▶';
    play.setAttribute('aria-label', state ? 'Pause ambience' : 'Play ambience');
  }

  async function start() {
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
    if (position + delta >= order.length) {
      previousCycle = order;
      // Keep the last six tracks away from the front of the next rotation.
      const split = Math.ceil(order.length / 2);
      order = nextCycle.length ? nextCycle : [...shuffle(order.slice(0, split)), ...shuffle(order.slice(split))];
      nextCycle = [];
      position = 0;
    } else if (position + delta < 0) {
      if (previousCycle.length) {
        // Preserve the forward path after Previous crosses a rotation boundary.
        nextCycle = order;
        order = previousCycle;
        previousCycle = [];
        position = files.length - 1;
      } else {
        audio.currentTime = 0;
      }
    } else {
      position += delta;
    }
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
    save('ember-ambient-volume', String(audio.volume));
  });

  function savePosition() {
    if (audio.currentTime > 0 && !audio.ended) {
      save('ember-ambient-offset', JSON.stringify([order[position], audio.currentTime]));
    }
  }
  window.addEventListener('pagehide', savePosition);
  audio.addEventListener('pause', savePosition);
  audio.addEventListener('loadedmetadata', () => {
    let saved;
    try { saved = JSON.parse(read('ember-ambient-offset')); } catch {}
    if (Array.isArray(saved) && saved[0] === order[position] &&
        Number.isFinite(saved[1]) && saved[1] > 0 && saved[1] < audio.duration - 1) {
      audio.currentTime = saved[1];
    }
  }, { once: true });
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
