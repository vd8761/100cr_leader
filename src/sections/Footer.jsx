import { SocialIcon } from '../components/SocialIcon.jsx';
import { LINKS } from '../data/site.js';

/* Footer - brand, content / work / connect columns, socials, copyright. */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div className="footer__about">
          <p className="footer__brand">The 100 Cr Leader</p>
          <p className="footer__tag">
            A weekly newsletter, podcast, workshop, and book by Bharathiraja Thangappalam. For
            founders who are serious about scaling.
          </p>
          <div className="footer__socials">
            <SocialIcon platform="linkedin" tone="dark" href={LINKS.linkedinNewsletter} size={44} />
            <SocialIcon platform="instagram" tone="dark" href={LINKS.instagram} size={44} />
            <SocialIcon platform="whatsapp" tone="dark" href={LINKS.whatsapp} size={44} />
            <SocialIcon platform="x" tone="dark" href="#" size={44} />
          </div>
        </div>

        <div className="footer__col">
          <h4>Content</h4>
          <ul>
            <li><a href={LINKS.linkedinNewsletter} target="_blank" rel="noreferrer">LinkedIn Newsletter</a></li>
            <li><a href={LINKS.spotifyShow} target="_blank" rel="noreferrer">Spotify Podcast</a></li>
            <li><a href={LINKS.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Work</h4>
          <ul>
            <li><a href="#book">The Book</a></li>
            <li><a href="#speaking">Reflect Workshop</a></li>
            <li><a href={LINKS.originbi} target="_blank" rel="noreferrer">OriginBI</a></li>
            <li><a href="#speaking">Speaking</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <ul>
            <li><a href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp Community</a></li>
            <li><a href="#contact">Book a Session</a></li>
            <li><a href={LINKS.email}>Email Me</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Bharathiraja Thangappalam · the100croreleader.com</p>
        <p>Built for founders scaling from breakeven to ₹100 crore.</p>
      </div>
    </footer>
  );
}
