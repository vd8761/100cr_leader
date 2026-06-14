import * as React from 'react';

export type Platform = 'spotify' | 'youtube' | 'jiosaavn' | 'google';

export interface PlatformIconProps {
  /** Listening platform. Default 'spotify'. */
  platform?: Platform;
  /** Diameter in px. Default 48. */
  size?: number;
  /** Add a hairline ring (useful for the white Google badge on light). */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Circular brand badge (Spotify / YouTube / Google Podcasts / JioSaavn). */
export function PlatformIcon(props: PlatformIconProps): JSX.Element;
