import { SocialIcon } from '../components/SocialIcon.jsx';
import { Button } from '../components/Button.jsx';

/* Circle - forest closing section: stacked Bebas headline, the standing
   host portrait, the WhatsApp community QR, and social links. */
export function Circle() {
  return (
    <section id="connect" className="circle section" data-chapter="connect">
      <span className="bg-ghost bg-ghost--circle" data-ghost="right" aria-hidden="true">CIRCLE</span>

      <div className="circle__grid">
        {/* Left - headline + blurb */}
        <div>
          <span className="kicker kicker--dark" style={{ color: 'var(--text-on-dark-muted)' }}>07 - The Circle</span>
          <h2 className="circle__headline" data-lines>
            THE<br />100 CR<br />LEADER<br />CIRCLE
          </h2>
          <p className="circle__blurb">
            A private community for founders, business owners, and leaders exploring growth, scale,
            leadership, and real business conversations.
          </p>
        </div>

        {/* Center - short pedestal card; the face-cropped portrait rises
            out of the top, hands cropped away. */}
        <div className="circle__portrait" data-scale-in>
          <div
            className="circle__portrait-figure"
            role="img"
            aria-label="Bharathiraja Thangapplalam"
          />
        </div>

        {/* Right - QR + join + socials */}
        <div className="circle__connect" data-stagger>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)', color: 'var(--gold)', margin: 0, textAlign: 'center' }}>
            Scan to Join the WhatsApp Community
          </p>
          <div style={{ background: 'var(--paper)', padding: 'var(--space-5)', borderRadius: 'var(--radius)' }}>
            <img
              src="/assets/whatsapp-qr-placeholder.png"
              alt="WhatsApp community QR"
              width="220" height="220"
              style={{ display: 'block', width: '100%', maxWidth: 220, height: 'auto' }}
            />
          </div>
          <Button variant="onDark" icon="whatsapp" iconRight={false} data-magnetic="0.3"
            href="https://wa.me/" target="_blank" rel="noreferrer">
            Join the Circle
          </Button>
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
