"""Extract the printed summary fields from each anchored technique stat block."""
import re
from html import unescape

HEADING = re.compile(r'^(#+) (.+)\n\{:#([^\s}]+)([^}]*)\}', re.M)
NAME = re.compile(r'\( <span lang="ja">([^<]+)</span> \) (.+?) - (.+)')
FIELDS = ('Seal Speed', 'Speed', 'Delay', 'Chakra or Stamina', 'Chakra', 'Stamina',
          'Cost', 'Upkeep', 'Special Upkeep', 'Damage', 'Range', 'Area', 'Line',
          'Cone', 'Cube', 'Gallons Requirement', 'Gallons', 'Gallon', 'Combo Bonus', 'Combo Counter')
LABELS = '|'.join(FIELDS)
FIELD_LINE = re.compile(rf'^({LABELS}):\s*(.+)$', re.I)
COMPACT = re.compile(rf'^({LABELS})\s+(.+)$', re.I)


def stats(body):
    values = {}
    for raw in body.splitlines():
        # Keep arithmetic asterisks in formulas when stripping Markdown emphasis.
        line = raw.strip().replace('***', '').replace('**', '')
        line = re.sub(r'\\([^\w\s])', r'\1', line).strip().rstrip('|').strip()
        if re.match(r'^Effects\b', line, re.I):
            break
        fields = []
        if line.startswith('[') and line.endswith(']'):
            fields = [COMPACT.fullmatch(part.strip()) for part in line[1:-1].split(',')]
        elif ' | ' in line:
            fields = [COMPACT.fullmatch(part.strip()) for part in line.split(' | ')]
        else:
            fields = [FIELD_LINE.fullmatch(line)]
        for match in filter(None, fields):
            values.setdefault(match[1].lower(), unescape(match[2].strip()))
    return values


def build(pages):
    rows = []
    for route, (source, title, _) in pages.items():
        headings = list(HEADING.finditer(source))
        school = title
        for i, heading in enumerate(headings):
            if route == '/rules/clans/' and heading[1] == '#':
                school = heading[2]
            if '.jutsu-technique' not in heading[4]:
                continue
            name = NAME.fullmatch(heading[2])
            assert name, heading[2]
            body = source[heading.end():headings[i+1].start() if i+1 < len(headings) else len(source)]
            rank = re.search(r'class="jutsu-rank-badge">([^<]+)', body)
            tags = re.findall(r'class="jutsu-keyword">([^<]+)', body)
            rows.append(dict(english=name[3], japanese=name[2], script=name[1], school=school,
                             rank=rank[1] if rank else '', tags=tags, stats=stats(body),
                             url=route+'#'+heading[3]))
    return sorted(rows, key=lambda row: (row['english'].casefold(), row['url']))
