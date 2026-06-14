import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** Color treatment. Default 'forest' (the EP-tag look). */
  tone?: 'forest' | 'sand' | 'outline' | 'gold';
  style?: React.CSSProperties;
}

/** Small rounded pill label - the "EP 1" episode tag and generic tags. */
export function Badge(props: BadgeProps): JSX.Element;
