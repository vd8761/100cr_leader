import * as React from 'react';

export type IconName =
  | 'spotify' | 'youtube' | 'google-podcasts' | 'jiosaavn' | 'whatsapp'
  | 'facebook' | 'linkedin' | 'x' | 'instagram'
  | 'mic' | 'play' | 'pause' | 'arrow-right';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size (width = height). Default 24. */
  size?: number;
  /** Color for mono marks (ignored by multicolor google-podcasts). Defaults to currentColor. */
  color?: string;
}

/** Inline brand + UI glyph. Portable: no external asset paths. */
export function Icon(props: IconProps): JSX.Element;
