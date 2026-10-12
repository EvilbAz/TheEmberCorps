#!/usr/bin/env python3
"""Refresh rule excerpts and anchors from the published Markdown sources."""
from pathlib import Path
from html import unescape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / 'assets/data/search-index.json'

def expand(text):
    def include(match):
        return expand((ROOT / '_includes' / match[1]).read_text())
    return re.sub(r'{%\s*include\s+([\w./-]+)\s*%}', include, text)

def plain(text):
    text = re.sub(r'<(?:style|script)\b.*?</(?:style|script)>', '', text, flags=re.S)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'{[{%].*?[}%]}', '', text, flags=re.S)
    text = re.sub(r'\{:#.*?\}', '', text)
    text = re.sub(r'\[([^]]+)\]\([^\n]*?\)', r'\1', text)
    text = re.sub(r'\\([+*().!>\-])', r'\1', text)
    text = re.sub(r'[*#_`|]', '', text)
    return ' '.join(unescape(text).split())

def sources():
    pages = {}
    for path in sorted(ROOT.rglob('*.md')):
        if any(part.startswith(('_', '.')) or part in ('scripts', 'minecraft-mod-source') for part in path.relative_to(ROOT).parts):
            continue
        text = path.read_text()
        if not text.startswith('---\n'):
            continue
        _, front, body = text.split('---', 2)
        match = re.search(r'^permalink:\s*["\']?([^"\'\n]+)', front, re.M)
        if not match:
            continue
        title = re.search(r'^title:\s*["\']?([^"\'\n]+)', front, re.M)
        volume = re.search(r'^volume:\s*["\']?([^"\'\n]+)', front, re.M)
        pages[match[1].strip()] = (expand(body), title[1] if title else path.stem, volume[1] if volume else '')
    return pages

def rebuild():
    old = json.loads(INDEX.read_text())
    pages = sources()
    records = []
    seen = set()
    sections = {}
    for url, (body, title, number) in pages.items():
        matches = list(re.finditer(r'^(#{1,6}) ([^\n]+)\n\{:#([^}]+)\}', body, re.M))
        sections[url] = {}
        for i, match in enumerate(matches):
            end = matches[i + 1].start() if i + 1 < len(matches) else len(body)
            sections[url][match[3]] = (plain(match[2]), plain(body[match.end():end])[:207])
    # Preserve handcrafted catalogue and directory entries, refreshing Markdown excerpts.
    for record in old:
        route, _, anchor = record['url'].partition('#')
        if route not in pages:
            continue
        body, _, _ = pages[route]
        current = sections[route].get(anchor)
        if anchor and not current and anchor not in re.findall(r'\bid="([^"]+)"', body):
            continue
        item = dict(record)
        if current:
            item['title'], item['text'] = current
        elif not anchor:
            item['text'] = plain(body)[:207]
        if item['url'] not in seen:
            records.append(item)
            seen.add(item['url'])
    for route, by_anchor in sections.items():
        _, title, number = pages[route]
        for anchor, (heading, excerpt) in by_anchor.items():
            url = route + '#' + anchor
            if url not in seen:
                records.append(dict(title=heading, volume=title, number=number, url=url, text=excerpt))
                seen.add(url)
    return records

if __name__ == '__main__':
    import sys
    records = rebuild()
    if '--check' in sys.argv:
        assert records == json.loads(INDEX.read_text()), 'Search index is stale; run scripts/rebuild_search.py'
    else:
        INDEX.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(f'Search index: {len(records)} current entries.')
