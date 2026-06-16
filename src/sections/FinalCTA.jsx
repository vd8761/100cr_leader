import { Button } from '../components/Button.jsx';
import { LINKS, BOOKING_PREFILL_EVENT, BOOK_ACCESS_TOPIC } from '../data/site.js';

/* Closing call-to-action band. */
export function FinalCTA({ onNavigate }) {
  /* "Pre-order the Book" isn't a store checkout - it routes to the booking
     form and presets the "What for?" dropdown to Book Early Access, so the
     request lands pre-tagged. The form listens for BOOKING_PREFILL_EVENT. */
  const preorder = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('contact');
    window.dispatchEvent(new CustomEvent(BOOKING_PREFILL_EVENT, { detail: { topic: BOOK_ACCESS_TOPIC } }));
  };

  return (
    <section className="cta-band section section--pad">
      <div className="section__inner cta-band__inner">
        <h2 data-lines>You already know what needs to <span className="em">change.</span></h2>
        <p>Read the newsletter. Listen to the podcast. Pre-order the book. Pick what fits where you are right now.</p>
        <div className="cta-band__row">
          <Button variant="onDark" icon="arrow-right" href={LINKS.linkedinNewsletter} target="_blank" rel="noreferrer">Join the Newsletter</Button>
          <Button variant="outline" href="#contact" onClick={preorder}>Pre-order the Book</Button>
          <Button variant="outline" href={LINKS.whatsapp} target="_blank" rel="noreferrer">Join WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
