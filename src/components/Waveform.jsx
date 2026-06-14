import React from 'react';

/* Deterministic pseudo-random pool so bar heights are stable across
   renders (and stable as the bar COUNT changes on resize - we always
   slice from the front of the same pool). */
function makePool(seedStr, n) {
  let s = 0;
  for (let i = 0; i < seedStr.length; i++) s = (s * 31 + seedStr.charCodeAt(i)) >>> 0;
  const out = [];
  for (let i = 0; i < n; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    out.push(s / 0x7fffffff);
  }
  return out;
}

const POOL_MAX = 320;

/* Waveform - the brand's signature audio motif.
   variant="hero":  sparse, tall rounded capsules (decorative backdrop)
   variant="track": dense thin bars with a played/unplayed split.

   Track bars have a FIXED width; the number of bars is derived from the
   measured container width so they stay crisp at every screen size. */
export function Waveform({
  variant = 'track', progress = 0.45, seed = '100cr', playing = false,
  color, playedColor, count, height = 56, barWidth = 3, barGap = 3, style, className,
}) {
  const hero = variant === 'hero';
  const containerRef = React.useRef(null);
  const [trackCount, setTrackCount] = React.useState(64);

  const pool = React.useMemo(
    () => makePool(seed, hero ? (count || 18) : POOL_MAX),
    [seed, hero, count]
  );

  // Measure the container and fit as many fixed-width bars as possible.
  React.useEffect(() => {
    if (hero) return undefined;
    const el = containerRef.current;
    if (!el) return undefined;
    const compute = () => {
      const w = el.clientWidth;
      if (!w) return;
      const n = Math.max(8, Math.min(POOL_MAX, Math.floor((w + barGap) / (barWidth + barGap))));
      setTrackCount(n);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [hero, barWidth, barGap]);

  const n = hero ? (count || 18) : trackCount;
  const vals = hero ? pool : pool.slice(0, n);
  const played = hero ? -1 : progress * n;
  const fg = color || (hero ? 'var(--white)' : 'var(--rule-light)');
  const fgPlayed = playedColor || 'var(--forest)';

  return (
    <div
      ref={containerRef}
      role="img" aria-label="audio waveform"
      className={className}
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: hero ? 'flex-start' : 'space-between',
        gap: hero ? 18 : barGap, height, width: '100%',
        opacity: hero ? 0.9 : 1, ...style,
      }}
    >
      {vals.map((v, i) => {
        const h = hero
          ? 22 + v * 78
          : 12 + Math.pow(v, 0.7) * 88;
        const isPlayed = !hero && i < played;
        const live = playing && !hero;
        return (
          <span
            key={i}
            className={live ? 'cr-wave-bar is-live' : 'cr-wave-bar'}
            style={{
              flex: '0 0 auto',
              width: hero ? 26 : barWidth,
              minWidth: hero ? 26 : barWidth,
              height: `${h}%`,
              borderRadius: hero ? 13 : 1,
              background: isPlayed ? fgPlayed : fg,
              transition: 'height var(--dur) var(--ease), background var(--dur) var(--ease)',
              animationDelay: live ? `${(i % 12) * 60}ms` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
