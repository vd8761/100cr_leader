import React from 'react';

/**
 * NavBar - minimal centered podcast nav (Home / Podcast / Connect).
 * Sits on the forest hero; active item is sand, others muted.
 */
export function NavBar({
  items = ['Home', 'Podcast', 'Connect'], active = 'Home',
  tone = 'dark', onSelect, style,
}) {
  const onDark = tone === 'dark';
  const idle = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  const on = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 'var(--space-12)', padding: 'var(--space-8) var(--page-gutter)', ...style,
    }}>
      {items.map((it) => {
        const isActive = it === active;
        return (
          <a
            key={it} href={`#${it.toLowerCase()}`}
            onClick={(e) => { if (onSelect) { e.preventDefault(); onSelect(it); } }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
              fontWeight: 'var(--fw-light)', letterSpacing: 'var(--ls-tight)',
              color: isActive ? on : idle, textDecoration: 'none',
              transition: 'color var(--dur) var(--ease)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = on; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? on : idle; }}
          >
            {it}
          </a>
        );
      })}
    </nav>
  );
}
