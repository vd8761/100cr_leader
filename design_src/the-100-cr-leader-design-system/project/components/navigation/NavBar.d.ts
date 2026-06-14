import * as React from 'react';

export interface NavBarProps {
  /** Nav items. Default ['Home','Podcast','Connect']. */
  items?: string[];
  /** Currently active item. Default 'Home'. */
  active?: string;
  tone?: 'dark' | 'light';
  onSelect?: (item: string) => void;
  style?: React.CSSProperties;
}

/** Minimal centered podcast navigation. */
export function NavBar(props: NavBarProps): JSX.Element;
