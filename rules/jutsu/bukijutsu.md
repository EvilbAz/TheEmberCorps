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

Bukijutsu builds on normal weapon attacks rather than replacing them. Bukijutsu adds strength-scaled damage and weapon-specific ways to break guards, punish defenses, disable weapons and finish a Chain. The core Chain structure is unchanged, but it is slightly more forgiving so using a sensible weapon action does not immediately erase the sequence you have built.

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

Stances are ordinary Self Upkeep Bukijutsu. You may maintain only one Bukijutsu Stance at a time; activating another ends the first. They do not end merely because you attack, move or defend. They use the normal Upkeep rules, may be activated through Preparation when legal, and interact with generic Upkeep effects only when those effects actually apply to Bukijutsu or to Upkeep generally. Effects written specifically for Ninjutsu Upkeep do not apply.

Bukijutsu Stances do not cost XP to learn and are automatically unlocked when you meet the relevant Bukijutsu rank requirements.

Bukijutsu Stances cannot be chosen as Signature Moves unless another rule explicitly allows it.

#### High Guard
{:#high-guard}

You hold the weapon high enough to threaten the first line immediately, accepting a more exposed defensive posture.

Rank: D  
Stamina: 8  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Your Chain 1 and Chain 2 Melee Bukijutsu gain +Athletics/5 Accuracy. Your Chain 3 Melee Bukijutsu gain +15% Final Damage.

#### Low Guard
{:#low-guard}

The weapon stays low and close to the body, making it easier to receive an attack before committing to your own.

Rank: D  
Stamina: 8  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Gain +Athletics/5 to targeted Melee Parries. After fully defending against an enemy Attack, your next Melee Chain Attack against that enemy gains +15% Final Damage if it is your next non-Interrupt Action.

#### Long Guard
{:#long-guard}

You extend the weapon into the space in front of you and make the opponent fight through its reach before they can reach your body.

Rank: D  
Stamina: 9  
Upkeep: 2  
Speed: 4  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Increase your Melee Weapon Reach by 50%, minimum +2 yards. Gain +Athletics/5 Parry against targeted Melee Attacks that began outside your unmodified weapon Reach.

#### Open Guard
{:#open-guard}

You deliberately leave a line available, using the invitation to make the defender commit before your real angle is chosen.

Rank: C  
Stamina: 12  
Upkeep: 3  
Speed: 5  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: After the target declares its Defense against your Chain Attack, impose a penalty of Athletics/5 on that Defense. The penalty applies once to each Attack, including one that generates multiple hits.

#### Point Guard
{:#point-guard}

You keep the point or striking line fixed on one part of the opponent and sacrifice broader coverage for precision.

Rank: C  
Stamina: 12  
Upkeep: 3  
Speed: 5  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Reduce Called Shot Accuracy penalties with weapon attacks by Athletics/5, minimum 0. Called Shots gain +15% Wounding.

#### Committed Guard
{:#committed-guard}

You build every movement around the next heavy commitment, gaining force at the cost of reacting cleanly when the opponent moves first.

Rank: B  
Stamina: 18  
Upkeep: 4  
Speed: 6  
Tags: Utility, Self, Upkeep, Bukijutsu Stance  
Effects: Damaging Melee Bukijutsu gain +25% Wounding. Increase their printed Knockback by 50%, rounded down, and their printed Stun by half your PDB, rounded down. Apply these increases before Special rolls and Partial Defense.


# Universal Bukijutsu
{:#universal-bukijutsu}

#### Weapon Recovery
{:#weapon-recovery}

A weapon on the ground is not “out of the fight”; it is a problem of distance, timing, and who reaches it first. You hook it with a foot, catch a returning cord, snatch it from the dirt, or draw a replacement without surrendering the exchange you already built.

Rank: E  
Stamina: 4  
Speed: 3  
Tags: Chain X, Utility, Bukijutsu  
Effects: Draw, pick up, or retrieve one weapon within arm’s reach without changing Chain value.

#### Flowing Guard
{:#flowing-guard}

A practiced stance change should not look like somebody stopping to remember a new pose. You let the old guard collapse naturally into the new one, moving hands, feet, and weapon through positions that remain dangerous the entire time.

Rank: D  
Stamina: 6  
Speed: 3  
Tags: Chain X, Utility, Bukijutsu  
Effects: Switch from one active Bukijutsu Stance to another you know without changing Chain value. Pay this technique’s Stamina and Speed instead of the new Stance’s activation costs. The old Stance ends and the new Upkeep begins.

#### Weapon Breaker
{:#weapon-breaker}

When an opponent trusts their weapon to catch yours, you punish the contact itself. The strike is allowed to bite into the defending edge, shaft, guard, or frame at the point of worst leverage, turning a successful defense into a durability problem.

Rank: B  
Stamina: \+10  
Speed: \+2  
Tags: Link, Bukijutsu  
Effects: Use retroactively after your weapon Attack is successfully Parried or Blocked by a weapon. After that Defense resolves, inflict WDP equal to half the defending weapon’s damage-level threshold, rounded up. Use that weapon’s Durability + its wielder’s DEX/10. This is explicit weapon damage and applies once to that weapon per Attack.

#### Chakra Reinforcement
{:#chakra-reinforcement}

Chakra can make a weapon behave differently without changing what it physically is. You reinforce the part that matters for the injury you want—edge, point, striking face, or a projected chakra surface—letting one familiar weapon answer several kinds of protection.

Rank: B  
Chakra: 22  
Upkeep: 5  
Speed: 10  
Tags: Utility, Self, Upkeep, Bukijutsu  
Effects: Choose Blunt, Slashing, Piercing or Energy. One held weapon may deal that wound type and gains a Damage Bonus equal to half your NDB. Calculate this bonus when activating the technique, before bonuses granted by maintained weapon techniques.

#### Chakra Reach
{:#chakra-reach}

Shaped chakra extends the weapon’s edge, point, or striking line beyond its physical reach, carrying the threat several yards past the material weapon.

Rank: A  
Chakra: 20  
Upkeep: 3  
Speed: 10  
Tags: Utility, Self, Upkeep, Bukijutsu  
Effects: One Melee Weapon gains additional Reach equal to the greater of its unmodified Reach or your CHA/5. When striking through this extension, it does not trigger on-contact punishment caused solely by touching the defender. Attacks still need a clear path.


<div class="jutsu-breadcrumb jutsu-end"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>
