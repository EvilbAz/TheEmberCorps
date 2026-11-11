#!/usr/bin/env python3
"""Build complete search sections from public source pages; keep explicit anchors."""
from pathlib import Path
from html import unescape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / 'assets/data/search-index.json'
MD_HEADING = re.compile(r'^(#{1,6}) ([^\n]+)\n\{:#([^\s}]+)[^}]*\}', re.M)

def expand(text):
    def include(match):
        return expand((ROOT / '_includes' / match[1]).read_text())
    return re.sub(r'{%\s*include\s+([\w./-]+)\s*%}', include, text)

def plain(text):
    text = re.sub(r'<(?:style|script)\b.*?</(?:style|script)>', '', text, flags=re.S)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'{[{%].*?[}%]}', '', text, flags=re.S)
    text = re.sub(r'\{:[^}]*\}', '', text)
    text = re.sub(r'\[([^]]+)\]\([^\n]*?\)', r'\1', text)
    text = re.sub(r'\\([+*().!><=\-\[\]])', r'\1', text)
    text = re.sub(r'[*#_`|]', '', text)
    return ' '.join(unescape(text).split())

def sources():
    pages = {}
    for path in sorted([*ROOT.rglob('*.md'), *ROOT.rglob('*.html')]):
        if any(part.startswith(('_', '.')) or part in ('scripts', 'review', 'node_modules', 'vendor', 'minecraft-mod-source') for part in path.relative_to(ROOT).parts):
            continue
        text = path.read_text()
        if not text.startswith('---\n'):
            continue
        _, front, body = text.split('---', 2)
        if re.search(r'^search:\s*false\s*$', front, re.M):
            continue
        match = re.search(r'^permalink:\s*["\']?([^"\'\n]+)', front, re.M)
        if not match:
            continue
        title = re.search(r'^title:\s*["\']?([^"\'\n]+)', front, re.M)
        volume = re.search(r'^volume:\s*["\']?([^"\'\n]+)', front, re.M)
        pages[match[1].strip()] = (expand(body), title[1] if title else path.stem, volume[1] if volume else '')
    return pages

def sections(body):
    matches = [(m.start(),m.end(),m[3],plain(m[2])) for m in MD_HEADING.finditer(body)]
    # HTML directories, lore dossiers and timeline entries also belong in search.
    for m in re.finditer(r'<([\w-]+)\b[^>]*\bid="([^"]+)"[^>]*>',body):
        if m[1] in ('script','style','svg','path','input','button'): continue
        tail = body[m.end():]
        heading = re.search(r'<h[1-6]\b[^>]*>(.*?)</h[1-6]>',tail,re.S)
        if re.fullmatch('h[1-6]',m[1]):
            title = plain(tail.split('</'+m[1]+'>',1)[0])
        elif heading:
            title = plain(heading[1])
        else:
            title = plain(m[2].replace('-',' ')).title()
        matches.append((m.start(),m.end(),m[2],title))
    matches.sort()
    return matches

def rebuild():
    records = []
    for route, (body,title,number) in sources().items():
        matches = sections(body)
        intro = plain(body[:matches[0][0]]) if matches else plain(body)
        records.append(dict(title=title,volume=title,number=number,url=route,text=intro or title))
        seen = set()
        for i, (start,end,anchor,heading) in enumerate(matches):
            assert anchor not in seen, f'Duplicate anchor: {route}#{anchor}'
            seen.add(anchor)
            stop = matches[i+1][0] if i+1 < len(matches) else len(body)
            # Index all rules, costs and effects, not a truncated display excerpt.
            records.append(dict(title=heading,volume=title,number=number,url=route+'#'+anchor,text=plain(body[end:stop])))
    return records

if __name__ == '__main__':
    import sys
    from jutsu_index import build
    records = rebuild()
    techniques = build(sources())
    catalogue = INDEX.with_name('jutsu-index.json')
    if '--check' in sys.argv:
        assert techniques == json.loads(catalogue.read_text()), 'Jutsu index is stale; run scripts/rebuild_search.py'
        assert records == json.loads(INDEX.read_text()), 'Search index is stale; run scripts/rebuild_search.py'
    else:
        catalogue.write_text(json.dumps(techniques, ensure_ascii=False, indent=2) + '\n')
        INDEX.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(f'Search index: {len(records)} current entries.')
