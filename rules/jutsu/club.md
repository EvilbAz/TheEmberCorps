---
layout: rulebook
title: "Club Bukijutsu"
volume: "IV"
volume_slug: "jutsu"
jutsu_section: "club"
permalink: "/rules/jutsu/club/"
---

<div class="jutsu-breadcrumb"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>


# Club Bukijutsu
{:#club-bukijutsu}

*Clubs batter armor, break footing and send enemies reeling.*

## E-Rank
{:#e-rank-11}

#### Driving Blow
{:#driving-blow}

You drive the target back with a heavy strike.

Rank: E  
Stamina: +3  
Damage: +max(2, floor(STR/15))dS  
Speed: +1  
Special: Knockback 3  
Tags: Chain 1, Club, Attack, Movement  
Effects: Resolve Knockback using the greater of 3 or STR/10 as its printed severity. On a successful Special, choose to follow the target’s actual movement, ending within Reach, or increase the resulting distance by 50%. Obstacles stop movement normally.

#### Rising Blow
{:#rising-blow}

You swing upward beneath the target’s guard.

Rank: E  
Stamina: \+4  
Damage: +max(2, floor(STR/15))dS  
Speed: \+2  
Special: Stun 3  
Tags: Chain 1, Club, Attack  
Effects: Apply the printed Stun normally. If the target was already Stunned, replace this Stun with +20% Final Damage.

#### Returning Swing
{:#returning-swing}

You strike into the opening left by the opponent's attack.

Rank: E  
Stamina: +5  
Damage: +max(3, floor(STR/15))dS  
Speed: +2  
Tags: Chain 2, Club, Attack  
Effects: If this is your first non-Interrupt Action after resolving an Attack directed at you by the target, this Attack gains +Athletics/5 Accuracy.

#### Overhead Blow
{:#overhead-blow}

You bring the weapon down on the target's head.

Rank: E  
Stamina: +8  
Damage: +max(5, floor(STR/15))dS  
Speed: +5  
Special: Stun 5  
Tags: Chain 3, Club, Attack  
Effects: Make a Called Shot to the Head using its normal penalty. Gain +15% Wounding. There is no additional Accuracy or failed-Attack penalty.

#### Brace
{:#brace}

You brace the club across the incoming blow.

Rank: E  
Stamina: 4  
Speed: 3  
Tags: Chain X, Club, Utility, Interrupt  
Effects: Parry a Melee Attack with +2. On success, reduce Knockback from that Attack to 0. This does not defend against AoEs.

#### Wide Swing
{:#wide-swing}

You sweep the weapon across several nearby opponents.

Rank: E  
Stamina: \+6  
Damage: +max(2, floor(STR/15))dS  
Speed: \+3  
Area: 2  
Special: Knockback 2  
Tags: Bukijutsu, Club, Attack  
Effects: Attack all enemies in reach. Divide Speed×PDB evenly among targets hit. Resolve the Special separately against each fully hit target.

## D-Rank
{:#d-rank-11}

#### Rib Shot
{:#rib-shot}

You strike the target’s ribs to disrupt their breathing and posture.

Rank: D  
Stamina: \+8  
Damage: +max(4, floor(STR/10))dS  
Speed: \+1  
Tags: Chain 2, Club, Attack  
Effects: On a full hit, choose one: Smother the Breath — the target’s next Attack takes an Accuracy penalty of Athletics/5; or Rattle the Frame — apply Stun equal to the greater of 4 or half your PDB, rounded down. Smother the Breath ends after that Attack.

#### Armor Crack
{:#armor-crack}

You direct the weapon’s weight into armour or a barrier.

Rank: D  
Stamina: \+12  
Damage: +max(5, floor(STR/10))dS  
Speed: \+4  
Tags: Chain 3, Club, Attack  
Effects: After defense, deal this Attack’s damage directly to the struck armor piece, Barrier or Construct before resolving damage against its wearer. Apply structural damage-type matchups once. If that protection breaks, resolve the hit against the wearer without that protection; otherwise use its remaining protection normally. This structural strike is additional damage and does not bypass the target’s Defense.

#### Body Check
{:#body-check}

This action is available to all Hunters as [Shove]({{ '/rules/core/#shove' | relative_url }}). It requires no Club or Chain and does not advance Chain.

#### Head-Heavy Grip
{:#head-heavy-grip}

Chakra and a shifted grip increase the weapon’s leverage.

Rank: D  
Chakra: 14  
Upkeep: 3  
Speed: 8  
Tags: Bukijutsu, Club, Utility  
Effects: One blunt weapon gains additional Reach equal to the greater of 2 yards or STR/10. Increase its printed Bukijutsu Knockback by 50%, rounded down, before the Status Roll. It may deal Blunt wounds even if another property would change its wound type.

## C-Rank
{:#c-rank-11}

#### Low Sweep
{:#low-sweep}

You drive the club through the target’s base instead of through their centre, forcing them to choose between footing and impact.

Rank: C  
Stamina: \+9  
Damage: +max(5, floor(STR/7))dS  
Speed: \+3  
Special: Knockback 4 or Prone  
Tags: Chain 1, Club, Attack  
Effects: On a full hit, choose Prone or Knockback equal to the greater of 6 or STR/5, then resolve the Special normally.

#### Short Grip
{:#short-grip}

You adjust your grip to regain control of the heavy weapon.

Rank: C  
Stamina: 6  
Speed: 2  
Tags: Chain X, Club, Utility  
Effects: For your next Club Chain Attack, halve temporary Accuracy penalties and weapon Delay, rounding the remaining values down. If neither applies, gain +15% Final Damage and you may treat it as Piercing by concentrating force into the weapon’s end. The benefit ends if your next non-Interrupt Action is not that Attack.

#### Wallbreaker
{:#wallbreaker}

You strike a wall or defence with the weapon’s full weight.

Rank: C  
Stamina: \+15  
Damage: +max(8, floor(STR/7))dS  
Speed: \+6  
Tags: Bukijutsu, Club, Attack  
Effects: Against Armor, Barriers and unattended objects, this Attack deals \+45% final damage and cannot have its damage reduced below 50% by Partial Success.

## B-Rank
{:#b-rank-11}

#### Guard Rattle
{:#guard-rattle}

You hit the defending weapon or limb hard enough to shake its hold.

Rank: B  
Stamina: \+15  
Damage: +max(8, floor(STR/5))dS  
Speed: \+2  
Tags: Chain 2, Club, Attack  
Effects: If a weapon Blocks or Parries this Attack, it suffers WDP equal to its damage-level threshold after defense, even if its wielder takes no damage. It cannot Parry your next Club Chain Attack. Otherwise, a full hit applies Stun equal to the greater of 5 or your PDB, rounded down. This is explicit weapon damage.

#### Ground Shock
{:#ground-shock}

You slam the weapon into the ground, sending an impact through nearby footing.

Rank: B  
Stamina: 10  
Speed: 4  
Tags: Chain X, Club, Attack, AoE  
Effects: Strike the ground in an Area equal to the greater of 5 yards or STR/5, centered on you. Grounded enemies defend against your normal weapon Accuracy as an AoE; on a full hit, resolve Prone using Athletics against Resistance. No damage is dealt. Breakable ground becomes Rocky Terrain with severity equal to the greater of 2 or Athletics/10, maximum 5, until cleared or repaired. You are not affected by your own Prone effect.

## A-Rank
{:#a-rank-11}

#### Collision Breaker
{:#collision-breaker}

You strike hard enough to send the opponent sprawling.

Rank: A  
Stamina: +26  
Damage: +max(13, floor(STR/3))dS  
Speed: +6  
Special: Knockback 12  
Tags: Chain 3, Club, Attack  
Effects: Use the greater of 12 or STR/3 as the printed Knockback. On a full hit, also apply Stun equal to the greater of 4 or your PDB, rounded down. Gain +25% Final Damage and +25% Wounding. No collision is required.

#### Juggernaut Rush
{:#juggernaut-rush}

You charge through the enemy's position and drive them out of the fight's centre.

Rank: A  
Stamina: +22  
Damage: +max(10, floor(STR/3))dS  
Speed: +4  
Special: Knockback 12  
Tags: Chain 1, Club, Attack, Movement  
Effects: Use the greater of 12 or STR/3 as the printed Knockback. Before the Attack, use Move with an Attack in a straight line using its full final Speed instead of half. On a full hit, resolve Prone and Knockback with one Athletics Status Roll against Resistance. You may follow the target’s actual movement, ending within Reach. Obstacles stop movement without adding collision damage.

<div class="jutsu-breadcrumb jutsu-end"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>
