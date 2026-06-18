import React from 'react';
import { PlatformIcon } from './PlatformIcon.jsx';

const LABELS = {
  spotify: 'Spotify', youtube: 'Youtube', apple: 'Apple Podcasts', amazon: 'Amazon Music',
};

const LINKS = {
  spotify: 'https://open.spotify.com',
  youtube: 'https://youtube.com',
  apple: 'https://podcasts.apple.com',
  amazon: 'https://music.amazon.com',
};

/* "Listen now" pill: brand badge + platform name + underlined action.
   tone="dark" for use over forest, "light" over paper. */
export function PlatformPill({ platform = 'spotify', tone = 'dark', action = 'Listen now', href, style }) {
  const [hover, setHover] = React.useState(false);
  const text = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const muted = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  return (
    <a
      href={href || LINKS[platform] || '#'}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)',
        textDecoration: 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur) var(--ease)', ...style,
      }}
    >
      <PlatformIcon platform={platform} size={56} ring={platform === 'google' && tone === 'light'}
        style={{ transform: hover ? 'scale(1.06)' : 'none', transition: 'transform var(--dur) var(--ease)' }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, lineHeight: 1 }}>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-regular)', color: muted,
        }}>{LABELS[platform] || platform}</span>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-bold)', color: text, textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}>{action}</span>
      </span>
    </a>
  );
}
