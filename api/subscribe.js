/*
 * POST /api/subscribe   { email: string }
 *
 * Newsletter signup. Adds the subscriber to the Resend audience and sends a
 * branded welcome email (from noreply@the100croreleader.com, reply-to info@touchmarkdes.com).
 *
 * Required env: RESEND_API_KEY (+ verified sending domain).
 * Optional env: RESEND_AUDIENCE_ID (to store the contact), RESEND_FROM, REPLY_TO.
 */
import { sendEmail, addContact, subscribeUserEmail, REPLY_TO, isEmail } from '../lib/email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Subscribe is not configured yet.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email.' });
  }

  try {
    await addContact(email); // store in the audience (no-op if not configured)

    const welcome = subscribeUserEmail();
    await sendEmail({
      to: email,
      subject: welcome.subject,
      html: welcome.html,
      replyTo: REPLY_TO,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe failed', err);
    return res.status(502).json({ error: 'Could not complete your subscription.' });
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
