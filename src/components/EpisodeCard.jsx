import { Badge } from './Badge.jsx';
import { AudioPlayer } from './AudioPlayer.jsx';
import { PlatformIcon } from './PlatformIcon.jsx';

const PLATFORMS = ['spotify', 'youtube', 'google', 'jiosaavn'];

/* EpisodeCard - the featured-episode row: title + EP badge, a clamped
   teaser with "Read more", the inline AudioPlayer, duration • date,
   and the platform icon row. Layout is class-driven for responsiveness. */
export function EpisodeCard({
  episode = 1, title = 'Episode title', teaser = '', duration = '09:45min',
  date = '12-06-2026', current = '04:24', total = '09:45', progress = 0.45,
  defaultPlaying = false, seed,
}) {
  return (
    <article className="episode-card">
      <div className="episode-card__main">
        <h3 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h4)',
          fontWeight: 'var(--fw-regular)', color: 'var(--text-on-light)',
          letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)', margin: 0,
        }}>{title}</h3>

        {teaser && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
            fontWeight: 'var(--fw-light)', color: 'var(--text-on-light-muted)',
            lineHeight: 'var(--lh-body)', margin: 0,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {teaser}{' '}
            <a href="#" data-cursor="hover" style={{ color: 'var(--text-on-light)', fontWeight: 'var(--fw-semibold)', textDecoration: 'none' }}>Read more</a>
          </p>
        )}

        <AudioPlayer seed={seed || `ep${episode}`} current={current} total={total} progress={progress} defaultPlaying={defaultPlaying} style={{ marginTop: 'var(--space-2)' }} />
      </div>

      <div className="episode-card__rail">
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
