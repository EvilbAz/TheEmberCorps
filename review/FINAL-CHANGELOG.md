# Ember Corps — Skills, Combat & Weapon Arts Update

## Final consolidated changelog

**Release status: prepared for review; not yet published.**

This changelog describes the complete update to the base Ember Corps system. It includes the final versions of the rules, character-sheet changes and MonsterForge changes developed for this release.

### At a glance

- **Two new skills:** Ninshou and Lore, bringing the total to fourteen.
- **Twenty-eight skill actions**, with benefits that scale when you exceed the required roll.
- **Skill Points change from XP/18 to XP/20**, rounded down.
- **Genius and Skilled Hunter revised**, with a complete replacement of Skilled Hunter’s former benefits and penalty.
- **Paired elemental learning requirements:** Chakra Control and Ninshou.
- **Three armor categories:** Dense, Layered and Shaped.
- **Weapon durability changes:** ordinary attacks and defenses no longer cause routine wear.
- **AoE Parry restrictions**, while normal non-AoE Partial Defense remains available.
- **Mechanical Cover removed** and dependent features replaced.
- **Ballistic attacks revised**, Controlled Fire added, and frame Delays substantially reduced.
- **Bukijutsu damage now grows with STR and rank**, with stronger effects across all eight weapon families. Of 145 reviewed techniques, 143 differ from the base rules.
- **Team Attacks added** for two to four Hunters.
- **Character-sheet integration, Genjutsu Affinity fixes and MonsterForge support.**

### Contents

1. [Skills, progression and learning](#1-skills-progression-and-learning)
2. [Genius, Skilled Hunter and Naturalist](#2-genius-skilled-hunter-and-naturalist)
3. [Skill actions](#3-skill-actions)
4. [Armor and monster protection](#4-armor-and-monster-protection)
5. [Weapon durability](#5-weapon-durability)
6. [Defenses and removal of Cover](#6-defenses-and-removal-of-cover)
7. [Ballistic Corps](#7-ballistic-corps)
8. [Bukijutsu](#8-bukijutsu)
9. [Team Attacks](#9-team-attacks)
10. [Character sheet and MonsterForge](#10-character-sheet-and-monsterforge)
11. [Existing-character conversion](#11-existing-character-conversion)
12. [Verification and release status](#12-verification-and-release-status)
13. [Appendix A — complete Bukijutsu changes](#appendix-a--complete-bukijutsu-changes)
14. [Appendix B — other updated catalogue techniques](#appendix-b--other-updated-catalogue-techniques)

## 1. Skills, progression and learning

### Skill Points

The base Skill Point rate changes from **one per 18 XP** to **one per 20 XP**. Round down after dividing total XP.

| Total XP | Previous base SP | New base SP | New Skilled Hunter SP |
| ---: | ---: | ---: | ---: |
| 500 | 27 | 25 | 26 |
| 1,000 | 55 | 50 | 52 |
| 2,000 | 111 | 100 | 105 |
| 3,000 | 166 | 150 | 157 |

Starting XP remains **500**.

### Ninshou

Ninshou represents the practice of Ninshou and knowledge of Jutsu. It is a separate skill from Chakra Control and is added to the main skill tables, Skill Focus, Specialization, spending totals and learning calculations.

Elemental Ninjutsu now requires **both Chakra Control and Ninshou**, including an individual minimum in each and a combined minimum.

| Jutsu rank | Chakra Control minimum | Ninshou minimum | Combined minimum |
| --- | ---: | ---: | ---: |
| E | 0 | 0 | 0 |
| D | 5 | 5 | 15 |
| C | 10 | 10 | 25 |
| B | 20 | 20 | 50 |
| A | 30 | 30 | 70 |

For D-rank access, 5 Chakra Control and 10 Ninshou qualifies; 5 in each does not meet the combined requirement.

- Corps rank and Research no longer substitute for these elemental requirements.
- Genuine Skill Focus ranks count. Bonuses to skill rolls do not.
- The appropriate Elemental Aptitude is still required.
- Heritage-granted elemental access does not waive the paired skill requirements. Explicit access to a particular Heritage technique follows that technique’s entry.
- Applicable Affinity reduces **one** individual minimum and the combined minimum by its rank, each to a minimum of zero. It does not reduce both individual minimums or count twice toward the combined requirement.
- Mentor exemption requires 150% of both individual minimums and the combined minimum, rounded up, after Affinity.
- General non-elemental Ninjutsu retains its existing alternative learning routes.

**Genjutsu continues to use Diplomacy and Research.**

### Lore

Lore covers history and inherited knowledge. It is always an alternative skill for **every Hunt roll**, including tracking, investigating, studying weaknesses and preparation.

Lore requires no additional credibility check or situational permission. The Hunt’s ordinary TN, costs and consequences still apply.

## 2. Genius, Skilled Hunter and Naturalist

### Genius

- Skill Focus uses **Scale 3**.
- Gain one Specialization in every skill without paying its XP cost or meeting its rank prerequisite.
- These free Specializations treat natural d20 results below **8** as 8 on **non-combat skill rolls**.
- The free floor does not apply to combat skill actions, offensive rolls, defensive rolls or status checks.
- Purchased ordinary Specialization grants its normal scope; the two floors do not stack.
- Existing learning benefits remain: reduced Jutsu XP cost, learning-related advantage and access to the next Jutsu rank with the existing +3 use-cost surcharge.
- For elemental next-rank access, use the preceding rank’s paired skill thresholds. Elemental Aptitude remains required.

### Skilled Hunter

Skilled Hunter is completely reworked.

**Removed:** additional SP equal to floor(XP/75), the universal skill-cap increase, and −1 Accuracy.

**New benefits:**

1. Skill Points equal **floor(total XP/19)** instead of the ordinary XP/20 rate.
2. For each Skill Focus purchase, calculate Scale as though you held **floor(total XP/1,000) fewer existing ranks** in that particular Focus, minimum zero.

Actual ranks, prerequisites and the surcharge from Focus in other skills remain unchanged. Recalculate invested Focus costs using current total XP; freed Skill Points may be reassigned between scenes.

At 2,000 XP, the first three ranks of each Focus cost the base **2 SP each**, before the global surcharge.

### Naturalist

Survival may replace **Ninshou** for ordinary elemental prerequisites. Chakra Control and the combined minimum remain required. Naturalist’s other benefits and drawbacks remain as printed.

## 3. Skill actions

Every skill receives two actions, with main actions, reactive Interrupts and Links used where appropriate. Twelve entries now have reactive options; Read the Technique, Field Diagnosis and Reinforce also retain preparation modes.

These skill actions are available to every Hunter. Entries without Interrupt or Link are main Utility Actions. Roll 1d20 + the named skill. Use the listed Speed; ordinary AP reductions apply. An opposed check succeeds only when the acting Hunter beats the defender. No fatigue cost applies unless listed. A failed attempt still spends its Speed. Benefits from the same named action do not stack. A pending benefit cannot be rerolled or replaced before it is used or ends. Unused roll benefits end with the combat or scene. Information checks can be repeated when there is new evidence to examine; repeating the same examination does not reveal more information. A combat skill action is a combat roll for Specialization granted by Genius.

### Scaling with the roll

On a successful check, **X = floor((your total − TN) / 5)**. For an opposed check, subtract the defender's rolled total instead; ties still fail. Each full 5 points above the required result improves the action as listed below. Use the final totals, including modifiers. A failed check grants no benefit.

For example, against TN 20, totals 20–24 give X=0, 25–29 give X=1, and 35–39 give X=3. Roll bonuses and penalties have the listed caps; movement, duration, repair and other benefits scale as stated. A Called Shot reduction cannot turn a penalty into an Accuracy bonus.

### Interrupts and Links

Declare a reactive skill action before rolling the Defense, attack resolution or check it modifies. Resolve the skill check first; success applies to that triggering event, and failure still pays its Speed.

**Defense Links** attach to your one legal Defensive Interrupt. Add their Speed to that Defense for Interrupt validity and advancing your next action. The linked Defense must be legal against the Attack, including any AoE. You may attach one skill-action Defense Link to a Defense; ordinary Jutsu Links remain subject to their own rules.

**Check Links** attach to a required Chakra Exhaustion or status check. Pay their listed Speed by adding it to your next action’s IC, once per use; this does not change the triggering Attack’s damage or Speed. They grant no extra recovery check. Use one skill-action Check Link per check; the skill check establishing its bonus cannot itself receive that bonus or trigger another Check Link.

**Support and check Interrupts** act at their printed trigger and add their Speed to your next action’s IC. When responding to an Attack, they must meet the normal half-Speed Interrupt limit. When responding to a check with no Attack, their explicit check trigger permits their use. They do not replace the recipient’s Defense or status check. Skill-action checks cannot trigger reactive skill actions. **Misdirect** is an Offensive Interrupt and follows its own attack-declaration trigger instead.

Bonuses from skill actions to the same roll use the highest, including a prepared bonus and reactive assistance. Apply the same rule to penalties from skill actions.

### Athletics

**Vault — Speed 4, Movement.** Roll Athletics against TN 15 to cross up to 5 + 2X yards of difficult ground or a gap, or climb up to 3 + X yards. You need a reachable landing or handhold. On failure you remain at your starting position.

**Help Up — Speed 3, Touch.** Choose yourself or a willing adjacent creature that is Prone. Athletics TN 15: end Prone and move the recipient up to 2 + X yards to an unoccupied space. This does not break a Grapple or other restraint.

### Awareness

**Read the Windup — Speed +1, Link, Defense.** Link to your Defense against an Attack from a visible creature. Roll Awareness against 10 + its Espionage. On success, gain +(2 + X), maximum +6, on that Defense.

**Call the Threat — Speed 4.** Make a normal Search against one hidden creature with +2 Awareness. If you locate it, communicate its location to allies who can hear you; their next Search for it gains +(3 + X), maximum +7. This does not automatically remove their Stealth penalties.

### Chakra Control

**Settle Chakra — Speed +2, Link, Check, Self.** Link to a Chakra Exhaustion roll you are required to make. Chakra Control TN 20: gain +(2 + X), maximum +6, on that roll. This does not reduce existing Chakra Penalty or Fatigue.

**Steady the Flow — Speed 2, Interrupt, Support, Touch.** When a willing adjacent ally must make a Chakra Control status check while maintaining a technique, intervene before it rolls. Chakra Control TN 20: it gains +(3 + X), maximum +7, on that check. You cannot target yourself.

### Ninshou

**Read the Technique — Speed +1, Link, Defense.** Link to your Defense against a visible Jutsu Attack. Ninshou TN 10 + 5 × its rank (E=1 through A=5): learn its rank, keywords and attack form, and gain +(2 + X), maximum +6, on that Defense. Alternatively, use this as a Speed 4 main Utility Action to study a Jutsu during handseals, Delay or a maintained effect; identify its rank, keywords and action type, and prepare the same bonus for your next Defense against it. Either mode identifies it for Explain the Counter. It does not reveal secret Heritage requirements.

**Explain the Counter — Speed 3, Interrupt, Support.** When an enemy declares an Attack with a Jutsu you identified using Read the Technique before this declaration, explain its counter to allies who can hear you. Roll Ninshou against its identification TN. On success, up to 1 + X allies each gain +2 on their Defense against this Attack.

### Lore

**Recall the Hunt — Speed 5.** Lore TN 20 against a monster you can observe: learn up to 1 + X currently relevant facts from its Tracks or Nature Intel, chosen by the GM. Success grants +(2 + X), maximum +6, on your next skill check concerning that monster. These facts do not raise your Hunt Intel level.

**Name the Weakness — Speed 5.** Lore TN 25 against a visible monster: identify the armor category of up to 1 + X visible parts and whether each can be broken. Choose one ally who hears you; its next Called Shot to one of those parts reduces the Called Shot Accuracy penalty by 2 + X, minimum 0. Only one such benefit may apply to an Attack.

### Espionage

**Misdirect — Speed 3, Interrupt, Offensive.** When an ally declares an Attack against a visible enemy within 10 yards of you, oppose your Espionage with that enemy’s Awareness before it rolls its Defense. On success, impose −(2 + X), maximum −5, on that Defense. The penalty is consumed by this Attack’s defense and cannot aid your own Attack.

**Quick Sabotage — Speed 6, Touch.** Against an unattended trap or mundane mechanism, roll Espionage against its listed disarm TN, or TN 20 if none exists. On success, disable it until someone repairs or resets it. Restoring it requires a Speed 6 Utility Action and an Espionage or Artisan check against TN 15 + 5X; use the original device’s higher repair TN if it has one. Devices carried or actively operated by an unwilling creature cannot be targeted with this action.

### Medicine

**Stabilise — Speed 10, Touch.** Requires Medicine 1 and a First Aid Kit. Medicine TN 20: end one non-Wound Bleed, or provide treatment expressly permitted by a Wound entry using its TN if higher. On success, the recipient also gains +X, maximum +4, on its next Resistance roll against a physical status. Consume the kit on the attempt.

**Field Diagnosis — Speed 2, Interrupt, Check, Touch.** When you or a willing adjacent creature must make a Resistance roll against a physical status already affecting it, examine the condition before that roll. Medicine TN 15: identify its current Wounds and physical statuses and grant +(3 + X), maximum +7, on that Resistance roll. This grants no additional recovery roll and does not treat a Wound. For examining a creature without a pending check, use a Speed 4 main Utility Action instead and prepare the bonus for its next permitted Resistance roll against one identified status.

### Research

**Find the Pattern — Speed +1, Link, Defense.** After observing an enemy resolve the same named Attack twice, Link to your Defense against a subsequent use. Research against 10 + its Espionage: gain +(2 + X), maximum +6, on that Defense. The two earlier observations must be complete before the current Attack is declared.

**Decode — Speed 6, Touch.** Study an accessible inscription, control panel or written seal. Research TN 20, or its stated decoding TN if higher: discover its operating instruction, activation condition or warning, chosen by the GM. An ally acting on that information gains +(3 + X), maximum +7, on its next skill check to operate or disable that object. Decoding does not grant a missing Talent or deactivate a Jutsu.

### Resistance

**Brace Yourself — Speed +1, Link, Defense, Self.** Link to your Defense against an Attack that can cause Knockback. Resistance TN 20: reduce Knockback you would suffer from that Attack by 5 + 2X yards, minimum 0, after its ordinary defense and Special resolution. This benefit applies even if the linked Defense fails; it does not reduce damage or other statuses.

**Endure — Speed +2, Link, Check, Self.** Link to a required Resistance check against a physical status. First roll Resistance against TN 20; on success, gain +(3 + X), maximum +7, on the required check.

### Stealth

**Quiet Advance — Speed 5, Movement.** If already hidden from at least one enemy, roll Stealth against 10 + the highest Awareness among those enemies. On success, move your ordinary Speed 5 movement distance plus X yards with no movement penalty to maintaining Stealth. On failure, move normally and resolve detection under the normal Stealth rules.

**Lay a False Trail — Speed 5.** Requires loose ground, vegetation, smoke or another means of obscuring your passage. Stealth TN 20: the next Search against you suffers −(3 + X), maximum −7. The effect ends if you are located or leave the obscured passage. This does not make you Hidden or let you Hide while directly observed.

### Survival

**Pick a Route — Speed 4.** Survival TN 15: designate a visible route up to 10 + 5X yards long. You and allies who hear you ignore up to 2 + X severity of ordinary difficult or Rocky Terrain on their next traversal of that route. The route remains usable until the terrain changes; each creature benefits once. Magical hazards, damage and restraints still apply.

**Bait — Speed 5.** Use suitable food, scent or a sound to draw a visible non-human creature's attention within 15 yards. Roll Survival against its Awareness. On success, it suffers −(2 + X) Accuracy, maximum −5, on its next Attack if it targets anyone other than you. Its next Attack consumes the effect even if it targets you.

### Diplomacy

**Rally — Speed 3, Interrupt, Support.** When a willing ally who can hear you declares a Defense or must make a Resistance roll, rally it before that roll. Diplomacy TN 20: it gains +(2 + X), maximum +6, on that roll. You cannot target yourself.

**Challenge — Speed 5.** An enemy within 15 yards that understands you opposes Diplomacy with Resistance or Espionage, its choice. On success, its next Attack against anyone other than you suffers −(2 + X) Accuracy, maximum −5. Its next Attack consumes the effect even if it targets you. Challenge and Bait do not stack.

### Artisan

**Field Repair — Speed 8, Touch.** Requires tools and access to a willing creature's weapon. Artisan TN 20: remove 10 + 5X WDP, once per weapon per scene. This cannot restore Damage Levels or repair a broken weapon. Apply your ordinary Artisan discipline restrictions.

**Reinforce — Speed +2, Link, Defense, Touch.** Link to your Block while wearing intact armor and holding suitable tools. Artisan TN 20: that armor’s Absorption increases by 5 + 2X percentage points, maximum +15 percentage points, against this Attack at the armored location. It still loses Durability for absorbed damage. Alternatively, use a Speed 6 main Utility Action with tools to prepare the same benefit on a willing creature’s intact armor against the next Attack striking it. Apply Artisan discipline restrictions; the two modes do not stack.

### Toxicology

**Identify Toxin — Speed 4.** Examine a toxin, secretion or affected willing creature within Reach. Toxicology against 10 + the toxin's Poison severity (TN 20 if it has no Poison severity): learn its listed status effects and duration. The next Resistance roll you or that creature makes against that toxin gains +(3 + X), maximum +7;

**Neutralize Residue — Speed 6, Touch.** Requires clean water and an Antidote from your inventory. Toxicology against the toxin's normal application TN (TN 20 if none is listed): consume the Antidote to remove up to 1 + X unapplied Contact or Injury coatings of that toxin from a willing creature's equipment or an unattended object. This does not remove poison already affecting a creature.

## 4. Armor and monster protection

Armor gains a damage-type category alongside its existing Structure.

| Category | Strong against | Weak against |
| --- | --- | --- |
| **Dense** | Slashing | Piercing, Blunt |
| **Layered** | Blunt | Slashing, Piercing |
| **Shaped** | Piercing | Slashing, Blunt |

Energy is neutral to these categories.

### Protection and structural damage

| Interaction | Strong type | Weak type | Neutral |
| --- | ---: | ---: | ---: |
| Armor-granted Absorption and flat DR | ×1.5 | ×0.5 | ×1 |
| Direct damage to Armor Durability or a breakable monster part | ×0.5 | ×1.5 | ×1 |

Round flat DR down; cap Absorption at 100%. Apply structural matchups to direct armor/part damage, not ordinary creature HP or Vitality damage. Do not multiply ordinary absorbed armor wear a second time.

For a weapon offering several damage types, choose the type before resolving the Attack. Assess distinct damage components separately.

### Default categories

| Protection | Default category |
| --- | --- |
| Mobile armor; padding or flexible protection | Layered |
| Protective armor; mail or dense reinforcement | Dense |
| Encased armor; shaped plate | Shaped |
| Monster hide or dense scales | Dense |
| Monster fur, padding or flexible layers | Layered |
| Monster shell, carapace or rigid plate | Shaped |

Printed category overrides take precedence. Different monster parts can have different categories. Unarmored flesh has none. Broken armored parts lose their category benefit and no longer cause resistant-contact weapon wear.

## 5. Weapon durability

Normal attacks, ordinary Bukijutsu use, Parries, Blocks and being Parried no longer generate routine Weapon Damage Pool points.

### Resistant contact

A weapon contacting armor or a monster part resistant to its damage type gains **5 WDP per Attack**, once per contacting weapon.

- Misses, bypassed armor and broken protection do not cause contact wear.
- Fired projectiles take their own contact wear; the launcher does not.
- Explicit effects that inflict or spend WDP still function.

### Damage levels

Each weapon’s wear threshold is **Durability + DEX/10**, rounded down. WDP starts at zero each scene.

When WDP **exceeds** that threshold, increase the weapon’s Damage Level by one and reset WDP to zero. Meeting the threshold exactly does not increase Damage Level. At scene end, reduce Damage Level by two, never below its level at the start of that scene. Normal repair rules apply.

### Durability-related equipment

| Feature | Updated effect |
| --- | --- |
| Reinforced Spine | Reduce resistant-contact WDP by 1 per rank, minimum zero, maximum three ranks. |
| Flexible Construction | Reduce WDP explicitly inflicted by enemy techniques by 2. |
| Shock Mounting | Reduce Knockback by 3 yards when Blocking with the weapon. |
| Reinforced Bowstring | Reduce explicit hostile WDP by 2. |
| Stormsilver | Retains +1 Projectile Parry; success grants +1 to the next Parry before the next Action. |

Bukijutsu that explicitly damages weapons uses the updated WDP rules. A half-threshold or full-threshold effect adds that many WDP; it does not directly impose a Damage Level.

## 6. Defenses and removal of Cover

### Parries

| Attack being defended | Parry rule |
| --- | --- |
| Non-AoE | Normal Partial Defense applies unless the Attack prohibits it. |
| AoE | Requires explicit AoE Parry permission; full defense or failure, with no Partial Defense. |
| Rolled-Accuracy Ballistic Attack | No Partial Defense, even when the Parry would ordinarily permit it. |

Ocean Shield explicitly permits AoE defense. Boil, Liquefaction Split, Caustic Passion and Kaguya Spinal Thrust are aligned with the relevant defense rules. Spinal Thrust is defended as a targeted Melee Attack.

### Cover removed

Remove mechanical Cover ratings and their Core rules section. Solid obstacles still block attack paths. Visibility, concealment, barriers and actual positions remain relevant.

Features formerly referring to Cover now use concrete effects:

- **Fūma and appropriate aiming, bow, fan and throwing features:** Visibility reduction or clear projectile paths.
- **Bent projectile paths:** every segment must be physically clear; no travel through solid obstacles or sealed barriers.
- **Senju flowering forest:** Visibility 3 through its foliage replaces heavy Cover.
- **Kazekage Education:** AP support triggers from granted Knockback reduction, Immobilization reduction or DR.
- **Puppet Deployable Shield:** replaces Deployable Cover. Deploy/retract at Speed 4; while deployed, +10 percentage points Block reduction, adjacent Take the Hit at Speed 4, and −25% movement.
- **Puppet Hollow Body:** an intact shell prevents direct targeting through it; attacks must break the shell or explicitly penetrate solid barriers.
- **Puppet Sealed Compartment:** barrier-penetration wording replaces Cover-penetration wording.
- **Puppet Spotter and formations:** use actual positions, sightlines and Visibility penalties.
- **Combat Sensor and Handler’s Read:** retain their sensory benefits without referring to mechanical Cover.

### Tamed Monster protection

Protective DR from multiple Tamed Monsters does not stack; use the highest value. The protecting monster must be able to act.

| Monster | Replacement for Cover-dependent protection |
| --- | --- |
| Bear | Adjacent Take the Hit at Speed 4. Its protective movement technique can grant +3 on an ally’s next Defensive Roll before the Bear’s next Action. |
| Boar | Living Wallback grants adjacent allies 5 physical DR; its upgrade increases this to 10. Existing Take the Hit remains. |
| Crab | Shell Wall grants adjacent allies 5 physical DR, rising to 10 with Control Zone. Its protective trait adds 5; its defensive technique grants 15 while active. |
| Gorilla | Adjacent Take the Hit at Speed 4. Protective Instinct’s upgrade adds +2 to those rolls and retains the stronger grapple-rescue bonus. |
| Tortoise | Living Fortress grants adjacent allies 10 physical DR, rising to 15 with Unbreakable; the protective trait adds 5. Its major defensive technique grants 20 while active. Shell-based ranged/AoE defense support applies to adjacent allies. |

Beetle and Boar structural damage features refer to objects and physical barriers. Panther ambush benefits use Hidden/concealment conditions. Crocodile ambush movement uses concealment or water.

## 7. Ballistic Corps

### Rolled Accuracy

Ballistic Attacks using rolled Accuracy prohibit Partial Defense. A failed Defense resolves the full hit. Blocking, armor and DR still apply, and ordinary ranged-defense legality remains in force.

### Controlled Fire — new universal Ballistic option

Before rolling, add **+5 Stamina** to use **base 10 Accuracy + normal modifiers** instead of rolling Accuracy.

Controlled Fire permits Partial Defense from eligible defenses, including non-AoE Parries. AoE Parries remain binary. Choose once for the entire Basic Attack, Burst, Full Auto or Ballistic Art. It adds no Delay and cannot be selected after seeing the roll.

### Frame Delay

| Frame | Previous Delay | New Delay |
| --- | ---: | ---: |
| Sidearm | 4 | 0 |
| Light Bowgun | 5 | 0 |
| Heavy Bowgun | 8 | 2 |
| Machine Pistol | 4 | 0 |
| Carbine | 4 | 0 |
| Scattergun | 6 | 1 |
| Marksman | 7 | 1 |
| Hand Cannon | 7 | 1 |
| Rotary Repeater | 5 | 0 |

### Attachments and Arts

- **Overpressure Chamber:** +1 damage die and +3 Stamina; no additional Delay.
- **Dampened Action:** may reduce Delay to zero.
- **Snap Shot:** Stamina 16 and no weapon Delay. Existing frame and aiming restrictions remain.
- **Fangburst:** Tier I’s explicit +1 Delay remains; Tier II removes it. The calculator now respects Tier II.

## 8. Bukijutsu

All eight weapon families and the universal techniques have been reviewed against the existing Taijutsu progression. **143 of 145 learnable entries change from the base rules.** Appendix A lists every changed entry.

### STR-based damage progression

Damaging Bukijutsu now add the greater of their printed extra-dice floor or the rank’s STR-based count:

| Rank | Additional weapon-sized dice |
| --- | --- |
| E | floor(STR/15)dS |
| D | floor(STR/10)dS |
| C | floor(STR/7)dS |
| B | floor(STR/5)dS |
| A | floor(STR/3)dS |

Add this package to the weapon’s normal dice, then add Damage Bonus × final Speed. The printed floor and STR count are alternatives. These technique dice do not use the Basic Unarmed dice cap.

- Multi-hit techniques apply each hit’s percentage after including the package.
- A secondary hit copying Final Damage already includes it.
- Multi-Throw distributes one package across its projectiles per target.
- Techniques that divide damage among targets still do so.
- Links, non-damaging actions and counters expressly making Basic Weapon Attacks do not receive a separate rank package.

### Scaled effects and defense pressure

- Athletics/5 roll modifiers and additional weapon allowances round down, with a minimum of 2 and maximum of 6.
- Other divisions for distance, Control, severity and target counts use their printed minimums and caps.
- Reach/Range percentage bonuses use the value before maintained Bukijutsu and setup bonuses; they do not compound.
- Defense-Speed multipliers from Bukijutsu do not stack; use the highest. They delay the defender’s next action without changing Interrupt validity unless expressly stated.
- Remove negative printed Accuracy modifiers across the revised weapon lists. Ordinary weapon and Called Shot penalties remain.
- Benefits for the next Chain Attack are consumed by it and end if the Chain ends. Other one-use benefits end when used or at combat end. Same-named effects do not stack.

### Chain Openings

The first time you advance from Chain 1 to Chain 2 during a Chain, gain one **Opening** against that target. Repeating Chain 2, returning to Chain 1 or using a multi-hit Attack does not grant another Opening in that Chain.

Before a later Attack against that target is rolled, spend the Opening on one of these benefits:

- **Precision:** reduce one Called Shot Accuracy penalty by Athletics/5, minimum 0.
- **Control:** gain +Athletics/5 on one Special Status Roll caused by that Attack. Declare which Special when spending the Opening. It does not increase Stun, skip a Resistance roll or improve a Genjutsu offense roll.
- **Assist:** give one willing ally +Athletics/5 Accuracy on its declared Attack against that target instead of benefiting your own Attack.

Use the Opening owner’s Athletics, rounded down with a minimum of 2 and maximum of 6. A benefit affects only the chained target, even in an AoE. Each Attack can receive one Opening benefit, including a Team Attack. Spend it before the affected roll; a miss does not refund it.

You may spend Precision or Control on a non-Chain Attack of your own, then end the Chain normally. An ally can receive Assist without using Bukijutsu. Unspent Openings end when the Chain ends. A Chain 3 may use the Opening before ending the Chain, but neither generates a second Opening nor refunds a spent one.

### Combining pressure effects

Apply only the highest Bukijutsu bonus to any one Accuracy, Defense or Special roll, and only the highest Bukijutsu penalty to any one roll. This includes stances, prepared effects, Links and Openings. Ordinary weapon statistics and non-Bukijutsu abilities follow their own stacking rules. Called Shot reductions granted by Bukijutsu likewise use the highest; other sources follow their own rules.

Extra projectile allowances from Bukijutsu use the highest, not their sum. Speed multipliers from Bukijutsu use the strongest reduction or increase of each kind rather than compounding; normal Speed minimums still apply.

A target can be forced to reroll its Defense once per Attack by weapon/Bukijutsu effects, including Weapon Mastery. A technique that makes a second strike against the same target cannot also force a Defense reroll against it. Multi-hit attacks retain their explicitly printed separate defenses; they do not generate additional Chain advances or Openings.

A counterattack granted by Bukijutsu can be defended normally, but resolving that Defense cannot generate another counterattack.

### Stances and universal techniques

| Technique | Final change |
| --- | --- |
| High Guard | STM 8, upkeep 2, Speed 4. Chain 1/2 melee Accuracy +Athletics/5; Chain 3 melee Final Damage +15%. |
| Low Guard | STM 8, upkeep 2, Speed 4. Targeted melee Parry +Athletics/5; a full defense enables +15% Final Damage on the next immediate melee Chain counter. |
| Long Guard | STM 9, upkeep 2, Speed 4. +50% weapon Reach, minimum +2 yards; scaling Parry against targeted melee attacks beginning outside unmodified Reach. |
| Open Guard | STM 12, upkeep 3, Speed 5. Impose an Athletics/5 penalty on the declared Defense against each Chain Attack. |
| Point Guard | STM 12, upkeep 3, Speed 5. Reduce Called Shot penalties by Athletics/5 and gain +15% Wounding on Called Shots. |
| Committed Guard | STM 18, upkeep 4, Speed 6. +25% Wounding, +50% printed Knockback, and additional printed Stun equal to half PDB, rounded down. |
| Flowing Guard | Pay its STM 6 and Speed 3 instead of the new stance’s activation costs. |
| Weapon Breaker | Explicit WDP equal to half the defending weapon’s threshold, rounded up, after a successful weapon Parry or Block. |
| Chakra Reinforcement | Choose damage type and add half NDB to the held weapon’s Damage Bonus. |
| Chakra Reach | Additional Reach equal to the greater of unmodified weapon Reach or CHA/5; the chakra extension avoids punishment caused solely by physical contact. |

### Attack Links replace short-step setups

| Technique | New function |
| --- | --- |
| Half-Step | Sword Link; doubles a Dodge’s action-time cost. STM +4, Speed +1. |
| Shaft Pivot | Polearm Link; weakens weapon Parry modifiers and can disable that weapon’s next Parry against the Chain. STM +6, Speed +0. |
| Slip Step | Chain Grapple Link; improves Control gained or halves Control lost. STM +7, Speed +1. |
| Mobile Draw | Bow Link; full-Speed movement integrated into the Attack and pressure on Dodge timing. STM +7, Speed +0. |
| Crosswind Step | Fan Link; successful Knockback also applies Prone, or supplies Knockback to an Attack lacking it. STM +7, Speed +1. |
| Scatter Run | Multi-Throw Link; scaling Accuracy and extra projectiles, plus resisted Bleed after multiple hits. STM +9, Speed +1. |

Small post-action self-movement riders are removed from revised Bukijutsu. Movement remains for a substantive charge, traversal, throw or pursuit.

### Weapon-family highlights

- **Sword:** repeated-defense pressure, stronger Called Shot finishers, full-damage counters and meaningful weapon-breaking finishers.
- **Club:** structural armor damage, weapon-disabling impact, AoE knockdown and STR-scaled heavy finishers.
- **Polearm:** approach denial, weapon binding, damaging vaults, projectile redirection, armor penetration and throws that can carry targets beyond Reach.
- **Chain:** Control-based pulls and submissions, ranged Weapon Grapples, capture after defense and physical trap setups.
- **Dual:** pressure from both weapons, stance benefits for changing lead, full-damage counters and a finisher attacking both the enemy and equipment.
- **Bow:** persistent Chain Marks, stronger precision/penetration, projectile interception, attack-integrated mobility and full-damage overwatch with paid Interrupt time.
- **Fan:** directional Knockback, Prone, disrupted Blocking stances, powerful lines and clear-path curved attacks.
- **Thrown:** declared feints, ricochets using terrain or another weapon, payload Links, recovery, target switching, follow-up arcs, pinning finishers and physical traps.

### Body Check removed; Shove added

Body Check is retired from the learned Club catalogue. All Hunters can use **Shove**:

**Speed 4; Stamina 5; adjacent target; normal Accuracy; Knockback 3 on a full hit; no damage or Chain advancement.** Resolve its Knockback Special normally. Forced movement stops at obstacles or occupied spaces without creating additional collision damage.

### Taijutsu comparison

At STR 90, using a 4d8, Speed 10, Stamina 12 medium weapon of the appropriate family:

| Attack | Average full-hit damage | Speed | Stamina |
| --- | ---: | ---: | ---: |
| Half-Sword Thrust, C | 132 | 12 | 21 |
| Daisenpuu, C | 167.5 | 14 | 22 |
| Guard Rattle, B | 159 | 12 | 27 |
| Gouriki Senpuu, B | 197 | 16 | 33 |
| Final Measure, A | 278.75 | 14 | 36 |
| Solar Agitation, A at CC5 | 331.5 | 18 | 40 |

These examples exclude defenses, armor, AP, paid abilities and setup attacks. They demonstrate STR progression and action-time comparisons; they do not establish equality across every optimized build.

## 9. Team Attacks

Two to four Hunters may prepare a combined Attack. Each contributes one damaging Attack they can legally perform and names a lead attacker. Each Hunter may participate in only one Team Attack at a time. Clones, Puppets and Tamed Monsters do not provide additional Hunter slots or preparation contributions.

### Preparation

Each Hunter joins on their own turn by entering a Variable Speed Utility Action. Declare the component Attack, its costs, Links, AP expenditure and final Speed at that point. Required handseals must be completed before joining. Pay the Attack's costs when joining; ammunition and consumables are committed then. Effects that require a target to be in Range are checked at release.

The preparation target equals the sum of the components' final Speeds. Each IC a Hunter remains preparing contributes 1 toward that shared target. Every participating Hunter must join, pay their costs and contribute at least 1 IC before release. The total cannot be reduced by AP, time already spent on handseals, Delay or waiting before joining. Each participant also completes their component's Delay while preparing; release waits for both the shared target and every component's Delay to be complete.

All components and the maximum four participants must be declared before the first preparation IC is credited. Hunters whose turns occur later may join the declared preparation when their turn arrives. Their component contributes to the target immediately but they contribute no IC before joining. Calculate every final Speed after applying the declared shared Links, then fix the preparation target before crediting its first IC.

A participant may use Defensive Interrupts. Their preparation pauses for that Interrupt's final Speed; it resumes when their next action becomes available if they remain able to prepare. An Offensive Interrupt, another non-defensive Action, incapacitation or voluntary withdrawal removes their component and credited preparation. Recalculate the target for the remaining team. Paid costs are not refunded. If fewer than two remain, preparation ends. A team cannot release during resolution of an incoming Attack; finish that Attack and its defenses first.

### Release

At the end of the IC that completes preparation, the lead declares the attack base using one component's printed attack form, Range and Area: targeted Melee, targeted Ranged, or AoE. Every component must be able to reach every chosen target from its contributor's position. A targeted component cannot be multiplied across an AoE; an AoE base requires every component to support that Area and its targets. Use the smallest legal Area where they differ. Any component that cannot legally contribute at release is removed and preparation is recalculated.

Use the lead component's final Accuracy, including shared Links, for the combined Attack. Rank and defensive Speed are the highest component rank and final Speed. Combine all Keywords. A defense must be legal against the complete Attack: a projectile-only parry cannot stop a combined projectile-and-melee Attack, for example. AoE Parries must explicitly permit AoE defense and grant no Partial Defense. Parries against a non-AoE Team Attack use normal Partial Defense unless the Attack itself prohibits it. Each target declares one Defense against the entire Attack.

Rolled-Accuracy Ballistic contributions prohibit Partial Defense for the whole Team Attack unless every Ballistic contributor chose Controlled Fire. If the lead component is rolled Accuracy, roll once at release. Every participant becomes free to act on the following IC; the preparation already paid the Attack's action time.

### Damage, Links and Effects

Calculate each component's damage once using its own user's stats and its own final Speed, then sum the damage. The highest Speed is used for defense validity only. Shared Links modify each eligible component once, and their costs are paid once by the owner. Ownership of an ability or passive does not transfer; only declared Attack Links are shared. Each Link must be legal for every component it affects, with required resources supplied by its owner. Identical named Links apply once at their highest chosen value; mutually exclusive Links cannot be combined.

Apply the one Defense's result to all components. Apply percentage mitigation and type-specific Armor to the relevant components; apply general flat DR and other once-per-Attack reductions once to the total. Allocate flat reductions proportionally across components, with rounding remainder assigned to the largest component. Determine one Wound from total damage: use the type contributing the most damage after mitigation, ties chosen by the lead. Apply a Wounding modifier only to its source component before totaling damage for Wounds. A location must be reachable by all components; a Called Shot requires every contributor to declare and pay its Called Shot penalty.

Repeated instances of the same status use the highest severity and longest duration, rather than adding together. Different statuses may apply normally. Effects requiring a Special roll are rolled once per distinct status by the contributor supplying its highest severity. Each weapon gains matchup WDP only from its own contact with resistant armor. Once-per-Attack effects and Chain progression trigger once per contributor. A contributor may not add attacks created by this Team Attack back into the same Team Attack.

### Combination Effects

Choose one combination benefit when releasing. An Attack can gain only one benefit, regardless of its number of qualifying pairs.

- **Concentrated Impact:** Two components with the same physical damage type gain +10% damage against Armor Durability and breakable monster parts only. This does not increase damage to the creature's Vitality or HP.
- **Mixed Assault:** Two different physical damage types reduce the Called Shot penalty by 1 for all contributors, if all target the same location.
- **Elemental Reinforcement:** Two components with the same primary element gain +10% Final Damage on those components.
- **Elemental Combination:** Katon + Fuuton, Suiton + Raiton, or Doton + Katon grant +10% Wounding on those two components. Choose one qualifying pair. This does not create a bloodline element or transfer elemental passives between components.

### Example

Three Hunters contribute Speed 8, 10 and 12 Attacks: 30 preparation IC are needed. If they all join on IC 20 and remain uninterrupted, they contribute 3 per IC and release at the end of IC 30. The Attack is Speed 12 for defense validity. Its damage is calculated separately at Speeds 8, 10 and 12, then combined; each target makes one Defense.

## 10. Character sheet and MonsterForge

### Character sheet

- Add Ninshou and Lore to the **main Character Profile and Combat Stats skill tables**, with base ranks, Focus, totals, caps, SP spending and prerequisite links.
- Add their Skill Focus and Specialization entries.
- Apply XP/20 and Skilled Hunter’s XP/19 SP rates with rounding down.
- Apply Genius’s Scale 3 Focus and Skilled Hunter’s rank discount; remove Skilled Hunter’s former Accuracy and cap modifiers.
- Correct stale purchased-Specialization cost/floor entries to the rules’ 10 XP and natural-result floor of 8.
- Apply paired elemental learning gates throughout the populated Jutsu Engine.
- Fix Genjutsu Affinity display, learning-gate application and Chakra Exhaustion contribution.
- Add Controlled Fire input, Stamina adjustment and static Accuracy output; update frame Delays and Fangburst Tier II handling.
- Add armor category and matchup calculations.
- Replace obsolete Cover/WDP descriptions in crafting, Puppet and Clan references.
- Update **155 named catalogue entries** and remove Body Check from learnable choices.
- Resolve STR-based Bukijutsu additional dice through populated Damage rows 7–364. The weapon die size remains dS; conditional effects are applied at their triggers.
- Add the complete Skill Actions reference, Team Attack summary, success-margin calculator and weapon-damage comparison calculator.

### MonsterForge

- Generate armor categories for monster parts and display them in part cards, summaries and print output.
- Record damage type and armor category with damage events.
- Add an “already includes matchup” option to prevent applying a structural modifier twice.
- Apply structural matchups to opening/break progress; entered HP/gate damage remains the post-mitigation value.
- Preserve neutral calculation for older exported events without the new matchup fields.
- Update Parry declarations with AoE-only Partial Defense restrictions.
- Add unconditional Lore substitution to Hunt guidance.
- Replace obsolete tactical Cover advice with concrete movement, sightline and defense guidance.

## 11. Existing-character conversion

When applying this release:

1. Recalculate total SP at XP/20, or XP/19 for Skilled Hunter, rounding down.
2. Recalculate Skill Focus costs, including Genius and Skilled Hunter changes, and reconcile spending with the new total.
3. Allocate Ninshou and Lore ranks through the main skill table; review elemental eligibility against both skills and the combined minimum.
4. Apply the new Genius Specializations and remove Skilled Hunter’s old Accuracy and universal cap modifiers.
5. Assign armor categories to equipment and armored monster parts.
6. Replace routine weapon-wear tracking with resistant-contact and explicit-effect WDP.
7. Update Ballistic frame Delay, attachments and Controlled Fire declarations.
8. Replace saved Bukijutsu declarations with the current entries, including renamed functions, Link tags, costs and STR-based dice.
9. Replace learned Body Check references with universal Shove. This update does not specify an automatic XP refund.
10. Replace Cover-dependent features with their revised effects.

**Existing elemental Jutsu ownership:** the new learning gates are implemented, but no grandfathering, forced-unlearning or refund policy has been established in this update. That conversion decision remains to be set before requiring existing characters to reconcile their learned lists.

## 12. Verification and release status

Completed checks:

- **45 spreadsheet calculation checks passing.**
- **22 MonsterForge tests passing**, with JavaScript syntax checks.
- **78 source pages and 3,192 search destinations validated.**
- All 43 cells changed in the Bukijutsu function pass were read back against the draft sheet.
- Release prose and catalogue updates: 96 cells read back successfully; all Bukijutsu entries compared to the website.
- Main profile includes Ninshou and Lore; the checks tab is hidden in the public template.
- Live skill integration verified ranks, Focus spending, remaining SP and elemental access.
- Live Genjutsu Affinity check confirmed Affinity 5 and the expected Chakra Exhaustion change.
- Live Final Measure check at STR 90 returned **+30dS**. Temporary test inputs were restored.

The 24 October release includes the rules update, Character Sheet v2.2 and the matching MonsterForge update. The website links to the new public template. The old template remains available for existing character records.

Character Sheet v2.2 contains the release catalogue. Its hidden data tab stores the matching technique entries.

These are calculation and consistency checks, not live playtesting. Team damage concentration, defensive timing, stacking weapon effects and the new durability economy remain playtest priorities. The main profile and skill-action reference were visually inspected in Google Sheets.

**Race mechanics are excluded from this release.**

---

# Appendix A — Complete Bukijutsu changes

Changes below compare the current rules with the base system. Apply the global STR-dice, Chain Opening and stacking rules alongside each entry. Omitted statistical fields are unchanged.

## Universal techniques and stances

### High Guard — D

**Speed:** 6 → 4. **Upkeep:** 3 → 2.

**Effect:** Your Chain 1 and Chain 2 Melee Bukijutsu gain +Athletics/5 Accuracy. Your Chain 3 Melee Bukijutsu gain +15% Final Damage.

### Low Guard — D

**Speed:** 6 → 4. **Upkeep:** 3 → 2.

**Effect:** Gain +Athletics/5 to targeted Melee Parries. After fully defending against an enemy Attack, your next Melee Chain Attack against that enemy gains +15% Final Damage if it is your next non-Interrupt Action.

### Long Guard — D

**Speed:** 6 → 4. **Upkeep:** 3 → 2.

**Effect:** Increase your Melee Weapon Reach by 50%, minimum +2 yards. Gain +Athletics/5 Parry against targeted Melee Attacks that began outside your unmodified weapon Reach.

### Open Guard — C

**Speed:** 8 → 5. **Upkeep:** 4 → 3.

**Effect:** After the target declares its Defense against your Chain Attack, impose a penalty of Athletics/5 on that Defense. The penalty applies once to each Attack, including one that generates multiple hits.

### Point Guard — C

**Speed:** 8 → 5. **Upkeep:** 4 → 3.

**Effect:** Reduce Called Shot Accuracy penalties with weapon attacks by Athletics/5, minimum 0. Called Shots gain +15% Wounding.

### Committed Guard — B

**Speed:** 10 → 6. **Upkeep:** 6 → 4.

**Effect:** Damaging Melee Bukijutsu gain +25% Wounding. Increase their printed Knockback by 50%, rounded down, and their printed Stun by half your PDB, rounded down. Apply these increases before Special rolls and Partial Defense.

### Flowing Guard — D

**Effect:** Switch from one active Bukijutsu Stance to another you know without changing Chain value. Pay this technique’s Stamina and Speed instead of the new Stance’s activation costs. The old Stance ends and the new Upkeep begins.

### Weapon Breaker — B

**Effect:** Use retroactively after your weapon Attack is successfully Parried or Blocked by a weapon. After that Defense resolves, inflict WDP equal to half the defending weapon’s damage-level threshold, rounded up. Use that weapon’s Durability + its wielder’s DEX/10. This is explicit weapon damage and applies once to that weapon per Attack.

### Chakra Reinforcement — B

**Effect:** Choose Blunt, Slashing, Piercing or Energy. One held weapon may deal that wound type and gains a Damage Bonus equal to half your NDB. Calculate this bonus when activating the technique, before bonuses granted by maintained weapon techniques.

### Chakra Reach — A

**Effect:** One Melee Weapon gains additional Reach equal to the greater of its unmodified Reach or your CHA/5. When striking through this extension, it does not trigger on-contact punishment caused solely by touching the defender. Attacks still need a clear path.

## Sword

### Rising Cut — E

**Damage:** +2dS → +max(2, floor(STR/15))dS. **Tags:** Chain 1, Sword, Attack, Movement → Chain 1, Sword, Attack.

**Effect:** On a full hit, note the Defense used. If the target uses that broad Defense against your next Sword Chain Attack, it takes a penalty of Athletics/5 and its final Speed is doubled when advancing its next action. This does not affect Interrupt validity.

### Draw Cut — E

**Damage:** +1dS → +max(1, floor(STR/15))dS. **Tags:** Chain 1, Sword, Attack, Movement → Chain 1, Sword, Attack.

**Effect:** Requires a sheathed sword. Reduce this Attack’s final Speed by 2 after modifiers, subject to normal minimums. If the target has not yet attacked you this combat, gain +25% Wounding. The sword ends drawn.

### Descending Cut — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** If your previous Chain attack was Chain 1, choose one when this Attack fully hits: Drop Weight — treat this Attack as 4 Speed higher for damage only; or Smother the Guard — note the Defense used against this Attack; that same broad Defense takes −Athletics/5 against your next Sword Chain attack.

### Finishing Cut — E

**Damage:** +5dS → +max(5, floor(STR/15))dS. **Accuracy:** -1 → removed.

**Effect:** Gain +30% Wounding and reduce Called Shot penalties by Athletics/5, minimum 0. If your previous Sword Chain Attack hit through Partial Defense, use +50% Wounding instead. This exploits a weakened guard without requiring an already-broken Chain.

### Half-Step — E

**Stamina:** 4 → +4. **Speed:** 2 → +1. **Tags:** Chain X, Sword, Utility, Movement → Link, Sword, Attack.

**Effect:** Link to a Sword Attack. If the target Dodges, double that Defense’s final Speed when advancing its next action. This does not change whether the Defense is a valid Interrupt.

### Iaidō — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** Requires a sheathed sword. On the first use against a creature this combat, its Defensive Interrupts count as +2 Base Speed for Defense Validity. Ends drawn.

### Reversing Cut — D

**Damage:** +3dS → +max(3, floor(STR/10))dS. **Tags:** Chain 2, Sword, Attack, Movement → Chain 2, Sword, Attack.

**Effect:** Read the Defense used against your previous Chain Attack. If the target repeats that broad Defense, it takes a penalty of Athletics/5. If it changes Defense, this Attack gains +25% Final Damage.

### Reverse Edge — D

**Damage:** +5dS → +max(5, floor(STR/10))dS.

**Effect:** If the previous Chain Attack was partially defended, impose a penalty of Athletics/5 on the target’s Defense against this Attack.

### Bind and Recover — D

**Speed:** 5 → 3.

**Effect:** Parry a targeted Melee Attack with +Athletics/5. On a full success, your next Sword Chain Attack against that attacker gains +Athletics/5 Accuracy if it is your next non-Interrupt Action. This does not defend against AoEs.

### Tempered Edge — D

**Effect:** One sword gains +15% Wounding, stacking with its printed Sword Bukijutsu Wounding. Its edge may cut chakra-created physical bindings as an ordinary weapon Attack against that binding, using the binding’s normal durability and destruction rules. This grants no ability to cut intangible possession or effects without a physical target.

### Half-Sword Thrust — C

**Damage:** +5dS → +max(5, floor(STR/7))dS.

**Effect:** Treat this Attack as Piercing. Reduce the target armor’s Absorption and flat DR by 25% for this Attack, after applying its damage-type matchup.

### Broken Rhythm — C

**Effect:** Oppose your chained target’s Awareness with Espionage. On success, its next Defense against your Sword Chain Attack takes a penalty equal to 2 plus 1 per full 5 points you won by, maximum 6. The opening ends when used or when the target completes its next non-Interrupt Action.

### Circular Draw — C

**Damage:** +6dS → +max(6, floor(STR/7))dS.

**Effect:** Attack every chosen enemy in the line with one Accuracy roll; divide Speed×PDB evenly among targets hit.

### Intercepting Draw — B

**Effect:** Requires a sheathed sword. Parry a targeted Melee Attack with +Athletics/5. On a full success, immediately make a Sword Basic Weapon Attack against the attacker at full damage if it is within Reach. The counter has its own Accuracy and Defense; its action time is included in this technique, and you pay the Basic Attack’s Stamina. End drawn. This does not defend against AoEs.

### Draw Reset — B

**Effect:** Sheathe one sword you hold without changing Chain value. If your next non-Interrupt Action is a Sword Chain 1, reduce its final Speed by 25%, rounded down, subject to normal Speed minimums, and gain +Athletics/5 Accuracy on that Attack.

### Final Measure — A

**Damage:** +12dS → +max(12, floor(STR/3))dS. **Accuracy:** -1 → removed. **Special:** Knockback 5 (Carry Through only) → Knockback (Carry Through; see Effects).

**Effect:** Gain +25% Final Damage and +25% Wounding. Choose Sever Guard or Carry Through when declaring. Sever Guard: if a weapon Blocks or Parries this Attack, after defense it suffers WDP equal to its damage-level threshold (Durability + wielder’s DEX/10), even if no damage reaches its wielder. Carry Through: on a full hit resolve Knockback equal to the greater of 10 or STR/3; on a successful Special, you may follow its actual movement, ending within Reach. These are explicit weapon damage and normal resisted Knockback respectively.

### Perfect Bind — A

**Effect:** Parry a targeted Melee Attack with +Athletics/5. On a full success, choose one: Turn the Line — win an Athletics Status Roll against Resistance to move the attacker up to STR/5 yards in any legal direction and apply Prone; or Seal the Line — the attacking weapon cannot Parry your next Sword Chain Attack if it is your next non-Interrupt Action. This does not defend against AoEs.

## Club

### Driving Blow — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Resolve Knockback using the greater of 3 or STR/10 as its printed severity. On a successful Special, choose to follow the target’s actual movement, ending within Reach, or increase the resulting distance by 50%. Obstacles stop movement normally.

### Rising Blow — E

**Damage:** +2dS → +max(2, floor(STR/15))dS. **Accuracy:** -1 → removed.

**Effect:** Apply the printed Stun normally. If the target was already Stunned, replace this Stun with +20% Final Damage.

### Returning Swing — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** If this is your first non-Interrupt Action after resolving an Attack directed at you by the target, this Attack gains +Athletics/5 Accuracy.

### Overhead Blow — E

**Damage:** +5dS → +max(5, floor(STR/15))dS. **Accuracy:** -2 → removed.

**Effect:** Make a Called Shot to the Head using its normal penalty. Gain +15% Wounding. There is no additional Accuracy or failed-Attack penalty.

### Brace — E

**Speed:** 5 → 3.

**Effect:** Parry a Melee Attack with +2. On success, reduce Knockback from that Attack to 0. This does not defend against AoEs.

### Wide Swing — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Attack all enemies in reach. Divide Speed×PDB evenly among targets hit. Resolve the Special separately against each fully hit target.

### Rib Shot — D

**Damage:** +4dS → +max(4, floor(STR/10))dS.

**Effect:** On a full hit, choose one: Smother the Breath — the target’s next Attack takes an Accuracy penalty of Athletics/5; or Rattle the Frame — apply Stun equal to the greater of 4 or half your PDB, rounded down. Smother the Breath ends after that Attack.

### Armor Crack — D

**Damage:** +5dS → +max(5, floor(STR/10))dS. **Accuracy:** -1 → removed.

**Effect:** After defense, deal this Attack’s damage directly to the struck armor piece, Barrier or Construct before resolving damage against its wearer. Apply structural damage-type matchups once. If that protection breaks, resolve the hit against the wearer without that protection; otherwise use its remaining protection normally. This structural strike is additional damage and does not bypass the target’s Defense.

### Head-Heavy Grip — D

**Effect:** One blunt weapon gains additional Reach equal to the greater of 2 yards or STR/10. Increase its printed Bukijutsu Knockback by 50%, rounded down, before the Status Roll. It may deal Blunt wounds even if another property would change its wound type.

### Low Sweep — C

**Damage:** +5dS → +max(5, floor(STR/7))dS. **Accuracy:** -1 → removed.

**Effect:** On a full hit, choose Prone or Knockback equal to the greater of 6 or STR/5, then resolve the Special normally.

### Short Grip — C

**Effect:** For your next Club Chain Attack, halve temporary Accuracy penalties and weapon Delay, rounding the remaining values down. If neither applies, gain +15% Final Damage and you may treat it as Piercing by concentrating force into the weapon’s end. The benefit ends if your next non-Interrupt Action is not that Attack.

### Wallbreaker — C

**Damage:** +8dS → +max(8, floor(STR/7))dS. **Accuracy:** -2 → removed.

**Effect:** Against Armor, Barriers and unattended objects, this Attack deals +45% final damage and cannot have its damage reduced below 50% by Partial Success.

### Guard Rattle — B

**Damage:** +8dS → +max(8, floor(STR/5))dS.

**Effect:** If a weapon Blocks or Parries this Attack, it suffers WDP equal to its damage-level threshold after defense, even if its wielder takes no damage. It cannot Parry your next Club Chain Attack. Otherwise, a full hit applies Stun equal to the greater of 5 or your PDB, rounded down. This is explicit weapon damage.

### Ground Shock — B

**Tags:** Chain X, Club, Utility → Chain X, Club, Attack, AoE.

**Effect:** Strike the ground in an Area equal to the greater of 5 yards or STR/5, centered on you. Grounded enemies defend against your normal weapon Accuracy as an AoE; on a full hit, resolve Prone using Athletics against Resistance. No damage is dealt. Breakable ground becomes Rocky Terrain with severity equal to the greater of 2 or Athletics/10, maximum 5, until cleared or repaired. You are not affected by your own Prone effect.

### Collision Breaker — A

**Damage:** +13dS → +max(13, floor(STR/3))dS. **Accuracy:** -2 → removed. **Special:** Knockback 6 → Knockback 12.

**Effect:** Use the greater of 12 or STR/3 as the printed Knockback. On a full hit, also apply Stun equal to the greater of 4 or your PDB, rounded down. Gain +25% Final Damage and +25% Wounding. No collision is required.

### Juggernaut Rush — A

**Damage:** +10dS → +max(10, floor(STR/3))dS. **Accuracy:** -1 → removed. **Special:** Knockback 6 → Knockback 12.

**Effect:** Use the greater of 12 or STR/3 as the printed Knockback. Before the Attack, use Move with an Attack in a straight line using its full final Speed instead of half. On a full hit, resolve Prone and Knockback with one Athletics Status Roll against Resistance. You may follow the target’s actual movement, ending within Reach. Obstacles stop movement without adding collision damage.

## Polearm

### Passing Thrust — E

**Damage:** +2dS → +max(2, floor(STR/15))dS. **Tags:** Chain 1, Polearm, Attack, Movement → Chain 1, Polearm, Attack.

**Effect:** Increase the weapon’s unmodified Reach by 50%, minimum +2 yards. On a full hit, the target cannot use Take the Hit until it completes its next non-Interrupt Action.

### Butt-End Check — E

**Damage:** +1dS → +max(2, floor(STR/15))dS. **Special:** Knockback 2 → Knockback 4.

**Effect:** Treat the attack as Blunt. On a full hit, the target takes −2 to its next Attack against you before your next Action. On a successful Special, you may follow the target up to the distance it was moved, ending within your normal Reach.

### Threading Thrust — E

**Damage:** +3dS → +max(3, floor(STR/15))dS. **Accuracy:** -1 → removed.

**Effect:** Defensive Interrupts against this Attack count as +1 Base Speed for Defense Validity. Reduce the target armor’s flat DR by 20% for this Attack, after applying its damage-type matchup.

### Driving Thrust — E

**Damage:** +5dS → +max(5, floor(STR/15))dS. **Accuracy:** -2 → removed.

**Effect:** Gain additional Reach equal to half the weapon’s unmodified Reach, minimum 2 yards, and +15% Wounding.

### Rotation Strike — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** Attack all chosen enemies in Reach. If only one creature is targeted, gain +Athletics/5 Accuracy instead.

### Catch and Turn — D

**Damage:** +3dS → +max(3, floor(STR/10))dS.

**Effect:** On a full hit, choose one: Turn — resolve Knockback equal to the greater of 4 or STR/8 in any legal direction; or Sweep — resolve Prone normally.

### Pinning Thrust — D

**Damage:** +5dS → +max(5, floor(STR/10))dS. **Accuracy:** -2 → removed.

**Effect:** This Attack deals Piercing wounds and gains +15% Wounding. Resolve Immobilization with severity equal to the greater of 2 or Athletics/10, maximum 6. It ends when the target spends a Speed 3 Utility Action to free the impaled clothing or equipment.

### Haft Guard — D

**Speed:** 5 → 3. **Tags:** Chain X, Polearm, Utility, Interrupt, Movement → Chain X, Polearm, Utility, Interrupt.

**Effect:** Parry a targeted Melee Attack with +Athletics/5. On a full success, push the attacker directly away to any legal point within your Polearm Reach. This cannot pass through obstacles and does not defend against AoEs.

### Extended Guard — D

**Stamina:** 9 → 7. **Speed:** 7 → 4. **Upkeep:** 2 → 1.

**Effect:** Increase Polearm Reach by 50%, minimum +2 yards. While maintained, when a perceived creature voluntarily moves from outside to inside that Reach, you may use Set Spear at full damage. A full hit stops that approach at contact. This does not stop teleportation or forced movement. Pay Set Spear’s normal costs and Interrupt Speed.

### Weapon Hook — C

**Damage:** +4dS → +max(4, floor(STR/7))dS.

**Effect:** On a full hit, choose one held weapon. Until the target completes a Speed 3 Utility Action to free it, it cannot use that weapon to Attack or Parry. You must keep the Polearm in hand and the target within Reach; releasing the hook ends the restriction. You may continue Polearm Chain Attacks against that target while maintaining the hook.

### Shaft Pivot — C

**Stamina:** 6 → +6. **Speed:** 2 → +0. **Tags:** Chain X, Polearm, Utility, Movement → Link, Polearm, Attack.

**Effect:** Link to a Polearm Attack against your chained target. If the target uses a weapon to Parry, halve that weapon’s positive Parry modifiers, rounded down. On a full hit, choose that weapon: it cannot Parry your next Polearm Chain Attack. Other legal defenses remain available.

### Leaping Pole — C

**Stamina:** 12 → +12. **Damage:** — → +max(5, floor(STR/7))dS. **Speed:** 8 → +3. **Tags:** Bukijutsu, Polearm, Utility, Movement → Chain 2, Polearm, Attack, Movement.

**Effect:** Vault toward a target using Move with an Attack calculated from the Attack’s full final Speed. This movement may clear intervening difficult ground or a gap with a legal landing. On a full hit, resolve Prone using Athletics against Resistance. Against an already Prone target, gain +50% Wounding instead.

### Crossbar Catch — B

**Stamina:** 10 → 8. **Speed:** 4 → 3. **Tags:** Chain X, Polearm, Utility, Interrupt, Movement → Chain X, Polearm, Utility, Interrupt.

**Effect:** Parry a targeted Ranged Taijutsu or Projectile Attack with +Athletics/5. On a full success, redirect a physical projectile at its attacker if that attacker is within the projectile’s remaining Range. Use your Parry result as Accuracy and the projectile’s original damage; it defends normally. This counter adds no further cost or action time and cannot itself be redirected. This does not defend against AoEs.

### Sliding Measure — B

**Stamina:** 9 → 7. **Speed:** 3 → 2.

**Effect:** Choose a benefit for your next non-Interrupt Action, which must be a Polearm Attack: Long Measure adds twice the weapon’s unmodified Reach; Short Measure gains +30% Final Damage and may attack at adjacency without the weapon’s minimum-Reach penalty. This does not remove other restrictions on using that weapon. Repeated uses do not stack.

### Through-Line — A

**Damage:** +14dS → +max(14, floor(STR/3))dS. **Accuracy:** -2 → removed. **Tags:** Chain 3, Polearm, Attack, Movement → Chain 3, Polearm, Attack.

**Effect:** Gain +30% Wounding and ignore half the target armor’s Absorption and flat DR after its damage-type matchup. On a full hit, you may strike one creature directly behind it and within Reach at full damage. The second creature defends against the same Accuracy result. Resolve Chain progression once.

### Levering Throw — A

**Special:** Knockback 4, Prone → Knockback, Prone (see Effects).

**Effect:** Parry a targeted Melee Attack with +Athletics/5. On a full success, win one Athletics Status Roll against the attacker’s Resistance to apply Prone and Knockback equal to the greater of 10 or STR/3 in any legal direction. The throw may carry it beyond your Reach. This does not defend against AoEs.

## Chain

### Casting Lash — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Increase weapon Range by 25%, minimum +4 yards, for this Attack. On a full hit, initiate a Weapon Grapple and determine starting Control normally.

### Ankle Catch — E

**Damage:** +1dS → +max(1, floor(STR/15))dS.

**Effect:** On a full hit, you may deal 20% less final damage and initiate a Weapon Grapple. The target takes −Athletics/5 on the opposing Grapple check used to determine starting Control. While the Weapon Grapple remains a Clinch, the wrapped leg inflicts Immobilization 1.

### Reel and Strike — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** If the target is in your Weapon Grapple, this Attack gains Pummel and Trapping 2. On a successful Grapple roll, pull it toward you by up to half your current Control in yards, rounded down. If it cannot move because it is adjacent or anchored, gain +20% Final Damage instead.

### Neck Loop — E

**Damage:** +5dS → +max(5, floor(STR/15))dS. **Accuracy:** -2 → removed.

**Effect:** Called Shot to Head/Neck with its penalty reduced by 1. Apply Stun 2 normally. If the target is in your Weapon Grapple, this technique gains Takedown; on a successful Grapple roll, the target becomes Pinned by the Chain after the Attack resolves.

### Moving Coil — E

**Effect:** While maintained, gain +Athletics/5 Parry against targeted Ranged Taijutsu and increase Chain weapon Range by 25%, minimum +3 yards. This grants no AoE Parry permission.

### Wide Lash — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Attack all chosen enemies in the line. Resolve the Knockback Special separately against each target hit; successful Knockback moves the target toward the centre of the Line rather than away from you. Wide Lash cannot initiate a Weapon Grapple.

### Cross Snare — D

**Damage:** +3dS → +max(3, floor(STR/10))dS. **Accuracy:** -1 → removed.

**Effect:** If the target is in your Weapon Grapple, this technique gains Trapping 4. On a successful Grapple roll choose an arm or leg. Until the Weapon Grapple ends: arm = -2 Accuracy on actions requiring it; leg = Immobilization 2. Only one limb may be affected by Cross Snare from you at a time; a new application replaces the previous one.

### Double Bind — D

**Damage:** +4dS → +max(4, floor(STR/10))dS. **Accuracy:** -2 → removed.

**Effect:** Requires the target to be in your Weapon Grapple. This technique gains Takedown. On a successful Grapple roll, the target becomes Pinned by the Chain and you may choose up to two limbs; each chosen arm takes −Athletics/5 Accuracy on actions requiring it and each chosen leg applies Immobilization 2 while the Pin remains.

### Side Anchor — D

**Effect:** Anchor the chain around scenery or change its attack angle. Your next Chain attack or Weapon Grapple action may originate from the anchor for line of effect. That Attack or Grapple gains +Athletics/5 Accuracy.

### Coiled Guard — D

**Effect:** Gain +Athletics/5 Parry against targeted Melee Attacks and increase Chain weapon Range by 50%, minimum +6 yards. After a full Parry against an attacker in Range, you may initiate a Weapon Grapple, resolving starting Control normally. The chain must be free to hold it; one Parry cannot establish multiple Grapples. This grants no AoE Parry permission.

### Weapon Snare — C

**Damage:** +4dS → +max(4, floor(STR/7))dS. **Accuracy:** -1 → removed.

**Effect:** Requires the target to be in your Weapon Grapple. This technique gains Trapping 5. On a successful Grapple roll choose one held weapon and choose Attack or Parry; rolls of that type made with the snared weapon take -3 while the Weapon Grapple remains. At 8+ Control, the target cannot use that weapon for the chosen purpose until it successfully reduces your Control.

### Slip Step — C

**Stamina:** 7 → +7. **Speed:** 2 → +1. **Tags:** Chain X, Chain, Utility, Movement → Link, Chain, Attack.

**Effect:** Link to a Chain Weapon Grapple action. If you win its Grapple roll, gain additional Control equal to Athletics/5. If you lose, halve the Control you would lose, rounded down. This cannot establish a Grapple without a legal initiating effect.

### Tension Line — C

**Effect:** Attach the chain to a solid anchor within weapon Range and pull yourself to it, or pull an unattended object up to STR/5 weight units to you. Against a creature in your Weapon Grapple, instead win Grapple Offense against Grapple Defense to pull it up to half your Control in yards, minimum 5, toward you or the anchor. The chain must reach throughout; movement may be vertical.

### Intercepting Coil — B

**Tags:** Chain X, Chain, Utility, Interrupt, Movement → Chain X, Chain, Utility, Interrupt.

**Effect:** Parry a targeted Ranged Taijutsu or Projectile Attack with +Athletics/5. On a full success, catch a physical projectile with the chain. If its attacker is in Chain Range and your chain is unoccupied, immediately initiate a Weapon Grapple against it using your Parry result as the attack Accuracy; it defends normally, then determine Control normally on a hit. This adds no further action time. This does not defend against AoEs.

### Snap Return — B

**Effect:** Use when your chain would be disarmed, dropped or knocked away. Keep hold of it; if already thrown, retrieve it from anywhere within its weapon Range along a clear path. Preventing loss of access preserves an existing Weapon Grapple. This does not prevent destruction of the chain.

### Suspension Hold — A

**Damage:** +8dS → +max(8, floor(STR/3))dS. **Accuracy:** -2 → removed.

**Effect:** Requires the target to be Pinned by the Chain. This technique gains Submission and Control equal to the greater of 7 or Athletics/3. On a successful Grapple roll, choose a solid anchor within weapon Range and pull the target up to half your current Control in yards toward it. While maintained, the target takes a Dodge penalty of Athletics/5 and cannot voluntarily move farther from the anchor. Consecutive uses automatically hit as for a maintained Submission and apply Suffocation equal to the greater of 1 or half your PDB, rounded down. Destroying the anchor or ending the Weapon Grapple ends this technique.

### Tripwire Field — A

**Effect:** Connect up to 3 + Athletics/10 anchor points with your chain, all within weapon Range; the total routed length cannot exceed that Range. The field lasts until you retrieve the chain or a supporting anchor or chain segment is destroyed. When a creature crosses a line, resolve Grapple Offense against Grapple Defense. On success, apply Prone and initiate a Weapon Grapple with it, determining Control normally; the field ends as the chain tightens around that target. The same chain cannot simultaneously hold a creature and form this field.

## Dual

### Double Cut — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Make one Attack with each held weapon at 55% final damage each. Roll Accuracy separately. If either hits, Chain 1 is established.

### Scissor Step — E

**Damage:** +2dS → +max(2, floor(STR/15))dS. **Tags:** Chain 1, Dual, Attack, Movement → Chain 1, Dual, Attack.

**Effect:** Requires two weapons. Choose one to attack and use the other to threaten the defender. If the target Parries, it takes a penalty of Athletics/5. If it Dodges, double that Defense’s final Speed when advancing its next action; Interrupt validity is unchanged.

### Alternating Cuts — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** If this Attack uses a different leading weapon from your previous damaging Dual Chain Attack, gain +Athletics/5 Accuracy. Declare the leading weapon before the Defense; it supplies this Attack’s damage type and weapon properties.

### Closing Pair — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Make one Attack with each weapon at 65% Final Damage, rolling and defending separately. Combine successful hits for Wounding only. If both fully hit the same creature, resolve Prone using Athletics against Resistance. Resolve Chain progression once.

### Off-Hand Catch — E

**Speed:** 5 → 3.

**Effect:** Parry a targeted Melee Attack with the off-hand weapon at +Athletics/5. On full success, your next Dual Chain Attack gains +15% Final Damage if it is your next non-Interrupt Action. This does not defend against AoEs.

### Turning Flurry — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Make one Accuracy roll with each weapon against every chosen enemy in Area; each successful weapon deals 50% final damage.

### Split Guard — D

**Damage:** — → +floor(STR/10)dS.

**Effect:** Make one Attack with each weapon at 60% final damage. The target chooses and resolves a Defense against each Attack. If it uses the same broad Defense against both, its second roll takes −Athletics/5. If it uses two different broad Defenses, each successful hit gains +2dS. Chain advances if either Attack hits.

### Cross Finish — D

**Damage:** +6dS → +max(6, floor(STR/10))dS. **Accuracy:** -2 → removed.

**Effect:** Requires two weapons. On a full hit, choose two different wound locations; if the Attack wounds, apply one wound at the normal location and a second wound one severity lower at the other location. The secondary wound cannot exceed Minor severity.

### Hand Feint — D

**Effect:** Oppose the target’s Awareness with Espionage. On success, choose Dodge or Parry; that Defense takes a penalty of 2 plus 1 per full 5 points you won by, maximum 6, against your next Dual Chain Attack.

### Paired Flow — D

**Effect:** While wielding two weapons, gain +Athletics/5 Parry. When a Dual Chain Attack uses a different leading weapon from your previous Dual Chain Attack in the current Chain, reduce its final Speed by 20%, rounded down, subject to normal Speed minimums. Apply this once per Attack.

### Split Pursuit — C

**Damage:** — → +floor(STR/7)dS.

**Effect:** Make one Attack with each weapon at 60% final damage. The attacks must target different creatures. If either hits, choose one hit creature as your chained target.

### Changing Lead — C

**Effect:** Swap which held weapon is leading. Your next Dual Chain Attack may use either weapon’s damage type and ignores temporary Accuracy penalties specific to the other hand. If it is your next non-Interrupt Action, it also gains +15% Final Damage.

### Weapon Lock — B

**Damage:** +6dS → +max(6, floor(STR/5))dS. **Accuracy:** -1 → removed.

**Effect:** Requires two weapons. On a full hit, if the target used a weapon to Block or Parry, that weapon cannot be used to Block or Parry your next Dual Chain attack.

### Counterpair — B

**Effect:** After fully Parrying a targeted Melee Attack, make an off-hand Basic Weapon Attack against the attacker at full damage if it is within Reach. Pay this technique’s Stamina and Interrupt Speed instead of that Basic Attack’s costs. The counter has its own Accuracy and Defense and is Chain X.

### Crossed Execution — A

**Damage:** — → +floor(STR/3)dS.

**Effect:** Requires two weapons. Make one Attack with each at full damage, rolling and defending separately. One strikes the target and gains +25% Wounding; the other strikes a held weapon or worn armor piece. Resolve that structural hit as a direct attack on the item, using normal item defenses and armor matchups. It does not also damage the wielder. Chain ends after both attacks resolve.

### Divergent Current — A

**Effect:** Maintain two different weapon-coating effects you know, one on each held weapon. Pay both activation costs and this technique’s Chakra cost. While maintained, pay this Upkeep plus only the higher coating Upkeep. Their effects apply to their respective weapons normally; ending Divergent Current ends both coatings unless their normal Upkeeps are paid.

## Bow

### Marking Shot — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Bow only. On a full hit, Mark the target until your Chain against it ends. Your next Bow Chain 2 against it gains +Athletics/5 Accuracy, increased by 1 if it voluntarily moved after being Marked. That Attack consumes the Mark. A new Mark replaces your previous one.

### Pinning Shot — E

**Damage:** +1dS → +max(1, floor(STR/15))dS.

**Effect:** Bow only. Resolve Immobilization with severity equal to the greater of 2 or Athletics/10, maximum 6. It ends when the target removes the arrow with a Speed 3 Utility Action.

### Angle Shot — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** If the target uses the same broad Defense it used against your Chain 1, that Defense takes −Athletics/5.

### Multiple Shot — E

**Damage:** — → +max(2, floor(STR/15))dS.

**Effect:** Fire two arrows. Each uses the weapon dice plus this technique’s Damage dice; divide Speed×PDB evenly between them. Declare targets and roll Accuracy separately. Both may target your chained creature, or one may target a held weapon or worn armor piece on it using normal Called Shot penalties, item defenses and structural damage rules. Combine successful hits on the creature for Wounding only; item damage does not also damage its wielder.

### Quick Nock — E

**Effect:** Nock an arrow. Your next Bow Chain attack has -2 Speed, minimum Base Speed 3.

### Volley — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Fire a volley; attack all chosen creatures in Area. Each target takes weapon damage with only 50% of Speed×PDB.

### Twin Arrow — D

**Damage:** — → +floor(STR/10)dS.

**Effect:** Fire two arrows at the chained target, each at 60% Final Damage. Roll Accuracy separately; the defender declares one legal defensive method, pays its cost and Speed once, and rolls it separately against each arrow. If either fully hits and you know Marking Shot, establish or refresh your Bow Mark. Resolve Chain progression once; Partial Defense applies to each hit normally.

### Precision Shot — D

**Damage:** +6dS → +max(6, floor(STR/10))dS. **Accuracy:** -2 → removed.

**Effect:** Gain +30% Wounding. Reduce the target armor’s Absorption and flat DR by 50% for this Attack, after its damage-type matchup. If the target has your Bow Mark, consume it when declaring to gain +Athletics/5 Accuracy.

### Cutting Arrow — D

**Speed:** 5 → 3.

**Effect:** Consume an arrow to Parry a targeted Ranged Taijutsu or Projectile Attack with +Athletics/5. This does not defend against AoEs.

### Held Draw — D

**Effect:** While maintained, Bow attacks gain +Athletics/5 Accuracy against targets that have not moved since your last action. If you move for any reason, you lose this bonus until your next action.

### Threaded Shot — C

**Damage:** +4dS → +max(4, floor(STR/7))dS.

**Effect:** On a full hit, you may also attack one creature directly behind the target within the bow’s remaining Range for 60% Final Damage, using the same Accuracy result. It defends separately. The secondary hit cannot establish or advance Chain.

### Mobile Draw — C

**Stamina:** 7 → +7. **Speed:** 2 → +0. **Tags:** Chain X, Bow, Utility, Movement → Link, Bow, Attack, Movement.

**Effect:** Link to a Bow Attack. Move with that Attack using its full final Speed, in any legal direction. The movement does not remove Held Draw’s benefit for this Attack. If the target Dodges, double its Defense Speed when advancing its next action; Interrupt validity is unchanged. Bow only.

### Reinforced Arrow — C

**Effect:** Ammunition fired from one bow counts as chakra-enhanced, gains +20% Wounding, and may damage chakra constructs normally.

### Anchor Shot — B

**Damage:** +6dS → +max(6, floor(STR/5))dS. **Accuracy:** -1 → removed.

**Effect:** On a full hit, resolve Immobilization with severity equal to the greater of 3 or Athletics/10, maximum 6. If there is solid terrain within the target’s Reach, you may instead anchor it there; it cannot voluntarily move away until it removes the arrow as a Speed 5 Utility Action or destroys the anchor. The ordinary Immobilization ends when the target removes the arrow with that same Action.

### Sightline — B

**Effect:** Make a Search with +Athletics/5 Awareness. Your next Bow Attack against a located target ignores Visibility penalties and gains +50% Range if it is your next non-Interrupt Action. The projectile still requires a clear path.

### Skyfall Shot — A

**Damage:** +12dS → +max(12, floor(STR/3))dS. **Accuracy:** -1 → removed.

**Effect:** Choose a clear arcing projectile path within Bow Range and ignore Visibility penalties against a creature you can locate. Gain +25% Final Damage and +30% Wounding. On a full hit, resolve Prone using Athletics against Resistance. This adds no Delay beyond the weapon’s normal Bukijutsu Delay.

### Hunter's Watch — A

**Effect:** Choose a 90-degree arc within Bow Range. While maintained, when a creature voluntarily moves in that arc, you may make a Bow Basic Weapon Attack against it at full damage as an Offensive Interrupt. Pay that Basic Attack’s normal Stamina and final Speed. One movement Action can trigger one shot from you. The shot resolves at a point in its path that you can perceive and legally target.

## Fan

### Opening Gust — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Resolve Knockback equal to the greater of 4 or CHA/10. On a successful Special, choose any legal direction. If this breaks the target’s Reach to a creature it was restraining, apply the restraint’s normal separation rules.

### Folding Edge — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Melee only. On a full hit, the target takes −Athletics/5 Parry against your next Fan Chain attack.

### Reversing Gust — E

**Damage:** +3dS → +max(3, floor(STR/15))dS.

**Effect:** Resolve Knockback using the greater of 3 or CHA/10; successful Knockback moves the target toward you rather than away.

### Full Fan Gust — E

**Damage:** +5dS → +max(5, floor(STR/15))dS.

**Effect:** Gain +15% Wounding. Use the greater of 5 or CHA/10 as the printed Knockback.

### Wind Screen — E

**Speed:** 5 → 3. **Tags:** Chain X, Fan, Utility, Interrupt, Movement → Chain X, Fan, Utility, Interrupt.

**Effect:** Parry a targeted Ranged Taijutsu or Projectile Attack with +Athletics/5. A full success also ends any effect carried solely by that projectile before it reaches you. This does not cancel an independent area effect or permit AoE defense.

### Broad Sweep — E

**Damage:** +2dS → +max(2, floor(STR/15))dS.

**Effect:** Attack all chosen enemies in Area. Speed×PDB is divided among targets hit. Resolve the Special separately against each fully hit target.

### Backdraft — D

**Damage:** +3dS → +max(3, floor(STR/10))dS.

**Effect:** Resolve Knockback equal to the greater of 4 or CHA/8 in any sideways direction. On a full hit, the target also takes a penalty of Athletics/5 on its next ranged Attack, consumed by that Attack.

### Dust Sweep — D

**Damage:** +5dS → +max(5, floor(STR/10))dS.

**Effect:** Targets that fully Dodge move to the Area edge as part of that Defense. Targets hit suffer Visibility equal to the greater of 2 or Athletics/10, maximum 5, until they clear their eyes with a Speed 3 Utility Action. Apply Partial Defense to the severity normally.

### Wind Sense — D

**Effect:** Make a Search using Chakra Control or Awareness with +Athletics/5. Your next Fan Attack against a creature located by this Search ignores Visibility penalties if it is your next non-Interrupt Action. It still requires a clear attack path.

### Guided Wind — D

**Effect:** Increase the Range of Fan Bukijutsu and Fuuton cast through this fan by 50%. Increase their printed Knockback by 50%, rounded down, before Special rolls. These bonuses last while maintained.

### Shearing Wake — C

**Damage:** +4dS → +max(4, floor(STR/7))dS.

**Effect:** On a full hit, strip away the target’s maintained Prepare Blocking or equivalent Blocking stance. It must declare that stance again to regain its benefits. This does not end unrelated Upkeeps or cancel the Defense already resolved.

### Crosswind Step — C

**Stamina:** 7 → +7. **Speed:** 2 → +1. **Tags:** Chain X, Fan, Utility, Movement → Link, Fan, Attack.

**Effect:** Link to a Fan Attack. On a successful Knockback Special, you choose its direction. The target also becomes Prone using that same successful Status Roll. If the Attack has no Knockback, it gains Knockback equal to CHA/5, minimum 4.

### Closed Guard — C

**Effect:** Parry a targeted Melee Attack with +Athletics/5. On full success, your next Fan Chain 1 gains +20% Final Damage if it is your next non-Interrupt Action. This does not defend against AoEs.

### Returning Gale — B

**Damage:** +7dS → +max(7, floor(STR/5))dS.

**Effect:** Use the greater of 5 or CHA/5 as the printed Knockback. On a successful Special, choose any sideways direction and follow up to the target’s actual movement along a legal path. This follow replaces Move with an Attack for this technique.

### Seamless Wind — B

**Effect:** Once per Chain, your next Fan-tagged Fuuton used may be used without breaking Chain. It does not change or refresh Chain, and cannot trigger an effect that grants an additional weapon attack after using Fuuton.

### Windbreak — A

**Damage:** +12dS → +max(12, floor(STR/3))dS.

**Effect:** Use the greater of 10 or CHA/3 as the printed Knockback. Gain +25% Final Damage. The Line remains turbulent until your next non-Interrupt Action; Ranged Taijutsu and Projectile Attacks crossing it take an Accuracy penalty of Athletics/5.

### Perfect Current — A

**Effect:** Your next Fan Attack may bend up to twice, each by up to 90 degrees, within its total Range. Ignore Visibility penalties against targets you can locate and gain +25% Final Damage. Every segment needs a clear path. The benefit ends if your next non-Interrupt Action is not a Fan Attack.

## Thrown

### Double Cast — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Throw two compatible weapons at one target and choose before its Defense: Crossed Blades — use one Accuracy roll and one Defense; each weapon contributes 55% of its damage, with its own damage type and legal payload, then apply that Defense’s result normally; or Decoy — one weapon deals no damage and distracts the guard, imposing an Athletics/5 penalty if the target Parries, while the other deals its full damage. Both weapons are spent; Chain advances once if the Attack hits.

### Needle Lead — E

**Damage:** +1dS → +max(1, floor(STR/15))dS.

**Effect:** Requires Kunai, Shuriken or Senbon. On a full hit choose one: Bleed — resolve Bleed equal to the greater of 2 or Athletics/10, maximum 6, using Athletics against Resistance; or Disrupt — the target takes an Accuracy penalty of Athletics/5 on its next Attack. Declare which projectile carries a poison or other payload before the Defense.

### Manipulated Shuriken — E

**Damage:** — → +floor(STR/15)dS.

**Effect:** Requires Ninja Wire for the entire clear projectile route. After the target fully defends, you may redirect the weapon along a clear return path within its remaining Range and force one repeat of that Defense. Reuse its paid Stamina, Chakra, AP and Speed; it pays and advances time only once. If the repeated Defense fails, resolve its ordinary Partial Defense against an Attack dealing 75% Final Damage. The repeated result replaces the first. Keep the wire committed until the Attack finishes; then you may retrieve the weapon along that route if it is not embedded or held.

### Fuuma Barrage — E

**Damage:** — → +max(2, floor(STR/15))dS.

**Effect:** Fuuma Shuriken only. Throw two weapons in succession, rolling and defending separately. Each hit deals 65% of weapon dice plus this technique’s Damage dice plus PDB × final Speed; combine damage for Wounding only. If both fully hit the same creature, resolve Prone using Athletics against Resistance as the crossing blades break its footing.

### Hidden Mouth Needle — E

**Speed:** 3 → +0. **Tags:** Chain X, Thrown, Utility → Link, Thrown, Attack.

**Effect:** Link to a Senbon Attack or Senbon Multi-Throw. Produce one concealed Senbon as part of the Attack without a Draw action; it counts toward normal ammunition and projectile limits. The first use against a creature that has not seen you use this trick is a Surprise Attack even if you were not Hidden. Other projectiles must already be readied normally.

### Field Volley — E

**Stamina:** 6 → +6. **Damage:** — → +floor(STR/15)dS. **Tags:** Bukijutsu, Thrown, Attack → Bukijutsu, Thrown, Attack, AoE.

**Effect:** Supply one thrown weapon per chosen creature in Area, within your normal Multi-Throw allowance. Make one Accuracy roll; each target defends separately and can be hit by one weapon. Each fully hit target takes an Accuracy penalty of Athletics/5 on its next Ranged Attack. Pay normal ammunition and add this technique’s Stamina to the normal Multi-Throw Stamina, using this technique’s printed Speed.

### Banked Throw — D

**Damage:** +4dS → +max(4, floor(STR/10))dS.

**Effect:** Choose a bank point along a clear route within total throwing Range. Use a hard surface, or throw an additional compatible weapon to create the ricochet point; that extra weapon counts toward your Multi-Throw limit and costs its normal Multi-Throw increments but deals no damage. Measure the Attack’s final approach from the bank point and reduce Visibility penalties by Athletics/5. Both segments must be clear. This changes the attack angle without automatically granting Surprise.

### Handful Throw — D

**Damage:** — → +floor(STR/10)dS.

**Effect:** Multi-throw up to Athletics/5 additional weapons beyond your normal allowance, splitting them among legal targets. Use normal Multi-Throw damage and costs; distribute this technique’s extra dice once per target across its projectiles. Each target defends separately. Against a creature fully hit by at least two projectiles, you may resolve Immobilization equal to Athletics/5 using Athletics against Resistance, pinning its clothing or equipment. It can remove this Immobilization with a Speed 3 Utility Action.

### Return Flick — D

**Effect:** After your Thrown Attack resolves, recover its missed or deflected weapons along clear return paths within normal throwing Range. Weapons embedded in a creature, held by someone else, destroyed or consumed cannot be recovered this way. The recovered weapons are ready in your hands or carried holders; recovering them does not grant another Attack.

### Throwing Form — D

**Effect:** Halve the Speed added by Multi-Throw, rounding the remaining added Speed up, and increase its weapon allowance by Athletics/5. Use the highest extra allowance granted by Bukijutsu, not their sum. Normal Speed minimums and ammunition costs still apply.

### Crossfire Cast — C

**Damage:** — → +floor(STR/7)dS.

**Effect:** Throw one compatible weapon at each of two creatures at 60% Final Damage, rolling and defending separately. You may use this at Chain 0, 1 or 2. If the original chained target is hit, you may preserve your current Chain value against it. Alternatively, choose a hit creature and begin a new Chain 1 against it, ending the previous Chain and any unused Opening. This does not maintain two Chains or advance a preserved Chain.

### Corner Wire — C

**Effect:** Route Ninja Wire from your hand or a thrown weapon you have already placed along a clear path. Your next Thrown Chain Attack gains +50% Range and may turn up to 90 degrees along that route. Supply wire for the entire route; it cannot pass through solid barriers. You may keep a placed weapon as the anchor for later uses, but each Attack needs its own use of Corner Wire. Cutting, detaching or retrieving the wire ends the setup.

### Rigged Weapon — C

**Stamina:** 11 → +6. **Speed:** 8 → +2. **Tags:** Bukijutsu, Thrown, Utility → Link, Thrown, Attack.

**Effect:** Link to a Thrown Attack. As part of readying it, apply up to two compatible attachments to one projectile, such as a paper tag, wire loop or poison coating. Pay their normal item and resource costs and make required application checks; this Link replaces preparation actions, not separate activation or detonation actions. Follow normal payload compatibility and stacking rules. No payload is copied onto other projectiles.

### Returning Arc — B

**Damage:** +7dS → +max(7, floor(STR/5))dS.

**Effect:** After the first strike resolves, direct the weapon along a clear path within its remaining Range. Choose another creature, or the original target only if it fully defended the first strike. Make a new Accuracy roll; the target defends normally against 80% Final Damage. This Attack cannot also force a Defense reroll. Resolve Chain progression once against the original chained target. If neither strike leaves the weapon embedded or held, it returns to your hand along a clear remaining route.

### Scatter Run — B

**Stamina:** 9 → +9. **Speed:** 2 → +1. **Tags:** Chain X, Thrown, Utility, Movement → Link, Thrown, Attack.

**Effect:** Link to a Multi-Throw. Gain +Athletics/5 Accuracy and up to Athletics/5 additional weapons; use the highest extra allowance granted by Bukijutsu. Pay normal ammunition and Multi-Throw costs. A creature fully hit by at least two projectiles suffers Bleed equal to Athletics/5 after a successful Athletics Status Roll against Resistance, once per target. Choose ammunition types and payloads when declaring, not after Defense.

### Fuuma Reaper — A

**Damage:** — → +max(4, floor(STR/3))dS.

**Effect:** Fuuma Shuriken only. Choose up to 3 + Athletics/10 creatures or exposed mundane bindings along one continuous clear path within Range. Roll Accuracy separately against each hostile creature; each defends normally. A hit deals weapon dice plus this technique’s Damage dice plus PDB × final Speed and gains +20% Wounding. For a binding on a willing or helpless creature, you may instead sever that ordinary rope, net or strap without damaging the creature; this does not cut chakra restraints or armor. Each target can be struck once. Resolve Chain progression once against your chained target; if it cannot legally be included, this finisher cannot be declared.

### Wire Cage — A

**Area:** 6 within normal thrown Range → max(6, DEX/5) within normal thrown Range.

**Effect:** Requires four thrown weapons as physical anchors and enough Ninja Wire to connect the Area’s perimeter. Area is the greater of 6 yards or DEX/5, entirely within throwing Range. The cage lasts until its wire or anchors are cut, destroyed or retrieved. Creatures inside have 50% less movement. Crossing its boundary requires Athletics against your Athletics; on failure, stop at the boundary and become Prone. A creature may attack a wire or anchor using normal object rules to open a passage. Resolve one crossing check per movement Action. The cage does not prevent legal Attacks, defenses, handseals or techniques that bypass its physical boundary.

# Appendix B — Other updated catalogue techniques

The following entries are updated alongside the weapon-family changes, chiefly for Ballistic timing, AoE Parry restrictions and Cover removal. Values below are the final catalogue entries; costs and modifiers retain their usual interpretation.

## Boil

**Rank:** E. **Chakra:** 5 + X. **Speed:** X/4 (Rounded Up)**. **Tags:** Interrupt, Utility.

**Effect:** X is the number of gallons of battlefield water currently invested in the technique you are interrupting. You may use Boil as a Defensive Interrupt only against an Attack that currently has at least 1 gallon of battlefield water invested in it.

Make a Ninjutsu Parry against the interrupted Attack's Accuracy with a +CHA/10 bonus. This Parry permits Partial Success against non-AoE Attacks. It cannot defend against an AoE unless another effect expressly grants that permission; an AoE Parry grants no Partial Success. On a full success, you are fully defended from the Attack and boil off X gallons before it resolves. If this leaves the Attack below its minimum Gallon Requirement, it fails for all targets. Otherwise, if its effects scale with gallons, recalculate them using the gallons that remain before resolving the Attack against any other targets. On Partial Success or failure, Boil destroys no gallons.

Boil cannot erase Mokuton, Hyōton, or another advanced nature merely because Suiton helped create it. The interrupted technique must actually be using battlefield water at that moment.

## C1: Tsubasa - Explosive Clay Bird

**Rank:** D. **Chakra:** 18. **Damage:** 20d8\!\>8. **Speed:** 14. **Special:** Blast 4. **Tags:** Attack, Projectile, Clay, Energy.

**Effect:** The bird may curve around ordinary terrain but cannot pass through solid barriers or attack a target you cannot locate.

Treat the Attack's origin as any point up to 10 yards above its target.

## Caustic Passion

**Rank:** E. **Chakra:** 10. **Speed:** 5. **Tags:** Utility, Interrupt.

**Effect:** Choose up to 1 cubic foot of metal or stone within Range that you can see. Melt that volume into harmless slag. The material must be unattended and not Chakra Reinforced; a larger structure loses only the chosen volume.

As a Defensive Interrupt, instead defend against an Attack consisting entirely of ordinary metallic Projectile Weapons. Make a Ninjutsu Parry at −3. On full success, melt the projectiles and negate the Attack. On Partial Success against a non-AoE Attack, resolve its reduced effects, then melt the projectiles. On a full failure, the Attack and projectiles are unaffected. Use this option only against weapons you can see; chakra-created and Chakra-Reinforced weapons require another defense.

## Fūma Shuriken: Engetsu - Returning Crescent

**Rank:** C. **Stamina:** 14. **Damage:** As Weapon. **Speed:** As Weapon +4. **Tags:** Attack, Projectile, Weapon.

**Effect:** Choose one bend point within half the Attack's maximum Range. Draw the projectile's path from you to that point and then to the target; both segments must be physically clear.

Measure the projectile’s clear path from its bend point. It may pass around a corner but cannot pass through a solid obstacle or sealed barrier.

After the Attack resolves, the weapon returns along the same path if that route remains clear. Catching it is Speed 0.

## Kemuri Kakure: Vanishing Haze

**Rank:** D. **Chakra:** 12. **Speed:** 8. **Tags:** Utility, Self, Smoke.

**Effect:** Until the end of your next Action, reduce penalties to Stealth caused by moving by 5 and treat your body as ordinary environmental smoke for the purpose of mundane attempts to identify which part of a larger smoke cloud is you. Attacking, forming obvious handseals through Partial Reformation, or leaving all smoke or concealment ends this effect.

## Magen: Kyosenjō - False Battlefield

**Rank:** C. **Chakra:** 22. **Speed:** 14. **Special:** Perceived Range ±3 yards. **Tags:** Attack, Direct, Genjutsu, Visual.

**Effect:** On a full hit, for 20 IC the target treats all hostile creatures as 3 yards farther from or closer to them, chosen when cast, for Range and Move-with-Attack calculations.

This does not physically move anyone, change AoE locations or create physical barriers. Once the victim Realizes, it may use Genjutsu Kai to escape as normal; Realizing alone does not end it.  
Realizes: 8 + X IC

## Mokuton: Kajukai Kōrin - Advent of Flowering Trees

**Rank:** A. **Chakra:** 50. **Speed:** 28. **Upkeep:** 10. **Tags:** Utility, AoE, Environmental, Ground-Based.

**Effect:** Create a flowering forest. It counts as your Mokuton for Body of the Forest and imposes Visibility 3 on sight through its foliage. Hostile creatures entering or beginning an Action within the area make Resistance against your Chakra Control. Failure applies Drowsy 2; a target already Drowsy increases its severity by 1, maximum 6. This effect can occur only once per target per 10 IC.

## Snap Shot

**Rank:** C. **Stamina:** 16. **Damage:** As Weapon. **Speed:** As Weapon -2. **Tags:** Attack, Weapon, Ballistic.

**Effect:** Make a hurried Ballistic Attack. It cannot benefit from Aim, Predator's Zero or an effect that requires you to be Braced.

This Attack has no weapon Delay.

## Suika Bunretsu - Liquefaction Split

**Rank:** B. **Chakra:** 30. **Speed:** 8. **Tags:** Interrupt, Utility, Movement.

**Effect:** Choose G from 0–5 available gallons in Water Reserve and spend them with Chakra. As a Main Action, remove one external physical Immobilization and flow to a legal point within max(2, 2G) yards. As a Defensive Interrupt against one non-AoE, non-Genjutsu Attack, use the Parry below. Doton and Raiton cannot be Parried with this technique.

Choose a continuous route through openings at least 1 inch wide. The listed movement distance is already adjusted for Hydration; sealed barriers stop it. Gallons spent are consumed. Removed restraints are left behind, while internal conditions, sealing effects and shadow possession remain.

Make a Ninjutsu Parry with +1 per full 2 gallons spent. On full success, negate the Attack, remove one eligible restraint and move. On Partial Success, resolve the reduced Attack at your starting point, then remove the restraint and move if you remain able to act. On a full failure, remain in place. Hydration’s passive mitigation applies to damage you take. Ending Hydration during the hit cancels the escape and movement.

## Umi no Tate no Jutsu - Ocean Shield Technique

**Rank:** C. **Chakra:** 6 + G\*1.5. **Speed:** 8. **Tags:** Interrupt.

**Effect:** You may Parry a Melee, Ranged or AoE Attack with a Bonus of +(G/3). This works against jutsu weak to it up to A rank, jutsu strong against it up to C-rank, and all other Jutsu (including Taijutsu) up to B-rank.

## Yanagi no Mai - Dance of the Willow

**Rank:** C. **Chakra:** 15. **Speed:** 6. **Upkeep:** 4. **Tags:** Utility, Preparation.

**Effect:** While maintained, you may use Spinal Thrust after activation and then at least 10 IC after the last thrust. Declare it before Actions are declared on that IC and resolve them simultaneously, or immediately before or after your Main Action. You must be conscious, unstunned and not performing handseals or a delayed Action. Recasting does not refresh the timer.

Spinal Thrust — 4 AP for one creature within 5 yards, or 6 AP for any chosen creatures within 5 yards. Each needs a clear path from you and defends separately. Use Taijutsu Accuracy, Piercing damage and effective Base Speed 10, modified by Paralysis normally. Damage is PDB × effective Final Speed, with no base dice. Extra AP may reduce effective Speed to its normal minimum. The thrust advances no IC and grants no movement; defenders advance IC normally.

The first Spinal Thrust you use in a battle is a Surprise Attack against each chosen target. Later thrusts require ordinary Surprise conditions. Each thrust is a targeted Melee Attack: a full-success Parry prevents it completely, and Partial Defense applies normally. Dodge and other defenses retain their normal effects.

After resolving a thrust, gain one Ossification, Blades or Spurs Modification, once for the Action. Activating the form grants none. This is the technique’s Clan Jutsu Modification gain; Wound-triggered gains apply separately. End the form as Speed 0 by ending Upkeep.

## Yōton: Karyū Shōten - Eruption Ascendant

**Rank:** A. **Chakra:** 48. **Damage:** 12d12. **Speed:** 24. **Tags:** Attack, AoE, Energy, Environmental, Ground-Based.

**Effect:** Choose a visible ground point within Range. Attack creatures touching the ground within Area 15, then turn that ground into an Ascendant Field for 30 IC. The field remains fixed; creating another ends your previous Ascendant Field. Resolve the initial Attack before applying its field benefits.

When declaring a later Yōton Ninjutsu with a numeric Range, you may choose a visible point on this Field as its origin. Measure that Attack’s Range and Area from that point. Its target may be outside the Field, but you must perceive the target and have a clear attack path from the chosen origin. Pay the Action’s normal costs and handseals.

- Magma: the Field is Magma 6 for 30 IC. For its damage ticks, add 2 Severity against a creature carrying your Searing Residue. Apply normal Magma ticks and overlapping-field rules; this bonus does not increase its movement penalty.

- Quicklime: when your damaging Yōton hits a creature touching the Field, add 1 to the Quicklime Severity the hit would apply, then reduce it for Partial Defense. Your Quicklime total still has a maximum of 8 and uses its normal removal Action.

- Rubber: forced movement beginning in the Field gains up to 5 yards at your choice. Your Rubber movement can be redirected by up to 180 degrees. Apply extra distance and redirection once per movement, using only the largest distance bonus from your Rubber fields.
