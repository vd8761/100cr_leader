# UI Kit - The 100 CR Leader (Website)

A high-fidelity recreation of the podcast marketing site, rebuilt from the
Figma source (`100 Crore Website.fig`, frame **OP-2** - the most resolved option).

## Run it
Open `index.html`. It links the design system (`../../styles.css` + `../../_ds_bundle.js`)
and composes the screen sections below. The audio players and social hovers are interactive
(visual only - no real audio stream).

## Sections
| File | What it is |
|---|---|
| `Hero.jsx` | Forest top: centered nav, giant Bebas "THE 100 CR LEADER", the faint waveform backdrop, the navy *with Bharathiraja Thangapplalam* block, and the platform listening bar. |
| `About.jsx` | Forest "Built From Real Business Journeys" section - seated host portrait + manifesto + signature. |
| `Episodes.jsx` | Paper "Featured Episodes" list of `EpisodeCard`s with inline players. |
| `Circle.jsx` | Forest closing block - stacked Bebas headline, standing portrait, WhatsApp community QR, social links. |

## Components used
`NavBar`, `DisplayHeading`, `Marquee`, `Waveform`, `PlatformPill`, `PlatformIcon`,
`SectionLabel`, `EpisodeCard` (→ `Badge`, `AudioPlayer`), `SocialIcon` - all from the
design system bundle.

## Notes / fidelity
- The QR is a neutral **placeholder** (`assets/whatsapp-qr-placeholder.png`); swap in the real community QR.
- Episode teasers reuse the Figma's placeholder copy. Real episode descriptions should replace them.
- Fonts are substituted (Onest ≈ Nohemi/Gilroy); Bebas Neue is exact. See root `readme.md`.
