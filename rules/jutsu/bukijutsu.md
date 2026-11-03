---
layout: rulebook
title: "Bukijutsu Rules"
volume: "IV"
volume_slug: "jutsu"
jutsu_section: "bukijutsu"
permalink: "/rules/jutsu/bukijutsu/"
---

<div class="jutsu-breadcrumb"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>


# Bukijutsu
{:#bukijutsu-2}

Bukijutsu adds strength-scaled damage and weapon-specific effects to Basic Weapon Attacks. Use Chains to pressure a target and set up a finisher.

## Learning Requirements
{:#learning-requirements-2}

E-Rank Bukijutsu is universally available to player characters.

E-Rank — Athletics \-; Research \-.

D-Rank — Athletics 4; Research 5\.

C-Rank — Athletics 10; Research 12\.

B-Rank — Athletics 20; Research 22\.

A-Rank — Athletics 30; Research 32\.

B-Rank and A-Rank use the normal mentor rule. You must be taught the technique unless you exceed the relevant learning requirement by 50%, following the general Jutsu rules.

## Buki Attacks
{:#buki-attacks-2}

Unless a technique lists fixed Damage or Speed, an attacking Bukijutsu starts from the Basic Weapon Attack of the weapon being used and applies the modifiers printed in the technique. “dS” uses that weapon’s base damage die size.

A weapon attack may only be modified or replaced by one Bukijutsu unless another technique explicitly has the Link tag. Chain tags are not Link tags.

If your weapon has an innate delay, any Bukijutsu you cast gains a Delay equal to half your weapon’s delay.

If a Bukijutsu calls for an attack roll, that means a 1d20 \+ your Accuracy \- 10\.

When a technique refers to the same Defense, it means the same broad defensive action: Dodge, Parry, Block, Take the Hit, and so on. Different named Parry techniques are still Parry unless a technique specifically says otherwise.

Bukijutsu use Move with an Attack normally unless a technique says otherwise. If a technique lets you use Move with an Attack in another direction, calculate the distance normally from half the Attack's final Speed. It changes the direction or timing of that movement; it does not create a second movement allowance. If you already spent some of your Move with an Attack distance before the strike, only the remainder is available afterward.

## Scaling and effect timing
{:#bukijutsu-scaling}

When these techniques use **Athletics/5** for a roll bonus, penalty or extra weapon allowance, round down, with a minimum of 2 and maximum of 6. Other attribute divisions used for yards, status severity, Control or target counts round down and use their printed minimums and caps. Damage Bonus calculations retain the normal one-decimal rule.

Reach and Range percentage increases use the weapon or technique's value before maintained Bukijutsu and setup bonuses. Calculate each increase from that same value; do not compound them. Final Damage and Wounding percentages use their normal system rules. PDB × Speed and percentage effects use the final Attack normally.

A bonus for your next Chain Attack is consumed by that Attack and ends if that Chain ends. Other one-use benefits end when used or when the combat ends. Repeated applications of the same named effect do not stack. An Interrupt must explicitly allow AoE defense to Parry an AoE; such a Parry has no Partial Defense.

## Rank-scaled weapon damage
{:#rank-scaled-weapon-damage}

Damaging Bukijutsu add weapon-sized dice that grow with STR. Their Damage line uses the greater of the technique’s printed floor and the following count:

| Rank | Additional weapon dice |
| --- | --- |
| E | floor(STR/15)dS |
| D | floor(STR/10)dS |
| C | floor(STR/7)dS |
| B | floor(STR/5)dS |
| A | floor(STR/3)dS |

Add this dice package to the weapon’s normal dice, then add Damage Bonus × final Speed. The printed floor and STR count are alternatives, not two bonuses. These extra technique dice are not limited by the cap on Basic Unarmed dice.

For techniques that resolve several weapon hits, include this dice package in each hit before applying that hit’s damage percentage or dividing damage as directed by the technique. A secondary hit copying an Attack’s Final Damage already includes the package; never add it again. Multi-Throw distributes one package across its projectiles per target, not one package per projectile. Techniques that divide damage among targets still do so.

Links, non-damaging actions and counters expressly making a Basic Weapon Attack do not receive a separate rank dice package. Using several Links does not grant several packages. Defense-Speed multipliers from Bukijutsu do not stack; use the highest. Each named Bukijutsu Link can modify an Attack once; techniques requiring a setup or Chain still require it.

## Specials and Status Rolls
{:#specials-and-status-rolls}

Bukijutsu use the normal Special and Status Roll rules. If a Bukijutsu lists a status in its Special line, use Athletics for the Status Roll unless the technique says otherwise; the target rolls Resistance normally. Stun follows its normal rules and is not separately resisted.

A Special attached to a damaging Attack only applies if the Attack still produces an effect after defenses and damage reduction, following the normal rules for statuses. Partial Success reduces a numeric Special in the same way it reduces the rest of the Attack's effects unless the technique says otherwise.

Knockback: Bukijutsu that list Knockback are allowed to hit harder when the user wins the Status Roll decisively. After a successful Athletics vs Resistance Status Roll, increase the listed Knockback by 1 yard for every full 3 points the target failed by, to a maximum of double the listed Knockback. Apply Partial Success to the resulting Knockback normally.

If a technique changes the direction of Knockback, it will say so. This still counts as Knockback and forced movement; it is not a separate Pull or Shift status.

## Chain
{:#chain-2}

Chain Value: A Chain is tracked against one target and has a value of 0, 1 or 2\. It has no passive damage bonus.

Chain 1 — Entry: May be used at Chain 0 or 1\. On a hit, establish Chain 1 against that target. A successful Chain 1 during an existing Chain keeps the value at 1\.

Chain 2 — Pressure: Requires Chain 1 or 2 against that target. On a hit, set the Chain to 2\. Further Chain 2 techniques may be used while at 2 and keep the value at 2\.

Chain 3 — Finisher: Requires Chain 2 against that target. The Chain ends after the technique resolves, hit or miss. A Chain 2 or Chain 3 Attack must include the chained target; extra targets do not provide additional Chain advances or Openings.

Chain X — Utility: May be used at any Chain value, including 0\. It never increases or decreases Chain value.

Chain Window: A Chain ends if 20 IC pass without you using a Chain-tagged Bukijutsu or making a Basic Weapon Attack against the chained target. A Basic Weapon Attack refreshes the window but does not change Chain value. Chain X refreshes this window unless its own text says otherwise.

Breaking a Chain: The Chain ends if you Wait, fully miss a Chain 2, become Stunned, lose access to the required weapon, use a non-Chain Attack against another target that is not Chain 1, or use a non-Chain non-Interrupt action other than a Basic Weapon Attack against the chained target. Ordinary movement, purely defensive Interrupts, and Bukijutsu Utility actions compatible with your weapon do not break Chain; unless they are Chain X, they do not refresh the Chain Window.

No Repeat Acceleration: A Chain 2 never gains a stacking Speed reduction merely because a Chain 2 was used before it. Technique-specific repeat bonuses cannot reduce Speed unless they explicitly say so, and no repeat bonus may stack with itself.

Repeat Debuffs: A temporary Accuracy, Defense, Parry, Dodge or similar numerical penalty caused by the same named Bukijutsu does not stack with itself unless the technique explicitly says otherwise. A new application refreshes or replaces the old one.

Changing Weapons: Chain value belongs to the target, not the weapon. Changing or readying weapons must cost Speed 0 or be handled by Chain X; otherwise the equipment change breaks Chain.

Cross-Class Finishers: To use a Chain 3 from a weapon class different from the class that began the Chain, at least one successful Chain 1 or Chain 2 since the Chain began must have used a weapon compatible with that Chain 3’s class. Dual counts as compatible only with the specific weapons actually used by that Dual attack.

Finisher Weapon: A Chain 3 uses only the properties of the weapon used for that Chain 3\. Damage, dual-hit percentages, wound riders, reach changes and similar benefits from earlier attacks do not carry into it unless the Chain 3 explicitly says they do.

### Chain Openings
{:#chain-openings}

The first time you advance from Chain 1 to Chain 2 during a Chain, gain one **Opening** against that target. Repeating Chain 2, returning to Chain 1 or using a multi-hit Attack does not grant another Opening in that Chain.

Before a later Attack against that target is rolled, spend the Opening on one of these benefits:

- **Precision:** reduce one Called Shot Accuracy penalty by Athletics/5, minimum 0.
- **Control:** gain +Athletics/5 on one Special Status Roll caused by that Attack. Declare which Special when spending the Opening. It does not increase Stun, skip a Resistance roll or improve a Genjutsu offense roll.
- **Assist:** give one willing ally +Athletics/5 Accuracy on its declared Attack against that target instead of benefiting your own Attack.

Use the Opening owner’s Athletics, rounded down with a minimum of 2 and maximum of 6. A benefit affects only the chained target, even in an AoE. Each Attack can receive one Opening benefit, including a Team Attack. Spend it before the affected roll; a miss does not refund it.

You may spend Precision or Control on a non-Chain Attack of your own, then end the Chain normally. An ally can receive Assist without using Bukijutsu. Unspent Openings end when the Chain ends. A Chain 3 may use the Opening before ending the Chain, but neither generates a second Opening nor refunds a spent one.

### Combining pressure effects
{:#combining-pressure-effects}

Apply only the highest Bukijutsu bonus to any one Accuracy, Defense or Special roll, and only the highest Bukijutsu penalty to any one roll. This includes stances, prepared effects, Links and Openings. Ordinary weapon statistics and non-Bukijutsu abilities follow their own stacking rules. Called Shot reductions granted by Bukijutsu likewise use the highest; other sources follow their own rules.

Extra projectile allowances from Bukijutsu use the highest, not their sum. Speed multipliers from Bukijutsu use the strongest reduction or increase of each kind rather than compounding; normal Speed minimums still apply.

A target can be forced to reroll its Defense once per Attack by weapon/Bukijutsu effects, including Weapon Mastery. A technique that makes a second strike against the same target cannot also force a Defense reroll against it. Multi-hit attacks retain their explicitly printed separate defenses; they do not generate additional Chain advances or Openings.

A counterattack granted by Bukijutsu can be defended normally, but resolving that Defense cannot generate another counterattack.

### Fan Bridge
{:#fan-bridge-2}

Seamless Wind may carry one Fan-tagged Fuuton through an active Chain. The Fuuton remains Ninjutsu, never becomes Chain 1/2/3, receives no Bukijutsu damage or status riders, and does not refresh the Chain Window. Your Chain remains active. You can do this once per Chain.

## Bukijutsu Stances
{:#bukijutsu-stances}

Stances are Self Upkeep Bukijutsu. Maintain only one at a time; activating another ends the first. Attacking, moving and defending do not end a Stance. Stances use normal Upkeep and Preparation rules, but do not receive effects restricted to Ninjutsu Upkeep.

Bukijutsu Stances do not cost XP to learn and are automatically unlocked when you meet the relevant Bukijutsu rank requirements.

Bukijutsu Stances cannot be chosen as Signature Moves unless another rule explicitly allows it.

### D-Rank
{:#bukijutsu-stances-d-rank .jutsu-rank-heading}

#### Jōdan no Kamae - High Guard
{:#high-guard .jutsu-technique}

<span class="jutsu-rank-badge">D-Rank</span>

You raise your weapon for a forceful attack, leaving yourself more exposed.

Rank: D  
Stamina: 8  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Your Chain 1 and Chain 2 Melee Bukijutsu gain +Athletics/5 Accuracy. Your Chain 3 Melee Bukijutsu gain +15% Final Damage.

#### Gedan no Kamae - Low Guard
{:#low-guard .jutsu-technique}

<span class="jutsu-rank-badge">D-Rank</span>

The weapon stays low and close to the body, making it easier to receive an attack before committing to your own.

Rank: D  
Stamina: 8  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Gain +Athletics/5 to targeted Melee Parries. After fully defending against an enemy Attack, your next Melee Chain Attack against that enemy gains +15% Final Damage if it is your next non-Interrupt Action.

#### Nagai Kamae - Long Guard
{:#long-guard .jutsu-technique}

<span class="jutsu-rank-badge">D-Rank</span>

You keep your weapon extended to hold an opponent at the edge of its reach.

Rank: D  
Stamina: 9  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Increase your Melee Weapon Reach by 50%, minimum +2 yards. Gain +Athletics/5 Parry against targeted Melee Attacks that began outside your unmodified weapon Reach.

### C-Rank
{:#bukijutsu-stances-c-rank .jutsu-rank-heading}

#### Hiraki no Kamae - Open Guard
{:#open-guard .jutsu-technique}

<span class="jutsu-rank-badge">C-Rank</span>

You leave an opening to draw the opponent into a committed defense.

Rank: C  
Stamina: 12  
Upkeep: 3  
Speed: 5  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: After the target declares its Defense against your Chain Attack, impose a penalty of Athletics/5 on that Defense. The penalty applies once to each Attack, including one that generates multiple hits.

#### Kissaki no Kamae - Point Guard
{:#point-guard .jutsu-technique}

<span class="jutsu-rank-badge">C-Rank</span>

You keep the point or striking line fixed on one part of the opponent and sacrifice broader coverage for precision.

Rank: C  
Stamina: 12  
Upkeep: 3  
Speed: 5  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Reduce Called Shot Accuracy penalties with weapon attacks by Athletics/5, minimum 0. Called Shots gain +15% Wounding.

### B-Rank
{:#bukijutsu-stances-b-rank .jutsu-rank-heading}

#### Sutemi no Kamae - Committed Guard
{:#committed-guard .jutsu-technique}

<span class="jutsu-rank-badge">B-Rank</span>

You commit your weight to heavy strikes.

Rank: B  
Stamina: 18  
Upkeep: 4  
Speed: 6  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Damaging Melee Bukijutsu gain +25% Wounding. Increase their printed Knockback by 50%, rounded down, and their printed Stun by half your PDB, rounded down. Apply these increases before Special rolls and Partial Defense.


# Universal Bukijutsu
{:#universal-bukijutsu}

### E-Rank
{:#universal-bukijutsu-e-rank .jutsu-rank-heading}

#### Buki Kaishū - Weapon Recovery
{:#weapon-recovery .jutsu-technique}

<span class="jutsu-rank-badge">E-Rank</span>

You recover or ready a weapon without losing the sequence of your attacks.

Rank: E  
Stamina: 4  
Speed: 3  
Tags: Chain X, Utility, Bukijutsu  
Effects: Draw, pick up, or retrieve one weapon within arm’s reach without changing Chain value.

### D-Rank
{:#universal-bukijutsu-d-rank .jutsu-rank-heading}

#### Ryūsui no Kamae - Flowing Guard
{:#flowing-guard .jutsu-technique}

<span class="jutsu-rank-badge">D-Rank</span>

You shift your footing and grip into a new stance while maintaining pressure.

Rank: D  
Stamina: 6  
Speed: 3  
Tags: Chain X, Utility, Bukijutsu  
Effects: Switch from one active Bukijutsu Stance to another you know without changing Chain value. Pay this technique’s Stamina and Speed instead of the new Stance’s activation costs. The old Stance ends and the new Upkeep begins.

### B-Rank
{:#universal-bukijutsu-b-rank .jutsu-rank-heading}

#### Buki Kudaki - Weapon Breaker
{:#weapon-breaker .jutsu-technique}

<span class="jutsu-rank-badge">B-Rank</span>

Your strike bites into the weakest point of the weapon used to catch it.

Rank: B  
Stamina: \+10  
Speed: \+2  
Tags: Link, Bukijutsu  
Effects: Use retroactively after your weapon Attack is successfully Parried or Blocked by a weapon. After that Defense resolves, inflict WDP equal to half the defending weapon’s damage-level threshold, rounded up. Use that weapon’s Durability + its wielder’s DEX/10. This is explicit weapon damage and applies once to that weapon per Attack.

#### Chakura Kyōka - Chakra Reinforcement
{:#chakra-reinforcement .jutsu-technique}

<span class="jutsu-rank-badge">B-Rank</span>

You shape chakra around the weapon’s striking surface, changing the injury it inflicts.

Rank: B  
Chakra: 22  
Upkeep: 5  
Speed: 10  
Tags: Utility, Self, Upkeep, Bukijutsu  
Effects: Choose Blunt, Slashing, Piercing or Energy. One held weapon may deal that wound type and gains a Damage Bonus equal to half your NDB. Calculate this bonus when activating the technique, before bonuses granted by maintained weapon techniques.

### A-Rank
{:#universal-bukijutsu-a-rank .jutsu-rank-heading}

#### Chakura Enshin - Chakra Reach
{:#chakra-reach .jutsu-technique}

<span class="jutsu-rank-badge">A-Rank</span>

Shaped chakra extends the weapon’s edge, point, or striking line beyond its physical reach, carrying the threat several yards past the material weapon.

Rank: A  
Chakra: 20  
Upkeep: 3  
Speed: 10  
Tags: Utility, Self, Upkeep, Bukijutsu  
Effects: One Melee Weapon gains additional Reach equal to the greater of its unmodified Reach or your CHA/5. When striking through this extension, it does not trigger on-contact punishment caused solely by touching the defender. Attacks still need a clear path.


## Chakra Flow
{:#chakra-flow}

### C-Rank
{:#chakra-flow-c-rank .jutsu-rank-heading}

#### Chakura Nagashi - Chakra Flow
{:#chakura-nagashi-chakra-flow .jutsu-technique}

<span class="jutsu-rank-badge">C-Rank</span>

You circulate elemental chakra through your weapons, coating them in flame, stone, lightning or another nature you can use.

Rank: C  
Chakra: 20  
Upkeep: 4  
Speed: 12  
Requires: Chakra Control 12, appropriate Elemental Affinity and Aptitude, or Heritage access  
Tags: Utility, Self, Upkeep, Bukijutsu  
Effects: Choose an element you have access to. While maintained, your weapon gains the corresponding Chakra Flow effect and counts as that element against Ninjutsu defenses.

Chakra Flow affects both Dual Weapons and automatically transfers to newly drawn weapons. You may maintain only one element at a time. Created elemental weapons may only use a compatible Chakra Flow.

Your weapon may Parry elemental Projectile Jutsu up to C-Rank if strong against their element, D-Rank if neutral, or E-Rank if weak. Resolve this using the normal Parry rules.

Status Effects use Chakra Control against Resistance where applicable. Effects that apply a Status, Mark or terrain apply once per Attack Action.

### Primary Elements

**Doton - Mountain's Weight**

*Earth chakra hardens around the weapon, giving it the crushing weight of stone at the moment of impact. Even a successful Parry can leave an opponent's weapon cracked beneath the force.*

Damaging hits inflict Stun 3. When your Attack is Parried by a weapon, the defending weapon suffers WDP equal to half its wear threshold, rounded up, instead.

**Katon - Searing Edge**

*Flames coil around the weapon's striking surface, burning hotter as chakra is fed into them. The heat follows every cut, searing flesh and leaving wounds that continue to smoulder.*

Add half your NDB to the weapon's Damage Bonus. Damaging hits also inflict Burns 3.

**Raiton - Disrupting Current**

*Lightning races across the weapon in bright, jagged arcs. Each strike discharges a violent current through the victim, overwhelming their muscles while the electricity penetrates their defences.*

The weapon ignores 50% of the target's flat DR. Damaging hits inflict Paralysis 2 for 10 IC.

**Suiton - Flowing Current**

*Water envelops the weapon in a constantly shifting current. Rather than meeting resistance head-on, the weapon slips around opposing blades, redirecting strikes with fluid, almost effortless movements.*

The weapon cannot be Parried by physical weapons and gains +2 Parry.

**Fūton - Invisible Edge**

*Wind chakra extends beyond the weapon's physical surface, producing an invisible edge that cuts through the air itself. Shields and conventional guards offer little protection against a blade that reaches beyond its own steel.*

The weapon gains +3 Reach, and its Attacks cannot be Blocked.

### Advanced Elements

Advanced elements require their corresponding Heritage or another source of access.

**Hyōton - Frozen Fang**

*Crystalline ice spreads across the weapon, forming a razor-sharp surface that freezes whatever it cuts. A sufficiently deep wound can leave flesh and bone permanently encased in ice.*

Attacks gain +25% Wounding. When inflicting a Major or worse Wound, you may replace it with Hyōton's Permanent Freeze of the corresponding Severity.

**Mokuton - Rootbound Weapon**

*Living wood coils around the weapon, growing thorns and twisting roots along its surface. Every successful strike sends those roots plunging into the surrounding ground, turning the battlefield into a tangled forest of hungry growth.*

On a full hit, create an Area 3 of Sea of Thorns 1 beneath the target, lasting 20 IC.

**Yōton - Volcanic Weapon**

*Lava Release changes the weapon's substance according to its wielder's particular expression. Some weapons drip with molten stone, others harden like cement, while others bend and recoil like living rubber.*

Gain the effect matching your Volcanic Expression:

- **Magma:** The weapon drips molten rock that erupts across the ground on impact. Damaging hits create an Area 3 of Magma 3 for 10 IC.
- **Quicklime:** A coating of pale, reactive lime spreads from the weapon, hardening around anything it touches. Damaging hits inflict Quicklime Immobilization 3, increasing by 2 on subsequent hits, maximum 8.
- **Rubber:** The weapon stretches and recoils with elastic force, launching enemies away or throwing its wielder out of danger. Attacks gain Knockback 5, redirectable by up to 90 degrees. After fully Parrying, you may move 3 yards without increasing IC.

**Shakuton - Withering Edge**

*The weapon radiates a dry, suffocating heat. Rather than burning its victims, it steals the moisture from their bodies, leaving brittle flesh and withered wounds in its wake.*

The weapon ignores Armor Absorption and inflicts Dehydration 2 on damaging hits.

**Jiton - Magnetic Conduction**

*Magnetic chakra circulates through the weapon, attracting loose fragments of metal and surrounding its surface with a faint electromagnetic hum. Each strike imparts a charge, allowing subsequent attacks to accelerate towards or repel their victims.*

Choose Positive or Negative polarity for each Attack. Damaging hits apply one Magnetize Charge of that polarity. Against an oppositely Charged target, reduce the Attack's Base Speed by 2 per existing Charge, retaining its original Speed for Damage calculations. Normal Speed minimums apply.

**Futton - Boiling Conduction**

*Superheated steam hisses from the weapon's surface. The user may vent this pressure to propel themselves through combat or concentrate it into a corrosive coating capable of eating through armour.*

Gain the effect of your active Futton Mode:

- **Pressure:** Damaging hits generate 1 Steam, maximum once per Action. After attacking, you may spend 1 Steam to move 6 yards without increasing IC.
- **Corrosion:** Attacks ignore 25 percentage points of Armor Absorption and deal +25% Final Damage to Barriers.

**Bakuton - Detonating Edge**

*Explosive chakra gathers along the weapon, erupting in a violent burst whenever it strikes. Even a glancing blow can release enough force to hurl an opponent backwards, while more precise strikes leave dangerous explosive marks behind.*

Weapon Attacks gain Blast 4 and count as Bakuton Melee Attacks for the purpose of placing Detonation Marks.

**Jinton - Particle Edge**

*A thin, geometric boundary forms around the weapon, its surface shimmering as matter begins to lose cohesion. Rather than cutting through resistance, the weapon disassembles the chakra holding that resistance together.*

The weapon ignores 50% of the target's DR and deals double Final Damage against chakra-created Barriers and Constructs.

### B-Rank
{:#chakra-flow-b-rank .jutsu-rank-heading}

#### Chakura Nagashi: Enkaku Dendō - Long Conduction
{:#chakura-nagashi-enkaku-dendo-long-conduction .jutsu-technique}

<span class="jutsu-rank-badge">B-Rank</span>

Ordinary Chakra Flow fades as a weapon leaves its wielder's grasp. Through advanced chakra control, the user can sustain that current across greater distances, sending arrows trailing flame, shuriken crackling with lightning, or kunai carrying the crushing weight of earth.

Rank: B  
Chakra: +8  
Upkeep: +2  
Speed: +4  
Requires: Chakra Flow, Chakra Control 25  
Tags: Utility, Link, Bukijutsu  
Effects: Link to Chakra Flow when activating it. Chakra Flow may now affect Bows, Crossbows, Kunai Launchers, Shuriken Launchers and Thrown Weapons.

Ranged Attacks gain the chosen Flow's offensive effects, applying once per Attack Action, even when firing multiple projectiles.

Any Reach granted by Chakra Flow instead increases the weapon's Range by 5 yards per point of Reach. Defensive effects require a weapon capable of performing the corresponding defense.


<div class="jutsu-breadcrumb jutsu-end"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>
