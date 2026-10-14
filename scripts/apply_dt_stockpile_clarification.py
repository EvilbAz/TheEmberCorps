from pathlib import Path

path = Path('rules/core.md')
text = path.read_text(encoding='utf-8')

old = '''Each Downtime cycle is one real-world week. You earn 2 Downtime Slots per week for free. You then gain 1 additional Downtime Slot once per week for meeting each of the following categories, once each, for a maximum of 6 Downtime Slots per week:

* Complete a Spar  
* Complete 6 total hours of RP  
* Participate in a Mission  
* Complete a Hunt

**Spar + Roleplay Bonus:** If, during the same Downtime cycle, you earn both the Spar Downtime Slot and the 6-hours-of-RP Downtime Slot, you gain **1 additional bonus Downtime Slot**, provided you claimed at least **1 Roleplay Beat** from RP during that week. This bonus can raise your total to a maximum of **7 Downtime Slots** for that cycle.
'''

new = '''Each Downtime cycle is one real-world week. You gain **2 free Downtime Slots** each week. These free Slots must be used during that Downtime cycle; any unused free Slots are lost when the week ends and **cannot be stockpiled**.

You may also earn 1 additional Downtime Slot once per week for meeting each of the following categories, once each:

* Complete a Spar  
* Complete 6 total hours of RP  
* Participate in a Mission  
* Complete a Hunt

Downtime Slots earned from these activity categories may be **stockpiled indefinitely** and spent in later Downtime cycles. There is no limit to how many previously earned Downtime Slots you may have saved. The normal weekly limits apply only to how many new Slots you can earn in that cycle.

**Spar + Roleplay Bonus:** If, during the same Downtime cycle, you earn both the Spar Downtime Slot and the 6-hours-of-RP Downtime Slot, you gain **1 additional bonus Downtime Slot**, provided you claimed at least **1 Roleplay Beat** from RP during that week. This bonus Slot is earned Downtime, so it may also be stockpiled indefinitely.

A character can therefore gain up to **7 new Downtime Slots** in a single cycle: 2 free, up to 4 from activity categories, and 1 from the Spar + Roleplay Bonus.
'''

if new in text:
    raise SystemExit('DT stockpile clarification already present')
if old not in text:
    raise SystemExit('Expected Downtime block not found')

text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')

# trigger
