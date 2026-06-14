import React from 'react';
import { Icon } from '../foundation/Icon.jsx';
import { Waveform } from './Waveform.jsx';

/**
 * Inline audio player: circular play/pause control, waveform scrubber,
 * and a current/total timecode. Visual + light interaction (no real audio).
 */
export function AudioPlayer({
  seed = '100cr', current = '04:24', total = '09:45',
  progress = 0.45, defaultPlaying = false, style,
}) {
  const [playing, setPlaying] = React.useState(defaultPlaying);
  const [pos, setPos] = React.useState(progress);
  const filled = playing;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', width: '100%', ...style }}>
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause' : 'Play'}
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
        style={{ flex: 1, cursor: 'pointer' }}
      >
        <Waveform variant="track" seed={seed} progress={pos} playing={playing} height={48} />
      </div>

      <span style={{
        fontFamily: 'var(--font-label)', fontSize: 'var(--fs-caption)',
        color: 'var(--text-on-light-muted)', whiteSpace: 'nowrap', flexShrink: 0,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {current} / {total}
      </span>
    </div>
  );
}
