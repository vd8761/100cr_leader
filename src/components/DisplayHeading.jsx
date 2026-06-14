/* DisplayHeading - the Bebas Neue showpiece type ("THE 100 CR LEADER").
   size="hero" stretches one line edge-to-edge; "stacked" is the
   multi-line block used in the Circle section. */
export function DisplayHeading({
  children, size = 'hero', color = 'var(--sand)', align = 'left',
  as: Tag = 'h1', style, className, ...rest
}) {
  const sizes = {
    hero: { fontSize: 'clamp(64px, 11vw, var(--fs-display-xl))', lineHeight: 0.9 },
    stacked: { fontSize: 'clamp(48px, 6vw, var(--fs-display-lg))', lineHeight: 0.95 },
    md: { fontSize: 'var(--fs-display-md)', lineHeight: 1 },
  }[size];
  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-display)', fontWeight: 400,
        letterSpacing: 'var(--ls-display)', textTransform: 'uppercase',
        color, textAlign: align, margin: 0, ...sizes, ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
