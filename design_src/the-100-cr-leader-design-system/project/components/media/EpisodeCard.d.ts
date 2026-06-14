import * as React from 'react';

export interface EpisodeCardProps {
  /** Episode number for the EP badge. Default 1. */
  episode?: number;
  title?: string;
  /** Teaser paragraph (clamped to 2 lines with "Read more"). */
  teaser?: string;
  /** e.g. '09:45min'. */
  duration?: string;
  /** e.g. '12-06-2026'. */
  date?: string;
  current?: string;
  total?: string;
  progress?: number;
  defaultPlaying?: boolean;
  /** Waveform seed; defaults to `ep{episode}`. */
  seed?: string;
  style?: React.CSSProperties;
}

/**
 * The featured-episode row: title, EP badge, teaser, inline player,
 * duration • date, and the platform icon row.
 * @startingPoint section="Episodes" subtitle="Featured podcast episode row with inline player" viewport="1100x300"
 */
export function EpisodeCard(props: EpisodeCardProps): JSX.Element;
