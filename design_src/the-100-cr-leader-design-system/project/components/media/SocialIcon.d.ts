import * as React from 'react';

export interface SocialIconProps {
  /** Social platform glyph. Default 'linkedin'. */
  platform?: 'linkedin' | 'facebook' | 'x' | 'instagram' | 'whatsapp';
  href?: string;
  /** Diameter in px. Default 52. */
  size?: number;
  /** Surface tone. Default 'dark' (forest section). */
  tone?: 'dark' | 'light';
  style?: React.CSSProperties;
}

/** Circular, outlined social link that fills on hover. */
export function SocialIcon(props: SocialIconProps): JSX.Element;
