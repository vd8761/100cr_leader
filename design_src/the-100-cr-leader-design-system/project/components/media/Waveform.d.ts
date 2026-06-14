import * as React from 'react';

export interface WaveformProps {
  /** 'hero' = chunky decorative capsules; 'track' = dense audio bars. Default 'track'. */
  variant?: 'hero' | 'track';
  /** 0–1 playback position (track variant only). Default 0.45. */
  progress?: number;
  /** Seed string - same seed → same bar pattern. Default '100cr'. */
  seed?: string;
  playing?: boolean;
  /** Bar count override. */
  count?: number;
  /** Unplayed / base bar color. */
  color?: string;
  /** Played bar color (track variant). */
  playedColor?: string;
  /** Pixel height of the waveform row. Default 56. */
  height?: number;
  style?: React.CSSProperties;
}

/** The brand's signature audio waveform motif. */
export function Waveform(props: WaveformProps): JSX.Element;
