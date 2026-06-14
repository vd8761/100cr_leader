import React from 'react';
import { Icon } from '../foundation/Icon.jsx';

/**
 * Button - quiet, editorial CTA. Variants:
 *  solid   filled forest (on light) - primary action
 *  onDark  filled sand (on forest)
 *  outline hairline border that fills on hover
 *  ghost   text + arrow, underline-on-hover (nav-style)
 */
export function Button({
  children, variant = 'solid', href, onClick, icon, iconRight = true,
  size = 'md', style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { pad: '10px 18px', fs: 'var(--fs-caption)' },
    md: { pad: '15px 28px', fs: 'var(--fs-body-sm)' },
    lg: { pad: '18px 36px', fs: 'var(--fs-body)' },
  }[size];

  const variants = {
    solid: {
      background: hover ? 'var(--forest-900)' : 'var(--forest)',
      color: 'var(--paper)', border: 'none',
    },
    onDark: {
      background: hover ? 'var(--cream)' : 'var(--sand)',
      color: 'var(--forest)', border: 'none',
    },
    outline: {
      background: hover ? 'var(--forest)' : 'transparent',
      color: hover ? 'var(--paper)' : 'var(--forest)',
      border: '1.5px solid var(--forest)',
    },
    ghost: {
      background: 'transparent', color: 'var(--forest)', border: 'none',
      padding: 0, textDecoration: hover ? 'underline' : 'none', textUnderlineOffset: 4,
    },
  };
  const v = variants[variant] || variants.solid;

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: variant === 'ghost' ? 0 : sizes.pad,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)', fontSize: sizes.fs, fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-label)', cursor: 'pointer', textDecoration: 'none',
        transition: 'all var(--dur) var(--ease)', whiteSpace: 'nowrap',
        ...v, ...style,
      }}
      {...rest}
    >
      {icon && !iconRight && <Icon name={icon} size={18} />}
      {children}
      {icon && iconRight && <Icon name={icon} size={18} style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur) var(--ease)' }} />}
    </Tag>
  );
}
