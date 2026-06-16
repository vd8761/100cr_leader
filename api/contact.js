/*
 * POST /api/contact   { name, organisation, email, topic, message }
 *
 * Booking / "Book Bharathiraja" form. Sends two emails via Resend:
 *   1. Admin notification -> info@touchmarkdes.com (reply-to = the requester)
 *   2. A copy/confirmation -> the requester      (reply-to = info@touchmarkdes.com)
 *
 * Required env: RESEND_API_KEY (+ a verified sending domain for noreply@the100croreleader.com).
 * Optional env: RESEND_FROM, ADMIN_EMAIL, REPLY_TO.
 */
import { sendEmail, bookingAdminEmail, bookingUserEmail, ADMIN_EMAIL, REPLY_TO, isEmail } from '../lib/email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email is not configured yet.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const data = {
    name: String(body.name || '').trim(),
    organisation: String(body.organisation || '').trim(),
    email: String(body.email || '').trim().toLowerCase(),
    topic: String(body.topic || '').trim(),
    message: String(body.message || '').trim(),
  };

  if (!data.name) return res.status(400).json({ error: 'Please enter your name.' });
  if (!isEmail(data.email)) return res.status(400).json({ error: 'Please enter a valid email.' });

  try {
    const admin = bookingAdminEmail(data);
    const user = bookingUserEmail(data);

    // Admin first - that's the one that must not fail silently.
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: admin.subject,
      html: admin.html,
      replyTo: data.email, // admin hits reply -> goes straight to the requester
    });

    // User confirmation copy - reply-to points back to the team.
    await sendEmail({
      to: data.email,
      subject: user.subject,
      html: user.html,
      replyTo: REPLY_TO,
    }).catch((e) => console.error('User confirmation failed', e));

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact failed', err);
    return res.status(502).json({ error: 'Could not send your request. Please try again.' });
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
