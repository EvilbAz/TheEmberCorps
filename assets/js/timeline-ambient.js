(() => {
  const page = document.querySelector('.timeline-page');
  const ambient = document.getElementById('history-ambient');
  if (!page || !ambient) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scenes = new Map([...ambient.querySelectorAll('.history-scene')].map(scene => [scene.dataset.era, scene]));
  const sections = [
    ['before-the-crown', 'before'],
    ['the-crown-beneath', 'crown'],
    ['beyond-the-ruins', 'ruins'],
    ['ember-present', 'present']
  ].map(([id, era]) => [document.getElementById(id), era]).filter(([el]) => el);

  const setEra = era => {
    ambient.dataset.era = era;
    scenes.forEach((scene, key) => scene.classList.toggle('is-active', key === era));
  };

  setEra(sections[0]?.[1] || 'before');

  const eraObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const match = sections.find(([el]) => el === visible.target);
    if (match) setEra(match[1]);
  }, { rootMargin: '-22% 0px -48% 0px', threshold: [0, .12, .35, .6] });
  sections.forEach(([section]) => eraObserver.observe(section));

  const entries = [...page.querySelectorAll('.timeline-entry')];
  if (!reduceMotion && 'IntersectionObserver' in window) {
    entries.forEach(entry => entry.classList.add('history-pending'));
    const entryObserver = new IntersectionObserver(items => {
      items.forEach(item => {
        if (!item.isIntersecting) return;
        item.target.classList.remove('history-pending');
        item.target.classList.add('history-visible');
        entryObserver.unobserve(item.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: .08 });
    entries.forEach(entry => entryObserver.observe(entry));
  }

  if (reduceMotion) return;

  let ticking = false;
  const updateScroll = () => {
    ambient.style.setProperty('--history-drift', `${window.scrollY}px`);
    page.querySelectorAll('.timeline-era').forEach(section => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--history-local-shift', `${rect.top}px`);
    });
    ticking = false;
  };
  const requestScrollUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScroll);
  };
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  updateScroll();

  const pointerFine = window.matchMedia('(pointer:fine)').matches;
  if (pointerFine) {
    window.addEventListener('pointermove', event => {
      const x = (event.clientX / window.innerWidth - .5) * 16;
      const y = (event.clientY / window.innerHeight - .5) * 10;
      ambient.style.setProperty('--history-mouse-x', `${x}px`);
      ambient.style.setProperty('--history-mouse-y', `${y}px`);
    }, { passive: true });
  }
})();
