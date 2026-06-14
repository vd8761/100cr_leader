import React from 'react';
import { Icon } from './Icon.jsx';

/* Circular social link - outlined sand-on-transparent circles that
   fill on hover (on the forest "Circle" section). */
export function SocialIcon({ platform = 'linkedin', href = '#', size = 52, tone = 'dark', style }) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'dark';
  const base = onDark ? 'var(--sand)' : 'var(--forest)';
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={platform}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: '50%',
        border: `1px solid ${hover ? base : (onDark ? 'var(--rule-dark)' : 'var(--rule-light)')}`,
        background: hover ? base : 'transparent',
        color: hover ? (onDark ? 'var(--forest)' : 'var(--paper)') : base,
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'all var(--dur) var(--ease)',
        textDecoration: 'none', flexShrink: 0, ...style,
      }}
    >
      <Icon name={platform} size={Math.round(size * 0.4)} />
    </a>
  );
}
