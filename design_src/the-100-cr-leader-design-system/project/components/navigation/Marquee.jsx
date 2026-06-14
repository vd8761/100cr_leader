import React from 'react';
import { Icon } from '../foundation/Icon.jsx';

/**
 * Marquee - the scrolling host-name strip ("Bharathiraja Thangapplalam"
 * separated by mic glyphs) that sits just under the hero headline.
 */
export function Marquee({
  text = 'Bharathiraja Thangapplalam', icon = 'mic', tone = 'dark',
  speed = 30, style,
}) {
  const onDark = tone === 'dark';
  const color = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const item = (k) => (
    <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', paddingRight: 'var(--space-8)' }}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-light)', color, letterSpacing: 'var(--ls-tight)', whiteSpace: 'nowrap',
      }}>{text}</span>
      {icon && <Icon name={icon} size={22} color={color} />}
    </span>
  );
  const run = Array.from({ length: 8 }).map((_, i) => item(i));
  return (
    <div style={{
      overflow: 'hidden', width: '100%',
      borderTop: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      borderBottom: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      padding: 'var(--space-4) 0', ...style,
    }}>
      <div style={{
        display: 'inline-flex', whiteSpace: 'nowrap',
        animation: `cr-marquee ${speed}s linear infinite`,
        willChange: 'transform',
      }}>
        {run}{run}
      </div>
      <style>{`@keyframes cr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
