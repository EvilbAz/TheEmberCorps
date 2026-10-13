from pathlib import Path

path = Path('timeline.md')
text = path.read_text(encoding='utf-8')

style_link = '<link rel="stylesheet" href="{{ \'/assets/css/timeline-ambient.css\' | relative_url }}">\n'
if style_link not in text:
    marker = 'permalink: /timeline/\n---\n'
    if marker not in text:
        raise SystemExit('Timeline front matter marker not found')
    text = text.replace(marker, marker + style_link, 1)

ambient = '''  <div class="history-ambient" id="history-ambient" data-era="before" aria-hidden="true">
    <div class="history-scene is-active" data-era="before">
      <svg class="history-motif one" viewBox="0 0 100 100"><use href="#history-hunt"/></svg>
      <svg class="history-motif two" viewBox="0 0 100 100"><use href="#history-compass"/></svg>
      <svg class="history-motif three" viewBox="0 0 100 100"><use href="#history-haven"/></svg>
    </div>
    <div class="history-scene" data-era="crown">
      <svg class="history-motif one" viewBox="0 0 100 100"><use href="#history-crown"/></svg>
      <svg class="history-motif two" viewBox="0 0 100 100"><use href="#history-crisis"/></svg>
      <svg class="history-motif three" viewBox="0 0 100 100"><use href="#history-bloom"/></svg>
    </div>
    <div class="history-scene" data-era="ruins">
      <svg class="history-motif one" viewBox="0 0 100 100"><use href="#history-haven"/></svg>
      <svg class="history-motif two" viewBox="0 0 100 100"><use href="#history-compass"/></svg>
      <svg class="history-motif three" viewBox="0 0 100 100"><use href="#history-hunt"/></svg>
    </div>
    <div class="history-scene" data-era="present">
      <svg class="history-motif one" viewBox="0 0 100 100"><use href="#history-bloom"/></svg>
      <svg class="history-motif two" viewBox="0 0 100 100"><use href="#history-haven"/></svg>
      <svg class="history-motif three" viewBox="0 0 100 100"><use href="#history-compass"/></svg>
    </div>
    <div class="history-dust"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </div>
'''

if 'id="history-ambient"' not in text:
    marker = '  </svg>\n  <header class="timeline-hero">'
    if marker not in text:
        raise SystemExit('Timeline symbol/header marker not found')
    text = text.replace(marker, '  </svg>\n' + ambient + '  <header class="timeline-hero">', 1)

script = '<script src="{{ \'/assets/js/timeline-ambient.js\' | relative_url }}" defer></script>\n'
if script not in text:
    text = text.rstrip() + '\n' + script

path.write_text(text, encoding='utf-8')
