import { Button } from '../components/Button.jsx';
import { NEWSLETTER_PROMISES, LINKS } from '../data/site.js';

/* Newsletter - "One idea. Every Sunday." */
export function Newsletter() {
  return (
    <section id="newsletter" className="news section section--pad on-dark" data-chapter="newsletter">
      <div className="section__inner news__grid">
        <div>
          <span className="kicker kicker--dark">03 - Every Sunday</span>
          <h2 className="lead-h" data-lines>One idea. Every Sunday. <span className="em">Worth the read.</span></h2>
          <p className="lead-p">
            No recycled wisdom. No corporate jargon. Every edition is one clear idea - tested on real
            businesses - that you can act on this week.
          </p>
          <ul className="news__promise" data-stagger>
            {NEWSLETTER_PROMISES.map((p) => (
              <li key={p}><span className="news__check">✓</span><span>{p}</span></li>
            ))}
          </ul>
        </div>

        <div className="news__card" data-scale-in>
          <h3>Join the movement.</h3>
          <p>Subscribe free on LinkedIn - or join the WhatsApp community for daily conversations.</p>
          <form className="news__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" aria-label="Email address" />
            <Button variant="onDark" type="submit">Subscribe</Button>
          </form>
          <div className="news__alt">
            <a href={LINKS.linkedinNewsletter} target="_blank" rel="noreferrer">Join Free on LinkedIn →</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp Community →</a>
          </div>
          <p className="news__proof">Founders already inside. Join them.</p>
        </div>
      </div>
    </section>
  );
}
