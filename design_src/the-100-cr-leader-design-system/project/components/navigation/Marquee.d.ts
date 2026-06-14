import * as React from 'react';
import type { IconName } from '../foundation/Icon';

export interface MarqueeProps {
  /** Repeated text. Default 'Bharathiraja Thangapplalam'. */
  text?: string;
  /** Separator glyph between repeats. Default 'mic'. Pass null to omit. */
  icon?: IconName | null;
  tone?: 'dark' | 'light';
  /** Seconds for one full loop (lower = faster). Default 30. */
  speed?: number;
  style?: React.CSSProperties;
}

/** Infinite scrolling host-name strip with mic separators. */
export function Marquee(props: MarqueeProps): JSX.Element;
