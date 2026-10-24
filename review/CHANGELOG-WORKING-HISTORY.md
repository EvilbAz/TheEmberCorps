# Ember Corps — Skills and Combat Update

**Status: complete implementation draft for review; not published.**

This update covers the rules repository, a separate character-sheet review copy, and a local MonsterForge branch. Race mechanics are excluded, as requested. The numbers below are the concrete choices made for this draft, ready for balance review.

## 1. Skills and progression

- Add **Ninshou**, representing Ninshou practice and Jutsu knowledge. It is a separate skill from Chakra Control.
- Elemental Ninjutsu requires **both Chakra Control and Ninshou**, including an individual minimum in each and a combined minimum. Research and Corps rank do not bypass these paired elemental gates.
- **Genjutsu remains Diplomacy + Research.** Ninshou does not replace Diplomacy.
- Add **Lore**, covering history and inherited knowledge. Lore is always an alternative for **every Hunt roll**, including tracking, research, studying weaknesses and preparation. No credibility or situational permission requirement applies.
- Ordinary Skill Points become **floor(total XP / 20)**. At 500 XP, this gives 25 SP.
- Update skill totals, descriptions and references from twelve to fourteen skills.

### Elemental learning thresholds

| Rank | Chakra Control | Ninshou | Combined |
| --- | ---: | ---: | ---: |
| E | 0 | 0 | 0 |
| D | 5 | 5 | 15 |
| C | 10 | 10 | 25 |
| B | 20 | 20 | 50 |
| A | 30 | 30 | 70 |

- Elemental Aptitude and Heritage access requirements still apply.
- Applicable Affinity may reduce either individual minimum, and reduces the combined minimum by its rank **once**. It does not count twice toward the combined requirement.
- Naturalist may substitute Survival for Ninshou for ordinary elemental prerequisites; Chakra Control and the combined minimum remain required.
- General non-elemental Ninjutsu keeps its existing alternative learning routes.
- Genius retains its next-rank access and +3 use-cost rule. Paired requirements are checked at the preceding rank for that shortcut.
- B/A mentor exemptions require 150% of the applicable individual and combined thresholds.

## 2. Genius and Skilled Hunter

### Genius

- Skill Focus uses **Scale 3**.
- Grants one Specialization in every skill without its XP cost or rank prerequisite: natural results below **8** count as 8 on non-combat skill rolls.
- Combat skill actions, status checks and offensive/defensive rolls do not receive this free floor. Purchased ordinary Specialization retains its normal scope.
- Existing Jutsu learning and XP benefits remain.

### Skilled Hunter

- Replace its old SP bonus, universal skill-cap increase and Accuracy penalty.
- Skill Points become **floor(total XP / 19)** instead of XP/20.
- For each Skill Focus purchase, calculate its Scale as though the Hunter had **floor(total XP / 1,000)** fewer existing ranks in that skill, minimum zero.
- Actual ranks, prerequisites and the surcharge from Focus in other skills do not decrease.
- Recalculate invested Focus costs at current XP; freed SP can be reassigned between scenes.
- Example: at 2,000 XP, the first three ranks in each Focus cost its base 2 SP each, before the other-skill surcharge.

## 3. Twenty-eight skill actions

Every skill receives two Utility Actions. Costs, targets, TNs/opposed checks, effects and durations are fully written in `rules/skill-actions.md` and in the draft sheet's **Skills and Teamwork** tab.

| Skill | First action | Second action |
| --- | --- | --- |
| Athletics | Vault — Speed 4 | Help Up — Speed 3 |
| Awareness | Read the Windup — Speed 4 | Call the Threat — Speed 4 |
| Chakra Control | Settle Chakra — Speed 6 | Steady the Flow — Speed 4 |
| Ninshou | Read the Technique — Speed 4 | Explain the Counter — Speed 5 |
| Lore | Recall the Hunt — Speed 5 | Name the Weakness — Speed 5 |
| Espionage | Misdirect — Speed 4 | Quick Sabotage — Speed 6 |
| Medicine | Stabilise — Speed 10 | Field Diagnosis — Speed 4 |
| Research | Find the Pattern — Speed 5 | Decode — Speed 6 |
| Resistance | Brace Yourself — Speed 4 | Endure — Speed 5 |
| Stealth | Quiet Advance — Speed 5 | Lay a False Trail — Speed 5 |
| Survival | Pick a Route — Speed 4 | Bait — Speed 5 |
| Diplomacy | Rally — Speed 5 | Challenge — Speed 5 |
| Artisan | Field Repair — Speed 8 | Reinforce — Speed 6 |
| Toxicology | Identify Toxin — Speed 4 | Neutralize Residue — Speed 6 |

Shared rules: 1d20 + skill; ordinary AP reductions; no fatigue cost unless listed; failed attempts still spend Speed. Same named benefits do not stack. There is no blanket IC cooldown. Pending benefits cannot be rerolled or replaced; unused roll benefits end with the combat or scene. Repeated information checks require new evidence. Stabilise uses the existing Core action, rather than introducing a conflicting version.

### Scaling above the required result

All 28 actions scale with **X = floor((roll total − TN) / 5)** after a successful check. For an opposed check, subtract the defender's rolled total; ties fail. Each action specifies how X improves its benefit: movement, duration, number of recipients, information, protection, repair or roll modifiers. Roll modifiers have explicit caps.

Examples:

- Field Repair, TN 20: a total of 20 removes 10 WDP; 35 removes 25 WDP.
- Vault, TN 15: a total of 30 permits 11 yards horizontally or 6 yards vertically.
- Rally, TN 20: a total of 35 grants +5 to the ally's next eligible roll.

The sheet includes an X calculator and checks for exact TNs, 5-point thresholds, failures and opposed ties. Core Stabilise has the same scaling benefit as its skill-action entry.

## 4. Armor categories

| Category | Strong against | Weak against |
| --- | --- | --- |
| Dense | Slashing | Piercing, Blunt |
| Layered | Blunt | Slashing, Piercing |
| Shaped | Piercing | Slashing, Blunt |

**Draft resolution:** Shaped was listed as both strong and weak against Piercing. Its weaknesses are resolved to Slashing and Blunt.

- Against the strong type, armor-granted Absorption and DR are multiplied by **1.5**; against weak types, by **0.5**. Energy is neutral.
- Round flat DR down; cap Absorption at 100%.
- Direct damage to Armor Durability and breakable monster parts uses **×0.5 against a strong type**, **×1.5 against a weakness**.
- That structural multiplier does not increase ordinary creature HP/Vitality damage and does not multiply ordinary absorbed armor wear a second time.
- Existing armor Structure remains: Mobile defaults to Layered; Protective to Dense; Encased to Shaped. Printed category overrides take precedence.
- Monster hide/scales default to Dense, fur/padding to Layered, shell/plates to Shaped. Unarmored flesh has no category.
- MonsterForge supplies part categories and allows the GM to confirm or override the category for a recorded hit. Matchups change opening/break progress; incoming HP/gate damage is still entered after mitigation.

## 5. Weapon durability

- Remove routine WDP from normal attacks, Bukijutsu use, parrying, being parried and blocking.
- A weapon contacting armor or a monster part resistant to its damage type gains **5 WDP per Attack**, once per contacting weapon. Misses, bypassed armor and broken protection cause no contact wear.
- A fired projectile takes contact wear; its launcher does not.
- Explicit weapon-damaging effects still apply, including effects that expressly spend or inflict WDP.
- Use **weapon Durability + DEX/10** consistently as the WDP damage-level threshold.
- Rework features whose only benefit was reducing abolished wear:
  - Reinforced Spine: reduce resistant-contact WDP by 1/rank, minimum zero, maximum three ranks.
  - Flexible Construction: reduce WDP explicitly inflicted by enemy techniques by 2.
  - Shock Mounting: reduce Knockback by 3 yards when Blocking with the weapon.
  - Reinforced Bowstring: reduce explicit hostile WDP by 2.
  - Stormsilver: retains +1 Projectile Parry; a success grants +1 to the next Parry before the next Action.

## 6. Defenses and removal of Cover

- Parries use normal Partial Defense against **non-AoE attacks**. Only Parries against **AoEs** are full success or failure with no Partial Defense.
- Parries cannot defend against AoEs unless their entry explicitly permits it. Ocean Shield expressly permits AoE defense.
- Restore eligible partial-parry effects for Boil, Liquefaction Split, Caustic Passion and Kaguya Spinal Thrust. Spinal Thrust is defended as a targeted Melee Attack. An attack that independently prohibits Partial Defense still prevents it.
- Remove the mechanical Cover system and its Core rules section.
- Preserve physical attack paths, solid barriers, visibility and ordinary concealment as their own existing rules.
- Rework Cover-dependent features:
  - Fūma, weapon aiming/throwing features and appropriate bow/fan techniques reduce Visibility penalties.
  - Bent projectile paths use clear segments and cannot pass through solid barriers.
  - Side Anchor gives a concrete attack benefit.
  - Senju flowering forest imposes Visibility 3 through its foliage.
  - Puppet Deployable Cover becomes **Deployable Shield**: +10 percentage points Block, adjacent Take the Hit at Speed 4, movement −25%.
  - Hollow Body uses its intact shell as a physical enclosure; Sealed Compartment refers to barrier penetration.
  - Puppet Spotter and formation references use Visibility and actual positions.
  - Kazekage Education triggers from granted Knockback reduction, Immobilization reduction or DR.
  - Protector monster features grant specified DR, defensive bonuses or Take the Hit benefits. Overlapping protection auras use the highest applicable value.
- Retain historical anchors where needed for existing links. Ordinary prose uses of “cover” and weather “Cloud Cover” are not the removed mechanic.

## 7. Ballistic Corps

- Rolled Ballistic Accuracy is binary: a failed defense receives the hit without Partial Defense. Armor, DR and Blocking remain available.
- Every Ballistic Hunter gains **Controlled Fire**: add **+5 Stamina**, use **base 10 Accuracy + normal modifiers**, and permit Partial Defense from eligible defenses. AoE Parries remain binary.
- Choose Controlled Fire before rolling; it applies once to an entire Basic Attack, Burst, Full Auto or Ballistic Art and adds no Delay.

| Frame | Old Delay | New Delay |
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

- Overpressure Chamber: +1 damage die, **+3 Stamina**, no added Delay.
- Dampened Action may reduce Delay to zero.
- Snap Shot: **16 Stamina** and no weapon Delay; its other restrictions remain.
- Fangburst's explicit Tier I +1 Delay remains; Tier II removes it. Correct the calculator to respect Tier II.

## 8. Bukijutsu rank and scaling revision

All **145** learnable universal and weapon-family techniques reviewed; **118** revised. Full entry-by-entry audit: `BUKIJUTSU-AUDIT.md`. These revisions supersede the earlier Club/Polearm-only pass.

- Athletics/5 roll modifiers and additional weapon allowances round down, minimum 2, maximum 6. Other stat divisions use the printed floors and caps.
- Movement scales from AGI; Reach/Range from weapon dimensions, STR or CHA; grapples from Control. Damage dice, PDB × Speed and percentage effects retain their normal scaling.
- Remove negative printed Accuracy modifiers across the eight families. Called Shot and ordinary weapon penalties remain.
- Stances: stronger scalable rolls, damage and Wounding; lower setup Speed/Upkeep; remove the prior blanket defensive/Accuracy/durability drawbacks. Flowing Guard pays its own STM 6/Speed 3 instead of the new stance’s activation costs.
- Weapon Breaker and Guard Rattle inflict half the defending weapon’s damage-level threshold as explicit WDP; Final Measure’s Sever Guard inflicts one threshold. Contact effects can work even when the wielder takes no damage.
- B-rank counters return full Basic Weapon Attack damage with explicit defense and cost handling. They do not acquire AoE Parry permission.
- A-rank finishers gain substantial damage, Wounding, structural attacks or multi-target effects. Knockback and throws scale from STR/CHA; scenery collisions are not required.
- Ground Shock is a defended AoE knockdown with stat-scaled Area and persistent broken ground. Wire Cage and Tripwire Field end when their physical setup is used, retrieved or destroyed.
- Hunter’s Watch pays normal Basic Attack Stamina and Interrupt Speed for each shot; one shot per movement Action. Maintained Chain/Fan/Dual effects no longer carry arbitrary IC cooldowns.
- Pinning effects end through an explicit removal action. Setup effects follow next-action or Chain timing.
- Body Check remains retired in favor of universal Shove.

## 9. Team Attacks

Full procedure: `rules/team-attacks.md`.

- **2–4 Hunters**, one legal damaging Attack each; nominate a lead. Clones, Puppets and pets do not add preparation slots.
- Each joins a Variable Speed Utility Action on their turn, after required handseals, and pays their component costs.
- Declare all participants/components/Links before the first preparation credit. Compute final Speeds after shared Links.
- Required preparation is the **sum of component final Speeds**. Each preparing Hunter contributes one per completed IC; every participant must contribute at least one.
- Component Delay runs during preparation. Release waits for preparation and every Delay to finish.
- Defensive Interrupts pause a Hunter's contribution for their final Speed. Other actions, withdrawal or incapacitation remove that Hunter's component and credited preparation; recalculate. Fewer than two ends preparation.
- Release at the end of the completing IC. Select a component's attack base. All components must legally reach every target; targeted payloads do not multiply across an AoE.
- Lead supplies Accuracy. Highest component rank and Speed govern defense; keywords are combined. Each target makes **one Defense**.
- Each component uses its own stats and Speed for damage. Share eligible declared Links once; identical named Links use the highest value. Passive abilities do not transfer ownership.
- Apply percentage/type mitigation by component, general flat DR once against the total, and determine one Wound. Duplicate statuses use highest severity and longest duration.
- Once-per-Attack effects and Chain progress trigger once per contributor. Each contacting weapon handles its own WDP.
- Rolled Ballistic components prohibit Partial Defense unless every Ballistic component used Controlled Fire.
- Participants act again on the following IC; preparation has paid their action time.
- Choose **one** combination benefit:
  - same physical type: +10% damage to parts/Armor Durability;
  - different physical types: Called Shot penalty reduced by 1;
  - same primary element: +10% Final Damage on those components;
  - Katon/Fuuton, Suiton/Raiton or Doton/Katon: +10% Wounding on the selected pair.
- Example: Speeds 8 + 10 + 12 require 30 preparation credits. Three uninterrupted Hunters joining IC 20 release at the end of IC 30; defense treats the Attack as Speed 12.

## 10. Tools and migration

### Character-sheet review copy

- Integrate Ninshou/Lore into the main Character Profile skill table (rows 29–30) and Combat Stats skill table (rows 21–22), with ranks, caps, Skill Focus, purchased Specialization, SP spending and prerequisite links. Remove the separate lower-page copies.
- Update SP totals, Skill Focus pricing and Skilled Hunter's old Accuracy/cap modifiers.
- Fix Genjutsu Affinity output and its Chakra Exhaustion contribution; apply Affinity to Genjutsu learning gates.
- Apply paired elemental gates throughout the populated Jutsu Engine rows.
- Add Controlled Fire input, cost and Accuracy output; update frame Delays and relevant attachments.
- Add armor category/matchup calculator to Armor Crafting.
- Replace stale WDP/Cover descriptions in crafting, Puppet and Clan reference cells.
- Freeze the draft Jutsu catalogue from the imported source and update **153 affected techniques**; remove Body Check from the learnable catalogue.
- Add the 28-action reference and Team Attack summary.
- Add **37 passing calculation checks** covering SP rounding, Focus scaling/discounts, learning boundaries, Affinity counting, armor rounding/caps preparation arithmetic and success-margin boundaries.
- Live Genjutsu check: Affinity 5 displayed as 5 and raised Chakra Exhaustion bonus from 2 to 7. Test inputs restored.

### MonsterForge

- Generate armor categories for monster parts and display them in part cards, summaries and print output.
- Record damage type, category and an “already includes matchup” option with damage events.
- Apply structural matchups to opening/break progress once, without changing entered gate damage.
- Preserve old exports: events without the new fields retain their former neutral calculation.
- Add the AoE-only Partial Defense restriction to Parry declarations and unconditional Lore guidance to Hunt preparation.
- Replace obsolete tactical Cover guidance with concrete movement, sightline or defense advice.
- **22 tests pass**, including new armor matchup and double-application checks; JavaScript syntax checks pass.

### Repository checks and publication

- Rebuilt search; source/reference validation covers **77 pages and 3,179 search destinations**.
- The published character template and live sites remain unchanged; neither repository branch has been pushed.
- Mechanical correctness checks are not playtesting. Team damage concentration, per-Attack DR, skill-action bonuses and the 5-WDP contact rate are the main balance targets for the first playtest.
- Sheet values, formulas and cell structure have been checked through the Sheets API. A native visual inspection remains advisable before replacing the public character template.
- After review: publish both repository branches and point the website's character-sheet link at the approved template copy. Do not apply the recorded draft-sheet creation requests repeatedly to the live template.

## 11. Combat-flow revision

- Removed the new skill actions’ blanket once-per-20-IC cooldown and 10/20-IC bonus expiry windows. Scaling above TN remains unchanged except Sabotage now scales the difficulty of restoring the device.
- One-use roll benefits last until used or the scene ends; pending benefits cannot be rerolled. Information checks need new evidence to repeat.
- Misdirect creates an opening until the next eligible Defense or the enemy completes its next non-Interrupt Action.
- Bait/Challenge are consumed by the target’s next Attack, including an Attack against the challenger.
- Brace Yourself ends when used or when the Hunter voluntarily moves. Steady the Flow supports the current maintained technique. False Trail ends on discovery or leaving the obscured passage.
- Pick a Route benefits each creature’s next traversal; changed terrain invalidates the route.
- Quick Sabotage disables a device until repaired/reset: Speed 6, Espionage or Artisan TN 15 + 5X, or the device’s higher repair TN.
- Read the Technique explicitly needs handseals, Delay or a maintained effect; a main Action cannot interject into an immediately resolving Attack.
- Extended Guard uses maintained Upkeep and paid Set Spear Interrupts without a separate cooldown. Shaft Pivot, Sliding Measure and Returning Swing use next-action triggers.
- Existing AP regeneration, damage/status ticks, Chain timing and pooled Team Attack preparation remain the system’s timing rules. This pass concerns the newly introduced timers.
- Review was against Core combat flow and scenario walkthroughs, not live-session playtesting.

## 12. Bukijutsu verification

- Reviewed 145 techniques, revised 118; synchronized 145 changed catalogue fields plus the sheet’s scaling reference (147 cells verified by readback).
- The declaration catalogue describes conditional scaling in Effects; these conditional bonuses, contact WDP and triggered statuses are resolved when their conditions occur, not automatically added to every attack output.
- Representative scaling: Athletics 10/20/30 gives modifiers 2/4/6. AGI 40/80/120 gives AGI/5 movement 8/16/24 yards. STR 60/90/120 gives STR/3 20/30/40-yard high-rank Knockback before Status Roll margin and Partial Defense. A defending threshold of 20/40/60 yields 10/20/30 WDP for a half-threshold breaker.
- Balance remains unplaytested. Counterattack action economy, combined Accuracy/Defense modifiers, repeated weapon-break Links and multi-target A-rank damage need combat testing.

## 13. Taijutsu parity and removal of short-step filler

This pass supersedes the earlier movement-based revisions. Ninety Bukijutsu entries changed in this pass.

- Damaging Bukijutsu extra dice now use the greater of their printed floor or floor(STR/divisor), with divisors E15 / D10 / C7 / B5 / A3. Add weapon dice and normal PDB × final Speed. This creates STR growth comparable to the existing Taijutsu dice formulas.
- Links and counters expressly making Basic Weapon Attacks do not gain a second dice package. Multi-hit percentages apply after the dice package; copied damage does not add it twice. Multi-Throw distributes one package per target.
- Half-Step, Shaft Pivot, Slip Step, Mobile Draw, Crosswind Step and Scatter Run become Links with immediate defensive-timing, weapon-binding, Control, status or attack effects. Ordinary movement remains available through Core rules.
- Remove small post-action self-movement from the revised weapon attacks and parries. Retain purposeful traversal, charge movement, forced movement and pursuit.
- Leaping Pole becomes a damaging Chain 2 attack with a vault, resisted Prone and a Wounding payoff against already-Prone targets.
- Crossbar Catch redirects physical projectiles on a full Parry. Intercepting Coil can initiate a defended Weapon Grapple against an attacker in Range.
- Through-Line gains meaningful armor penetration and a second-target hit. Weapon Hook binds a weapon until freed or contact breaks. Shearing Wake ends a Blocking stance. Armor Crack deals full structural damage before applying the remaining protection to wearer damage. Precision Shot and Finishing Cut receive stronger Wounding/penetration.
- Explicitly prevent stacking Bukijutsu Defense-Speed multipliers.
- Benchmarks at STR 60/90/150 compare medium-weapon C/B/A attacks with Daisenpuu, Gouriki Senpuu and CC5 Solar Agitation. See `BUKIJUTSU-TAIJUTSU-COMPARISON.md` for costs, Speed, assumptions and limitations. They show comparable damage growth and damage per action time, not optimized-build equality.
- Jutsu N7:N364 now resolves STR-based dice counts; dS still uses the equipped weapon’s die size. Added a weapon-damage calculator to Skills and Teamwork rows 50–68.
- 138 catalogue fields and 358 Damage formulas verified. Live STR90/Final Measure test returned +30dS; all temporary inputs restored. 45 spreadsheet checks pass.
