/* Circle - forest closing section: stacked Bebas headline, the standing
   host portrait, the WhatsApp community QR, and social links. */
const { DisplayHeading, SocialIcon } = window.The100CRLeaderDesignSystem_2a705c;

function Circle() {
  return (
    <section id="connect" style={{ background: 'var(--forest-900)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: 'var(--space-32) var(--page-gutter)',
        display: 'grid', gridTemplateColumns: '1fr 360px 1fr', gap: 'var(--space-16)', alignItems: 'center',
      }}>
        {/* Left - headline + blurb + socials */}
        <div>
          <DisplayHeading size="stacked" color="var(--paper)" style={{ marginBottom: 'var(--space-8)' }}>
            THE<br />100 CR<br />LEADER<br />CIRCLE
          </DisplayHeading>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)',
            color: 'var(--text-on-dark-muted)', lineHeight: 'var(--lh-body)', maxWidth: 340,
            borderTop: '1px solid var(--rule-dark)', paddingTop: 'var(--space-6)', margin: 0,
          }}>
            A private community for founders, business owners, and leaders exploring growth, scale,
            leadership, and real business conversations.
          </p>
        </div>

        {/* Center - portrait */}
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '3 / 4', background: 'var(--paper)' }}>
          <img src="../../assets/author-photo.png" alt="Bharathiraja Thangapplalam"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        {/* Right - QR + socials */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-8)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)', color: 'var(--gold)', margin: 0, textAlign: 'center' }}>Scan to Join the WhatsApp Community</p>
          <div style={{ background: 'var(--paper)', padding: 'var(--space-5)', borderRadius: 'var(--radius)' }}>
            <img src="../../assets/whatsapp-qr-placeholder.png" alt="WhatsApp community QR" width="220" height="220" style={{ display: 'block' }} />
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
            <SocialIcon platform="linkedin" tone="dark" />
            <SocialIcon platform="facebook" tone="dark" />
            <SocialIcon platform="x" tone="dark" />
            <SocialIcon platform="instagram" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Circle = Circle;
