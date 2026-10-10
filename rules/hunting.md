---
layout: rulebook
title: "Hunting"
volume: "I"
volume_slug: "core"
hunting_reference: true
permalink: "/rules/hunting/"
---

<style>
.hunting-directory{position:relative;overflow:hidden;padding:34px 36px 30px!important;border:1px solid var(--line);background:linear-gradient(135deg,color-mix(in srgb,var(--surface) 92%,var(--accent) 8%),var(--surface));margin-bottom:28px}
.hunting-directory:after{content:"HUNT";position:absolute;right:-8px;bottom:-42px;font:900 118px/1 'Barlow Condensed',sans-serif;letter-spacing:4px;color:var(--accent);opacity:.055;pointer-events:none}
.hunting-directory .reference-kicker{display:flex;align-items:center;gap:10px;color:var(--accent);font:800 10px 'DM Sans',sans-serif;letter-spacing:2px;text-transform:uppercase}
.hunting-directory .reference-kicker:before{content:"";width:28px;height:1px;background:var(--accent)}
.hunting-directory h1{font:900 clamp(52px,7vw,82px)/.9 'Barlow Condensed',sans-serif!important;letter-spacing:.7px!important;border:0!important;padding:0!important;margin:18px 0 12px!important}
.hunting-directory .reference-lead{max-width:700px;color:var(--muted);font-size:15px;line-height:1.8;margin-bottom:22px}
.hunt-badges{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 22px}
.hunt-badge{display:inline-flex;align-items:center;gap:7px;padding:6px 9px;border:1px solid var(--line);background:color-mix(in srgb,var(--surface2) 86%,transparent);font:800 9px 'DM Sans',sans-serif;letter-spacing:1.15px;text-transform:uppercase;color:var(--muted);border-radius:3px}
.hunt-badge strong{color:var(--accent)}
.hunting-directory .reference-jumps{display:flex;flex-wrap:wrap;gap:7px;position:relative;z-index:1}
.hunting-directory .reference-jumps a{padding:7px 10px;border:1px solid var(--line);background:var(--surface2);border-radius:3px;text-decoration:none!important;color:var(--muted);font:700 10px 'DM Sans',sans-serif;letter-spacing:.3px;transition:.15s ease}
.hunting-directory .reference-jumps a:hover{color:var(--text);border-color:var(--accent);transform:translateY(-1px)}
.hunt-intro{padding:18px 20px;border-left:3px solid var(--accent);background:color-mix(in srgb,var(--surface) 88%,transparent);margin:0 0 24px}
.hunt-intro p:last-child{margin-bottom:0}
.hunt-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;border:1px solid var(--line);background:var(--line);margin:25px 0 34px;overflow:hidden;border-radius:4px}
.hunt-flow-step{background:var(--surface);padding:15px 13px;min-height:92px;position:relative}
.hunt-flow-step span{display:block;color:var(--accent);font:900 22px 'Barlow Condensed',sans-serif;line-height:1;margin-bottom:8px}
.hunt-flow-step strong{display:block;font:800 13px 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.5px}
.hunt-flow-step small{display:block;color:var(--dim);font-size:10px;line-height:1.45;margin-top:4px}
.hunt-section-note{display:flex;align-items:flex-start;gap:12px;padding:13px 15px;margin:12px 0 22px;border:1px solid var(--line);background:color-mix(in srgb,var(--surface) 90%,transparent);border-radius:4px;color:var(--muted)}
.hunt-section-note b{color:var(--accent);font:900 20px 'Barlow Condensed',sans-serif;line-height:1}
.hunt-card-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:17px 0 26px}
.hunt-card{position:relative;padding:18px;border:1px solid var(--line);background:var(--surface);border-radius:4px;overflow:hidden}
.hunt-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--accent);opacity:.7}
.hunt-card .hunt-card-kicker{font:800 9px 'DM Sans',sans-serif;letter-spacing:1.4px;text-transform:uppercase;color:var(--dim);margin-bottom:3px}
.hunt-card h3{margin:0 0 7px!important;color:var(--text)!important;font-size:24px!important}
.hunt-card p{color:var(--muted);font-size:12.5px;line-height:1.7;margin-bottom:10px}
.hunt-card p:last-child{margin-bottom:0}
.hunt-result{display:inline-flex;padding:4px 7px;background:color-mix(in srgb,var(--accent) 13%,transparent);border:1px solid color-mix(in srgb,var(--accent) 35%,var(--line));border-radius:3px;color:var(--text);font-size:11px;font-weight:700}
.intel-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:16px 0 24px}
.intel-card{padding:16px;border:1px solid var(--line);background:var(--surface);border-radius:4px}
.intel-card .intel-icon{font:900 28px/1 'Barlow Condensed',sans-serif;color:var(--accent);opacity:.9}
.intel-card strong{display:block;margin:9px 0 4px;font:800 18px 'Barlow Condensed',sans-serif;text-transform:uppercase}
.intel-card small{display:block;color:var(--muted);line-height:1.55}
.intel-levels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:4px;overflow:hidden;margin:18px 0 25px}
.intel-level{background:var(--surface);padding:15px}
.intel-level b{display:block;font:900 27px/1 'Barlow Condensed',sans-serif;color:var(--accent)}
.intel-level strong{display:block;font:800 14px 'Barlow Condensed',sans-serif;margin:7px 0 3px;text-transform:uppercase}
.intel-level small{color:var(--muted);font-size:10px;line-height:1.5}
.wild-mechanics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:20px 0 26px}
.wild-mechanic{padding:15px 13px;border:1px solid var(--line);background:var(--surface);border-radius:4px;min-height:110px}
.wild-mechanic span{font:900 26px/1 'Barlow Condensed',sans-serif;color:var(--accent)}
.wild-mechanic strong{display:block;margin:8px 0 3px;font:800 15px 'Barlow Condensed',sans-serif;text-transform:uppercase}
.wild-mechanic small{display:block;color:var(--muted);font-size:10px;line-height:1.45}
.hunt-stat-row{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 16px}
.hunt-stat{display:inline-flex;align-items:baseline;gap:6px;padding:8px 10px;background:var(--surface);border:1px solid var(--line);border-radius:3px}
.hunt-stat b{font:900 20px 'Barlow Condensed',sans-serif;color:var(--accent);line-height:1}
.hunt-stat span{font:800 9px 'DM Sans',sans-serif;letter-spacing:1px;text-transform:uppercase;color:var(--muted)}
.cling-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:15px 0 24px}
.cling-action{padding:15px;border:1px solid var(--line);background:var(--surface);border-radius:4px}
.cling-action h4{margin:0 0 8px!important;color:var(--text)}
.cling-action .action-cost{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:9px}
.cling-action .action-cost span{padding:3px 6px;border:1px solid var(--line);border-radius:3px;color:var(--muted);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.7px}
.cling-action p{font-size:11.5px;color:var(--muted);line-height:1.6;margin:0}
.hunt-callout{margin:18px 0 24px;padding:18px 19px;border:1px solid color-mix(in srgb,var(--accent) 45%,var(--line));background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 10%,var(--surface)),var(--surface));border-radius:4px}
.hunt-callout .callout-label{font:800 9px 'DM Sans',sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:var(--accent);margin-bottom:5px}
.hunt-callout strong{font:800 18px 'Barlow Condensed',sans-serif}
.capture-chain{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin:17px 0 25px}
.capture-step{padding:13px;border:1px solid var(--line);background:var(--surface);border-radius:3px;text-align:center}
.capture-step b{display:block;color:var(--accent);font:900 19px 'Barlow Condensed',sans-serif}
.capture-step span{display:block;color:var(--muted);font-size:10px;margin-top:4px}
.hunt-loop-panel{border:1px solid var(--line);background:var(--surface);padding:20px;margin-top:18px;border-radius:4px}
.hunt-loop-panel h3{margin-top:0!important}.hunt-loop-panel ol{margin-bottom:0}
@media(max-width:900px){.hunt-flow{grid-template-columns:1fr}.hunt-card-grid,.intel-grid,.wild-mechanics,.cling-actions,.capture-chain{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:620px){.hunting-directory{padding:25px 20px 22px!important}.hunting-directory:after{font-size:82px}.hunt-card-grid,.intel-grid,.intel-levels,.wild-mechanics,.cling-actions,.capture-chain{grid-template-columns:1fr}.hunt-flow-step{min-height:0}.hunt-badges{gap:5px}}
</style>

<div class="reference-directory hunting-directory">
  <div class="reference-kicker">CORE RULES / FIELD REFERENCE</div>
  <h1>Hunting</h1>
  <p class="reference-lead">Track dangerous beasts, learn how they fight, prepare for the encounter, then bring them down—or bring them home alive.</p>
  <div class="hunt-badges">
    <span class="hunt-badge"><strong>01</strong> Up to 4 Hunters</span>
    <span class="hunt-badge"><strong>02</strong> Downtime Activity</span>
    <span class="hunt-badge"><strong>03</strong> Shared Intel</span>
    <span class="hunt-badge"><strong>04</strong> Kill or Capture</span>
  </div>
  <div class="reference-jumps">
    <a href="#starting-a-hunt">Starting a Hunt</a>
    <a href="#hunt-actions">Hunt Actions</a>
    <a href="#intel">Intel</a>
    <a href="#starting-the-encounter">Start the Hunt</a>
    <a href="#wild-hunt-combat">Hunt Combat</a>
    <a href="#clinging">Clinging</a>
    <a href="#injury-open-wounds-and-broken-parts">Injury & Part Breaks</a>
    <a href="#exertion">Exertion</a>
    <a href="#capture">Capture</a>
  </div>
</div>

<div class="hunt-intro">
<p>A core part of being a Hunter is actually <strong>hunting</strong>.</p>
<p>A <strong>Hunt</strong> is a special Downtime activity in which a small team tracks, studies, prepares for, and ultimately confronts a dangerous creature. The work your Team does before the fight can determine what you know, what advantages you begin with, and whether you are ready for what the monster can do.</p>
</div>

<div class="hunt-flow" aria-label="The five stages of a Hunt">
  <div class="hunt-flow-step"><span>01</span><strong>Find It</strong><small>Track the target and learn its territory.</small></div>
  <div class="hunt-flow-step"><span>02</span><strong>Learn It</strong><small>Research its nature, habits and abilities.</small></div>
  <div class="hunt-flow-step"><span>03</span><strong>Prepare</strong><small>Build the tools and advantages you need.</small></div>
  <div class="hunt-flow-step"><span>04</span><strong>Confront It</strong><small>Choose when the Team knows enough to strike.</small></div>
  <div class="hunt-flow-step"><span>05</span><strong>Finish It</strong><small>Kill, capture, drive off, or neutralise it.</small></div>
</div>

---

## Starting a Hunt
{:#starting-a-hunt}

Up to **4 players** may form a **Hunting Team** and take part in the same Hunt.

You may only be part of **one active Hunt at a time**.

Once the Hunt begins, the Team may spend Downtime gathering information and making preparations before choosing to confront the target. The Team does not have to complete every possible investigation before starting the encounter: deciding **when you know enough** is part of the Hunt.

Intel and preparations gained during a Hunt belong to that Hunt and are available to the Hunting Team.

<div class="hunt-section-note"><b>4</b><span><strong>Maximum Team Size.</strong> A Hunting Team can contain up to four players, and all Intel and Preparation earned for that Hunt is shared by the Team.</span></div>

---

## Hunt Actions
{:#hunt-actions}

While participating in an active Hunt, you gain access to special **Hunt Actions**. Each Hunt Action costs **1 Downtime Slot**.

The roll used for each action is determined by the monster's Hunt profile. Different creatures are found, understood, and prepared for in different ways, so each monster may call for different Skills or approaches.

<div class="hunt-card-grid">
  <div class="hunt-card">
    <div class="hunt-card-kicker">Hunt Action · 1 Downtime</div>
    <h3>Track</h3>
    <p>Follow trails, chakra residue, disturbed terrain, witnesses, feeding grounds, discarded remains, or other signs of the creature.</p>
    <span class="hunt-result">Success → Tracks Intel</span>
    <p>Learn where the creature is, where it travels, how it moves through its territory, and how best to approach it.</p>
  </div>
  <div class="hunt-card">
    <div class="hunt-card-kicker">Hunt Action · 1 Downtime</div>
    <h3>Research</h3>
    <p>Study old records, field reports, remains, sightings, survivors, folklore, previous encounters, or similar sources.</p>
    <span class="hunt-result">Success → Nature Intel</span>
    <p>Learn what kind of creature you are dealing with, how it behaves, and what it may be capable of.</p>
  </div>
  <div class="hunt-card">
    <div class="hunt-card-kicker">Hunt Action · 1 Downtime</div>
    <h3>Study Weakness</h3>
    <p>Investigate the creature's anatomy, habits, injuries, feeding patterns, shed material, chakra, or previous fights in search of exploitable vulnerabilities. This will often require some <strong>Nature Intel</strong> first.</p>
    <span class="hunt-result">Success → Weakness Intel</span>
    <p>Learn how to create openings, disable important parts, avoid dangerous abilities, or exploit a major vulnerability.</p>
  </div>
  <div class="hunt-card">
    <div class="hunt-card-kicker">Hunt Action · 1 Downtime</div>
    <h3>Prepare</h3>
    <p>Create or arrange something specifically intended to help against the target: traps, bait, antidotes, seals, special ammunition, environmental preparations, escape routes, or similar measures.</p>
    <span class="hunt-result">Success → +1 Preparation · Max 3</span>
    <p>Preparation can be spent during the final encounter when the thing you prepared would appropriately help the Team.</p>
  </div>
</div>

Preparation should represent something established **before** the encounter. It is not a pool of undefined equipment that can become whatever the Team needs after the fight begins.

---

## Intel
{:#intel}

Intel is shared across the whole Hunting Team. There are three Intel categories, each representing a different part of understanding the target.

<div class="intel-grid">
  <div class="intel-card"><div class="intel-icon">⌖</div><strong>Tracks</strong><small>Where the monster is, where it travels, and how to approach it.</small></div>
  <div class="intel-card"><div class="intel-icon">◈</div><strong>Nature</strong><small>What the monster is, how it behaves, and what it may be capable of.</small></div>
  <div class="intel-card"><div class="intel-icon">✦</div><strong>Weakness</strong><small>Where the monster is vulnerable and how those vulnerabilities can be exploited.</small></div>
</div>

Each category has **3 levels**. Higher levels include the information from lower levels.

<div class="intel-levels">
  <div class="intel-level"><b>01</b><strong>Rumors</strong><small>Basic information and early clues.</small></div>
  <div class="intel-level"><b>02</b><strong>Reliable</strong><small>Useful, dependable information with mechanical value.</small></div>
  <div class="intel-level"><b>03</b><strong>Hunter's Insight</strong><small>Critical information and an advantage when confronting the target.</small></div>
</div>

### Hunter's Insight

Reaching **Intel 3** represents the Team understanding that aspect of the Hunt well enough to turn knowledge into an advantage.

Typical examples include:

- **Tracks 3:** avoid an ambush, choose your approach, or choose your starting position.
- **Nature 3:** identify one of the monster's Signature Abilities before it is used.
- **Weakness 3:** learn how to trigger or exploit a major weakness.

The exact information and advantage depend on the monster being hunted.

---

## Failed Hunt Actions
{:#failed-hunt-actions}

Hunting dangerous creatures is not risk-free. A failed Hunt Action may cause a **Complication**.

Complications can change the situation before the final encounter. The creature might relocate, become aware that it is being pursued, supplies may be lost, the terrain may worsen, or another threat may become involved.

<div class="hunt-callout"><div class="callout-label">Failure does not end the Hunt</div><strong>It changes the situation.</strong><br><span>A failed action means the Hunt has become more difficult, urgent, or dangerous—not that the Team automatically loses its chance to continue.</span></div>

---

## Starting the Encounter
{:#starting-the-encounter}

The Team may choose to confront the target **at any time**.

When the Team starts the final encounter, **every participating player spends 1 Downtime Slot**. Investigation ends and the Hunt becomes a normal played encounter using the monster's Hunt rules.

Any Intel and Preparation the Team has earned carries into that encounter.

A Hunt is completed when the target is:

- **killed**;
- **captured**;
- **driven away**; or
- otherwise **neutralised** in a way that resolves the Hunt.

Everyone who participates in the final encounter counts as having **Completed a Hunt** for weekly Downtime rewards.

Rare creatures may also provide unique materials, crafting components, trophies, or other rewards.

---

# Wild Hunt Combat
{:#wild-hunt-combat}

Some Hunt targets are too large, resilient, or dangerous to fight like ordinary enemies. These creatures use additional **Wild Hunt** rules during their encounter.

<div class="wild-mechanics">
  <div class="wild-mechanic"><span>01</span><strong>Injury</strong><small>The creature's lasting deterioration as the Hunt goes on.</small></div>
  <div class="wild-mechanic"><span>02</span><strong>Open Wounds</strong><small>Short-lived opportunities to strike exposed anatomy.</small></div>
  <div class="wild-mechanic"><span>03</span><strong>Broken Parts</strong><small>Lasting damage that disables or weakens specific capabilities.</small></div>
  <div class="wild-mechanic"><span>04</span><strong>Exertion</strong><small>How hard the monster has pushed itself and how tired it has become.</small></div>
</div>

Some large monsters can also be **Clung to**, allowing hunters to climb across their bodies to reach otherwise difficult locations.

Not every Hunt target uses every rule on this page. The creature's profile will make clear which locations can be climbed, which parts can be broken, and any special rules that apply.

---

## Clinging
{:#clinging}

**Clinging** is a special Grapple state used when you attach yourself to part of a large creature instead of attempting to wrestle its entire body. Clinging uses the normal **Grapple Control** system.

A climbable monster has connected body locations, such as:

<div class="hunt-callout"><div class="callout-label">Example Climb Route</div><strong>Forelegs ↔ Shoulders ↔ Back ↔ Head</strong><br><span>with <strong>Back ↔ Tail</strong> as another connection.</span></div>

These locations determine where you can climb and which body parts you can easily reach. They do not have separate Vitality totals.

### Getting On

Use the normal **Grab** action and declare that you are attempting to **Cling** to a reachable location.

On a successful Grab, determine Control normally. Successfully catching hold does not necessarily mean you are secure: the creature may still have the Control advantage.

Each hunter Clinging to the creature has their **own Control contest**. Control is never pooled between climbers.

### While Clinging

While Clinging:

- You move with the creature whenever it moves.
- The creature's Movement is **not halved** merely because you are attached.
- The creature does not suffer ordinary Clinch penalties merely because you are attached.
- You suffer the Clinch's **+2 Base Speed to Dodge and Parry interrupts**.
- You must keep at least **one hand** free to maintain your grip.
- Your other hand, legs, weapons, and techniques can be used if you still meet their requirements.
- Ordinary movement by the creature does not force additional grip checks.
- Dodging away, teleporting away, being thrown off, or otherwise leaving the creature ends your Cling.

Normal Grapple Control losses still apply to your own actions, damage you receive, Wounds, and relevant conditions.

The creature attacking somebody else does **not** cause it to lose Control against you.

<div class="cling-actions">
  <div class="cling-action"><h4>Secure Grip</h4><div class="action-cost"><span>Speed 5</span><span>Stamina 5</span><span>Control 0</span></div><p>Make Grapple Offense against Grapple Defense. On success, shift <strong>3 Control</strong> toward yourself. Grip Fighting's Reposition Link can be used.</p></div>
  <div class="cling-action"><h4>Clamber</h4><div class="action-cost"><span>Speed 6</span><span>Stamina 8</span><span>Control 2</span></div><p>Move to an adjacent Climbable Location. You must have at least <strong>2 Control in your favour</strong> before paying the cost.</p></div>
  <div class="cling-action"><h4>Release</h4><div class="action-cost"><span>Speed 0</span></div><p>End your Cling voluntarily on your action. Resolve any resulting movement or fall normally.</p></div>
</div>

### Attacking While Clinging

You may attack normally while Clinging, including using **Pummel** or other techniques whose requirements you can still meet.

Your attacks affect Grapple Control normally. A climber therefore has to decide whether to secure their position, move, or risk spending their grip on another attack.

<div class="hunt-stat-row"><div class="hunt-stat"><b>−2</b><span>Called Shot penalty against your occupied location</span></div><div class="hunt-stat"><b>0</b><span>Minimum penalty after other reductions</span></div></div>

When making a Called Shot against the body location you currently occupy, reduce its base Accuracy penalty from **−4 to −2**. Apply other Called Shot reductions afterward, to a minimum penalty of 0.

Clinging does not automatically turn attacks into weakspot hits. It gives you access and makes precise attacks easier.

### Shake Off

Large creatures can normally attempt to throw climbers loose.

<div class="hunt-stat-row"><div class="hunt-stat"><b>8</b><span>Speed</span></div><div class="hunt-stat"><b>+1</b><span>Exertion</span></div><div class="hunt-stat"><b>5</b><span>Monster Control to throw you off</span></div></div>

The creature makes a Grapple Offense check against each Clinging hunter's Grapple Defense, resolving every climber separately.

On a success, shift **3 Control** toward the creature. If this leaves the creature with at least **5 Control** against you, you are thrown off. Resolve any resulting fall normally.

Some creatures have additional ways of threatening climbers, such as rolling, scraping against terrain, diving, taking flight, igniting their body, or attacking particular locations. These are listed in that creature's abilities.

### Takedowns Against Giant Creatures

Clinging to a giant creature does not mean you can wrestle its entire body.

Normal Takedowns, Pins, or similar whole-body Grapple effects only work when the creature's rules or the current situation make them possible—for example, once it has been Toppled, restrained, or otherwise rendered vulnerable.

---

## Injury, Open Wounds, and Broken Parts
{:#injury-open-wounds-and-broken-parts}

Wild Hunt Monsters become visibly worse as the fight goes on.

Damage still matters normally, but major amounts of accumulated damage push the creature through **Injury Gates**. Crossing these Gates changes how it fights and creates opportunities for the Team.

### Injury Conditions

| Condition | What changes |
|---|---|
| **Healthy** | Full capabilities. |
| **Bloodied** | The creature has suffered visible damage. |
| **Wounded** | Its Heavy actions generate **+1 additional Exertion**. |
| **Injured** | Its Movement is reduced by **20%**. |
| **Badly Injured** | Its Exertion cannot recover below **4**. |
| **Critical** | Its Exertion cannot recover below **6** and it can become Capture-Ready. |
| **Felled** | It can no longer continue fighting. |

These effects are cumulative. A sufficiently powerful attack may push a creature through more than one Injury stage at once.

Individual creatures may also change their behaviour as they become injured: a flying monster might remain grounded, a territorial creature might retreat toward its nest, or a wounded creature might begin protecting a damaged side.

### Open Wounds

Crossing an Injury Gate can create an **Open Wound** on the part of the creature that was struck. Particularly effective targeted attacks can also create Open Wounds without first crossing a Gate.

<div class="hunt-stat-row"><div class="hunt-stat"><b>20 IC</b><span>Open Wound duration</span></div><div class="hunt-stat"><b>+25%</b><span>Final Damage when targeted</span></div><div class="hunt-stat"><b>1</b><span>Open Wound per location</span></div></div>

An Open Wound represents a temporary opportunity: cracked armour, exposed muscle, a damaged chakra organ, torn tissue, loosened scales, or another vulnerable piece of anatomy.

The wound closing does **not** mean the injury healed. It means the easy opening has passed.

A targeted attack against an Open Wound deals **+25% Final Damage**, rounded down. Only attacks specifically directed at that location gain this bonus.

Each location can only have one Open Wound at a time, and further hits do not refresh its duration.

### Breaking Parts

Repeatedly exploiting an Open Wound can **Break** that body part before the opportunity closes.

The creature's profile tells you the effect of breaking a particular part once that information has been discovered or becomes apparent.

| Broken Part | Possible Effect |
|---|---|
| **Foreleg** | A charge or movement option becomes unavailable. |
| **Wing** | The creature can no longer fly. |
| **Horn** | A horn attack is weakened or lost. |
| **Tail** | A tail attack loses Reach or becomes unavailable. |
| **Armour Plate** | Protection over that location is reduced or removed. |
| **Chakra Organ** | An associated elemental ability becomes more exhausting to use. |

Once a part is Broken, its effect lasts for the rest of the Hunt. That part cannot be Broken repeatedly for additional effects or rewards.

Area attacks damage the creature normally but do not automatically exploit every Open Wound or break every body part they overlap.

---

## Exertion
{:#exertion}

Wild Hunt Monsters use **Exertion** to represent how hard they are pushing themselves during the fight. Exertion ranges from **0 to 10**.

| Exertion | State | Effect |
|---:|---|---|
| **0–1** | **Energetic** | No penalty. |
| **2–3** | **Worked** | Visible effort, but no numerical penalty. |
| **4–5** | **Winded** | −1 Accuracy and defensive rolls. |
| **6–7** | **Tired** | −2 Accuracy and defensive rolls; −20% Movement. |
| **8–9** | **Exhausted** | −3 Accuracy and defensive rolls; −40% Movement; cannot use Heavy actions. |
| **10** | **Spent** | Collapses for 10 IC. |

Use only the penalties from the creature's current Exertion state.

Movement penalties from Injury and Exertion stack, but cannot reduce the creature's Movement by more than **60%** in total.

Exertion is gained **after an action resolves**. If an action pushes a creature into a worse Exertion state, that new penalty does not weaken the action that caused it.

### Gaining Exertion

Unless one of the creature's abilities says otherwise:

| Action | Exertion |
|---|---:|
| Ordinary movement, observation, waiting, standard defenses | **0** |
| Basic attack, Shake Off, ordinary offensive technique | **+1** |
| Heavy attack, major breath weapon, massive charge, powerful area attack | **+2** |
| Exceptional signature technique | **+3**, when specifically listed |

An attack generates Exertion whether it succeeds or fails. This means baiting a monster into wasting a charge, breath attack, or signature technique can be useful even if nobody damages it.

Ordinary defensive interrupts do not normally generate Exertion.

### Catch Breath

A creature can attempt to recover during combat.

<div class="hunt-stat-row"><div class="hunt-stat"><b>10</b><span>Speed</span></div><div class="hunt-stat"><b>10</b><span>Delay</span></div><div class="hunt-stat"><b>−3</b><span>Exertion on completion</span></div></div>

When the Delay completes, remove **3 Exertion**, but never below the minimum imposed by the creature's Injury state.

Before Catch Breath completes, the recovery is spoiled if the creature:

- takes damage;
- is forcibly moved;
- performs another action; or
- performs an interrupt.

It may abandon the attempt using the normal Abort rules.

<div class="hunt-callout"><div class="callout-label">Pressure matters</div><strong>Stopping a monster from Catching Breath is progress.</strong><br><span>A hunter who keeps pressure on the creature can prevent it from undoing the Team's work even without landing the biggest attack.</span></div>

### Spent

When a creature reaches **10 Exertion**, it becomes **Spent**.

It immediately collapses and becomes **Prone** for **10 IC**.

While Spent, it cannot take non-interrupt actions, but it may still use defenses that are physically possible using its **Exhausted** penalties.

Additional Exertion cannot extend the collapse.

At the end of the 10 IC, reduce its Exertion to **7**, or to its Injury minimum if that minimum is higher. It must then stand normally if it wishes to do so.

### Effects That Cause Fatigue

If one of your abilities would directly advance a Wild Hunt Monster's Fatigue, it instead adds **2 Exertion per Fatigue level**.

Other effects that interact with Stamina or Chakra Exhaustion continue to work as described by the Hunt encounter or ability. Status effects do not disappear merely because the monster crosses an Exertion threshold.

---

## Capture
{:#capture}

Weakening a monster is not enough to capture it.

A successful capture requires the Team to **injure it, exhaust it, restrain it, and secure the opportunity before it recovers or escapes**.

<div class="capture-chain">
  <div class="capture-step"><b>01</b><span>Push it to <strong>Critical</strong></span></div>
  <div class="capture-step"><b>02</b><span>Reach <strong>8–10 Exertion</strong></span></div>
  <div class="capture-step"><b>03</b><span>Hold it with an appropriate <strong>restraint</strong></span></div>
  <div class="capture-step"><b>04</b><span>Complete <strong>Secure Capture</strong></span></div>
</div>

### Capture-Ready

A Wild Hunt Monster becomes **Capture-Ready** while both of these are true:

- it is **Critical**; and
- it is **Exhausted or Spent** at **8–10 Exertion**.

Capture-Ready creatures should be visibly struggling: limping, breathing heavily, failing to hold themselves upright, trying to flee, or otherwise showing that they are near collapse.

You do not need to guess a hidden Vitality percentage to know whether a monster is ready to capture.

### Restraining the Monster

Before capture can be completed, the monster must be held by an **appropriate restraint**.

This might be a specialised trap, binding, sealing technique, monster-specific device, or another effect capable of containing that particular creature.

Ordinary Immobilization is not automatically enough to capture a Wild Hunt Monster, and a hunter merely Clinging to it does not count as restraining it.

### Secure Capture

<div class="hunt-stat-row"><div class="hunt-stat"><b>10</b><span>Speed</span></div><div class="hunt-stat"><b>10</b><span>Delay</span></div></div>

Requires:

- a **Capture-Ready** monster;
- an appropriate restraint currently holding it; and
- the necessary sedative, suppression seal, or other established capture method within reach.

When the Delay completes, the creature is successfully captured if it is still both **Capture-Ready** and **restrained**.

If either condition stops being true before completion, the capture attempt fails. You may Abort normally.

### Capture Is Not Taming

Capturing a creature does not automatically make it friendly, loyal, or usable as a companion.

Capture determines whether the creature is successfully taken alive. Any later attempt to acquire, tame, train, or use it follows the normal **Monster Taming** rules.

---

## The Hunt Loop
{:#the-hunt-loop}

A successful Hunt is usually a chain of decisions rather than a race to empty a Vitality bar.

<div class="hunt-loop-panel">
<h3>Before the Encounter</h3>
<ol>
<li><strong>Track it.</strong> Find the creature and learn how it moves through its territory.</li>
<li><strong>Research it.</strong> Discover what it is and what it can do.</li>
<li><strong>Study it.</strong> Learn what can be exploited.</li>
<li><strong>Prepare.</strong> Build the traps, tools, routes, and countermeasures you want available.</li>
<li><strong>Choose when to strike.</strong> More information costs more Downtime; starting sooner means accepting more unknowns.</li>
</ol>
</div>

<div class="hunt-loop-panel">
<h3>During the Encounter</h3>
<ol>
<li><strong>Injure it.</strong> Push the creature through its Injury stages.</li>
<li><strong>Create openings.</strong> Target important locations and watch for Open Wounds.</li>
<li><strong>Exploit them.</strong> Coordinate attacks before those openings close.</li>
<li><strong>Break important parts.</strong> Remove dangerous attacks, mobility, armour, or other capabilities.</li>
<li><strong>Wear it down.</strong> Force Exertion and prevent it from successfully Catching Breath.</li>
<li><strong>Climb when necessary.</strong> Reach locations that cannot safely be attacked from the ground.</li>
<li><strong>Choose the ending.</strong> Fell the creature, drive it away, or hold it at Critical long enough to secure a capture.</li>
</ol>
</div>

<div class="hunt-callout"><div class="callout-label">The point of the system</div><strong>A dangerous monster is more than a large pool of Vitality.</strong><br><span>A Hunt is about learning the creature, changing the fight, and creating the opportunity to finish it on your terms.</span></div>
