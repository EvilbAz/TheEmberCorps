from pathlib import Path

path = Path('rules/core.md')
text = path.read_text(encoding='utf-8')

old = '''Each Downtime cycle is one real-world week. You earn 2 Downtime Slots per week for free. You then gain 1 additional Downtime Slot once per week for meeting each of the following categories, once each, for a maximum of 6 Downtime Slots per week:

* Complete a Spar  
* Complete 6 total hours of RP  
* Participate in a Mission  
* Complete a Hunt
'''

new = '''Each Downtime cycle is one real-world week. You earn 2 Downtime Slots per week for free. You then gain 1 additional Downtime Slot once per week for meeting each of the following categories, once each, for a maximum of 6 Downtime Slots per week:

* Complete a Spar  
* Complete 6 total hours of RP  
* Participate in a Mission  
* Complete a Hunt

**Spar + Roleplay Bonus:** If, during the same Downtime cycle, you earn both the Spar Downtime Slot and the 6-hours-of-RP Downtime Slot, you gain **1 additional bonus Downtime Slot**, provided you claimed at least **1 Roleplay Beat** from RP during that week. This bonus can raise your total to a maximum of **7 Downtime Slots** for that cycle.
'''

if new in text:
    raise SystemExit('Weekly DT bonus already present')
if old not in text:
    raise SystemExit('Downtime earning block not found')

text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')
