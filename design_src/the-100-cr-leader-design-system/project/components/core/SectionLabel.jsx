import React from 'react';
import { Icon } from '../foundation/Icon.jsx';

/**
 * Section label - small Nohemi-light caption, optionally led by a mic
 * glyph ("Featured Episodes"), with a hairline rule beneath.
 */
export function SectionLabel({ children, icon = 'mic', tone = 'light', rule = false, style }) {
  const color = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        {icon && <Icon name={icon} size={22} color={color} />}
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)',
          fontWeight: 'var(--fw-light)', color, letterSpacing: 'var(--ls-tight)',
        }}>{children}</span>
      </span>
      {rule && <span style={{ height: 1, width: '100%', background: tone === 'dark' ? 'var(--rule-dark)' : 'var(--rule-light)' }} />}
    </div>
  );
}
