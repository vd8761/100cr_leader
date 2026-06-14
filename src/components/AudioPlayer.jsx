import React from 'react';
import { Icon } from './Icon.jsx';
import { Waveform } from './Waveform.jsx';

function toSeconds(mmss) {
  const [m, s] = String(mmss).split(':').map(Number);
  return (m || 0) * 60 + (s || 0);
}
function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* Inline audio player: circular play/pause control, waveform scrubber,
   and a current/total timecode. Visual playback simulation (no real
   audio stream) - progress advances while "playing". */
export function AudioPlayer({
  seed = '100cr', current = '04:24', total = '09:45',
  progress = 0.45, defaultPlaying = false, style,
}) {
  const totalSec = React.useMemo(() => toSeconds(total) || 1, [total]);
  const [playing, setPlaying] = React.useState(defaultPlaying);
  const [pos, setPos] = React.useState(progress);

  React.useEffect(() => {
    if (!playing) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const id = setInterval(() => {
      setPos((p) => {
        const next = p + 1 / totalSec;
        if (next >= 1) {
          setPlaying(false);
          return 1;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [playing, totalSec]);

  const filled = playing;
  const curLabel = fmt(pos * totalSec);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', width: '100%', ...style }}>
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause' : 'Play'}
        data-cursor="hover"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
          cursor: 'pointer',
          border: filled ? 'none' : '1.5px solid var(--forest)',
          background: filled ? 'var(--forest)' : 'transparent',
          color: filled ? 'var(--paper)' : 'var(--forest)',
          transition: 'all var(--dur) var(--ease)',
        }}
      >
        <Icon name={playing ? 'pause' : 'play'} size={20} />
      </button>

      <div
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
        }}
        style={{ flex: 1, cursor: 'pointer', minWidth: 0 }}
      >
        <Waveform variant="track" seed={seed} progress={pos} playing={playing} height={48} />
      </div>

      <span style={{
        fontFamily: 'var(--font-label)', fontSize: 'var(--fs-caption)',
        color: 'var(--text-on-light-muted)', whiteSpace: 'nowrap', flexShrink: 0,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {curLabel} / {total}
      </span>
    </div>
  );
}
