import * as React from 'react';
import type { IconName } from '../foundation/Icon';

export interface SectionLabelProps {
  children: React.ReactNode;
  /** Leading glyph (default 'mic'); pass null to omit. */
  icon?: IconName | null;
  tone?: 'light' | 'dark';
  /** Show a hairline rule beneath. Default false. */
  rule?: boolean;
  style?: React.CSSProperties;
}

/** Small light-weight section caption, e.g. "Featured Episodes". */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
