from pathlib import Path

path = Path('rules/clans.md')
text = path.read_text(encoding='utf-8')
start = text.index("# Jūgo's Bloodline\n")
end = text.index("# Kazekage Clan / Jiton\n", start)

new = r'''# Jūgo's Bloodline
{:#jugo-s-bloodline}

***CANON BLOODLINE - RARE***

*Descendants of Jūgo’s bloodline absorb natural energy involuntarily. Their bodies can reconfigure into weapons, armour and chakra-driven organs, but the same instincts can become dangerously aggressive under stress. Ember trains its bearers to treat mutation as a controlled combat tool rather than a loss of self.*

## How This Heritage Works
{:#how-jugo-works}

Jūgo characters revolve around two resources:

- **Mutation Ranks (MR):** how much of your body is currently committed to ordinary Shape Change mutations. You normally have **3 MR**. MR are allocated, not spent; restoring a mutation frees those ranks again.
- **Sage Charges (SC):** temporary natural-energy charges used by several Jūgo techniques. You begin combat with 1 SC and naturally gain more as combat continues.

Jūgo Clan Jutsu that create a specific transformation, such as **Weapon Form**, **Jet Booster**, or **Sage Carapace**, use their own listed Chakra, Upkeep and Action costs. They **do not consume Mutation Ranks unless they explicitly say they do**.

## Passives
{:#passives-29}

### Natural Mutation
{:#natural-mutation}

Keijō Henka - Shape Change is an inherent bloodline feature rather than a purchasable Ability.

You have **3 Mutation Ranks (MR)**. Mutation Ranks are a pool: the total MR assigned across your body can never exceed your current maximum. Unassigned MR are immediately available for another Shape Change.

**Shape Change — [Speed 2, Utility, Self, Transformation]**

Choose one body region, such as an arm, leg, head, torso, or another similarly sized region. You may restore the current mutation on that region, assign any number of your unassigned MR to it, or change which ordinary mutation that region is using. A region can normally hold only one ordinary Shape Change mutation at a time.

Restoring a region frees every MR assigned to it. Shape Change does not spend Chakra and requires no handseals.

Unless a rule says otherwise, a standalone Jūgo Clan Jutsu may overlap cosmetically with ordinary Shape Change but its mechanical benefits do not stack with another effect that grants the same benefit.

#### Combat Morph
{:#jugo-combat-morph}

When you use Shape Change on an arm or leg, you may form it into a natural weapon and assign 1 or more MR to that region.

Until the end of your next non-Interrupt Action, the next Unarmed or Combo Taijutsu Attack made primarily with that region treats you as having **+1 effective rank of Power Attack per MR assigned to it**. These are temporary effective ranks for that Attack only; they do not count as purchased ranks, do not satisfy prerequisites, and still use Power Attack's normal Stamina and damage-die changes.

The Attack may deal Blunt, Slashing, or Piercing damage. If at least **2 MR** are assigned to the attacking region, you may choose Energy damage instead.

After that Attack resolves, the physical mutation may remain, but its Power Attack increase is no longer primed. Use Shape Change again to prime another Attack.

#### Tool Morph
{:#jugo-tool-morph}

Outside combat, Shape Change can form a limb into a mundane tool or object you can clearly picture, provided it fits within a 1-yard cube and does not reproduce ammunition, consumables, medicine, explosives, poisons, electronics, chakra devices, or another item whose value comes from complex internal components.

When that mutation is materially useful to a Skill check, gain **+2 per MR assigned to that region**. The mutation counts as a natural body part rather than carried equipment.

Shape Change mutations count as natural weapons and body parts for compatible Taijutsu.

### Mutation Library
{:#mutation-library}

The following are ordinary Shape Change mutations and use Mutation Ranks normally:

- **Carapace — Torso:** Assign 1 or more MR to the torso. Gain **DR 5 per MR assigned**. This DR does not stack with Sage Carapace; use the higher value.
- **Sensory Horns — Head:** Assign up to 2 MR to the head. Gain **+3 Awareness** and **+3 Chakra Control on Search actions** per MR assigned, maximum +6 each.
- **Regenerative Core — Torso:** Assign 1 MR to the torso. Once per 20 IC, you may spend 1 SC as a Speed 0 Utility effect to recover **RES/2 Vitality**. Additional MR provide no further benefit. This does not heal Wounds.

### Adaptive Mutation
{:#adaptive-mutation}

After a hostile Action inflicts a Wound, Immobilization, Stun, or forced movement on you, gain **1 temporary SC** and you may immediately use Shape Change on one body region as a **Speed 0 Interrupt**.

A temporary SC still counts toward your normal SC maximum. If unspent, it disappears at the end of your next non-Interrupt Action. While Senninka is active, it instead disappears at the end of your second non-Interrupt Action.

The same creature cannot trigger Adaptive Mutation twice in a row with the same category of effect. It must use a different category, or another creature must trigger Adaptive Mutation first.

### Passive Sage Chakra
{:#passive-sage-chakra}

Your Sage Charge maximum is equal to your **maximum Willpower**, not your current remaining Willpower.

You begin each combat with **1 SC**. From the beginning of combat, track Sage Progress. Each IC adds 1 Sage Progress normally. At 20 Sage Progress, gain 1 SC up to your maximum and subtract 20 Progress. Progress continues even while your SC pool is full.

Senninka changes how quickly this Progress is gained, but entering or leaving Senninka never resets it.

If a technique requires SC while Senninka is not active, you may spend naturally accumulated SC normally.

### Instinct Surge
{:#instinct-surge}

Senninka never causes the GM to take control of your character.

If you reach **0 WP while Senninka is active**, you gain **Bloodlust**. Until you recover WP or end Senninka, each non-Interrupt Action must attack, pursue, restrain, or directly confront a perceived threat if one is available. You still choose the target and the Action. If no perceived threat is available, you may act normally.

## Abilities
{:#abilities-28}

*No Heritage-specific purchasable abilities.*

## Jutsu
{:#jutsu-26}

**E-Rank**

### Kassokuken - Piston Fist
{:#kassokuken-piston-fist}

**Type:** Taijutsu, Rank E  
**Stamina:** +5  
**Damage:** +2d8  
**Speed:** +2  
**Tags:** Link, Melee, Blunt

**Effects**

Link to one Basic Unarmed Attack or Unarmed/Combo Taijutsu that uses an arm. Declare Piston Fist with that Attack and add the listed Stamina, Speed and damage dice once.

A temporary piston forms on the striking arm for that Attack. It does not require a Shape Change Action, does not use Mutation Ranks, and retracts after the Attack resolves.

The Attack gains Knockback 4, increased to Knockback 6 if Jet Booster is active on that arm or your back. Reduce this Knockback for Partial Defense normally.

**D-Rank**

### Masakari - Weapon Form
{:#masakari-weapon-form}

**Type:** Taijutsu, Rank D  
**Chakra:** 12  
**Upkeep:** 2  
**Speed:** 6  
**Tags:** Utility, Self, Transformation

**Effects**

Turn one arm into a Small or Medium Melee Weapon. Choose an unmodified weapon-class profile from Equipment and use that profile's dice, Base Speed, Stamina, Reach, Delay and Damage Type.

Weapon Form is a standalone Clan transformation and **does not consume Mutation Ranks**. The transformed limb is a Chakra-Reinforced natural weapon and qualifies for compatible Bukijutsu of its chosen weapon class. Attacks use PDB normally.

The limb has no separate WDP or Durability; an Attack that damages the transformed limb damages you instead. The transformed hand is occupied. A two-handed profile also requires your other hand while attacking. Crafted Components, Wondrous Materials and other equipment upgrades are not included.

**Reshape — [Speed 2, Utility]:** Change the weapon profile or transfer Weapon Form to your other arm. This fixed Speed cannot be reduced. Ending Upkeep restores the limb as Speed 0. A transformed hand must be restored before it can form handseals.

**C-Rank**

### Jet Booster
{:#jet-booster}

**Type:** Taijutsu, Rank C  
**Chakra:** 15  
**Special Upkeep:** 4  
**Speed:** 8  
**Tags:** Utility, Self, Transformation

**Effects**

Grow chakra-venting jets from an arm, leg, or your back. Choose the mounting region when activated. This is a standalone Clan transformation and does not consume Mutation Ranks. Its mounting point is descriptive unless another Jūgo effect specifically checks where the Booster is located.

While Jet Booster is maintained, you gain the following actions:

**Burst — [Speed +0, Delay +4, Link]:** Link to a Taijutsu Attack. Reduce that Attack's Final Speed by 2 after ordinary modifiers, obeying the normal minimum-Speed rules. For Move with Attack only, calculate the Attack's movement using its Final Speed before this reduction, then treat that value as 10 higher.

**Jump — [Speed 2, Chakra 10, Utility, Movement]:** Move up to NDB yards in any direction, including vertically. You must follow a physically open route and end in a legal space; this movement does not require a surface. As a Link to Dodge, instead add **Speed +3 and Chakra 10** and add up to NDB yards to that Dodge's available movement.

**Lotus Cannon — [Speed 10, Delay 5, Chakra 15, Attack, Projectile, Energy]:** Make one Ninjutsu Attack against a target within 40 yards. Roll your Basic Unarmed Attack's base damage dice, then add NDB × Lotus Cannon's Final Speed. Lotus Cannon is not an Unarmed Attack and does not use PDB.

### Sage Art: Jet Barrage
{:#sage-art-jet-barrage}

**Type:** Taijutsu, Rank C  
**Stamina:** 18  
**Chakra:** 16  
**Damage:** 7d10  
**Speed:** 10  
**Range:** 12  
**Tags:** Attack, Projectile, Blunt

**Effects**

Fire three compressed chakra blasts and make one Taijutsu Projectile Attack. When declaring it, you may spend 1–3 SC. Each SC spent adds one additional projectile, **+2d10 base damage**, and **+1 Accuracy**.

Jet Barrage is resolved as one Attack with one damage pool. It counts as a Multi-Throw for defenses and effects that explicitly care about Multi-Throw, including the normal Multi-Throw reduction to Wound severity. Its individual projectiles cannot independently Wound or trigger repeated-hit effects unless another rule explicitly says otherwise.

### Sage Carapace
{:#sage-carapace}

**Type:** Ninjutsu, Rank C  
**Chakra:** 20  
**Upkeep:** 4  
**Speed:** 7  
**Tags:** Utility, Self, Transformation

**Effects**

Grow a reinforced shell. Gain **DR 20** and **+3 Resistance** against Knockback, Stun and physical Immobilization.

Sage Carapace is a standalone Clan transformation and does not consume Mutation Ranks. Its DR does not stack with Mutation Library: Carapace; use the higher DR.

When an Attack hits you, you may spend 1 SC before damage is applied to increase Sage Carapace's DR against that Attack to **35**.

**B-Rank**

### Saibō Kyūin - Cellular Regeneration Absorption
{:#saibo-kyuin-cellular-regeneration-absorption}

**Type:** Taijutsu, Rank B  
**Stamina:** 24  
**Damage:** As Basic Unarmed + (Control)d8  
**Speed:** 12  
**Special:** Control 5  
**Tags:** Submission, Healing

**Effects**

Use while Pinning a living target. Spend Control 5 and make the normal Submission check. On success, after paying that Control cost, deal your Basic Unarmed base dice plus a number of d8 equal to your remaining Control, minimum 0, then add PDB × Final Speed. One free hand must remain in contact with the target as the feeding organ.

Track how much Vitality and HP this damage actually removes. Recover half the Vitality removed as Vitality and half the HP removed as HP, rounded down. Vitality recovered this way is capped at **RES × 2 per use**; neither resource can exceed its normal maximum. This does not remove Wounds.

Each repeat pays Stamina 24 and Control 5 and requires a new Submission check. Breaking contact ends the Submission and applies the normal Submission ending penalty to your next Action.

### Saibō Haishutsu - Cellular Regeneration Ejection
{:#saibo-kyuin-cellular-regeneration-ejection}

**Type:** Ninjutsu, Rank B  
**Chakra:** 24  
**Speed:** 10  
**Range:** Touch  
**Tags:** Utility, Healing

**Effects**

Touch a willing living creature other than yourself and choose 1–3 SC. Spend those charges and lose **RES/2 HP per SC**, rounded up. You cannot choose an amount that would reduce you below 1 HP.

Restore **RES × 2 Vitality per SC** to the target, up to its maximum.

If you spend 3 SC, you may also suppress the penalties of one Major or Severe Blunt, Slashing or Piercing Wound on that target for 20 IC. The injury and any missing body part remain; only penalties imposed by that Wound are suppressed. Reapplying this effect to the same Wound refreshes the duration. Critical Wounds are unaffected.

### Saibō Saisei - Cellular Rebirth
{:#saibo-saisei-cellular-rebirth}

**Type:** Ninjutsu, Rank B  
**Chakra:** 26  
**Speed:** 12  
**Tags:** Utility, Healing, Self

**Effects**

Spend 1–3 SC. Recover **RES × 2 Vitality per SC** spent, up to your maximum.

If you spend exactly 3 SC, you may instead remove one Minor Blunt, Piercing, or Slashing Wound. If you choose to remove the Wound, you do not also recover the Vitality from those 3 SC.

**A-Rank**

### Senninka - Sage Transformation
{:#senninka-sage-transformation}

**Type:** Ninjutsu, Rank A  
**Chakra:** 20  
**Special Upkeep:** 10  
**Speed:** 10  
**Tags:** Utility, Self, Transformation

**Effects**

Enter Sage Transformation after paying Chakra. The first time you activate Senninka each combat, gain **2 SC**, up to your SC maximum. Maintain Special Upkeep 10. Senninka remains active at 0 SC and follows Instinct Surge normally.

While Senninka is active, each IC adds **2 Sage Progress instead of 1**. At 20 Progress, gain 1 SC up to your maximum and subtract 20 Progress. Entering or leaving Senninka never resets Sage Progress.

Your Mutation Rank maximum increases from **3 to 4**. One use of Shape Change may modify up to **two body regions** instead of one. When Senninka ends, your maximum returns to 3; if you currently have more than 3 MR assigned, immediately choose excess assigned ranks to become unassigned until only 3 remain.

Temporary SC from Adaptive Mutation lasts until the end of your **second** non-Interrupt Action instead of your first while Senninka is active.

While Senninka is active, you also gain the following upgrades. Each requires its underlying technique or transformation where stated.

**Weapon Surge:** When declaring an Attack with Weapon Form, spend 1–3 SC. Add **2d8 base damage per SC spent** to that Attack.

**Sage Burst:** Requires Jet Booster. Link Burst to a Taijutsu Attack and spend SC based on the Attack's Rank: E=1, D=2, C=3, B=4, A=5; a Basic Unarmed Attack counts as E-Rank for this cost. Spend SC equal to half that value, rounded up. Calculate the Attack's Final Speed without Burst, then halve that Speed, rounded up, obeying all normal minimum-Speed rules. Keep Burst's Delay +4. For Move with Attack, use the pre-halved Final Speed and then add **10 + 5 × Rank value** for movement calculation only.

**Sage Jump:** Requires Jet Booster. Choose J of at least 1 and spend J SC. Use a **Speed 2+J, Chakra 10+3J, Utility, Movement** Action to make J consecutive leaps of up to NDB yards each. Choose the route when declaring the Action. Each leap must follow a physically open path and end at a legal point. Ground terrain affects only landing points. As a Link to Dodge, instead add **Speed 3+J** and the same Chakra cost; check the combined Interrupt Speed normally.

**Lotus Volley:** Requires Jet Booster. Choose L of at least 1, up to your current SC, and spend L SC. This is a **Speed 5L, Delay 5, Attack, Projectile, Energy** Action. Choose one target within 40 yards for each shot; the same target may be chosen more than once. Shots resolve 5, 10, 15 IC and so on after declaration.

As each shot fires, pay Chakra 10 and make its Chakra Exhaustion roll separately. Each shot is a Speed 5 Ninjutsu Projectile Attack using your current Ninjutsu Accuracy and dealing your Basic Unarmed base dice + NDB × 5. Each target defends separately. A failed Chakra Exhaustion roll causes that shot to fail normally but does not cancel later scheduled shots unless you become unable to continue.

Your next non-Interrupt Action is scheduled **5 + 5L IC** after declaration, plus any Interrupt costs. You may defend while the volley is firing. Losing Jet Booster, Senninka, or consciousness cancels unfired shots; ending the volley early does not move your already scheduled next IC.

'''

path.write_text(text[:start] + new + text[end:], encoding='utf-8')
