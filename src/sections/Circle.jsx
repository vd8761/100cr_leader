import { SocialIcon } from '../components/SocialIcon.jsx';
import { Button } from '../components/Button.jsx';
import { LINKS } from '../data/site.js';

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

        {/* Right - QR + join + socials */}
        <div className="circle__connect">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)', color: 'var(--gold)', margin: 0, textAlign: 'center' }}>
            Scan to Join the WhatsApp Community
          </p>
          <div style={{ background: 'var(--paper)', padding: 'var(--space-5)', borderRadius: 'var(--radius)' }}>
            <img
              src="/assets/whatsapp-qr.svg"
              alt="Scan to join the 100 CR Leader WhatsApp community"
              width="220" height="220"
              style={{ display: 'block', width: '100%', maxWidth: 220, height: 'auto' }}
            />
          </div>
          <Button variant="onDark" icon="whatsapp" iconRight={false} className="circle__join"
            href={LINKS.whatsapp} target="_blank" rel="noreferrer">
            Join the Circle
          </Button>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
            <SocialIcon platform="linkedin" tone="dark" href={LINKS.linkedinNewsletter} />
            <SocialIcon platform="instagram" tone="dark" href={LINKS.instagram} />
          </div>
        </div>
      </div>
    </section>
  );
}
