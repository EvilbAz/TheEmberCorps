# Website cleanup — 3 November 2026

## Navigation and search

- Fixed selector errors that prevented the contents rail and later page setup from running.
- Search now indexes complete public sections, including costs, effects, HTML directories, lore and timeline entries. Excerpts centre on matching text.
- Retained accent-insensitive matching, added safe highlighting, keyboard navigation, focus trapping and a retry path when the index cannot load.
- Kept pages marked `search: false` out of the index.
- Internal navigation preserves the header and audio player. Track, playback position, volume and pause/play state survive page changes, search-result navigation and browser history.
- Reinitialised page contents and timeline effects after navigation; removed old listeners and observers. Ordinary navigation remains the fallback for failed fetches and standalone documents.

## Jutsu presentation

- Added rank links to the right-hand contents rail and a compact rank bar above each ranked discipline for smaller screens.
- Added stronger rank separators and source-level rank badges to compendium and clan techniques.
- Added Japanese/romaji names to English-only techniques, retaining the English name and every existing explicit anchor. These are descriptive homebrew names where no Japanese name was already published.
- Gave native Feral techniques the same rank and heading treatment as ordinary jutsu. Kept stances, universal Bukijutsu and Chakra Flow in their own groups.
- Linked discipline pages directly to their shared learning requirements.

## Text and organisation

- Shortened lengthy technique descriptions, conversational jokes and repeated explanations.
- Rewrote the combo overview, clone-targeting sequence, armor introduction and poison timing for direct reference during play.
- Improved the jutsu field guide and subsection hierarchy. Shared mechanics remain with their owning rules and are linked from relevant disciplines.
- Preserved technique costs, damage, speed, effects, existing learning thresholds, historical timeline text and NPC dossiers.

## Existing rule gaps retained for a mechanics decision

- Shadow Clones has no published letter rank. Its Talent access is retained without assigning a new rank.
- Nanto Rendan — South Star Combo references its Combo Counter but has no printed Cadence value. This pass does not invent one.
- The Eight Gates and Sage progression use their own requirements; they have not been assigned ordinary jutsu ranks.

## Validation

- Validated 78 public source pages and 3,345 search destinations, shared Wounds and world records.
- Nine JavaScript interaction tests cover rank navigation, full-text and accent-insensitive search, markup escaping, storage denial, audio persistence, search-result navigation, failed requests, racing navigations, same-page links and back/forward history.
- Compared technique stat/effect lines against the previous revision and verified all original jutsu and clan anchors remain present.
- Browser-checked the local preview for rank jumps, search-result navigation, music playback and the contents rail. The local preview uses Liquid/Markdown rendering; GitHub Pages performs the production Jekyll build.
