---
layout: rulebook
title: "Feral Elements"
volume: "IV"
volume_slug: "jutsu"
jutsu_section: "feral"
permalink: "/rules/jutsu/feral/"
---

<div class="jutsu-breadcrumb"><a href="{{ '/rules/jutsu/' | relative_url }}">← ALL JUTSU TYPES</a></div>

Feral Elements are chakra natures altered by the Bloom. Hunters learn them through teachers, recovered techniques, monsters and environments in the Wastes. Each Release leaves a lingering Scar on creatures or terrain.

# AT A GLANCE
{:#at-a-glance}

Choose a Release below. Its Scars use the shared [Severity](#scar-states), [Fade](#fade) and [Upkeep anchoring](#anchored-scars) rules.

# FERAL ELEMENT
{:#feral-element}

***Capability Talent***

Learn this Talent from a suitable Source under the [Capability rules]({{ "/rules/talents/#enhancements-and-capabilities" | relative_url }}).

## Core Talent
{:#core-talent}

Choose one Feral Element. That Release becomes the Feral Element granted by this Talent.

Abyss Release requires Elemental Mastery: Suiton. Storm Release requires Elemental Mastery: Raiton. Glass Release requires Elemental Mastery: Doton. Vacuum Release requires Elemental Mastery: Fūton. Cinder Release requires Elemental Mastery: Katon.

Void Release requires access to B-Rank Non-Elemental Ninjutsu.

## Feralizing a Jutsu
{:#feralizing-a-jutsu}

When declaring a C-Rank or higher Ninjutsu of the matching base nature, you may Feralize it. The Jutsu keeps its normal tags and gains its Feral Release tag. Abyss remains Suiton, Storm remains Raiton, Glass remains Doton, Vacuum remains Fūton and Cinder remains Katon for elemental interactions. Void remains Non-Elemental.

Feral Conversion applies to Jutsu with a target, Area, Construct, Barrier, weapon or persistent effect that the Release can scar or transform.

## Feral Intensity
{:#feral-intensity}

A Feralized Jutsu uses its Rank to determine Feral Intensity:

**C-Rank** — Feral Intensity 1\.

**B-Rank** — Feral Intensity 2\.

**A-Rank** — Feral Intensity 3\.

**S-Rank** — Feral Intensity 4\.

After calculating the Jutsu's normal final Chakra cost, increase it by 2 × Feral Intensity.

## Native Feral Jutsu
{:#native-feral-jutsu}

A Jutsu printed with a Feral Release tag is a native Feral Jutsu. It counts as Feralized, uses its Rank for Feral Intensity and applies its Release rules. Native Feral Jutsu pay their printed Chakra cost without the additional cost for Feralizing them.


# FERAL SCARS
{:#feral-scars}

Feral chakra forces the world into a state it cannot comfortably hold. Abyss creates Depth, Storm creates Charge, Glass creates Shards, Vacuum creates Dead Air, Cinder creates Ash, and Void creates Null.

Each Scar has Severity 1–5. Applying the same Scar again increases its Severity to a maximum of 5 and refreshes its Fade timer.

## Scar States
{:#scar-states}

| State | Severity |
| :--- | :--- |
| Scarred | 1–2 |
| Feral | 3–4 |
| Overrun | 5 |

Use the effects printed under that state on the relevant Release page.

## Fade
{:#fade}

Every Scar tracks one Fade timer.

**Severity 1–4** — Creating or increasing the Scar sets Fade to 20 IC.

**Severity 5** — Reaching Severity 5, or applying more of the same Scar while it is already 5, sets Fade to 10 IC.

When Fade reaches 0, reduce the Scar's Severity by 1\. If any Severity remains, set Fade to 10 IC. Continue reducing it by 1 every 10 IC until the Scar reaches 0\.

Increasing a Scar refreshes Fade from its new Severity. Consuming Scar Severity leaves the current Fade timer running.

When a Scar reaches 0, remove its marker. Physical aftermath can remain after the chakra sustaining the Scar is gone: shattered glass, soot, standing water and scorched earth still look exactly as ruined as they should.

## Anchored Scars
{:#anchored-scars}

A Feral Jutsu with Upkeep Anchors the matching Scars it creates on its target or inside its Area while that Upkeep is maintained. An Anchored Scar keeps its current Severity and its Fade timer stops counting down.

Several native Feral Jutsu Anchor a wider set of matching Scars in their Area. Their text states exactly what they hold.

When an Anchor ends, set the Scar's Fade to 20 IC at Severity 1–4 or 10 IC at Severity 5\. The battlefield immediately returns to the normal Fade cycle.

## Areas, Creatures and Overlap
{:#areas-creatures-and-overlap}

A creature can carry a Scar directly while standing inside an Area carrying the same Scar. When a rule checks that creature's Scar Severity, use the higher value.

Overlapping Areas of the same Scar use the highest Severity present in the overlap. Reapplying a Scar to substantially the same Area increases the existing marker.

Each point of Scar Severity can be consumed once. Declare the creature, Area or effect supplying the Scar before resolving the benefit.

## Timing
{:#timing}

Resolve a Feral Jutsu's Attack, Damage, Status Conditions and immediate effects, then apply its new Scar. Bonuses use the Scar Severity already present before that Jutsu began resolving.

A Jutsu that changes this order states the timing in its own Effects.

## Shared Scars
{:#shared-scars}

Scars belong to the battlefield. Any character with rules for the matching Feral Element can build, consume or exploit them.


# FERAL FIELDS
{:#feral-combat-flow}

Feral Fields sustain their Scars through Upkeep. Ending the field resumes Fade. For the order of application, consumption and decay, use the Rules Reference below.

## Choose your Feral Release
{:#choose-your-feral-release}

- [Abyss Release]({{ '/rules/jutsu/feral/abyss/' | relative_url }}) — Suiton / Depth
- [Storm Release]({{ '/rules/jutsu/feral/storm/' | relative_url }}) — Raiton / Charge
- [Glass Release]({{ '/rules/jutsu/feral/glass/' | relative_url }}) — Doton / Shards
- [Vacuum Release]({{ '/rules/jutsu/feral/vacuum/' | relative_url }}) — Fūton / Dead Air
- [Cinder Release]({{ '/rules/jutsu/feral/cinder/' | relative_url }}) — Katon / Ash
- [Void Release]({{ '/rules/jutsu/feral/void/' | relative_url }}) — Non-elemental / Null

# DEVELOPMENTS
{:#developments}

Each time you Deepen Feral Element, choose one Development.

**Feral Armament** — When making an Attack with a weapon created or empowered by a Jutsu that qualifies for your Feral Conversion, pay 3 additional Stamina to apply 1 matching Scar to the target or an Area 1 beneath them on hit. One Attack Action creates one Scar this way.

**Lesser Mutation** — D-Rank Jutsu can be Feralized at Feral Intensity 1\.

**Deep Scarring — Increase the initial Scar applied when one of your Feral Jutsu resolves by 1, to the normal maximum of 5\. Recurring increases from an Upkeep use the amount printed in that Jutsu.**

**Predatory Efficiency — The additional Chakra cost for Feralizing a converted Jutsu becomes 1 × Feral Intensity.**

**Long Memory — When one of your Feral Jutsu creates or increases a Scar at Severity 1–4, set that Scar's Fade to 30 IC instead of 20\. Severity 5 uses Fade 10\.**

**Territorial Instinct** — When you declare a Feral Attack that interacts with a matching Scar at Severity 3+, gain \+1 Accuracy on that Attack.

## Mastery — Feral Dominion
{:#mastery-feral-dominion}

After three Feral Element Developments, gain Feral Dominion and your chosen Release's Apex Mutation.

When declaring a Feral Jutsu that targets, occupies, originates from or consumes a matching Scar at Severity 3+, reduce its final Seal Speed by 2, minimum 0\.

The first converted Jutsu you Feralize during each Action has its additional Chakra cost from Feralizing reduced by 2, minimum 0\.


# RULES REFERENCE
{:#rules-reference}

## Scar Cycle
{:#scar-cycle}

Use [Fade](#fade) for decay and [Anchored Scars](#anchored-scars) for sustained fields.

## Resolution Order
{:#resolution-order}

* Declare the Jutsu and Feralize it if applicable.  
* Calculate the Jutsu's normal costs, then add its additional Chakra cost for being Feralized.  
* Check Scars already present for Accuracy, Damage, Wounding and other bonuses.  
* Resolve the Attack, defenses, Damage, Status Conditions and immediate effects.  
* Resolve any Scar consumption written into the Jutsu.  
* Apply the Jutsu's new Scar and set or refresh Fade.

## Scar Checks
{:#scar-checks}

Use the higher Severity for overlapping Scars, as described under [Areas, Creatures and Overlap](#areas-creatures-and-overlap).

## Anchors
{:#anchors}

See [Anchored Scars](#anchored-scars).

## Multiple Feral Users
{:#multiple-feral-users}

See [Shared Scars](#shared-scars).

## End of a Scene
{:#end-of-a-scene}

Combat timing ends when the scene ends. Any unspent Feral Scar loses its mechanical effects at that point. The physical aftermath remains as the fiction demands.
