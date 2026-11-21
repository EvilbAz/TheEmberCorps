// Read the original theme keys before first paint so returning readers keep their colours.
(() => {
  const root = document.documentElement;
  const schemes = {shotai:'dark', nw:'light', ember:'dark', abyss:'dark', scroll:'light', sakura:'light', iron:'dark'};
  let selected;
  function apply(value, appearance) {
    const palette = value?.startsWith('sheet-') && value.slice(6);
    const sheet = palette && Object.hasOwn(schemes, palette);
    const theme = sheet ? schemes[palette] : ['light','primal','abyss'].includes(value) ? value : 'dark';
    const mode = ['primal','abyss'].includes(theme) ? (appearance === 'light' ? 'light' : 'dark') : theme;
    if (sheet) root.dataset.palette = palette;
    else delete root.dataset.palette;
    root.dataset.theme = theme;
    root.dataset.appearance = mode;
    selected = sheet ? value : ['primal','abyss'].includes(theme) ? theme + '-' + mode : theme;
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
      const key = theme === 'sheet' ? value : theme;
      apply(key, mode);
      try {
        localStorage.setItem('ember-theme', key);
        localStorage.setItem('ember-appearance', root.dataset.appearance);
      } catch {}
    });
  });
  window.addEventListener('storage', event => {
    if ([null,'ember-theme','ember-appearance'].includes(event.key)) restore();
  });
})();
