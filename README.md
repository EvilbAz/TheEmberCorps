# Naruto World: The Ember Corps

The official player-facing rules reference for Naruto World: Ember Corps, a fan-made tabletop roleplaying system set after the Bloom.

The published website is the authoritative player-facing Ember Corps rulebook. Rules corrections and approved updates are published directly to the website.

## Browse the rules

The GitHub Pages site is published from the `main` branch at the repository root using Jekyll. Browse the published website at **https://evilbaz.github.io/TheEmberCorps/**.

## Rulebooks

I. Core Rules: character creation, combat, wounds, downtime and advancement.
II. Uniques: unique traits and upgrade paths.
III. Clans & Lineages: heritages, clans and bloodlines.
IV. Jutsu Compendium: techniques and supernatural systems.
V. Talents & Rank Benefits: milestone talents and advancements.
VI. Equipment & Crafting: weapons, tools and item crafting.

## Publishing

To publish: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. Jekyll builds the Markdown in `rules/` and the repository root automatically. The website has a client-side search index; Talent categories and Jutsu schools each have their own pages.

## Rules updates

Approved rule changes are announced in [the Ember Corps Discord](https://discord.com/channels/1538632131402793080/1542862638663344289). This site has no separate changelog.

## Contributing

Use a pull request or GitHub issue for typos, broken links or rules discrepancies. Proposed rules changes must be approved by staff before publication on the website.

## Disclaimer

This is a non-commercial, unofficial fan project inspired by Naruto and Monster Hunter. Naruto, Monster Hunter, and their respective characters, settings, terminology, and other protected material belong to their respective rights holders. Ember Corps is not affiliated with or endorsed by those rights holders.

The repository's Creative Commons dedication applies only to original Ember Corps material to the extent its contributors have the right to license or dedicate that material. It does not grant rights to any third-party intellectual property used or referenced by the project.

## Checks before publication

After editing rules or headings, run:

```sh
python scripts/rebuild_search.py
python scripts/validate_rules.py
npm ci
npm test
```

Search indexes complete sections and uses their explicit anchors. Keep anchors when renaming techniques. Give ranked techniques a `jutsu-technique` heading class and a visible `jutsu-rank-badge`; mark rank headings with `jutsu-rank-heading`. Letter ranks come from the published rules, not the technique name.

The shared layout loads page behaviour once. Internal navigation replaces `#main` and `#sidebar`, preserving the music player. Page-specific behaviour must initialise on `ember:page` and clean up old listeners and observers. Standalone documents and downloads retain normal navigation.
