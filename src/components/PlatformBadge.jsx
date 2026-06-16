import { PlatformIcon } from './PlatformIcon.jsx';

const LABELS = {
  spotify: 'Spotify', youtube: 'YouTube', google: 'Google', jiosaavn: 'JioSaavn',
};

const LINKS = {
  spotify: 'https://open.spotify.com',
  youtube: 'https://youtube.com',
  google: 'https://podcasts.google.com',
  jiosaavn: 'https://www.jiosaavn.com',
};

/* Brand colour that lights up the disc on hover (each platform glows in
   its own colour). Falls back to sand for anything unmapped. */
const BRAND = {
  spotify: 'var(--spotify)', youtube: 'var(--youtube)',
  google: 'var(--google-blue)', jiosaavn: 'var(--jiosaavn)',
};

/* Compact "listen on" badge: a circular brand disc with the platform name
   beneath. Narrow by design, so a row of them stays a single tidy line from
   a 320px phone up - no folding/stacking. Used in the hero platform rail. */
export function PlatformBadge({ platform = 'spotify', href }) {
  return (
    <a
      className="plat-badge"
      href={href || LINKS[platform] || '#'}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      style={{ '--brand': BRAND[platform] || 'var(--sand)' }}
      aria-label={`Listen on ${LABELS[platform] || platform}`}
    >
      <span className="plat-badge__disc">
        <PlatformIcon platform={platform} size={44} ring={platform === 'google'} />
      </span>
      <span className="plat-badge__name">{LABELS[platform] || platform}</span>
    </a>
  );
}
