# Character Sheet v2.2 polish — 24 October 2026

Updated the existing public v2.2 template in place.

## Presentation

- Applied a charcoal, muted-red and warm-white palette to all 17 visible tabs; retained conditional warnings with readable contrast.
- Distinguished editable inputs from computed cells, widened skill labels, wrapped descriptions and resized rows.
- Integrated Ninshou and Lore into the profile and combat skill tables.
- Repaired merged ability descriptions, including the new Skill Focus and Specialization rows.
- Reformatted skill actions, Team Attack guidance and calculators; kept engine and reference tables hidden.
- Replaced the stale version import and old core-document shortcut; linked Starting XP to its log entry.

## Repairs

- Completed every calculated jutsu column and engine row through row 1023; extended name dropdowns and the combat declaration picker.
- Corrected Quick Draw’s named range, which pointed to Martial Prowess.
- Fixed the ranged engine’s Validation header parse error.
- Corrected empty elemental-rank counts, which previously returned one known rank.
- Added whole, non-negative rank validation for all skills and Skill Focus/Specialization purchases; retained Applied Knowledge’s inherited-rank restriction.
- Included Applied Knowledge in Ninshou/Lore Specialization prerequisites.
- Repaired invalid affordability conditional formulas and used Skill Points, including Skilled Hunter’s discount/global surcharge, for Skill Focus affordability.
- Corrected the profile’s rank-benefit summary to include its first two entries.
- Removed an unintended Ryo award for purchasing Ryo Exchange; actual conversions remain in the log.
- Bukijutsu damage output identifies extra weapon dice instead of presenting an incomplete standalone roll.

## Verification

- Scanned all 33 tabs: 25,801 effective values checked, zero cell errors.
- Confirmed no literal #REF! in the original formula audit.
- At 500 XP: CC 7, Ninshou 7 + Focus 1 and Lore 2 produce Ninshou 8, Lore 2, D-rank elemental access, 18 SP spent and 7 remaining.
- At 2,000 XP: Skilled Hunter grants 105 SP; three ranks of Ninshou Focus cost 6 SP. Genius grants 100 SP and the same Focus costs 15 SP with Scale 3.
- Genjutsu Training, Diplomacy 5, Research 5 and Affinity 5 produce D-rank access and Affinity 5 on the final jutsu row.
- Final Measure fully populates the final jutsu row, including its STR-scaled additional dice.
- Restored all temporary test inputs to the blank template.

## Website

Removed the standalone updates page, its dedicated layout, homepage announcement, sidebar link and generated search entries. The rules and template link remain in their normal sections.
