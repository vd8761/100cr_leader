import { DisplayHeading } from '../components/DisplayHeading.jsx';
import { Marquee } from '../components/Marquee.jsx';
import { Waveform } from '../components/Waveform.jsx';
import { PlatformPill } from '../components/PlatformPill.jsx';
import { TICKER } from '../data/site.js';

const PLATFORMS = ['spotify', 'youtube', 'google', 'jiosaavn'];

/* Hero - forest top with the giant Bebas wordmark, the scrolling host
   marquee, the faint waveform backdrop, the navy "with … name" block,
   and the platform listening bar. Mirrors OP-2 of the Figma. */
export function Hero() {
  return (
    <header id="home" className="hero section" data-hero data-chapter="home">
      {/* Forest band: giant wordmark */}
      <div className="hero__top">
        <div className="hero__wordmark-wrap">
          <DisplayHeading size="hero" align="center" data-hero-wordmark className="hero__wordmark">
            THE 100 CR LEADER
          </DisplayHeading>
        </div>
      </div>

      {/* Scrolling brand ticker */}
      <Marquee tone="dark" speed={42} items={TICKER} />

      {/* Paper band: waveform backdrop + floating host cut-out + navy name.
          The portrait is anchored to the bottom of this band so its feet
          rest just above the platform bar, head reaching up into the
          wordmark (no higher than its midline). */}
      <div className="hero__name-band">
        <div className="hero__waveform" data-hero-wave>
          <Waveform variant="hero" height={300} count={16} color="var(--paper-3)" />
        </div>
        <div className="hero__portrait-wrap">
          <img
            className="hero__portrait"
            src="/assets/author-photo.png"
            alt="Bharathiraja Thangapplalam"
            data-hero-portrait
          />
        </div>
        <div className="hero__name-inner">
          <div className="hero__name-box" data-hero-name>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-light)', color: 'var(--navy)', margin: '0 0 8px' }}>with</p>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-regular)',
              color: 'var(--navy)', letterSpacing: 'var(--ls-tight)', lineHeight: 1.02, margin: 0,
            }}>Bharathiraja<br />Thangapplalam</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h5)', fontWeight: 'var(--fw-light)', color: 'var(--navy)', margin: '18px 0 0' }}>CEO, Touchmark Descience</p>
          </div>
        </div>
      </div>

      {/* Platform listening bar */}
      <div className="hero__platform-bar">
        <div className="hero__platform-inner" data-hero-platforms>
          {PLATFORMS.map((p) => (
            <PlatformPill key={p} platform={p} tone="dark" />
          ))}
        </div>
      </div>
    </header>
  );
}
