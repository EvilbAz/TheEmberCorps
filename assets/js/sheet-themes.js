// Read the original theme keys before first paint so returning readers keep their colours.
(() => {
  const root = document.documentElement;
  const schemes = {code:'dark', nw:'light', ember:'dark', scroll:'light', sakura:'light', iron:'dark'};
  let selected;
  function apply(value, appearance) {
    // Retired ocean palettes use the original dark Abyss appearance.
    if (value === 'deepwater' || value === 'sheet-abyss') {
      value = 'abyss';
      appearance = 'dark';
    }
    const previous = {'sheet-shotai':'code'};
    const palette = previous[value] || value?.replace(/^sheet-/, '');
    const isPalette = Object.hasOwn(schemes, palette);
    const theme = isPalette ? schemes[palette] : ['light','primal','abyss'].includes(value) ? value : 'dark';
    const mode = ['primal','abyss'].includes(theme) ? (appearance === 'light' ? 'light' : 'dark') : theme;
    if (isPalette) root.dataset.palette = palette;
    else delete root.dataset.palette;
    root.dataset.theme = theme;
    root.dataset.appearance = mode;
    selected = isPalette ? palette : ['primal','abyss'].includes(theme) ? theme + '-' + mode : theme;
    root.dataset.emblem = selected;
    const picker = document.getElementById('sheet-theme');
    if (picker) picker.value = selected;
    const bg = getComputedStyle(root).getPropertyValue('--bg').trim();
    if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
  }
  // The veil carries the outgoing canvas colour into the new palette.
  // It lives outside page content and never takes focus or pointer input.
  const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let veil;
  function clearTransition() {
    veil?.remove();
    veil = undefined;
    root.classList.remove('changing-theme');
  }
  function transitionTo(theme, mode) {
    clearTransition();
    const outgoing = getComputedStyle(root).getPropertyValue('--bg').trim();
    if (!motion?.matches) root.classList.add('changing-theme');
    apply(theme, mode);
    if (motion?.matches) return;
    const layer = document.createElement('div');
    layer.className = 'theme-change';
    layer.dataset.into = selected;
    layer.setAttribute('aria-hidden', 'true');
    layer.style.setProperty('--outgoing', outgoing);
    document.body.append(layer);
    veil = layer;
    window.drawThemeScene?.(layer, selected);
    const finish = event => {
      if (veil === layer && !event.pseudoElement && event.animationName === 'theme-clear') clearTransition();
    };
    layer.addEventListener('animationend', finish);
    layer.addEventListener('animationcancel', finish);
  }
  motion?.addEventListener('change', clearTransition);
  document.addEventListener('ember:before-page', clearTransition);
  window.addEventListener('pagehide', clearTransition);
  function restore() {
    clearTransition();
    let theme, appearance;
    try {
      theme = localStorage.getItem('ember-theme');
      appearance = localStorage.getItem('ember-appearance');
    } catch {}
    apply(theme, appearance);
  }
  restore();
  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('sheet-theme');
    if (!picker) return;
    picker.value = selected;
    picker.addEventListener('change', () => {
      const value = picker.value;
      const [theme, mode] = value.split('-');
      transitionTo(theme, mode);
      try {
        localStorage.setItem('ember-theme', theme);
        localStorage.setItem('ember-appearance', root.dataset.appearance);
      } catch {}
    });
  });
  window.addEventListener('storage', event => {
    if ([null,'ember-theme','ember-appearance'].includes(event.key)) restore();
  });
})();
