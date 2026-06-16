import React from 'react';
import { Button } from '../components/Button.jsx';
import { NEWSLETTER_PROMISES, LINKS } from '../data/site.js';

/* Where the subscribe form POSTs. Defaults to a same-origin serverless
   function (see /api/subscribe.js) but can be pointed anywhere via
   VITE_SUBSCRIBE_ENDPOINT at build time. */
const ENDPOINT = import.meta.env.VITE_SUBSCRIBE_ENDPOINT || '/api/subscribe';

/* Newsletter - "One idea. Every Sunday." */
export function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | loading | ok | error
  const [message, setMessage] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(await res.text().catch(() => 'failed'));
      setStatus('ok');
      setMessage("You're in. Check your inbox to confirm.");
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong - please try again or use LinkedIn below.');
    }
  };

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
          <form className="news__form" onSubmit={submit}>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
            />
            <Button variant="onDark" type="submit">
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </Button>
          </form>
          {message && (
            <p className="news__status" role="status" data-state={status}>{message}</p>
          )}
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
