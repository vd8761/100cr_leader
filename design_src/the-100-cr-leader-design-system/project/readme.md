# The 100 CR Leader - Design System

The brand system for **The 100 CR Leader**, a Spotify podcast hosted by
**Bharathiraja Thangapplalam** (CEO, Touchmark Descience). Built from real
conversations with founders, operators and business owners across India, the
show is about scaling a business beyond survival - leadership, growth mindset,
execution and long-term thinking, all the way to ₹100 crore.

This repository holds the brand's visual foundations, reusable React UI
primitives, foundation specimen cards, and a full website UI kit, so any agent
can produce on-brand interfaces, slides, social art and prototypes.

---

## Sources

These are the materials this system was reconstructed from. The reader may not
have access; they are recorded for provenance.

- **Figma** - `100 Crore Website.fig` (attached). Page-1 holds the website
  mockup as three options; **OP-2** (node `20:12` / `24:331`) is the most
  resolved and is treated as canonical. OP-1/OP-3 are earlier variants.
- **HTML draft** - `uploads/100crleader-website-v2_4.html`, an earlier
  gold/cream landing-page draft (Cormorant + DM Sans). Used for **copywriting**
  reference only; its visual language was superseded by the Figma green system.
- **Imagery** - `uploads/WhatsApp Image 2026-05-15…jpeg` (EP1 cover art),
  `uploads/new image .png` (author/promo). Host portraits were extracted from
  the Figma.

---

## Content Fundamentals

**Voice - a direct operator talking to other operators.** Copy is plain, blunt,
and confident. It opens with a question or a provocation, never a tagline:
*"Before we start… I want to ask you one question. If you disappeared for the
next 30 days…"*. Sentences are short. Fragments are used for punch
(*"the show."*, *"One mission."*).

**Person.** First person from the host ("I've sat across the table from every
kind of stuck founder"), second person to the listener ("What would happen to
*your* business?"). Never corporate "we".

**Casing.** The big wordmark is ALL CAPS (Bebas). Episode titles use Title Case
or deliberate emphasis caps for hooks (*"PERFECT RESUME. WRONG PERSON."*).
Section captions and body are sentence case. Labels like "Listen now" are
sentence case.

**Numbers & specifics.** Indian business idiom - crore / ₹ / lakh. Concrete,
specific claims over vague ones: *"The ₹25 Lakh CFO Who Paid for Herself in 90
Days"*, *"hurting 200 families"*. Dates are `DD-MM-YYYY` (`12-06-2026`),
durations `09:45min`.

**No emoji.** The brand never uses emoji. Iconography is brand glyphs (platform
logos), a microphone, and a minimal play/pause set.

**Vibe.** Grounded, premium, editorial. Less hype, more hard-won truth. Empty
space and big type do the talking.

---

## Visual Foundations

**Color.** The system is built on a single dominant **forest green `#2C362B`**
(over 1000 uses in the source) used as both the primary dark surface *and* the
ink. Against it sits a warm **paper** family (`#F2F1E7` → `#FFFEF1`) for light
sections, a muted **sand/olive `#D6D3B2`** for the big display type on dark, a
deep **navy `#12265C`** reserved for the hero "with … name" headline, and a
single **gold `#FBBC04`** highlight. Platform brand colors (Spotify green,
YouTube red, Google's four dots, JioSaavn teal) appear only inside their icons.
Sections alternate **forest ↔ paper** - that two-tone rhythm is the whole story;
resist adding a third background.

**Type.** Three roles. **Bebas Neue** - the giant, condensed, all-caps showpiece
("THE 100 CR LEADER"), only on forest, in sand, tracked slightly open.
**Nohemi** (substituted with **Onest**) - everything else: headings are set
*Light* (300) at large sizes for an airy, editorial feel; body is Light/Regular.
**Gilroy** (also → Onest) - tiny UI labels like the underlined "Listen now".
Headings lean light and large; body lines are generous (1.5–1.55).

**Spacing & layout.** A 1920-px canvas with an **80-px page gutter** and a
1760-px content column. Sections breathe - ~128px vertical padding. Generous gaps
(24–96px). Grid/flex with `gap`, never ad-hoc margins.

**Backgrounds.** Flat color fields, no gradients on content. The one recurring
motif is the **waveform** - chunky rounded white capsules behind the hero
(very low opacity) and dense thin bars inside episode players. A faint scrolling
**marquee** of the host's name (with mic glyphs) sits under the headline.

**Corners, borders, cards.** Cards are softly rounded (`12–16px`), filled with
`paper-2`, and outlined with a **1px hairline** (`rgba(44,54,43,0.14)`) rather
than heavy shadows. Episode rows are a two-column card: content+player | meta
rail, split by a hairline. Pills (platform actions, EP badges) are full-radius.

**Shadows.** Soft and low-contrast - `0 8px 28px rgba(44,54,43,0.10)` for cards;
a deeper `0 30px 80px rgba(0,0,0,0.25)` only for the floating host portraits.
No hard or colored glows.

**Motion.** Restrained. `cubic-bezier(0.22,0.61,0.36,1)` easing, ~0.28s.
Hovers are color/fill shifts (outline buttons fill forest; social circles fill
sand; arrows nudge 3px right) - no bounces, no scale-pop. The marquee scrolls
linearly and forever; the waveform animates bar heights subtly. Honor
`prefers-reduced-motion`.

**Press / hover states.** Solid buttons darken (`forest → forest-900`); on-dark
buttons brighten (`sand → cream`); outline/ghost reveal underline or fill.
Links shift from muted to full-strength ink.

**Imagery vibe.** Clean, bright, real photography - host portraits on white,
cut-out and floated on the forest with a soft drop shadow. Warm, natural,
no heavy filters or duotone.

---

## Iconography

- **Brand/platform glyphs** are the core icon set: Spotify, YouTube,
  Google Podcasts (its multicolor dot-bars), JioSaavn, plus WhatsApp, Facebook,
  LinkedIn, X and Instagram for socials. They live as inline SVG in the
  **`Icon`** component (`components/foundation/Icon.jsx`) so components stay
  portable, and also as standalone files in **`assets/icons/`**.
- **UI glyphs**: a thin-stroke **microphone** (marquee + section labels) and a
  filled **play / pause** pair for the audio player. An **arrow-right** is used
  on link-style buttons.
- **Style**: brand marks render in their official color when on a circular badge
  (`PlatformIcon`), or in `currentColor` when mono. UI glyphs are mono and
  inherit color. Stroke icons use a 1.8 weight, round caps/joins.
- **No emoji, no unicode dingbats.** When you need an icon, use `Icon` or the
  files in `assets/icons/`. Platform/social marks were recreated from the
  standard brand glyphs (simple-icons geometry).

---

## Index / Manifest

**Root**
- `styles.css` - global entry point (only `@import`s). Consumers link this.
- `readme.md` - this guide.
- `SKILL.md` - Agent-Skill front matter for use in Claude Code.

**`tokens/`** - `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.

**`components/`** - reusable React primitives (PascalCase `.jsx` + `.d.ts` +
`.prompt.md`, one `@dsCard` HTML per folder):
- `foundation/` - `Icon`
- `core/` - `Button`, `Badge`, `SectionLabel`
- `typography/` - `DisplayHeading`
- `navigation/` - `NavBar`, `Marquee`
- `media/` - `PlatformIcon`, `PlatformPill`, `SocialIcon`, `Waveform`,
  `AudioPlayer`, `EpisodeCard`

**`ui_kits/website/`** - full site recreation (`index.html` + `Hero`, `About`,
`Episodes`, `Circle` sections). See its `README.md`.

**`guidelines/`** - foundation specimen cards (Colors, Type, Spacing, Brand)
shown in the Design System tab.

**`assets/`** - `author-photo.png`, `author-seated.png`, `brand/` (cover art,
promo), `icons/` (brand + UI SVGs), `whatsapp-qr-placeholder.png`.

---

## ⚠️ Font substitution (needs your input)

The brand uses **Nohemi** and **Gilroy**, which are commercial and not on Google
Fonts. They are currently substituted with **Onest** (a close geometric
grotesque). **Bebas Neue** is exact. To restore full fidelity, drop the real
`Nohemi` / `Gilroy` `.woff2` files into `tokens/` and replace the `@import` in
`tokens/fonts.css` with `@font-face` rules.
