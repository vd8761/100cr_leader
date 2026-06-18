import React from 'react';
import { Button } from '../components/Button.jsx';
import { SPEAKING_TOPICS, SPEAKING_AUDIENCES, SPEAKING_TYPES, BOOKING_PREFILL_EVENT } from '../data/site.js';

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

/* Cloudflare Turnstile - guards this booking form (the newsletter has none).
   When the site key isn't configured the widget is skipped and the form works
   as before, so local `vite dev` without keys is unaffected. */
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';
const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let turnstileLoader = null;
function loadTurnstile() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileLoader) {
    turnstileLoader = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = TURNSTILE_SRC;
      s.async = true;
      s.defer = true;
      s.onload = () => resolve(window.turnstile);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return turnstileLoader;
}

/* Speaking & workshops + booking form. */
export function Speaking() {
  const [form, setForm] = React.useState({
    name: '', organisation: '', email: '', topic: SPEAKING_TYPES[0], message: '',
  });
  const [status, setStatus] = React.useState('idle'); // idle | loading | ok | error
  const [message, setMessage] = React.useState('');
  const [token, setToken] = React.useState('');
  const captchaRef = React.useRef(null);
  const widgetId = React.useRef(null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  /* Render the Turnstile widget once the script is ready (explicit mode). */
  React.useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !ts || !captchaRef.current || widgetId.current !== null) return;
        widgetId.current = ts.render(captchaRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (t) => setToken(t),
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        });
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const resetCaptcha = () => {
    setToken('');
    if (window.turnstile && widgetId.current !== null) {
      try { window.turnstile.reset(widgetId.current); } catch { /* noop */ }
    }
  };

  /* Let other sections (e.g. "Pre-order the Book") preset the "What for?"
     dropdown when they route the visitor here. */
  React.useEffect(() => {
    const onPrefill = (e) => {
      const topic = e.detail?.topic;
      if (topic && SPEAKING_TYPES.includes(topic)) setForm((f) => ({ ...f, topic }));
    };
    window.addEventListener(BOOKING_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(BOOKING_PREFILL_EVENT, onPrefill);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      setMessage('Please add your name and email.');
      return;
    }
    if (TURNSTILE_SITE_KEY && !token) {
      setStatus('error');
      setMessage('Please complete the verification below.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      });
      if (!res.ok) throw new Error(await res.text().catch(() => 'failed'));
      setStatus('ok');
      setMessage("Request sent. Check your inbox for a copy - we'll reply within 48 hours.");
      setForm({ name: '', organisation: '', email: '', topic: SPEAKING_TYPES[0], message: '' });
      resetCaptcha();
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again, or email info@touchmarkdes.com.');
      resetCaptcha(); // Turnstile tokens are single-use - get a fresh one for the retry.
    }
  };

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
          <form onSubmit={submit}>
            <div className="field">
              <label htmlFor="bk-name">Your Name</label>
              <input id="bk-name" type="text" placeholder="Full name" value={form.name} onChange={set('name')} required />
            </div>
            <div className="field">
              <label htmlFor="bk-org">Organisation</label>
              <input id="bk-org" type="text" placeholder="Company / College" value={form.organisation} onChange={set('organisation')} />
            </div>
            <div className="field">
              <label htmlFor="bk-email">Email</label>
              <input id="bk-email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} required />
            </div>
            <div className="field">
              <label htmlFor="bk-topic">What for?</label>
              <select id="bk-topic" value={form.topic} onChange={set('topic')}>
                {SPEAKING_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="bk-msg">Tell me more</label>
              <textarea id="bk-msg" placeholder="Event details, audience, date..." value={form.message} onChange={set('message')} />
            </div>
            {TURNSTILE_SITE_KEY && <div className="booking__captcha" ref={captchaRef} />}
            <Button variant="solid" type="submit" icon="arrow-right" className="booking__submit">
              {status === 'loading' ? 'Sending…' : 'Send Request'}
            </Button>
          </form>
          {message && (
            <p className="booking__status" role="status" data-state={status}>{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
