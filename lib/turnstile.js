/*
 * Cloudflare Turnstile - server-side token verification.
 *
 * Used by the booking form (/api/contact) only; the newsletter is intentionally
 * left without a captcha.
 *
 * Env:
 *   TURNSTILE_SECRET_KEY - the Turnstile secret (server-side only).
 * If the secret is not set we treat verification as a no-op so the form keeps
 * working before the keys are provisioned. The matching public site key lives
 * in VITE_TURNSTILE_SITE_KEY (exposed to the browser).
 */

const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/* Returns true when the request may proceed:
 *   - secret not configured        -> true  (captcha disabled / not provisioned)
 *   - token present and valid       -> true
 *   - token missing or invalid      -> false
 */
export async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // captcha not configured yet - don't block submissions

  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.append('remoteip', remoteip);

  try {
    const res = await fetch(SITEVERIFY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    const data = await res.json().catch(() => ({}));
    return data.success === true;
  } catch (err) {
    console.error('Turnstile verification failed', err);
    return false;
  }
}

/* Best-effort client IP from common proxy headers (Vercel sets x-forwarded-for). */
export function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  return req.socket?.remoteAddress || undefined;
}
