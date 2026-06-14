# The 100 CR Leader - Podcast Website

A high-fidelity, interactive marketing site for **The 100 CR Leader**, a podcast
hosted by **Bharathiraja Thangapplalam** (CEO, Touchmark Descience) about scaling
a business beyond survival - all the way to ₹100 crore.

Built with **Vite + React** and animated with **GSAP** (ScrollSmoother,
ScrollTrigger, SplitText). The visual language is recreated from the Claude Design
handoff under [`design_src/`](design_src/) (Figma frame OP‑2): a two‑tone
**forest‑green ↔ paper** editorial system with the giant Bebas wordmark, the
host‑name marquee, the waveform motif, and the platform listening bar.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle → dist/
npm run preview    # preview the production build
```

## Sections

| Section | What it is |
|---|---|
| **Hero** | Forest top: centred nav, giant Bebas “THE 100 CR LEADER”, scrolling host marquee, faint waveform backdrop, the navy *with Bharathiraja Thangapplalam* block, and the platform listening bar. |
| **About** | Forest “Built From Real Business Journeys” - seated portrait + manifesto + signature, over a parallaxing “100 CR” ghost wordmark. |
| **Episodes** | Paper “Featured Episodes” list of cards, each with a simulated inline audio player + waveform scrubber. |
| **Circle** | Forest closing block - stacked “THE 100 CR LEADER CIRCLE” headline, standing portrait, WhatsApp community QR, join button, and social links. |
| **Footer** | Slim sign‑off with the wordmark, quick links and copyright. |

## Interactions (GSAP)

- **Smooth scrolling** via `ScrollSmoother`, with `data-speed` **parallax** on the
  host portraits and scrubbed drift on the oversized background wordmarks.
- **Hero intro**: the wordmark splits into characters (`SplitText`) and rises in;
  the navy name block staggers up.
- **Mouse interactions**: pointer parallax on the hero waveform + name, a custom
  dot‑and‑ring **cursor** that grows over interactive elements, a **magnetic**
  “Join the Circle” button, and hover lifts on pills/socials.
- **Scroll‑responsive**: batched reveal animations (`up / left / right / scale`),
  a top **scroll‑progress bar**, the marquee **skews with scroll velocity**, and
  the nav tracks the section in view + gains a backdrop once scrolled.
- **Audio players** simulate playback (progress advances, waveform pulses).

Everything honours `prefers-reduced-motion` (animations are disabled and all
content is shown statically) and the custom cursor is suppressed on touch devices.

## Responsive

Fully responsive from ~320px phones up. The nav collapses to a hamburger →
full‑screen overlay; the hero wordmark wraps; the About / Episodes / Circle grids
stack to a single column; type scales fluidly via `clamp()`.

## Project structure

```
src/
  components/    design-system primitives (Icon, Button, Badge, Waveform,
                 AudioPlayer, EpisodeCard, PlatformPill, SocialIcon, NavBar, …)
  sections/      Hero · About · Episodes · Circle · Footer
  lib/           gsap.js (plugin registration) · initAnimations.js (the engine)
  styles/        tokens.css · global.css · app.css
public/assets/   portraits, QR, brand art, icons (copied from the design bundle)
```

## Notes / fidelity (carried over from the design handoff)

- **Fonts** - the brand uses **Nohemi** and **Gilroy** (commercial). They are
  substituted with **Onest**; **Bebas Neue** is exact. Drop the real `.woff2`
  files into the project and add `@font-face` rules to restore full fidelity.
- **WhatsApp QR** is a neutral placeholder - swap in the real community QR.
- Episode descriptions reuse the Figma placeholder copy.

The original design system (tokens, component specs, chat transcripts) lives in
[`design_src/the-100-cr-leader-design-system/`](design_src/the-100-cr-leader-design-system/).
