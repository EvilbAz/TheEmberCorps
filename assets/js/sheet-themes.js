// Read the original theme keys before first paint so returning readers keep their colours.
(() => {
  const root = document.documentElement;
  const schemes = {code:'dark', nw:'light', ember:'dark', deepwater:'dark', scroll:'light', sakura:'light', iron:'dark'};
  let selected;
  function apply(value, appearance) {
    // Translate earlier saved IDs, including the two distinct blue palettes.
    const previous = {'sheet-shotai':'code', 'sheet-abyss':'deepwater'};
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
  function restore() {
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
      apply(theme, mode);
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
