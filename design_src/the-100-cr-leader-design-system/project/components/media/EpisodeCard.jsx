import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { AudioPlayer } from './AudioPlayer.jsx';
import { PlatformIcon } from './PlatformIcon.jsx';

const PLATFORMS = ['spotify', 'youtube', 'google', 'jiosaavn'];

/**
 * EpisodeCard - the featured-episode row: title + EP badge, a clamped
 * teaser with "Read more", the inline AudioPlayer, duration • date,
 * and the platform icon row.
 */
export function EpisodeCard({
  episode = 1, title = 'Episode title', teaser = '', duration = '09:45min',
  date = '12-06-2026', current = '04:24', total = '09:45', progress = 0.45,
  defaultPlaying = false, seed, style,
}) {
  return (
    <article style={{
      display: 'grid', gridTemplateColumns: '1fr 280px',
      background: 'var(--paper-2)', border: '1px solid var(--rule-light)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden', ...style,
    }}>
      {/* Left: content + player */}
      <div style={{ padding: 'var(--space-10) var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)',
            fontWeight: 'var(--fw-regular)', color: 'var(--text-on-light)',
            letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)', margin: 0,
          }}>{title}</h3>
        </div>
        {teaser && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
            fontWeight: 'var(--fw-light)', color: 'var(--text-on-light-muted)',
            lineHeight: 'var(--lh-body)', margin: 0,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {teaser} <a href="#" style={{ color: 'var(--text-on-light)', fontWeight: 'var(--fw-semibold)', textDecoration: 'none' }}>Read more</a>
          </p>
        )}
        <AudioPlayer seed={seed || `ep${episode}`} current={current} total={total} progress={progress} defaultPlaying={defaultPlaying} style={{ marginTop: 'var(--space-2)' }} />
      </div>

      {/* Right: meta rail */}
      <div style={{
        borderLeft: '1px solid var(--rule-light)',
        padding: 'var(--space-10) var(--space-10)',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
        justifyContent: 'space-between', gap: 'var(--space-8)',
      }}>
        <Badge tone="forest">EP {episode}</Badge>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--fs-caption)',
          color: 'var(--text-on-light-muted)', letterSpacing: 'var(--ls-label)', whiteSpace: 'nowrap',
        }}>{duration} &nbsp;•&nbsp; {date}</span>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          {PLATFORMS.map((p) => <PlatformIcon key={p} platform={p} size={34} ring={p === 'google'} />)}
        </div>
      </div>
    </article>
  );
}
