---
layout: rulebook
title: "Skills & Combat Update"
permalink: "/updates/"
---

# Skills & Combat Update
{:#skills-combat-update}

**24 October 2026**

This update adds Ninshou and Lore, gives every skill two actions, introduces Team Attacks, and revises weapons, armor and Ballistic Corps combat.

[Open the updated character sheet](https://docs.google.com/spreadsheets/d/1qdi_MimRonqaQEFCHLTea7pUtdnP8x0qu4wf0Fiskkk/edit). Choose **File → Make a copy** to create your sheet.

## Skills and advancement
{:#skills-and-advancement}

- **Ninshou** covers jutsu knowledge and practice. Elemental Ninjutsu now requires both Ninshou and Chakra Control. Genjutsu continues to use Diplomacy and Research.
- **Lore** covers history, monsters and earlier Hunts. You may use it instead of the listed skill on any Hunt roll.
- Base Skill Points are **floor(XP / 20)**.
- **Genius:** Skill Focus has Scale 3. Gain one rank of Specialization in every skill, giving a natural roll floor of 8 on non-combat skill rolls.
- **Skilled Hunter:** base Skill Points are **floor(XP / 19)**. Calculate Skill Focus costs as though you had **floor(XP / 1000)** fewer purchased ranks, to a minimum of zero. Its previous rank-cap bonus and Accuracy penalty are removed.

Each of the fourteen skills has two [Skill Actions]({{ '/rules/skill-actions/' | relative_url }}). Successful rolls improve their effects for every full 5 points above the TN or opposing total. Actions include defensive Links, triggered assistance, repairs, sabotage and monster knowledge.

## Armor and weapon durability
{:#armor-and-durability}

Ninja armor and monster armor use three categories:

| Armor | Strong against | Weak against |
| --- | --- | --- |
| Dense | Slashing | Piercing, Blunt |
| Layered | Blunt | Slashing, Piercing |
| Shaped | Piercing | Slashing, Blunt |

Strong matchups multiply Absorption and DR by 1.5; weak matchups halve them. Round DR down and cap Absorption at 100%. Energy is neutral. Direct damage to armor or a breakable part is halved against a strong matchup and multiplied by 1.5 against a weak one.

Ordinary attacks and Parries no longer cause routine weapon wear. Each weapon gains **5 WDP once per Attack** when it strikes armor or a monster part resistant to its damage type. Effects that explicitly damage weapons still apply. Armor continues to lose Durability when absorbing damage.

See [Equipment & Crafting]({{ '/rules/equipment/' | relative_url }}) for armor, structural damage and weapon condition.

## Defenses and Ballistic Corps
{:#defenses-and-ballistics}

- Parries retain Partial Defense against ordinary attacks.
- A Parry can defend against an AoE only when it explicitly allows it. AoE Parries grant no Partial Defense.
- Cover has been removed. Techniques that used it now provide other effects; solid barriers and Visibility still matter.
- Rolled Ballistic Corps attacks resolve as hits or misses, without Partial Defense.
- **Controlled Fire:** spend +5 Stamina to use base 10 Accuracy plus modifiers instead of rolling. Eligible defenses gain normal Partial Defense against this attack.
- Ballistic frame Delays have been reduced. Overpressure costs +3 Stamina without adding Delay, and Snap Shot costs 16 Stamina without its former Delay.

## Bukijutsu
{:#bukijutsu-update}

All 145 universal and weapon-family techniques have been reviewed. Their current entries include revised costs, effects and damage scaling.

Damaging Bukijutsu add weapon-sized dice based on STR:

| Rank | Additional dice |
| --- | --- |
| E | floor(STR / 15)dS |
| D | floor(STR / 10)dS |
| C | floor(STR / 7)dS |
| B | floor(STR / 5)dS |
| A | floor(STR / 3)dS |

Use the greater of that count and any printed dice floor. Add the weapon’s base dice and PDB × final Speed, then apply the technique’s damage percentages. Links and Basic Weapon counters follow their own entries.

Weapon techniques now offer stronger guard pressure, armor interaction, counters, statuses and setup effects. Extra Accuracy penalties have been removed from the revised techniques; ordinary weapon and Called Shot penalties still apply. Short movement riders have been replaced with effects that matter to the attack or defense.

**Thrown** includes projectile feints, ricochets using terrain or another weapon, payload Links, weapon recovery, target switching and wire traps. Read the current entries before using a saved declaration.

### Chain Openings
{:#chain-openings-update}

The first advance from Chain 1 to Chain 2 grants one Opening for that Chain. Spend it before a later attack against the chained target to:

- Reduce one Called Shot penalty by Athletics/5.
- Add Athletics/5 to one declared Special Status Roll.
- Give an ally Athletics/5 Accuracy.

Round down, minimum 2 and maximum 6. Each Attack can receive one Opening benefit. Repeating Chain 2 grants no more Openings. You can spend Precision or Control when switching to your own non-Chain Attack; the Chain then ends normally.

Overlapping Bukijutsu roll bonuses and penalties use the highest of each. Extra projectile allowances also use the highest. Weapon effects can force one Defense reroll per target per Attack; a technique with a second strike against that target cannot also force a reroll.

See [Bukijutsu]({{ '/rules/jutsu/bukijutsu/' | relative_url }}) for the complete Chain and stacking rules.

**Body Check** has been replaced by **Shove**, a universal Speed 4, Stamina 5 action with Knockback 3. It deals no damage and does not advance a Chain.

## Team Attacks
{:#team-attacks-update}

Two to four Hunters may prepare one combined Attack. Each contributes a damaging Attack and spends time in a Variable Speed Utility Action. The team must contribute preparation equal to the sum of its component Speeds; every participant contributes at least 1 IC.

The lead chooses a legal attack form and supplies Accuracy. The highest component rank and Speed determine defensive requirements. Each target makes one Defense against the combined Attack. Calculate component damage using each Hunter’s own stats and Speed, share eligible declared Links, and apply general flat DR once to the total.

A Team Attack can gain one combination benefit from matching or mixing physical damage types or elements. Full preparation, targeting and effect rules are on the [Team Attacks page]({{ '/rules/team-attacks/' | relative_url }}).

## Character sheet and existing Hunters
{:#character-sheet-update}

The new template includes Ninshou and Lore on the main profile, revised Skill Point and Skill Focus calculations, elemental learning requirements, Genjutsu Affinity, updated weapon and armor references, all 28 skill actions and Team Attack guidance. Bukijutsu damage entries resolve their STR-based dice count; dS uses your weapon’s die size.

For an existing Hunter, copy the new template and transfer your earned XP, character choices, purchases and equipment. Recalculate Skill Points and Skill Focus, check Elemental Ninjutsu prerequisites, update armor categories and replace saved Bukijutsu and Ballistic declarations. Keep your previous sheet as a record during the transfer. If your existing purchases exceed the new allowance or fail the new prerequisites, have staff resolve the conversion before using the character in a Hunt.

Race mechanics are unchanged.
