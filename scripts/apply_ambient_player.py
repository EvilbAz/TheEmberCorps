from pathlib import Path

# One-shot patcher for the global Ember ambience player.
path = Path('_layouts/default.html')
text = path.read_text(encoding='utf-8')

css = "  <link rel=\"stylesheet\" href=\"{{ '/assets/css/ambient-player.css' | relative_url }}?v=20261013-ambient-1\">\n"
if css not in text:
    marker = "  <link rel=\"stylesheet\" href=\"{{ '/assets/css/site.css' | relative_url }}?v=20260930-license-fix-v2\">\n"
    if marker not in text:
        raise SystemExit('site.css marker not found')
    text = text.replace(marker, marker + css, 1)

player = '''<div class="ambient-player" data-ambient-player>
  <button class="ambient-toggle" data-ambient-toggle type="button" aria-label="Play Ember ambience" aria-pressed="false" aria-expanded="false" title="Ember ambience — click to play/pause, right-click for controls">
    <span class="ambient-note" aria-hidden="true">♫</span>
    <span class="ambient-eq" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="ambient-label">AMBIENCE</span>
  </button>
  <div class="ambient-panel" data-ambient-panel>
    <div class="ambient-panel-head">
      <div><small>EMBER THEME AMBIENCE</small><div class="ambient-track-title" data-ambient-title>Wild Pass</div></div>
      <button class="ambient-control" data-ambient-panel-toggle type="button" aria-label="Close ambience controls">×</button>
    </div>
    <div class="ambient-controls">
      <button class="ambient-control" data-ambient-prev type="button" aria-label="Previous track">‹</button>
      <button class="ambient-control primary" data-ambient-play type="button" aria-label="Play ambience">▶</button>
      <button class="ambient-control" data-ambient-next type="button" aria-label="Next track">›</button>
      <label class="ambient-volume" aria-label="Ambience volume"><span>VOL</span><input data-ambient-volume type="range" min="0" max="100" step="1" value="34"></label>
    </div>
    <div class="ambient-progress" aria-hidden="true"><span data-ambient-progress></span></div>
    <div class="ambient-help"><span data-ambient-count>1 / 10</span> · The Minecraft Ember ambience playlist loops continuously once started.</div>
  </div>
</div>'''

needle = '<div class="top-right"><span class="top-status"><span class="status-dot"></span> FIELD REFERENCE</span><button class="top-search search-trigger" aria-label="Search rules">⌕ <span>Search</span> <kbd>/</kbd></button><button class="primal-toggle"'
if 'data-ambient-player' not in text:
    if needle not in text:
        raise SystemExit('top-right marker not found')
    replacement = '<div class="top-right"><span class="top-status"><span class="status-dot"></span> FIELD REFERENCE</span><button class="top-search search-trigger" aria-label="Search rules">⌕ <span>Search</span> <kbd>/</kbd></button>' + player + '<button class="primal-toggle"'
    text = text.replace(needle, replacement, 1)

script = "  <script src=\"{{ '/assets/js/ambient-player.js' | relative_url }}?v=20261013-ambient-1\" defer></script>\n"
if script not in text:
    body_close = '</body>'
    if body_close not in text:
        raise SystemExit('body closing tag not found')
    text = text.replace(body_close, script + body_close, 1)

path.write_text(text, encoding='utf-8')
