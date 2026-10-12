#!/usr/bin/env python3
"""Check linked rule references and consistency of shared published rules."""
from pathlib import Path
import importlib.util
import json
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('search', ROOT / 'scripts/rebuild_search.py')
search = importlib.util.module_from_spec(spec)
spec.loader.exec_module(search)
pages = search.sources()
index = json.loads(search.INDEX.read_text())
for entry in index:
    route, _, fragment = entry['url'].partition('#')
    assert route in pages, entry['url']
    if fragment:
        body = pages[route][0]
        assert fragment in re.findall(r'\{:#([^}]+)\}|\bid="([^"]+)"', body) or re.search(r'(?:\{:#|\bid=")' + re.escape(fragment) + r'[}"]', body), entry['url']
core = pages['/rules/core/'][0]
wounds = (ROOT / '_includes/wounds.md').read_text()
assert wounds in pages['/rules/core/'][0] and wounds in pages['/rules/wounds/'][0]
assert '# Downtime' not in pages['/rules/wounds/'][0], 'Downtime duplicated in the Wound reference'
assert '4 XP per 30 minutes' in core and 'Combat Bonuses' in core and 'Roleplay Beats' in core
assert 'Katon and Raiton inflict Energy' in wounds and 'Doton and Suiton inflict Blunt' in wounds
assert 'If the defender Blocks, they choose the Wound location' in wounds
assert '500 XP at Stray rank' in core and '500 XP at Stray rank' in pages['/guide/'][0]
assert '250 XP' not in pages['/guide/'][0]
assert '+0.5 for every thrown weapon' in core and '(6.3 × 6)' in core
assert 'Speed -5' not in pages['/rules/clans/'][0]
assert 'combat ends in a victory' not in pages['/rules/clans/'][0]
assert 'whatever Medicine action' not in pages['/rules/talents/capabilities/'][0]
for route, (body, _, _) in pages.items():
    assert '[ HERE ]' not in body, route
    if route in ('/rules/core/', '/rules/wounds/', '/rules/equipment/'):
        assert not re.search(r'\{:#\d', body), f'{route}: numeric anchors need explicit HTML ids'
    # All new cross-volume Liquid links must resolve to an existing source/anchor.
    for match in re.finditer(r'\{\{\s*["\'](/[^"\']*)["\']\s*\|\s*relative_url\s*\}\}', body):
        target, _, fragment = match[1].partition('#')
        if target not in pages:
            continue  # assets and external hosting sections are not Markdown pages
        if fragment:
            target_body = pages[target][0]
            assert re.search(r'(?:\{:#|\bid=")' + re.escape(fragment) + r'[}"]', target_body), (route, match[1])
# Preserve historical events and the factual NPC dossier records during editorial passes.
before_timeline = subprocess.check_output(['git', 'show', 'HEAD:timeline.md'], cwd=ROOT)
assert (ROOT / 'timeline.md').read_bytes() == before_timeline, 'Timeline changed'
before_lore = subprocess.check_output(['git', 'show', 'HEAD:lore.md'], cwd=ROOT).decode()
current_lore = (ROOT / 'lore.md').read_text()
dossiers = r'<section class="lore-dossier[^\n]*?</section>'
assert re.findall(dossiers, current_lore) == re.findall(dossiers, before_lore), 'NPC records changed'
print(f'Validated {len(pages)} source pages, {len(index)} search destinations, shared Wounds and world records.')
