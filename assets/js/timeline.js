(() => {
  const page = document.querySelector('.timeline-page');
  if (!page) return;
  const entries = [...page.querySelectorAll('.timeline-entry')];
  const eras = [...page.querySelectorAll('.timeline-era, .timeline-present')];
  const links = [...page.querySelectorAll('.history-nav a')];
  const streams = [...page.querySelectorAll('.timeline-stream')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  let frame = 0;
  let current = '';

  streams.forEach(stream => {
    const trace = document.createElement('span');
    trace.className = 'history-trace';
    trace.setAttribute('aria-hidden', 'true');
    stream.prepend(trace);
  });

  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(records => {
      records.forEach(record => {
        if (!record.isIntersecting) return;
        record.target.classList.add('is-recorded');
        observer.unobserve(record.target);
      });
    }, { rootMargin: '0px 0px 80px 0px', threshold: 0 });
    entries.forEach(entry => {
      if (entry.getBoundingClientRect().top < window.innerHeight + 80) {
        entry.classList.add('is-recorded');
      } else observer.observe(entry);
    });
    page.classList.add('timeline-enhanced');
    // Anchor jumps reveal their destination immediately, including keyboard navigation.
    window.addEventListener('hashchange', () => {
      const target = document.getElementById(location.hash.slice(1));
      if (target && page.contains(target)) {
        target.querySelectorAll('.timeline-entry').forEach(entry => entry.classList.add('is-recorded'));
      }
    });
  }

  const update = () => {
    frame = 0;
    const height = window.innerHeight;
    const cursor = Math.min(height * .42, 310);
    const bounds = page.getBoundingClientRect();
    page.style.setProperty('--history-progress', clamp((height - bounds.top) / bounds.height).toFixed(4));
    let active = eras[0];
    eras.forEach(era => {
      const box = era.getBoundingClientRect();
      if (box.top <= cursor) active = era;
      if (!motion.matches && box.bottom > 0 && box.top < height) {
        era.style.setProperty('--history-drift', `${Math.round(Math.max(-45, Math.min(45, (height * .5 - box.top) * .055)))}px`);
      }
    });
    if (current !== active.id) {
      current = active.id;
      links.forEach(link => {
        if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    streams.forEach(stream => {
      const box = stream.getBoundingClientRect();
      stream.style.setProperty('--stream-progress', clamp((cursor - box.top) / Math.max(1, box.height - 46)).toFixed(4));
    });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  motion.addEventListener('change', () => {
    if (motion.matches) entries.forEach(entry => entry.classList.add('is-recorded'));
    schedule();
  });
  update();
})();
