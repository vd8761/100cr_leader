---
name: 100cr-leader-design
description: Use this skill to generate well-branded interfaces and assets for The 100 CR Leader (a Spotify podcast hosted by Bharathiraja Thangapplalam), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Foundations:** `styles.css` → `tokens/` (forest green `#2C362B`, paper neutrals, sand display, navy hero ink, gold accent). Fonts: Bebas Neue (display) + Onest≈Nohemi (everything else).
- **Components:** `components/` - `Icon`, `Button`, `Badge`, `SectionLabel`, `DisplayHeading`, `NavBar`, `Marquee`, `PlatformIcon`, `PlatformPill`, `SocialIcon`, `Waveform`, `AudioPlayer`, `EpisodeCard`. Read each `.prompt.md` for usage.
- **Full example:** `ui_kits/website/` recreates the podcast homepage.
- **Assets:** `assets/` (host portraits, cover art, brand + UI icon SVGs).
- **Voice:** direct operator-to-operator, blunt and specific, first/second person, no emoji, Indian crore/₹ idiom. See `readme.md` → Content Fundamentals.
