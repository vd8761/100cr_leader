import { Button } from '../components/Button.jsx';
import { LINKS } from '../data/site.js';

/* Closing call-to-action band. */
export function FinalCTA() {
  return (
    <section className="cta-band section section--pad">
      <div className="section__inner cta-band__inner">
        <h2 data-lines>You already know what needs to <span className="em">change.</span></h2>
        <p>Read the newsletter. Listen to the podcast. Pre-order the book. Pick what fits where you are right now.</p>
        <div className="cta-band__row">
          <Button variant="onDark" icon="arrow-right" href={LINKS.linkedinNewsletter} target="_blank" rel="noreferrer">Join the Newsletter</Button>
          <Button variant="outline" href="#book">Pre-order the Book</Button>
          <Button variant="outline" href={LINKS.whatsapp} target="_blank" rel="noreferrer">Join WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
