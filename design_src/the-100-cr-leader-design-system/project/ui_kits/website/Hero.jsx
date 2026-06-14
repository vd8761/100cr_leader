/* Hero - forest top with the giant Bebas wordmark, scrolling host
   marquee, the faint waveform backdrop, the navy "with … name" block,
   and the platform listening bar. Mirrors OP-2 of the Figma. */
const { NavBar, DisplayHeading, Marquee, Waveform, PlatformPill } = window.The100CRLeaderDesignSystem_2a705c;

function Hero() {
  return (
    <header>
      {/* Forest band: nav + giant wordmark */}
      <div style={{ background: 'var(--forest)', paddingBottom: 'var(--space-2)' }}>
        <NavBar active="Home" />
        <div style={{ overflow: 'hidden', padding: '0 var(--page-gutter) 8px' }}>
          <DisplayHeading size="hero" style={{ whiteSpace: 'nowrap' }}>THE 100 CR LEADER</DisplayHeading>
        </div>
      </div>

      {/* Paper band: waveform backdrop + navy "with name" */}
      <div style={{ position: 'relative', background: 'var(--paper)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 var(--page-gutter)', opacity: 0.5 }}>
          <Waveform variant="hero" height={300} count={16} color="var(--paper-3)" />
        </div>
        <div style={{
          position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto',
          padding: 'var(--space-24) var(--page-gutter)',
          display: 'flex', justifyContent: 'flex-end',
        }}>
          <div style={{ maxWidth: 620 }}>
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
      <div style={{
        background: 'var(--forest-700)', borderTop: '1px solid var(--rule-dark)',
      }}>
        <div style={{
          maxWidth: 'var(--content-max)', margin: '0 auto',
          padding: 'var(--space-5) var(--page-gutter)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-6)',
        }}>
          <PlatformPill platform="spotify" tone="dark" />
          <PlatformPill platform="youtube" tone="dark" />
          <PlatformPill platform="google" tone="dark" />
          <PlatformPill platform="jiosaavn" tone="dark" />
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;
