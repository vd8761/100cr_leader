import { Button } from '../components/Button.jsx';
import { SPEAKING_TOPICS, SPEAKING_AUDIENCES, SPEAKING_TYPES } from '../data/site.js';

/* Speaking & workshops + booking form. */
export function Speaking() {
  return (
    <section id="speaking" className="speaking section section--pad on-dark" data-chapter="speaking">
      <div className="section__inner speaking__grid">
        <div>
          <span className="kicker kicker--dark">05 - The Room</span>
          <h2 className="lead-h" data-lines>Your audience deserves <span className="em">real frameworks.</span></h2>
          <p className="lead-p">
            Every session I run has one goal: participants leave with something they will use on
            Monday morning. Not inspiration that fades by Tuesday.
          </p>

          <ul className="topics" data-stagger>
            {SPEAKING_TOPICS.map((t) => (
              <li key={t.n}>
                <span className="topics__num">{t.n}</span>
                <span className="topics__text">{t.text}</span>
              </li>
            ))}
          </ul>

          <div className="aud-badges" data-stagger>
            {SPEAKING_AUDIENCES.map((a) => <span key={a} className="aud-badge">{a}</span>)}
          </div>
        </div>

        <div className="booking" id="contact" data-scale-in>
          <h3>Book Bharathiraja</h3>
          <p>Tell me what you need. I'll respond within 48 hours.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
            <div className="field"><label>Organisation</label><input type="text" placeholder="Company / College" /></div>
            <div className="field"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
            <div className="field">
              <label>What for?</label>
              <select>
                {SPEAKING_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field"><label>Tell me more</label><textarea placeholder="Event details, audience, date..." /></div>
            <Button variant="solid" type="submit" icon="arrow-right" className="booking__submit">Send Request</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
