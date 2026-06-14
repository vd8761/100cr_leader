import * as React from 'react';

export interface DisplayHeadingProps {
  children: React.ReactNode;
  /** 'hero' (one edge-to-edge line), 'stacked' (multi-line block), 'md'. Default 'hero'. */
  size?: 'hero' | 'stacked' | 'md';
  /** Text color. Default sand. */
  color?: string;
  align?: 'left' | 'center' | 'right';
  /** Element tag. Default 'h1'. */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/**
 * The Bebas Neue showpiece headline ("THE 100 CR LEADER").
 * @startingPoint section="Type" subtitle="Giant Bebas Neue display headline" viewport="1100x320"
 */
export function DisplayHeading(props: DisplayHeadingProps): JSX.Element;
