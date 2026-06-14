import * as React from 'react';

export interface AudioPlayerProps {
  /** Waveform seed (unique per episode). Default '100cr'. */
  seed?: string;
  /** Current timecode label. Default '04:24'. */
  current?: string;
  /** Total duration label. Default '09:45'. */
  total?: string;
  /** Initial scrubber position 0–1. Default 0.45. */
  progress?: number;
  /** Start in playing state. Default false. */
  defaultPlaying?: boolean;
  style?: React.CSSProperties;
}

/** Inline play/pause + waveform scrubber + timecode (visual, no real audio). */
export function AudioPlayer(props: AudioPlayerProps): JSX.Element;
