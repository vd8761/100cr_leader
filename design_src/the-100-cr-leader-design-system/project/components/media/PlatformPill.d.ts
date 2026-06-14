import * as React from 'react';
import type { Platform } from './PlatformIcon';

export interface PlatformPillProps {
  /** Listening platform. Default 'spotify'. */
  platform?: Platform;
  /** Surface the pill sits on. Default 'dark'. */
  tone?: 'dark' | 'light';
  /** Action text under the platform name. Default 'Listen now'. */
  action?: string;
  style?: React.CSSProperties;
}

/** Brand badge + platform name + underlined "Listen now" action. */
export function PlatformPill(props: PlatformPillProps): JSX.Element;
