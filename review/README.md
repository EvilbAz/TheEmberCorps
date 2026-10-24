# Release review package

Read [FINAL-CHANGELOG.md](FINAL-CHANGELOG.md) for the consolidated release changelog against the base system. It includes all 28 skill actions, Team Attacks, 143 revised Bukijutsu entries, 12 other updated catalogue techniques, tool changes and conversion notes. `CHANGELOG.md` contains the same release text.

The earlier chronological changelog is preserved as `CHANGELOG-WORKING-HISTORY.md`; it is historical and contains superseded rules. The JSON request files likewise record successive editing passes and must not be blindly replayed as a migration.

## Working copies

- Rules branch: `update/skills-combat-overhaul` in `evilbaz/TheEmberCorps`.
- MonsterForge branch: `update/armor-and-defense` in `evilbaz/MonsterForge`.
- Character-sheet review copy: https://docs.google.com/spreadsheets/d/1qdi_MimRonqaQEFCHLTea7pUtdnP8x0qu4wf0Fiskkk/edit
- Original published template remains unchanged: `1JUl_Dk76RWStPWmWN40mYhrzSiZE-TJBj4RKNIWAM9s`.

## Recorded sheet changes

The request JSON files record editing passes on the review copy, not an idempotent migration. They create named ranges and tabs and must not be blindly replayed against an existing sheet. The review copy is the final assembled artifact.

`jutsu-catalogue-draft.json` records its complete frozen catalogue, with `jutsu-catalogue-changes.json` listing the 155 changed techniques. Body Check is additionally removed from the learnable catalogue; its function is the free Shove action. The upstream imported catalogue was not edited.

The populated Jutsu Engine Affinity and learning columns were copied through row 364 after validating row 7. Later consistency passes updated the Team preparation summary and synced Snap Shot to 16 Stamina. Temporary Affinity test inputs were restored to their original blank/zero values.

## Release sequence after approval

1. Review the stated balance choices and the character-sheet draft, including native Sheet layout.
2. Promote the approved review copy as the new public template; update the website's template link in that release.
3. Push the rules branch and MonsterForge branch using the repository's normal release process.
4. Announce the player-facing changelog separately; no announcement has been sent by this task.

Race mechanics remain outside this update.

## Latest revision

- Every skill action now scales per full 5 points above the TN or opposing total.
- Ninshou/Lore moved into Character Profile rows 29–30 and Combat Stats rows 21–22; old supplementary rows cleared. Named ranges and SP spending use the main rows.
- Live skill test: Chakra Control 7, Ninshou base 7 + Focus 1, Lore 2 produced Ninshou 8, Lore 2, 18 total SP spent, 7 unspent and elemental rank D. Inputs restored afterward.
- 37 spreadsheet calculation checks pass, including eight new success-margin checks.
- Non-AoE Parries regain Partial Defense; AoE Parries do not. Attack-level restrictions, including rolled Ballistic attacks, remain.
- `skill-integration-requests.json` and `revision-content-requests.json` record this pass. Earlier request files are historical passes and must not be replayed as the current rules.

## Combat-flow revision

New skill-action expiry timers and the blanket repeat cooldown were replaced with consumed benefits, action triggers and changes to the situation. Four weapon entries and Core Stabilise were synced. `combat-flow-requests.json` records the review-sheet pass; it is not a general migration. See changelog section 11.

## Bukijutsu scaling pass

See `BUKIJUTSU-AUDIT.md` for all 145 reviewed techniques and 118 revised entries. `bukijutsu-power-changes.json` records before/after blocks; `bukijutsu-power-requests.json` and `bukijutsu-power-manifest.json` record the applied catalogue cells. The sheet scaling reference is at Skills and Teamwork row 47. All 147 changed cells were read back successfully. Conditional technique effects remain explicit resolution instructions.

## Taijutsu comparison pass

Current progression and combat-effect revisions are documented in `BUKIJUTSU-TAIJUTSU-COMPARISON.md`. `bukijutsu-parity-changes.json` records the 90 changed entries; `bukijutsu-parity-requests.json` records catalogue and calculator edits. The earlier power-pass requests are historical snapshots. Latest sheet checks: 45 passing.

## Reactive skill actions

Twelve skill actions now include Defense Links, Check Links or triggered Interrupts. Read the Technique, Field Diagnosis and Reinforce also keep main-action preparation modes. Rules, both consolidated changelogs and Skills and Teamwork rows 2–31 are synchronized. `skill-reactions-changes.json` records this revision; `skill-reactions-requests.json` records the reference-cell updates.

## Function and Chain pass

See `BUKIJUTSU-FUNCTION-REVIEW.md` for the current role inventory of all 145 techniques, Chain scenarios and stacking checks. This pass revises 26 techniques, including all 17 Thrown entries. Chains grant one tactical Opening per sequence; overlapping Bukijutsu roll modifiers, projectile allowances and forced Defense rerolls are limited. All 43 updated draft-sheet cells were read back successfully. `bukijutsu-function-changes.json` and `bukijutsu-function-requests.json` record this pass. Earlier audits describe earlier passes.

## 24 October release

Publication authorized by the owner. The standalone updates page has been retired; development records under `review/` are excluded from the Jekyll build. Character Sheet v2.2 is the public template linked from Getting Started. Its previous template remains available for old character records. Release polish synchronized the website and catalogue, verified 96 updated cells, and hid the development checks tab. MonsterForge now uses the authoritative +0.5 Multi-Throw DB increment.
