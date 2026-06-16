import { Icon } from './Icon.jsx';

const BRAND = {
  spotify: { bg: 'var(--spotify)', fg: '#fff', glyph: 'spotify' },
  youtube: { bg: 'var(--youtube)', fg: '#fff', glyph: 'youtube' },
  jiosaavn: { bg: 'var(--jiosaavn)', fg: '#fff', glyph: 'jiosaavn' },
  google: { bg: '#fff', fg: null, glyph: 'google-podcasts' },
};

/* Circular brand badge for a listening platform. */
export function PlatformIcon({ platform = 'spotify', size = 48, ring = false, style }) {
  /* JioSaavn ships a finished circular app icon (teal disc + logo), so we
     render the real artwork rather than a hand-drawn glyph on a flat fill. */
  if (platform === 'jiosaavn') {
    return (
      <img
        src="/assets/icons/jiosaavn.png"
        alt=""
        width={size}
        height={size}
        style={{
          display: 'block', width: size, height: size, borderRadius: '50%',
          objectFit: 'cover', flexShrink: 0,
          boxShadow: ring ? '0 0 0 1px var(--rule-light)' : 'none',
          ...style,
        }}
      />
    );
  }
  const b = BRAND[platform] || BRAND.spotify;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: '50%',
        background: b.bg, flexShrink: 0,
        boxShadow: ring ? '0 0 0 1px var(--rule-light)' : 'none',
        ...style,
      }}
    >
      <Icon name={b.glyph} size={Math.round(size * 0.52)} color={b.fg || undefined} />
    </span>
  );
}
