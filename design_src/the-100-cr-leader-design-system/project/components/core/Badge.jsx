import React from 'react';

/**
 * Small pill label. The episode "EP 1" tag is the signature use
 * (dark forest pill, sand text). Also handy for generic tags.
 */
export function Badge({ children, tone = 'forest', style }) {
  const tones = {
    forest: { bg: 'var(--forest)', fg: 'var(--sand)' },
    sand:   { bg: 'var(--sand)',   fg: 'var(--forest)' },
    outline:{ bg: 'transparent',   fg: 'var(--forest)', border: '1px solid var(--rule-light)' },
    gold:   { bg: 'var(--gold)',   fg: 'var(--forest)' },
  };
  const t = tones[tone] || tones.forest;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '6px 16px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, border: t.border || 'none',
      fontFamily: 'var(--font-label)', fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)', letterSpacing: 'var(--ls-label)',
      lineHeight: 1, whiteSpace: 'nowrap', ...style,
    }}>
      {children}
    </span>
  );
}
