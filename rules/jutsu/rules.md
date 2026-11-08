---
layout: rulebook
title: "Jutsu Rules"
volume: "IV"
volume_slug: "jutsu"
jutsu_section: "rules"
permalink: "/rules/jutsu/rules/"
---

<div class="jutsu-breadcrumb"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>


# Guide
{:#guide}

Learning requirements, technique tags, elemental interactions and shared Jutsu rules.

# Jutsu Rules
{:#jutsu-rules}

## Disciplines
{:#explanation}

Jutsu use chakra to perform extraordinary techniques. **Taijutsu** enhances physical attacks and movement; **Ninjutsu** shapes chakra into effects such as elements, transformations and constructs; **Genjutsu** interferes with perception and the senses.

## Learning Jutsu
{:#rule}

Jutsu are learned actions ranked E, D, C, B and A. Rare S-Rank techniques are usually known only to their inventor and a few students. Each discipline lists its learning requirements; Elemental Ninjutsu also requires the appropriate Elemental Aptitude.

B-Rank and higher jutsu require a mentor unless you exceed their learning requirements by 50%. For example, B-Rank Taijutsu can be learned without a mentor at Athletics 30. See [Downtime]({{ "/rules/core/#downtime" | relative_url }}) for finding mentors.

## Reader's Guide
{:#reader-s-guide}

Jutsu entries use the following fields.

### Stamina / Chakra
{:#stamina-chakra}

The technique's Stamina and Chakra cost, respectively.

### Upkeep
{:#upkeep}

The cost of sustaining an active technique. Resolve it using [Upkeep]({{ '/rules/core/#upkeep' | relative_url }}).

### Damage
{:#damage}

The base damage dealt by the technique. You add your damage bonus (multiplied by the attack's modified Speed) to this number.

### Accuracy
{:#accuracy}

Some jutsu have bonuses or penalties to accuracy. If there's no entry for this, it uses your normal accuracy.

### Range
{:#range}

The maximum distance to the target, in yards. An AoE may be centred anywhere within Range and extend beyond it. Without a listed Range, it is centred on you and does not affect you.

### Area
{:#area}

| Area notation | Shape | Value used for Dodge penalties |
| --- | --- | --- |
| Area X | Radius X yards | X |
| Line X, Y | Rectangle X yards wide and Y yards long | The lower of X and Y |
| Cube X | Square X by X yards | X |

To Dodge an AoE, compare the distance you could move during the attack’s Speed with the distance needed to escape its Area. Take −2 to Dodge per yard you fall short.

### Speed
{:#speed}

The jutsu's base Speed.

### Seal Speed
{:#seal-speed}

The jutsu's base seal speed.

### Special
{:#special}

Any Special status effect requires a Chakra Control roll against the target's Resistance unless its Jutsu or the status rules say otherwise. Stun, Knockback and conditions inflicted by Clan Jutsu do not require an additional status roll unless their entry explicitly requires one. Genjutsu resolve their listed effects using Genjutsu Offense against Genjutsu Defense instead.

### Tags
{:#tags}

Tags identify the Action’s type, range and damage. Discipline-specific tags appear on their own pages.

Type of Action  
Attack | It's an attack they need to directly defend against.  
Interrupt | It can be used in response to an action, usually an attack.  
Utility | A non-attacking technique or effect.  
Link | Added on to another action increasing its speed, fatigue cost, and whatever else. This does not change any tag, rank, or type of attack (such as a ninjutsu linked to a Taijutsu attack).

Range  
Melee | Must be in melee, or 1 yard. Can be increased by uniques, weapons, and so on.  
Projectile | Has a range, and you cannot target anyone you do not have direct line of sight  
AoE | Affects an area.  
Self | Generally only affects you and for everything else its difficult to determine the source of

Damage: Blunt, Slashing, Piercing, Energy  
This determines the type of wounds the technique deals. If it doesn’t have one, then it can’t wound even if it deals enough damage to do so.

### Effects
{:#effects}

Any special characteristics of a technique which aren't covered by one of the above categories are listed here.

## Taijutsu
{:#taijutsu}

### Requirements
{:#requirements}

Qualify for a Taijutsu Rank through any one of the following: Corps rank, Athletics or Research.

Rank:  
E: Stray  
C: Trailhand or Huntsman  
B: Warden or Legend

Athletics:  
D: 4  
C: 10  
B: 20  
A: 30

Research:  
D: 5  
C: 12  
B: 22  
A: 32

### Limb Requirements
{:#limb-requirements}

The tags **X Arms** and **X Legs** specify how many free, usable limbs a Taijutsu requires.

## Ninjutsu
{:#ninjutsu}

### Requirements
{:#requirements-2}

Qualify for a Ninjutsu Rank through any one of the following: Corps rank, Chakra Control or Research. Elemental Ninjutsu instead uses the paired requirements below and also requires the appropriate Elemental Aptitude.

Rank:  
E: Stray  
C: Trailhand or Huntsman  
B: Warden or Legend

Chakra Control:  
D: 5  
C: 15  
B: 25  
A: 35

Research:  
D: 5  
C: 12  
B: 22  
A: 32

### Elemental Requirements
{:#elemental-requirements}

To learn ordinary Elemental Ninjutsu, meet both individual skill minima and the combined minimum. Corps rank and Research do not replace these requirements. Genjutsu retains Diplomacy and Research.

| Rank | Chakra Control | Ninshou | Combined |
| :--- | ---: | ---: | ---: |
| E | 0 | 0 | 0 |
| D | 5 | 5 | 15 |
| C | 10 | 10 | 25 |
| B | 20 | 20 | 50 |
| A | 30 | 30 | 70 |

Elemental Affinity reduces one individual minimum and the combined minimum by its rank, each to a minimum of 0. It does not reduce both individual minima. Genuine Skill Focus ranks count; bonuses to skill rolls do not. Heritage-granted Elemental Aptitudes grant elemental access but do not waive these learning requirements. Explicit access to a particular Heritage technique remains governed by that technique.

Genius may qualify for the next Jutsu rank using the preceding rank's skill thresholds, retaining its +3 use-cost surcharge. At E-rank qualification it may reach D-rank, but still needs the relevant Elemental Aptitude. Naturalist may qualify with Survival alone, using the individual minima in the table (D 5, C 10, B 20, A 30), reduced by Elemental Affinity. This replaces both skills and the combined minimum. Mentor exemption requires at least 150% of both individual minima and the combined minimum, rounded up, after Affinity; when using Naturalist, apply 150% to its Survival requirement instead.

### Elemental Strength and Weaknesses
{:#elemental-strength-and-weaknesses}

Elemental strengths follow this cycle:

Earth > Water > Fire > Wind > Lightning > Earth

Each element beats the next one in the cycle. An elemental Ninjutsu Parry can defend against an AoE Ninjutsu of its own element or one it beats. For example, a Suiton Parry can stop a Suiton or Katon AoE within the technique’s usual limits.

## Elemental Weapons and Enhanced Attacks
{:#created-weapons-enhanced-attacks-and-you}

Weapons and ninjutsu that empower taijutsu have a few special effects. First, when created they count as ninjutsu (for cases of chakra rolls and the like), however, when attacking they count as taijutsu. This means they do not gain the bonuses from things such as specialist which empower ninjutsu, they would only gain it from taijutsu. They do count as their element when opposing different elements, however. This applies to dual-elements effects as well. Created weapons only count for their element against element defenses, they do not gain any of the other benefits of being dual-element.

Additionally, elemental weapons may only have chakra flow of their element used on them (for example, a water sword could not have a wind chakra flow). This does mean a dual-element weapon can use either elemental flow (an ice water sword could use wind or water chakra flow). This does not apply to jutsu such as Lightning Blade, which is merely a burst of an element, rather than infusing the element long-term.

For jutsu such as Four Seasonal Wind Palm, which enhance taijutsu, this can cause them to lose the benefits of the jutsu (such as enhanced blocking penetration), unless the element they turned it into had a similar benefit of the same type (for example, Ice retains the 25% block reduction, while Scorch would outright ignore blocking; on the other hand, Magnetism would offer no block reduction at all, as block reduction is not an inherent trait of Jiton ninjutsu).

## Bunshin
{:#bunshin}

Bunshin, unless stated otherwise, act 1 IC after they were created and have a cap of 3 at a time. If they were created before the initiative, then they act on their user's IC. Clones can ONLY perform actions listed in their action options.

Bunshin act on their own IC, separate from their creator, and using them does not increase the user's speed unless explicitly mentioned. As they are separate entities, they do NOT benefit from any jutsu you use that designates you, such as Kage Buyou. They would also count as individual entities for jutsu that can target/avoid a set number of targets. Notably, however, they do not count as allies for the Close Ties, Leader, or Tactician Uniques .

Any bunshin that can take actions (such as through the use of AP, or being independent) can talk. Bunshin that can not take actions cannot.

If a Bunshin’s Stamina or Chakra Exhaustion check would exceed its Fatigue limit, the triggering technique fails and the clone is destroyed.

Unless stated otherwise, all clones share the following rules and options:

By default clones use all of your combat stats at Fatigue 1 without any temporary benefits (such as having eaten a Soldier Pill before creating them) and with the following changes:

- Their damage bonus is half of yours

- They do not get any of your talents

- They only gain the automatic benefits of uniques (they could get the bonus stm/speed from large since its automatically applied but couldn’t scan through chakra sensor)

- The severity of any wounds inflicted by clones are reduced by 1 (potentially to nothing).

- They cannot use any ability that summons more clones

- They do not have/gain AP or WP, but you may use your own in their place

If they would ever fail a fatigue check or take any amount of damage they instantly disappear and the jutsu ends.

Hide Among Clones (Speed 4, or Speed \+6) You pull off a quick shell-game maneuver, confusing your opponents. If they've singled you out from your clones, and you're free to maneuver, you may do this to hide yourself. You roll Stealth against their Awareness skill; success means you've once again concealed yourself. Doing this alone is a Speed 4 action, but it may also be used with another action (such as an attack) by increasing that action's Speed by 6\.

Observe (Speed 4\) Anyone can try to observe you and your clones to try and find a discrepancy, such as the clones not casting shadows or not leaving footprints behind. This allows them to make an Awareness roll against your Chakra Control; if they succeed, they can tell you apart from all your clones, and recognize those clones as such, until you hide among them again.

When attacked while hidden among your clones:

1. The attacker declares their Attack.
2. The defender declares a Defense without rolling.
3. Roll 1dX, where X is the number of clones plus one. A 1 targets you; any other result targets a clone.
4. If a clone is targeted, both characters advance IC for their declared actions. The defender does not use or pay Stamina or Chakra for the declared Defense, but any AP spent to make its Speed legal is lost.
5. If you are targeted, resolve the declared Defense normally.

## Bukijutsu
{:#bukijutsu}

## Learning Requirements
{:#learning-requirements}

See [Learning Requirements]({{ '/rules/jutsu/bukijutsu/#learning-requirements-2' | relative_url }}).

### Buki Attacks
{:#buki-attacks}

See [Buki Attacks]({{ '/rules/jutsu/bukijutsu/#buki-attacks-2' | relative_url }}).

### Chain
{:#chain}

See [Chain]({{ '/rules/jutsu/bukijutsu/#chain-2' | relative_url }}).

### Fan Bridge
{:#fan-bridge}

See [Fan Bridge]({{ '/rules/jutsu/bukijutsu/#fan-bridge-2' | relative_url }}).

# Specialty Jutsu
{:#specialty-jutsu}

## Genjutsu Requirements
{:#genjutsu-requirements}

See [Genjutsu Requirements]({{ '/rules/jutsu/genjutsu/#requirements-3' | relative_url }}).

## Fūinjutsu Requirements
{:#fuinjutsu-requirements}

See [Sealing Requirements]({{ '/rules/jutsu/sealing/#requirements-5' | relative_url }}).

## Medical Ninjutsu
{:#medical-ninjutsu}

See [Medical Requirements]({{ '/rules/jutsu/medical/#requirements-4' | relative_url }}).

# Monster Summoning
{:#monster-summoning}

Monster Summoning allows a Hunter to call a trained creature into battle through a prepared Beast Seal. Summoned monsters use the [Monster Taming rules]({{ '/rules/talents/monster-taming/' | relative_url }}), including their species profiles, Growth Ranks, Traits, Species Features, Monster Techniques, Command AP, recovery and temperament. The full [21-species directory]({{ '/rules/talents/monster-taming/#species' | relative_url }}) contains the available creatures.

## Acquiring a Monster
{:#acquiring-a-monster}

Use [Monster Taming’s Core Talent]({{ '/rules/talents/monster-taming/#core-talent-7' | relative_url }}) to acquire and train a creature.

## Summoning and Commands
{:#summoning-and-commands}

Deploy it with [Beast Seal: Release]({{ '/rules/talents/monster-taming/#beast-seal-release' | relative_url }}), then use its [Independent Actions and Command AP]({{ '/rules/talents/monster-taming/#actions-and-command-ap' | relative_url }}) rules. Monster Summoning grants no additional creature or separate Summoning Contract.

<div class="jutsu-breadcrumb jutsu-end"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>
