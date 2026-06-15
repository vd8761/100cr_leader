import { gsap, ScrollTrigger, ScrollSmoother, SplitText } from './gsap.js';

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wantsCursor = () =>
  window.matchMedia('(pointer: fine)').matches && window.innerWidth > 980;
const isDesktop = () => window.innerWidth >= 920;

/* ------------------------------------------------------------------ */
/* Custom cursor                                                       */
/* ------------------------------------------------------------------ */
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring || !wantsCursor()) return () => {};

  document.documentElement.classList.add('has-cursor');
  gsap.set([dot, ring], { xPercent: 0, yPercent: 0, opacity: 1 });

  const xDot = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
  const yDot = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
  const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

  const move = (e) => { xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY); };
  const over = (e) => { if (e.target.closest('[data-cursor="hover"], a, button')) ring.classList.add('is-hovering'); };
  const out = (e) => { if (e.target.closest('[data-cursor="hover"], a, button')) ring.classList.remove('is-hovering'); };

  window.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerover', over);
  document.addEventListener('pointerout', out);

  return () => {
    window.removeEventListener('pointermove', move);
    document.removeEventListener('pointerover', over);
    document.removeEventListener('pointerout', out);
    document.documentElement.classList.remove('has-cursor');
  };
}

function initMagnetic() {
  if (!wantsCursor()) return;
  gsap.utils.toArray('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic) || 0.35;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => { xTo(0); yTo(0); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
  });
}

/* ================================================================== */
export function initAnimations({ wrapper, content }) {
  const reduce = prefersReduced();
  let smoother = null;
  const cleanups = [];

  document.documentElement.classList.add('gsap-ready');

  const ctx = gsap.context(() => {
    /* ---- Smooth scrolling + parallax ---- */
    if (!reduce) {
      smoother = ScrollSmoother.create({
        wrapper, content, smooth: 1.15, effects: true,
        normalizeScroll: true, smoothTouch: 0.08,
      });
      smoother.scrollTo(0, false);
      if (import.meta.env.DEV) window.__smoother = smoother;
    }

    /* ---- Top progress bar ---- */
    const bar = document.querySelector('.scroll-progress');
    if (bar) {
      gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });
    }

    if (reduce) return; /* static, fully-visible page */

    /* ============================================================
       HERO - char intro + cinematic depart on scroll
       ============================================================ */
    const wordmark = document.querySelector('[data-hero-wordmark]');
    if (wordmark) {
      const split = new SplitText(wordmark, { type: 'words,chars', charsClass: 'cr-char' });
      gsap.set(wordmark, { opacity: 1 });
      gsap.from(split.chars, {
        yPercent: 130, opacity: 0, ease: 'power4.out', duration: 1.1, stagger: 0.03, delay: 0.15,
      });
      cleanups.push(() => split.revert());
    }

    const nameKids = gsap.utils.toArray('[data-hero-name] > *');
    if (nameKids.length) {
      gsap.set('[data-hero-name]', { opacity: 1 });
      gsap.from(nameKids, { y: 44, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.55 });
    }

    /* both the body cut-out and the resting-hand overlay carry
       [data-hero-portrait]. Fade only (no vertical slide) so the hand
       never appears to "come from below" / look like a separate cut. */
    const portraits = gsap.utils.toArray('[data-hero-portrait]');
    const portrait = portraits[0];
    if (portraits.length) gsap.from(portraits, { opacity: 0, duration: 1.2, ease: 'power2.out', delay: 0.7 });

    /* Opacity-only stagger (no transform): the rail bar height is locked tight
       on desktop, so a y-offset would push the captions past the bar; and an
       inline transform from GSAP would also clobber the badges' CSS :hover lift.
       Fading them in keeps the transform free for the hover interaction. */
    const pills = gsap.utils.toArray('[data-hero-platforms] > *');
    if (pills.length) {
      gsap.from(pills, {
        opacity: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08,
        // 'top bottom' resolves to a negative scroll for this near-fold bar, so
        // it fires on load when visible (and still lazy-reveals on short screens
        // where the bar starts below the fold). 'top 95%' sat right on the edge
        // and intermittently never fired, leaving the discs invisible.
        scrollTrigger: { trigger: '[data-hero-platforms]', start: 'top bottom' },
      });
    }

    /* depart: as the hero leaves, the wordmark lifts + dims, portrait sinks */
    const heroTop = document.querySelector('.hero__top');
    if (heroTop) {
      gsap.to('[data-hero-wordmark]', {
        yPercent: -60, opacity: 0.15, ease: 'none',
        scrollTrigger: { trigger: heroTop, start: 'top top', end: 'bottom top', scrub: true },
      });
    }

    /* hero pointer parallax */
    const heroEl = document.querySelector('[data-hero]');
    const wave = document.querySelector('[data-hero-wave]');
    const nameBox = document.querySelector('[data-hero-name]');
    if (heroEl && wantsCursor()) {
      const waveX = wave && gsap.quickTo(wave, 'x', { duration: 0.8, ease: 'power3' });
      const waveY = wave && gsap.quickTo(wave, 'y', { duration: 0.8, ease: 'power3' });
      const nameX = nameBox && gsap.quickTo(nameBox, 'x', { duration: 1, ease: 'power3' });
      const nameY = nameBox && gsap.quickTo(nameBox, 'y', { duration: 1, ease: 'power3' });
      /* X-axis only for the portrait — any vertical drift makes the hand
         overlay look like a separate cut sliding against the bar. */
      const portX = portraits.map((el) => gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3' }));
      const onMove = (e) => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;
        if (waveX) { waveX(cx * 36); waveY(cy * 22); }
        if (nameX) { nameX(cx * -18); nameY(cy * -12); }
        portX.forEach((fn) => fn(cx * 22));
      };
      heroEl.addEventListener('pointermove', onMove);
      cleanups.push(() => heroEl.removeEventListener('pointermove', onMove));
    }

    /* ============================================================
       LINE-MASK HEADLINE REVEALS (scroll-scrubbed)
       ============================================================ */
    gsap.utils.toArray('[data-lines]').forEach((el) => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 115, rotate: 1.5, ease: 'none', stagger: 0.14,
            scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 46%', scrub: true },
          });
        },
      });
    });

    /* ============================================================
       CLIP-PATH IMAGE UNVEIL + Ken-Burns scale (scrubbed)
       ============================================================ */
    gsap.utils.toArray('[data-unveil]').forEach((el) => {
      const img = el.querySelector('img') || el;
      gsap.fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 86%', end: 'top 40%', scrub: true },
      });
      gsap.fromTo(img, { scale: 1.35 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 86%', end: 'top 20%', scrub: true },
      });
    });

    /* ============================================================
       BOOK - rotates in 3D as it scrolls through
       ============================================================ */
    gsap.utils.toArray('[data-book]').forEach((el) => {
      gsap.fromTo(el, { rotateY: -28, rotateX: 6, yPercent: 8 }, {
        rotateY: 4, rotateX: 0, yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 30%', scrub: 1 },
      });
    });

    /* ============================================================
       SCALE-IN (scrubbed) - e.g. Circle portrait
       ============================================================ */
    gsap.utils.toArray('[data-scale-in]').forEach((el) => {
      gsap.fromTo(el, { scale: 0.86, yPercent: 6 }, {
        scale: 1, yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 50%', scrub: true },
      });
    });

    /* ============================================================
       STAGGER WIPE for card / list groups (scrubbed)
       ============================================================ */
    gsap.utils.toArray('[data-stagger]').forEach((group) => {
      const kids = group.children;
      if (!kids.length) return;
      /* Fixed-px offset (not yPercent) so tall cards aren't shoved far
         down and held invisible - that read as a big gap under headings. */
      gsap.from(kids, {
        y: 44, opacity: 0, ease: 'power1.out', stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 92%', end: 'top 60%', scrub: 0.6 },
      });
    });

    /* ============================================================
       HORIZONTAL PINNED SECTION (desktop) - Initiatives
       ============================================================ */
    const hSection = document.querySelector('[data-horizontal]');
    const hTrack = hSection && hSection.querySelector('[data-h-track]');
    if (hSection && hTrack && isDesktop()) {
      const distance = () => Math.max(0, hTrack.scrollWidth - window.innerWidth);
      /* Pin a bit longer than the horizontal travel so cards dwell; a tight
         scrub keeps it coupled to the wheel (no glide / slip). */
      const PACE = 1.4;
      const hTween = gsap.to(hTrack, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: hSection,
          pin: true,
          scrub: 0.6,
          start: 'top top',
          end: () => '+=' + distance() * PACE,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      /* reveal each panel as it enters the horizontal viewport */
      gsap.utils.toArray('[data-h-track] [data-h-panel]').forEach((panel) => {
        gsap.from(panel, {
          opacity: 0, yPercent: 16, ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: hTween,
            start: 'left 85%', end: 'left 45%', scrub: true,
          },
        });
      });
    }

    /* ============================================================
       AMBIENT - marquee skew, ghost drift
       ============================================================ */
    const track = document.querySelector('[data-marquee-track]');
    if (track) {
      const skewTo = gsap.quickTo(track, 'skewX', { duration: 0.5, ease: 'power3' });
      ScrollTrigger.create({
        onUpdate: (self) => skewTo(gsap.utils.clamp(-10, 10, self.getVelocity() / -260)),
      });
    }

    gsap.utils.toArray('[data-ghost]').forEach((el) => {
      gsap.to(el, {
        xPercent: el.dataset.ghost === 'left' ? 10 : -10, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });

    /* ============================================================
       CHAPTER RAIL - active dot tracks the section in view
       ============================================================ */
    gsap.utils.toArray('[data-chapter]').forEach((sec) => {
      const id = sec.getAttribute('data-chapter');
      const dot = document.querySelector(`.rail__item[data-target="${id}"]`);
      if (!dot) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 55%', end: 'bottom 55%',
        onToggle: (self) => dot.classList.toggle('is-active', self.isActive),
      });
    });

    initMagnetic();
  });

  cleanups.push(initCursor());

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

  const cleanup = () => {
    window.removeEventListener('load', refresh);
    cleanups.forEach((fn) => fn && fn());
    if (smoother) smoother.kill();
    ctx.revert();
    document.documentElement.classList.remove('gsap-ready');
  };

  return { getSmoother: () => smoother, cleanup };
}
