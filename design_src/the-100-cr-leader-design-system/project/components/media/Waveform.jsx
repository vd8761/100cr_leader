import React from 'react';

/* Deterministic pseudo-random so the waveform is stable across renders. */
function bars(count, seedStr) {
  let s = 0;
  for (let i = 0; i < seedStr.length; i++) s = (s * 31 + seedStr.charCodeAt(i)) >>> 0;
  const out = [];
  for (let i = 0; i < count; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    out.push(s / 0x7fffffff);
  }
  return out;
}

/**
 * Waveform - the brand's signature audio motif.
 *  variant="hero":  sparse, tall rounded capsules (decorative backdrop)
 *  variant="track": dense thin bars with a played/unplayed split
 */
export function Waveform({
  variant = 'track', progress = 0.45, seed = '100cr', playing = false,
  color, playedColor, count, height = 56, style,
}) {
  const hero = variant === 'hero';
  const n = count || (hero ? 18 : 96);
  const vals = bars(n, seed);
  const played = hero ? -1 : progress * n;
  const fg = color || (hero ? 'var(--white)' : 'var(--rule-light)');
  const fgPlayed = playedColor || 'var(--forest)';

  return (
    <div
      role="img" aria-label="audio waveform"
      style={{
        display: 'flex', alignItems: 'center',
        gap: hero ? 18 : 2, height, width: '100%',
        opacity: hero ? 0.9 : 1, ...style,
      }}
    >
      {vals.map((v, i) => {
        const h = hero
          ? 22 + v * 78                      // % of height, chunky
          : 12 + Math.pow(v, 0.7) * 88;      // % of height, lively
        const isPlayed = !hero && i < played;
        return (
          <span
            key={i}
            style={{
              flex: hero ? '0 0 auto' : 1,
              width: hero ? 26 : undefined,
              height: `${h}%`,
              minWidth: hero ? 26 : 1,
              borderRadius: hero ? 13 : 1,
              background: isPlayed ? fgPlayed : fg,
              transition: 'height var(--dur) var(--ease), background var(--dur) var(--ease)',
            }}
          />
        );
      })}
    </div>
  );
}
