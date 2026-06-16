/*
 * Branded transactional emails for The 100 CR Leader, sent via Resend.
 * Email clients are picky, so every template is table-based with fully
 * inline styles and web-safe fonts (no external CSS, no web fonts).
 *
 * Addresses (override via env if they ever change):
 *   FROM   noreply@the100croreleader.com - verified sender for all mail
 *   ADMIN  info@touchmarkdes.com        - where booking requests land
 *   REPLY  info@touchmarkdes.com        - reply-to on the user's copies
 */

const RESEND_API = 'https://api.resend.com';

export const FROM = process.env.RESEND_FROM || 'The 100 CR Leader <noreply@the100croreleader.com>';
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@touchmarkdes.com';
export const REPLY_TO = process.env.REPLY_TO || 'info@touchmarkdes.com';

const C = {
  forest900: '#1D271C',
  forest800: '#232E22',
  forest: '#2C362B',
  paper: '#F2F1E7',
  cream: '#FFFEF1',
  gold: '#FBBC04',
  sand: '#D6D3B2',
  textDark: '#2C362B',
  textMuted: '#5B6459',
  rule: 'rgba(44,54,43,0.12)',
};

const SITE_LINKS = {
  linkedin: 'https://www.linkedin.com/newsletters/the-100-crore-leader-7277973005513711616/',
  spotify: 'https://open.spotify.com/show/69llhW3MIL0jcAhifH8cAE',
  whatsapp: 'https://chat.whatsapp.com/IIsHlWiCOee3eubtKP3U4r',
};

export function escapeHtml(s = '') {
  return String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

const firstName = (name = '') => (name.trim().split(/\s+/)[0] || 'there');

/* Branded shell shared by every email. */
function layout({ title, preheader = '', bodyHtml }) {
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${C.forest900};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.forest900};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.paper};border-radius:16px;overflow:hidden;">
  <tr><td style="background:${C.forest800};padding:28px 36px;">
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;color:${C.sand};text-transform:uppercase;">Scaling beyond survival - to ₹100 crore</div>
    <div style="font-family:'Arial Black','Arial Bold',Arial,Helvetica,sans-serif;font-weight:800;font-size:30px;letter-spacing:2px;color:${C.cream};margin-top:10px;">THE 100&nbsp;<span style="color:${C.gold};">CR</span>&nbsp;LEADER</div>
  </td></tr>
  <tr><td style="height:4px;line-height:4px;font-size:0;background:${C.gold};">&nbsp;</td></tr>
  <tr><td style="padding:36px;font-family:Arial,Helvetica,sans-serif;color:${C.textDark};">
    ${bodyHtml}
  </td></tr>
  <tr><td style="background:${C.forest800};padding:24px 36px;font-family:Arial,Helvetica,sans-serif;">
    <div style="font-size:13px;color:${C.sand};">
      <a href="${SITE_LINKS.linkedin}" style="color:${C.gold};text-decoration:none;">Newsletter</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE_LINKS.spotify}" style="color:${C.gold};text-decoration:none;">Podcast</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE_LINKS.whatsapp}" style="color:${C.gold};text-decoration:none;">WhatsApp Community</a>
    </div>
    <div style="font-size:11px;line-height:1.6;color:rgba(214,211,178,0.6);margin-top:14px;">
      Bharathiraja Thangapplalam · CEO, Touchmark Descience<br>
      © 2026 The 100 CR Leader
    </div>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function heading(text) {
  return `<h1 style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:23px;line-height:1.25;color:${C.forest};">${text}</h1>`;
}
function lead(text) {
  return `<p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:${C.textMuted};">${text}</p>`;
}
function detailRow(label, value) {
  const v = value ? escapeHtml(value) : '-';
  return `<tr>
    <td style="padding:11px 0;border-bottom:1px solid ${C.rule};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${C.textMuted};width:130px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:11px 0;border-bottom:1px solid ${C.rule};font-size:15px;line-height:1.5;color:${C.textDark};">${v}</td>
  </tr>`;
}
function messageBlock(message) {
  const v = message ? escapeHtml(message).replace(/\n/g, '<br>') : '-';
  return `<div style="margin-top:24px;">
    <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${C.textMuted};margin-bottom:8px;">Message</div>
    <div style="font-size:15px;line-height:1.6;color:${C.textDark};background:${C.cream};border:1px solid ${C.rule};border-radius:10px;padding:16px 18px;">${v}</div>
  </div>`;
}
function goldButton(href, label) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 4px;"><tr>
    <td style="background:${C.gold};border-radius:999px;">
      <a href="${href}" style="display:inline-block;padding:13px 30px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:${C.forest900};text-decoration:none;">${label}</a>
    </td></tr></table>`;
}

/* ---- 1. Admin notification (to info@touchmarkdes.com) ---- */
export function bookingAdminEmail(d) {
  const body =
    heading('New booking request') +
    lead("Someone reached out through the website. Hit reply to respond to them directly.") +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow('Name', d.name)}
      ${detailRow('Organisation', d.organisation)}
      ${detailRow('Email', d.email)}
      ${detailRow('What for', d.topic)}
    </table>` +
    messageBlock(d.message);
  return {
    subject: `New request - ${d.topic || 'Booking'} · ${d.name || 'Website'}`,
    html: layout({ title: 'New booking request', preheader: `${d.name} - ${d.topic}`, bodyHtml: body }),
  };
}

/* ---- 2. User's copy of their request (from noreply@, reply-to info@) ---- */
export function bookingUserEmail(d) {
  const body =
    heading(`Thanks, ${escapeHtml(firstName(d.name))} - we've got your request.`) +
    lead("It's landed with Bharathiraja's team and you'll hear back within 48 hours. Here's a copy of what you sent for your records:") +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailRow('What for', d.topic)}
      ${detailRow('Organisation', d.organisation)}
    </table>` +
    messageBlock(d.message) +
    `<p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:${C.textMuted};">Need to add something? Just reply to this email and it'll reach the team.</p>`;
  return {
    subject: "We've got your request - The 100 CR Leader",
    html: layout({ title: "We've got your request", preheader: "Thanks - we'll respond within 48 hours.", bodyHtml: body }),
  };
}

/* ---- 3. Newsletter welcome (from noreply@, reply-to info@) ---- */
export function subscribeUserEmail() {
  const body =
    heading("You're in. Welcome to The 100 CR Leader.") +
    lead("Every Sunday you'll get one clear idea - tested on real businesses - that you can act on that week. No recycled wisdom, no jargon.") +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
      <p style="margin:0 0 6px;font-size:15px;line-height:1.65;color:${C.textDark};">While you wait for Sunday:</p>
      <ul style="margin:0;padding-left:20px;font-size:15px;line-height:1.8;color:${C.textDark};">
        <li>Listen to the podcast on <a href="${SITE_LINKS.spotify}" style="color:${C.forest};font-weight:bold;">Spotify</a></li>
        <li>Join daily conversations in the <a href="${SITE_LINKS.whatsapp}" style="color:${C.forest};font-weight:bold;">WhatsApp community</a></li>
      </ul>
    </td></tr></table>` +
    goldButton(SITE_LINKS.whatsapp, 'Join the WhatsApp Community') +
    `<p style="margin:22px 0 0;font-size:13px;line-height:1.6;color:${C.textMuted};">You're receiving this because you subscribed at the100croreleader.com. Reply anytime - a real person reads it.</p>`;
  return {
    subject: "You're in - The 100 CR Leader",
    html: layout({ title: "Welcome to The 100 CR Leader", preheader: "One idea, every Sunday. Here's where to start.", bodyHtml: body }),
  };
}

/* ---- Resend helpers ---- */
export async function sendEmail({ to, subject, html, replyTo }) {
  const res = await fetch(`${RESEND_API}/emails`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to, subject, html, reply_to: replyTo }),
  });
  if (!res.ok) {
    throw new Error(`Resend send ${res.status}: ${await res.text().catch(() => '')}`);
  }
  return res.json();
}

/* Add a subscriber to the Resend audience. No-op if not configured. */
export async function addContact(email) {
  const id = process.env.RESEND_AUDIENCE_ID;
  if (!id) return;
  const res = await fetch(`${RESEND_API}/audiences/${id}/contacts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  // 422 = already a contact; fine.
  if (!res.ok && res.status !== 422) {
    console.error('Resend addContact', res.status, await res.text().catch(() => ''));
  }
}

export const isEmail = (e = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
