import * as React from 'react';
import type { IconName } from '../foundation/Icon';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. Default 'solid'. */
  variant?: 'solid' | 'onDark' | 'outline' | 'ghost';
  /** Renders as <a> when set, otherwise <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Optional leading/trailing icon glyph name. */
  icon?: IconName;
  /** Place icon on the right (default true). */
  iconRight?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/** Quiet, editorial pill CTA in forest / sand tones. */
export function Button(props: ButtonProps): JSX.Element;
