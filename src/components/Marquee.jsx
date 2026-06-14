import { Icon } from './Icon.jsx';

/* Marquee - the scrolling strip under the hero. Accepts a single `text`
   or an array of `items` (brand ticker phrases), each separated by a mic
   glyph. The inner track carries [data-marquee-track] so the GSAP layer
   can skew it by scroll velocity. */
export function Marquee({
  text = 'Bharathiraja Thangappalam', items, icon = 'mic', tone = 'dark',
  speed = 30, reps = 3, style,
}) {
  const onDark = tone === 'dark';
  const color = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const phrases = items && items.length ? items : [text];

  const item = (key, phrase) => (
    <span key={key} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)', paddingRight: 'var(--space-8)' }}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-light)', color, letterSpacing: 'var(--ls-tight)', whiteSpace: 'nowrap',
      }}>{phrase}</span>
      {icon && <Icon name={icon} size={22} color={color} />}
    </span>
  );

  const run = [];
  for (let r = 0; r < reps; r++) phrases.forEach((p, i) => run.push(item(`${r}-${i}`, p)));

  return (
    <div style={{
      overflow: 'hidden', width: '100%',
      borderTop: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      borderBottom: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      padding: 'var(--space-4) 0', ...style,
    }}>
      <div
        data-marquee-track
        style={{
          display: 'inline-flex', whiteSpace: 'nowrap',
          animation: `cr-marquee ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {run}{run}
      </div>
    </div>
  );
}
