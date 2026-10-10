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
.taxonomy-intro{padding:18px 20px;margin:16px 0 22px;border:1px solid var(--line);background:linear-gradient(90deg,color-mix(in srgb,var(--accent2) 8%,var(--surface)),var(--surface));border-radius:4px}
.taxonomy-intro strong{font:800 18px 'Barlow Condensed',sans-serif;color:var(--text)}
.taxonomy-intro p:last-child{margin-bottom:0}
.tribe-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 30px}
.tribe-card{position:relative;padding:18px 18px 16px;border:1px solid var(--line);background:var(--surface);border-radius:4px;overflow:hidden}
.tribe-card:after{content:attr(data-mark);position:absolute;right:10px;top:2px;font:900 54px/1 'Barlow Condensed',sans-serif;color:var(--accent);opacity:.06}
.tribe-card h3{margin:0 0 4px!important;color:var(--text)!important;font-size:25px!important}
.tribe-card .tribe-bodies{color:var(--dim);font:800 9px 'DM Sans',sans-serif;letter-spacing:.8px;text-transform:uppercase;margin-bottom:10px}
.tribe-card p{font-size:12px;color:var(--muted);line-height:1.65;margin-bottom:9px}
.tribe-tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:11px}
.tribe-tag{padding:3px 6px;border:1px solid var(--line);border-radius:3px;font:800 9px 'DM Sans',sans-serif;text-transform:uppercase;letter-spacing:.7px;color:var(--muted)}
.tribe-tip{margin-top:10px;padding-top:10px;border-top:1px solid var(--line);font-size:11px!important}
.tribe-tip strong{color:var(--accent)}
.class-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:17px 0 30px}
.class-card{padding:15px 16px;border:1px solid var(--line);background:var(--surface);border-radius:4px;display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:start}
.class-glyph{width:40px;height:40px;border:1px solid color-mix(in srgb,var(--accent) 45%,var(--line));display:grid;place-items:center;border-radius:3px;color:var(--accent);font:900 20px 'Barlow Condensed',sans-serif;background:color-mix(in srgb,var(--accent) 7%,transparent)}
.class-card h3{margin:0 0 3px!important;color:var(--text)!important;font-size:20px!important}
.class-card p{margin:0 0 7px;font-size:11.5px;color:var(--muted);line-height:1.55}
.class-read{font-size:10px!important;color:var(--dim)!important}
.class-read strong{color:var(--accent)}
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
@media(max-width:900px){.hunt-flow{grid-template-columns:1fr}.hunt-card-grid,.intel-grid,.tribe-grid,.class-grid,.wild-mechanics,.cling-actions,.capture-chain{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:620px){.hunting-directory{padding:25px 20px 22px!important}.hunting-directory:after{font-size:82px}.hunt-card-grid,.intel-grid,.intel-levels,.tribe-grid,.class-grid,.wild-mechanics,.cling-actions,.capture-chain{grid-template-columns:1fr}.hunt-flow-step{min-height:0}.hunt-badges{gap:5px}}
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
    <a href="#monster-tribes">Monster Tribes</a>
    <a href="#combat-classes">Combat Classes</a>
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
  <div class="hunt-card"><div class="hunt-card-kicker">Hunt Action · 1 Downtime</div><h3>Track</h3><p>Follow trails, chakra residue, disturbed terrain, witnesses, feeding grounds, discarded remains, or other signs of the creature.</p><span class="hunt-result">Success → Tracks Intel</span><p>Learn where the creature is, where it travels, how it moves through its territory, and how best to approach it.</p></div>
  <div class="hunt-card"><div class="hunt-card-kicker">Hunt Action · 1 Downtime</div><h3>Research</h3><p>Study old records, field reports, remains, sightings, survivors, folklore, previous encounters, or similar sources.</p><span class="hunt-result">Success → Nature Intel</span><p>Learn what kind of creature you are dealing with, how it behaves, and what it may be capable of.</p></div>
  <div class="hunt-card"><div class="hunt-card-kicker">Hunt Action · 1 Downtime</div><h3>Study Weakness</h3><p>Investigate the creature's anatomy, habits, injuries, feeding patterns, shed material, chakra, or previous fights in search of exploitable vulnerabilities. This will often require some <strong>Nature Intel</strong> first.</p><span class="hunt-result">Success → Weakness Intel</span><p>Learn how to create openings, disable important parts, avoid dangerous abilities, or exploit a major vulnerability.</p></div>
  <div class="hunt-card"><div class="hunt-card-kicker">Hunt Action · 1 Downtime</div><h3>Prepare</h3><p>Create or arrange something specifically intended to help against the target: traps, bait, antidotes, seals, special ammunition, environmental preparations, escape routes, or similar measures.</p><span class="hunt-result">Success → +1 Preparation · Max 3</span><p>Preparation must represent something established before the encounter; it is not undefined equipment that becomes whatever the Team needs later.</p></div>
</div>

---

## Intel
{:#intel}

Intel is shared across the whole Hunting Team. There are three categories:

<div class="intel-grid">
  <div class="intel-card"><span class="intel-icon">01</span><strong>Tracks</strong><small>Where the monster is, how it moves through its territory, and how the Team can approach it.</small></div>
  <div class="intel-card"><span class="intel-icon">02</span><strong>Nature</strong><small>What the monster is, how it behaves, its broad abilities, tribe, and fighting tendencies.</small></div>
  <div class="intel-card"><span class="intel-icon">03</span><strong>Weakness</strong><small>What can be exploited, broken, avoided, interrupted, or turned against the creature.</small></div>
</div>

Each category has **3 levels**.

<div class="intel-levels">
  <div class="intel-level"><b>1</b><strong>Rumors</strong><small>Basic information, signs, hearsay and early clues.</small></div>
  <div class="intel-level"><b>2</b><strong>Reliable</strong><small>Dependable information with useful mechanical value.</small></div>
  <div class="intel-level"><b>3</b><strong>Hunter's Insight</strong><small>Critical information and an encounter advantage.</small></div>
</div>

Gaining a higher level includes the information from lower levels. The exact information revealed depends on the monster being hunted.

Typical Hunter's Insight benefits include **Tracks 3** avoiding an ambush or choosing your starting position, **Nature 3** identifying a Signature Ability before it is used, and **Weakness 3** revealing how to trigger or exploit a major weakness.

### Failed Hunt Actions
{:#failed-hunt-actions}

A failed Hunt Action may cause a **Complication**. The creature might relocate, realise it is being hunted, supplies may be lost, terrain may worsen, or another threat may become involved.

A failure does not automatically end the Hunt. It means the situation has become more difficult, urgent, or dangerous.

---

# Monster Tribes
{:#monster-tribes}

<div class="taxonomy-intro">
<p><strong>Tribe describes a monster's broad body-plan and hunting identity.</strong></p>
<p>It tells you the kind of creature you are dealing with before you know every individual ability. Tribe is not a complete stat block: mutations, elements, individual anatomy and Combat Class can make two monsters from the same Tribe behave very differently.</p>
</div>

<div class="tribe-grid">
  <div class="tribe-card" data-mark="F"><h3>Fang</h3><div class="tribe-bodies">Jackal · Hound · Hyena · Lynx · Panther</div><p>Pursuit predators built around scent, speed and isolated prey. Fang monsters want the Hunt stretched out: one hunter falls behind, a route opens, and the creature commits hard.</p><div class="tribe-tags"><span class="tribe-tag">Skirmisher</span><span class="tribe-tag">Ambusher</span><span class="tribe-tag">Bruiser</span></div><p class="tribe-tip"><strong>Hunter read:</strong> stay grouped, deny long approaches, and be wary when its tracks begin circling the weakest trail.</p></div>
  <div class="tribe-card" data-mark="C"><h3>Colossus</h3><div class="tribe-bodies">Boar · Bear · Ape · Gorilla · Elk</div><p>Massive terrestrial monsters that win space through weight, momentum and heavy limbs. Their attacks are often obvious, committed and extremely dangerous once they begin moving.</p><div class="tribe-tags"><span class="tribe-tag">Bruiser</span><span class="tribe-tag">Tank</span><span class="tribe-tag">Grappler</span></div><p class="tribe-tip"><strong>Hunter read:</strong> bait commitment, attack supporting limbs, and do not let the creature dictate the centre of the battlefield.</p></div>
  <div class="tribe-card" data-mark="CH"><h3>Chitin</h3><div class="tribe-bodies">Mantis · Beetle · Scorpion · Crab</div><p>Armoured monsters with layered shells, jointed natural weapons and a tendency to make terrain part of the kill. Chitin creatures are at their strongest when you fight exactly where they want you.</p><div class="tribe-tags"><span class="tribe-tag">Grappler</span><span class="tribe-tag">Tank</span><span class="tribe-tag">Controller</span></div><p class="tribe-tip"><strong>Hunter read:</strong> attack joints, separate them from prepared ground, and treat discarded shell or a suspiciously narrow lane as a warning.</p></div>
  <div class="tribe-card" data-mark="S"><h3>Sky</h3><div class="tribe-bodies">Roc · Moth</div><p>Winged predators that control height and approach angles. Sky monsters decide when contact happens, attacking from places ordinary hunters cannot easily threaten.</p><div class="tribe-tags"><span class="tribe-tag">Skirmisher</span><span class="tribe-tag">Artillery</span><span class="tribe-tag">Controller</span></div><p class="tribe-tip"><strong>Hunter read:</strong> use cover, watch high ledges for feathers or scales, and breaking the wings can change the entire Hunt.</p></div>
  <div class="tribe-card" data-mark="O"><h3>Coil</h3><div class="tribe-bodies">Serpent · Wyrm</div><p>Long-bodied monsters that fight through flexible reach, constriction and restricted routes. A Coil can turn its own body into a wall, divide a Team, and disappear through spaces hunters cannot follow.</p><div class="tribe-tags"><span class="tribe-tag">Grappler</span><span class="tribe-tag">Ambusher</span><span class="tribe-tag">Artillery</span></div><p class="tribe-tip"><strong>Hunter read:</strong> avoid narrow lanes, force it to uncoil, and investigate long furrows that vanish beneath rubble or earth.</p></div>
  <div class="tribe-card" data-mark="M"><h3>Mire</h3><div class="tribe-bodies">Salamander · Crocodile · Tortoise</div><p>Durable amphibious monsters that use water margins to wear prey down. Mire creatures are patient, difficult to dislodge and dangerous when they can drag a fight into their preferred terrain.</p><div class="tribe-tags"><span class="tribe-tag">Tank</span><span class="tribe-tag">Grappler</span><span class="tribe-tag">Controller</span></div><p class="tribe-tip"><strong>Hunter read:</strong> fight from firm ground, deny access to water where possible, and take drag marks ending at opaque water seriously.</p></div>
  <div class="tribe-card" data-mark="∞"><h3>Colony</h3><div class="tribe-bodies">Rat-King · Locust Cloud · Leech Colony</div><p>A distributed creature coordinated around one or more vulnerable concentrations. A Colony may look like many enemies, but its threat comes from the body acting as a single organised whole.</p><div class="tribe-tags"><span class="tribe-tag">Swarm</span><span class="tribe-tag">Controller</span><span class="tribe-tag">Ambusher</span></div><p class="tribe-tip"><strong>Hunter read:</strong> use area pressure, identify the coordinating core, and follow repeated small trails back toward the place where they converge.</p></div>
</div>

---

# Combat Classes
{:#combat-classes}

<div class="taxonomy-intro">
<p><strong>Tribe tells you what a monster is. Combat Class tells you how it prefers to fight.</strong></p>
<p>A Combat Class is a tactical identity, not a restriction. A monster can still possess attacks outside its speciality, but its Class tells you what kind of pressure it is best at creating and what behaviour you should expect once the fight develops.</p>
</div>

<div class="class-grid">
  <div class="class-card"><div class="class-glyph">BR</div><div><h3>Bruiser</h3><p>Close-range pressure, force and direct threat. Bruisers pick a target, make it move, and punish anyone who lets them stay in striking distance.</p><p class="class-read"><strong>Read:</strong> expect commitment and heavy contact; make it spend movement and punish overextension.</p></div></div>
  <div class="class-card"><div class="class-glyph">SK</div><div><h3>Skirmisher</h3><p>Mobility, angles and repeated hit-and-run attacks. Skirmishers want a clear escape route and become much less comfortable when pinned into a bad position.</p><p class="class-read"><strong>Read:</strong> cut off exits, threaten multiple angles, and do not chase blindly.</p></div></div>
  <div class="class-card"><div class="class-glyph">CT</div><div><h3>Controller</h3><p>Space denial, separation and battlefield manipulation. Controllers want to split hunters, close routes or make parts of the battlefield unsafe before committing.</p><p class="class-read"><strong>Read:</strong> protect formation and recognise that the terrain may be the real attack.</p></div></div>
  <div class="class-card"><div class="class-glyph">AR</div><div><h3>Artillery</h3><p>Long sightlines and powerful ranged pressure. Artillery monsters prefer distance, cover and time to line up attacks rather than prolonged close combat.</p><p class="class-read"><strong>Read:</strong> break sightlines, use cover, and force the fight into ranges where its best attacks are awkward.</p></div></div>
  <div class="class-card"><div class="class-glyph">AM</div><div><h3>Ambusher</h3><p>Concealment, sudden bursts and disengagement. Ambushers attack from advantage, then break contact rather than trading blows on equal terms.</p><p class="class-read"><strong>Read:</strong> deny hiding places, watch likely approach routes, and expect it to disappear after striking.</p></div></div>
  <div class="class-card"><div class="class-glyph">GR</div><div><h3>Grappler</h3><p>Isolation, restraint and forced movement. Grapplers catch one target and turn the encounter into a rescue problem for everybody else.</p><p class="class-read"><strong>Read:</strong> preserve escape tools, stay within support range, and react quickly when somebody is seized or dragged away.</p></div></div>
  <div class="class-card"><div class="class-glyph">TK</div><div><h3>Tank</h3><p>Area holding, durability and objective protection. Tanks are comfortable sitting on a choke point, nest, resource or other position that forces hunters to come through them.</p><p class="class-read"><strong>Read:</strong> do not waste the entire Hunt attacking the strongest angle; displace it, flank it, or attack what it is protecting.</p></div></div>
  <div class="class-card"><div class="class-glyph">SW</div><div><h3>Swarm</h3><p>Distributed pressure from a mass of smaller bodies. A Swarm may fill a large area and threaten several hunters at once while still resolving as a single monster actor.</p><p class="class-read"><strong>Read:</strong> area effects and control matter; spreading the mass does not necessarily mean you have split it into separate enemies.</p></div></div>
</div>

<div class="hunt-callout"><div class="callout-label">Reading a Hunt Profile</div><strong>Tribe + Class is your first tactical shorthand.</strong><p>A Colossus Grappler is a very different problem from a Colossus Tank; a Fang Ambusher hunts differently from a Fang Bruiser. Nature Intel can reveal enough about a target to turn those labels into useful expectations before every individual technique is known.</p></div>

---

## Starting the Encounter
{:#starting-the-encounter}

The Team may choose to confront the target **at any time**.

When the Team starts the final encounter, **every participating player spends 1 Downtime Slot**. Investigation ends and the Hunt becomes a played encounter using the monster's Hunt rules. Any Intel and Preparation the Team has earned carries into that encounter.

A Hunt is completed when the target is **killed, captured, driven away, or otherwise neutralised** in a way that resolves the Hunt.

Everyone who participates in the final encounter counts as having **Completed a Hunt** for weekly Downtime rewards. Rare creatures may also provide unique materials, crafting components, trophies, or other rewards.

---

# Wild Hunt Combat
{:#wild-hunt-combat}

Some Hunt targets are too large, resilient, or dangerous to fight like ordinary enemies. These creatures use additional **Wild Hunt** rules during their encounter.

<div class="wild-mechanics">
  <div class="wild-mechanic"><span>01</span><strong>Injury</strong><small>Lasting deterioration as damage pushes the monster through major stages.</small></div>
  <div class="wild-mechanic"><span>02</span><strong>Open Wounds</strong><small>Short-lived opportunities to attack exposed anatomy.</small></div>
  <div class="wild-mechanic"><span>03</span><strong>Broken Parts</strong><small>Lasting damage that removes or weakens specific capabilities.</small></div>
  <div class="wild-mechanic"><span>04</span><strong>Exertion</strong><small>How hard the creature has pushed itself and how close it is to collapse.</small></div>
</div>

Some large monsters can also be **Clung to**, allowing hunters to climb across their bodies to reach otherwise difficult locations. Not every Hunt target uses every rule on this page; its profile tells you what applies.

---

## Clinging
{:#clinging}

**Clinging** is a special Grapple state used when you attach yourself to part of a large creature instead of attempting to wrestle its entire body. It uses the normal **Grapple Control** system.

A climbable monster has connected locations, such as **Forelegs ↔ Shoulders ↔ Back ↔ Head**, with another connection such as **Back ↔ Tail**. These locations determine access and reach; they do not have separate Vitality totals.

### Getting On

Use the normal **Grab** action and declare that you are attempting to **Cling** to a reachable location. On a successful Grab, determine Control normally. Each climber has their own Control contest and Control is never pooled.

### While Clinging

- You move with the creature whenever it moves.
- Its Movement is **not halved** merely because you are attached.
- It does not suffer ordinary Clinch penalties merely because you are attached.
- You suffer the Clinch's **+2 Base Speed to Dodge and Parry interrupts**.
- You must keep at least **one hand** free to maintain your grip.
- Your other hand, legs, weapons and techniques can be used if you meet their requirements.
- Ordinary movement by the creature does not force additional grip checks.
- Dodging away, teleporting away, being thrown off, or otherwise leaving the creature ends your Cling.

Normal Grapple Control losses still apply to your own actions, damage, Wounds and relevant conditions. The creature attacking somebody else does **not** make it lose Control against you.

<div class="cling-actions">
  <div class="cling-action"><h4>Secure Grip</h4><div class="action-cost"><span>Speed 5</span><span>Stamina 5</span><span>Control 0</span></div><p>Make Grapple Offense against Grapple Defense. On success, shift <strong>3 Control</strong> toward yourself. Grip Fighting's Reposition Link may be used.</p></div>
  <div class="cling-action"><h4>Clamber</h4><div class="action-cost"><span>Speed 6</span><span>Stamina 8</span><span>Control 2</span></div><p>Move to an adjacent Climbable Location. You must have at least <strong>2 Control in your favour</strong> before paying the cost.</p></div>
  <div class="cling-action"><h4>Release</h4><div class="action-cost"><span>Speed 0</span></div><p>End the Cling voluntarily on your action. Resolve resulting movement or falling normally.</p></div>
</div>

### Attacking While Clinging

You may attack normally while Clinging, including **Pummel** and other techniques you can physically perform. Attacking affects Grapple Control normally.

When making a Called Shot against the body location you occupy, reduce its base Accuracy penalty from **−4 to −2**. Apply other Called Shot reductions afterward, to a minimum of 0.

Clinging does not make every attack a weakspot hit. It gives you access and improves your aim.

### Shake Off

**Speed:** 8  
**Exertion:** +1

The creature makes Grapple Offense against each climber's Grapple Defense separately. On success, shift **3 Control** toward the creature. If this leaves it with at least **5 Control** against you, you are thrown off.

Some creatures possess additional anti-climber abilities such as rolling, scraping against terrain, diving, taking flight, igniting their body, or attacking specific locations.

### Takedowns Against Giant Creatures

Clinging to a giant creature does not mean you can wrestle its entire body. Normal Takedowns, Pins and similar whole-body Grapple effects only work when the creature's rules or current situation make them possible, such as while Toppled or appropriately restrained.

---

## Injury, Open Wounds, and Broken Parts
{:#injury-open-wounds-and-broken-parts}

Wild Hunt Monsters become visibly worse as a Hunt continues. Damage still matters normally, but major accumulated damage pushes the creature through **Injury Gates**.

### Injury Conditions

| Condition | What changes |
|---|---|
| **Healthy** | Full capabilities. |
| **Bloodied** | The creature has suffered visible damage. |
| **Wounded** | Heavy actions generate **+1 additional Exertion**. |
| **Injured** | Movement is reduced by **20%**. |
| **Badly Injured** | Exertion cannot recover below **4**. |
| **Critical** | Exertion cannot recover below **6** and it can become Capture-Ready. |
| **Felled** | It can no longer continue fighting. |

These effects are cumulative. A sufficiently powerful attack may push a creature through more than one stage at once, and individual creatures may gain additional behaviours at particular stages.

### Open Wounds

Crossing an Injury Gate can create an **Open Wound** on the location struck. Particularly effective targeted attacks can also open one without crossing a Gate.

<div class="hunt-stat-row"><div class="hunt-stat"><b>20 IC</b><span>Open Wound Duration</span></div><div class="hunt-stat"><b>+25%</b><span>Final Damage When Exploited</span></div></div>

An Open Wound represents cracked armour, exposed muscle, damaged organs, torn tissue or another temporary vulnerability. Closing means the easy opening has passed, not that the injury healed.

Only targeted attacks against that location gain the damage bonus. Each location can have only one Open Wound at a time, and further hits do not refresh its duration.

### Breaking Parts

Repeatedly exploiting an Open Wound can **Break** that body part before the opportunity closes. The creature's profile tells you what happens when a particular part is Broken once that information becomes known.

| Broken Part | Possible Effect |
|---|---|
| **Foreleg** | A charge or movement option becomes unavailable. |
| **Wing** | The creature can no longer fly. |
| **Horn** | A horn attack is weakened or lost. |
| **Tail** | A tail attack loses Reach or becomes unavailable. |
| **Armour Plate** | Protection over that location is reduced or removed. |
| **Chakra Organ** | An associated elemental ability becomes more exhausting to use. |

A Broken part stays Broken for the rest of the Hunt and cannot be repeatedly broken for additional effects or rewards. Area attacks do not automatically exploit every Open Wound or break every part they overlap.

---

## Exertion
{:#exertion}

Wild Hunt Monsters use **Exertion** to represent how hard they are pushing themselves. Exertion ranges from **0 to 10**.

| Exertion | State | Effect |
|---:|---|---|
| **0–1** | **Energetic** | No penalty. |
| **2–3** | **Worked** | Visible effort; no numerical penalty. |
| **4–5** | **Winded** | −1 Accuracy and defensive rolls. |
| **6–7** | **Tired** | −2 Accuracy and defensive rolls; −20% Movement. |
| **8–9** | **Exhausted** | −3 Accuracy and defensive rolls; −40% Movement; cannot use Heavy actions. |
| **10** | **Spent** | Collapses for 10 IC. |

Use only the penalties from the current state. Injury and Exertion Movement reductions stack to a maximum reduction of **60%**. Exertion is gained **after** an action resolves.

### Gaining Exertion

| Action | Exertion |
|---|---:|
| Ordinary movement, observation, waiting, standard defenses | **0** |
| Basic attack, Shake Off, ordinary offensive technique | **+1** |
| Heavy attack, major breath, massive charge, powerful area attack | **+2** |
| Exceptional signature technique | **+3**, when specifically listed |

An attack generates Exertion whether it succeeds or fails. Ordinary defensive interrupts do not normally generate Exertion.

### Catch Breath

**Speed:** 10  
**Delay:** 10

When the Delay completes, remove **3 Exertion**, never below the minimum imposed by Injury.

Taking damage, being forcibly moved, performing another action, or performing an interrupt before completion spoils the recovery. The creature may Abort normally.

### Spent

At **10 Exertion**, the creature immediately collapses and becomes **Prone for 10 IC**. It cannot take non-interrupt actions, but may use physically possible defenses with its Exhausted penalties.

Additional Exertion cannot extend the collapse. At the end, reduce Exertion to **7**, or to its Injury minimum if higher. It must then stand normally.

### Effects That Cause Fatigue

If one of your abilities would directly advance a Wild Hunt Monster's Fatigue, it instead adds **2 Exertion per Fatigue level**. Other Stamina or Chakra Exhaustion interactions work as described by the Hunt encounter or ability, and ordinary statuses do not disappear simply because an Exertion threshold is crossed.

---

## Capture
{:#capture}

Weakening a monster is not enough to capture it. A successful capture requires the Team to **injure it, exhaust it, restrain it, and secure the opportunity before it recovers or escapes**.

<div class="capture-chain"><div class="capture-step"><b>01</b><span>Push it to Critical</span></div><div class="capture-step"><b>02</b><span>Reach 8–10 Exertion</span></div><div class="capture-step"><b>03</b><span>Apply a valid restraint</span></div><div class="capture-step"><b>04</b><span>Complete Secure Capture</span></div></div>

### Capture-Ready

A Wild Hunt Monster becomes **Capture-Ready** while it is both **Critical** and **Exhausted or Spent at 8–10 Exertion**.

Capture-Ready creatures should be visibly struggling. You do not need to guess a hidden Vitality percentage to know whether capture is possible.

### Restraining the Monster

The monster must be held by an **appropriate restraint**: a specialised trap, binding, sealing technique, monster-specific device, or another effect capable of containing that creature.

Ordinary Immobilization is not automatically sufficient, and merely Clinging to the monster does not restrain it for capture.

### Secure Capture

**Speed:** 10  
**Delay:** 10

Requires a **Capture-Ready** monster, an appropriate restraint currently holding it, and the necessary sedative, suppression seal or other established capture method within reach.

When the Delay completes, the creature is captured if it is still both Capture-Ready and restrained. If either condition stops being true, the attempt fails. You may Abort normally.

### Capture Is Not Taming

Capturing a creature does not make it friendly, loyal or usable as a companion. Capture determines whether it is taken alive; later acquisition, taming and training follow the normal **Monster Taming** rules.

---

## The Hunt Loop
{:#the-hunt-loop}

<div class="hunt-loop-panel">
<h3>Before the Encounter</h3>
<ol><li><strong>Track it.</strong> Find the creature and learn its territory.</li><li><strong>Research it.</strong> Discover its Tribe, habits and likely capabilities.</li><li><strong>Study it.</strong> Learn what can be exploited.</li><li><strong>Prepare.</strong> Build the traps, tools, routes and countermeasures you want available.</li><li><strong>Choose when to strike.</strong> More information costs more Downtime; starting sooner means accepting more unknowns.</li></ol>
</div>

<div class="hunt-loop-panel">
<h3>During the Encounter</h3>
<ol><li><strong>Read its Class.</strong> Recognise the kind of pressure the monster is trying to create.</li><li><strong>Injure it.</strong> Push it through its Injury stages.</li><li><strong>Create openings.</strong> Target important locations and watch for Open Wounds.</li><li><strong>Exploit them.</strong> Coordinate attacks before those openings close.</li><li><strong>Break important parts.</strong> Remove dangerous attacks, mobility, armour or other capabilities.</li><li><strong>Wear it down.</strong> Force Exertion and prevent it from Catching Breath.</li><li><strong>Climb when necessary.</strong> Reach locations that cannot safely be attacked from the ground.</li><li><strong>Choose the ending.</strong> Fell it, drive it away, or hold it at Critical long enough to capture it.</li></ol>
</div>

A dangerous monster is more than a large pool of Vitality. A Hunt is about **learning the creature, changing the fight, and creating the opportunity to finish it on your terms.**