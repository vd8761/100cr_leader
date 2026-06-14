/* @ds-bundle: {"format":3,"namespace":"The100CRLeaderDesignSystem_2a705c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"AudioPlayer","sourcePath":"components/media/AudioPlayer.jsx"},{"name":"EpisodeCard","sourcePath":"components/media/EpisodeCard.jsx"},{"name":"PlatformIcon","sourcePath":"components/media/PlatformIcon.jsx"},{"name":"PlatformPill","sourcePath":"components/media/PlatformPill.jsx"},{"name":"SocialIcon","sourcePath":"components/media/SocialIcon.jsx"},{"name":"Waveform","sourcePath":"components/media/Waveform.jsx"},{"name":"Marquee","sourcePath":"components/navigation/Marquee.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"DisplayHeading","sourcePath":"components/typography/DisplayHeading.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"806793d6af01","components/core/Button.jsx":"5d937f93d7de","components/core/SectionLabel.jsx":"6af13ad1d283","components/foundation/Icon.jsx":"fd01b2d8f730","components/media/AudioPlayer.jsx":"06bbad366f17","components/media/EpisodeCard.jsx":"9020f9112960","components/media/PlatformIcon.jsx":"2cf04150dcb7","components/media/PlatformPill.jsx":"02b801836d6b","components/media/SocialIcon.jsx":"333f301b5d4e","components/media/Waveform.jsx":"4fbc3e808149","components/navigation/Marquee.jsx":"45628500221e","components/navigation/NavBar.jsx":"754e74362117","components/typography/DisplayHeading.jsx":"955a72b12d2f","ui_kits/website/About.jsx":"b889f85f10a2","ui_kits/website/Circle.jsx":"ec0957218a2b","ui_kits/website/Episodes.jsx":"55d368234b40","ui_kits/website/Hero.jsx":"b8e828ad6c2b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.The100CRLeaderDesignSystem_2a705c = window.The100CRLeaderDesignSystem_2a705c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Small pill label. The episode "EP 1" tag is the signature use
 * (dark forest pill, sand text). Also handy for generic tags.
 */
function Badge({
  children,
  tone = 'forest',
  style
}) {
  const tones = {
    forest: {
      bg: 'var(--forest)',
      fg: 'var(--sand)'
    },
    sand: {
      bg: 'var(--sand)',
      fg: 'var(--forest)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--forest)',
      border: '1px solid var(--rule-light)'
    },
    gold: {
      bg: 'var(--gold)',
      fg: 'var(--forest)'
    }
  };
  const t = tones[tone] || tones.forest;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: t.border || 'none',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inline brand + UI glyph registry - keeps components portable (no asset
   path resolution needed when the bundle is mounted at varying depths). */
const PATHS = {
  spotify: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488',
  facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'
};

/* Multi-color marks rendered as element trees */
function GooglePodcasts({
  size
}) {
  const bars = [[11, 0, 6, '#4285F4'], [11, 18, 6, '#4285F4'], [11, 8, 8, '#4285F4'], [0, 9, 6, '#34A853'], [22, 9, 6, '#34A853'], [5.5, 4, 7, '#FBBC04'], [5.5, 13, 7, '#FBBC04'], [16.5, 4, 7, '#EA4335'], [16.5, 13, 7, '#EA4335']];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, bars.map(([x, y, h, c], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: 2,
    height: h,
    rx: 1,
    fill: c
  })));
}
function JioSaavn({
  size,
  color
}) {
  const fill = color || '#fff';
  // Three-leaf fan mark (white on teal in usage)
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22c-.9-3.1-.7-6 .8-8.9.4-.8 1.6-.5 1.6.4.1 3-.6 5.9-2.4 8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c-2.5-2-3.9-4.5-4.3-7.6-.1-.9 1-1.3 1.5-.6 1.8 2.4 2.7 5.2 2.8 8.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21.4c-1-4-.2-7.7 2.6-11 .6-.7 1.7-.1 1.5.8-.8 4.1-2.8 7.5-4.1 10.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21.4C9.2 18.6 7.8 14.9 7.6 10.8c0-.9 1.1-1.2 1.6-.4 2.1 3.4 2.9 7.1 2.8 11z"
  })));
}
function Mic({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "22"
  }));
}
const STROKE = {
  'arrow-right': '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>'
};
const FILL = {
  play: 'M8 5.14v13.72a1 1 0 0 0 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z'
};

/**
 * Icon - single source for every brand + UI glyph in the system.
 */
function Icon({
  name,
  size = 24,
  color,
  style,
  ...rest
}) {
  if (name === 'google-podcasts') return /*#__PURE__*/React.createElement(GooglePodcasts, {
    size: size
  });
  if (name === 'jiosaavn') return /*#__PURE__*/React.createElement(JioSaavn, {
    size: size,
    color: color
  });
  if (name === 'mic') return /*#__PURE__*/React.createElement(Mic, {
    size: size,
    color: color
  });
  if (name === 'pause') {
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color || 'currentColor',
      style: style
    }, rest, {
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "5",
      width: "4",
      height: "14",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "5",
      width: "4",
      height: "14",
      rx: "1"
    }));
  }
  if (STROKE[name]) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color || 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: style
    }, rest, {
      dangerouslySetInnerHTML: {
        __html: STROKE[name]
      },
      "aria-hidden": "true"
    }));
  }
  const d = FILL[name] || PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color || 'currentColor',
    style: style
  }, rest, {
    "aria-hidden": "true"
  }), d && /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button - quiet, editorial CTA. Variants:
 *  solid   filled forest (on light) - primary action
 *  onDark  filled sand (on forest)
 *  outline hairline border that fills on hover
 *  ghost   text + arrow, underline-on-hover (nav-style)
 */
function Button({
  children,
  variant = 'solid',
  href,
  onClick,
  icon,
  iconRight = true,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      pad: '10px 18px',
      fs: 'var(--fs-caption)'
    },
    md: {
      pad: '15px 28px',
      fs: 'var(--fs-body-sm)'
    },
    lg: {
      pad: '18px 36px',
      fs: 'var(--fs-body)'
    }
  }[size];
  const variants = {
    solid: {
      background: hover ? 'var(--forest-900)' : 'var(--forest)',
      color: 'var(--paper)',
      border: 'none'
    },
    onDark: {
      background: hover ? 'var(--cream)' : 'var(--sand)',
      color: 'var(--forest)',
      border: 'none'
    },
    outline: {
      background: hover ? 'var(--forest)' : 'transparent',
      color: hover ? 'var(--paper)' : 'var(--forest)',
      border: '1.5px solid var(--forest)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--forest)',
      border: 'none',
      padding: 0,
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  };
  const v = variants[variant] || variants.solid;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: variant === 'ghost' ? 0 : sizes.pad,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: sizes.fs,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all var(--dur) var(--ease)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), icon && !iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), children, icon && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur) var(--ease)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/**
 * Section label - small Nohemi-light caption, optionally led by a mic
 * glyph ("Featured Episodes"), with a hairline rule beneath.
 */
function SectionLabel({
  children,
  icon = 'mic',
  tone = 'light',
  rule = false,
  style
}) {
  const color = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-light)',
      color,
      letterSpacing: 'var(--ls-tight)'
    }
  }, children)), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: '100%',
      background: tone === 'dark' ? 'var(--rule-dark)' : 'var(--rule-light)'
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/media/PlatformIcon.jsx
try { (() => {
const BRAND = {
  spotify: {
    bg: 'var(--spotify)',
    fg: '#fff',
    glyph: 'spotify'
  },
  youtube: {
    bg: 'var(--youtube)',
    fg: '#fff',
    glyph: 'youtube'
  },
  jiosaavn: {
    bg: 'var(--jiosaavn)',
    fg: '#fff',
    glyph: 'jiosaavn'
  },
  google: {
    bg: '#fff',
    fg: null,
    glyph: 'google-podcasts'
  }
};

/** Circular brand badge for a listening platform. */
function PlatformIcon({
  platform = 'spotify',
  size = 48,
  ring = false,
  style
}) {
  const b = BRAND[platform] || BRAND.spotify;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: b.bg,
      flexShrink: 0,
      boxShadow: ring ? '0 0 0 1px var(--rule-light)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: b.glyph,
    size: Math.round(size * 0.52),
    color: b.fg || undefined
  }));
}
Object.assign(__ds_scope, { PlatformIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PlatformIcon.jsx", error: String((e && e.message) || e) }); }

// components/media/PlatformPill.jsx
try { (() => {
const LABELS = {
  spotify: 'Spotify',
  youtube: 'Youtube',
  google: 'Google Podcast',
  jiosaavn: 'Jio Saavn'
};

/**
 * "Listen now" pill: brand badge + platform name + underlined action.
 * tone="dark" for use over forest backgrounds, "light" over paper.
 */
function PlatformPill({
  platform = 'spotify',
  tone = 'dark',
  action = 'Listen now',
  style
}) {
  const text = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const muted = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PlatformIcon, {
    platform: platform,
    size: 56,
    ring: platform === 'google' && tone === 'light'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-regular)',
      color: muted
    }
  }, LABELS[platform] || platform), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      color: text,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, action)));
}
Object.assign(__ds_scope, { PlatformPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PlatformPill.jsx", error: String((e && e.message) || e) }); }

// components/media/SocialIcon.jsx
try { (() => {
/**
 * Circular social link. On the forest "Circle" section these are
 * outlined sand-on-transparent circles that fill on hover.
 */
function SocialIcon({
  platform = 'linkedin',
  href = '#',
  size = 52,
  tone = 'dark',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'dark';
  const base = onDark ? 'var(--sand)' : 'var(--forest)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": platform,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1px solid ${hover ? base : onDark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      background: hover ? base : 'transparent',
      color: hover ? onDark ? 'var(--forest)' : 'var(--paper)' : base,
      transition: 'all var(--dur) var(--ease)',
      textDecoration: 'none',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: platform,
    size: Math.round(size * 0.4)
  }));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/media/Waveform.jsx
try { (() => {
/* Deterministic pseudo-random so the waveform is stable across renders. */
function bars(count, seedStr) {
  let s = 0;
  for (let i = 0; i < seedStr.length; i++) s = s * 31 + seedStr.charCodeAt(i) >>> 0;
  const out = [];
  for (let i = 0; i < count; i++) {
    s = s * 1103515245 + 12345 & 0x7fffffff;
    out.push(s / 0x7fffffff);
  }
  return out;
}

/**
 * Waveform - the brand's signature audio motif.
 *  variant="hero":  sparse, tall rounded capsules (decorative backdrop)
 *  variant="track": dense thin bars with a played/unplayed split
 */
function Waveform({
  variant = 'track',
  progress = 0.45,
  seed = '100cr',
  playing = false,
  color,
  playedColor,
  count,
  height = 56,
  style
}) {
  const hero = variant === 'hero';
  const n = count || (hero ? 18 : 96);
  const vals = bars(n, seed);
  const played = hero ? -1 : progress * n;
  const fg = color || (hero ? 'var(--white)' : 'var(--rule-light)');
  const fgPlayed = playedColor || 'var(--forest)';
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "audio waveform",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: hero ? 18 : 2,
      height,
      width: '100%',
      opacity: hero ? 0.9 : 1,
      ...style
    }
  }, vals.map((v, i) => {
    const h = hero ? 22 + v * 78 // % of height, chunky
    : 12 + Math.pow(v, 0.7) * 88; // % of height, lively
    const isPlayed = !hero && i < played;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: hero ? '0 0 auto' : 1,
        width: hero ? 26 : undefined,
        height: `${h}%`,
        minWidth: hero ? 26 : 1,
        borderRadius: hero ? 13 : 1,
        background: isPlayed ? fgPlayed : fg,
        transition: 'height var(--dur) var(--ease), background var(--dur) var(--ease)'
      }
    });
  }));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/media/AudioPlayer.jsx
try { (() => {
/**
 * Inline audio player: circular play/pause control, waveform scrubber,
 * and a current/total timecode. Visual + light interaction (no real audio).
 */
function AudioPlayer({
  seed = '100cr',
  current = '04:24',
  total = '09:45',
  progress = 0.45,
  defaultPlaying = false,
  style
}) {
  const [playing, setPlaying] = React.useState(defaultPlaying);
  const [pos, setPos] = React.useState(progress);
  const filled = playing;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    "aria-label": playing ? 'Pause' : 'Play',
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: '50%',
      flexShrink: 0,
      cursor: 'pointer',
      border: filled ? 'none' : '1.5px solid var(--forest)',
      background: filled ? 'var(--forest)' : 'transparent',
      color: filled ? 'var(--paper)' : 'var(--forest)',
      transition: 'all var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: playing ? 'pause' : 'play',
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
    },
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Waveform, {
    variant: "track",
    seed: seed,
    progress: pos,
    playing: playing,
    height: 48
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-light-muted)',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontVariantNumeric: 'tabular-nums'
    }
  }, current, " / ", total));
}
Object.assign(__ds_scope, { AudioPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/AudioPlayer.jsx", error: String((e && e.message) || e) }); }

// components/media/EpisodeCard.jsx
try { (() => {
const PLATFORMS = ['spotify', 'youtube', 'google', 'jiosaavn'];

/**
 * EpisodeCard - the featured-episode row: title + EP badge, a clamped
 * teaser with "Read more", the inline AudioPlayer, duration • date,
 * and the platform icon row.
 */
function EpisodeCard({
  episode = 1,
  title = 'Episode title',
  teaser = '',
  duration = '09:45min',
  date = '12-06-2026',
  current = '04:24',
  total = '09:45',
  progress = 0.45,
  defaultPlaying = false,
  seed,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      background: 'var(--paper-2)',
      border: '1px solid var(--rule-light)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 'var(--lh-snug)',
      margin: 0
    }
  }, title)), teaser && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-on-light-muted)',
      lineHeight: 'var(--lh-body)',
      margin: 0,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, teaser, " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-light)',
      fontWeight: 'var(--fw-semibold)',
      textDecoration: 'none'
    }
  }, "Read more")), /*#__PURE__*/React.createElement(__ds_scope.AudioPlayer, {
    seed: seed || `ep${episode}`,
    current: current,
    total: total,
    progress: progress,
    defaultPlaying: defaultPlaying,
    style: {
      marginTop: 'var(--space-2)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--rule-light)',
      padding: 'var(--space-10) var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "forest"
  }, "EP ", episode), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-light-muted)',
      letterSpacing: 'var(--ls-label)',
      whiteSpace: 'nowrap'
    }
  }, duration, " \xA0\u2022\xA0 ", date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement(__ds_scope.PlatformIcon, {
    key: p,
    platform: p,
    size: 34,
    ring: p === 'google'
  })))));
}
Object.assign(__ds_scope, { EpisodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/EpisodeCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Marquee.jsx
try { (() => {
/**
 * Marquee - the scrolling host-name strip ("Bharathiraja Thangapplalam"
 * separated by mic glyphs) that sits just under the hero headline.
 */
function Marquee({
  text = 'Bharathiraja Thangapplalam',
  icon = 'mic',
  tone = 'dark',
  speed = 30,
  style
}) {
  const onDark = tone === 'dark';
  const color = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const item = k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      paddingRight: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-light)',
      color,
      letterSpacing: 'var(--ls-tight)',
      whiteSpace: 'nowrap'
    }
  }, text), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: color
  }));
  const run = Array.from({
    length: 8
  }).map((_, i) => item(i));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%',
      borderTop: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      borderBottom: onDark ? '1px solid var(--rule-dark)' : '1px solid var(--rule-light)',
      padding: 'var(--space-4) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      animation: `cr-marquee ${speed}s linear infinite`,
      willChange: 'transform'
    }
  }, run, run), /*#__PURE__*/React.createElement("style", null, `@keyframes cr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * NavBar - minimal centered podcast nav (Home / Podcast / Connect).
 * Sits on the forest hero; active item is sand, others muted.
 */
function NavBar({
  items = ['Home', 'Podcast', 'Connect'],
  active = 'Home',
  tone = 'dark',
  onSelect,
  style
}) {
  const onDark = tone === 'dark';
  const idle = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)';
  const on = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-12)',
      padding: 'var(--space-8) var(--page-gutter)',
      ...style
    }
  }, items.map(it => {
    const isActive = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: `#${it.toLowerCase()}`,
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(it);
        }
      },
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-light)',
        letterSpacing: 'var(--ls-tight)',
        color: isActive ? on : idle,
        textDecoration: 'none',
        transition: 'color var(--dur) var(--ease)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = on;
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = isActive ? on : idle;
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/typography/DisplayHeading.jsx
try { (() => {
/**
 * DisplayHeading - the Bebas Neue showpiece type ("THE 100 CR LEADER").
 * size="hero" stretches one line edge-to-edge; "stacked" is the
 * multi-line block used in the Circle section.
 */
function DisplayHeading({
  children,
  size = 'hero',
  color = 'var(--sand)',
  align = 'left',
  as = 'h1',
  style
}) {
  const sizes = {
    hero: {
      fontSize: 'clamp(64px, 11vw, var(--fs-display-xl))',
      lineHeight: 0.9
    },
    stacked: {
      fontSize: 'clamp(48px, 6vw, var(--fs-display-lg))',
      lineHeight: 0.95
    },
    md: {
      fontSize: 'var(--fs-display-md)',
      lineHeight: 1
    }
  }[size];
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      margin: 0,
      ...sizes,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* About - forest "Built From Real Business Journeys" section: the
   seated host portrait left, the manifesto copy + signature right. */
const {
  SectionLabel
} = window.The100CRLeaderDesignSystem_2a705c;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--forest)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-32) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      gap: 'var(--space-24)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-photo)',
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/author-seated.png",
    alt: "Bharathiraja Thangapplalam",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    icon: null,
    tone: "dark",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Built From Real Business Journeys"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-on-dark)',
      lineHeight: 'var(--lh-body)',
      margin: '0 0 var(--space-10)'
    }
  }, "Built from real conversations with founders, operators, and business owners across India, The 100 CR Leader explores the realities of scaling a business beyond survival. From leadership and growth mindset to execution, expansion, and long-term thinking \u2014 this series is designed for entrepreneurs building businesses with ambition, resilience, and vision."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-on-dark)',
      margin: 0
    }
  }, "Bharathiraja Thangapplalam"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-on-dark-muted)',
      margin: '4px 0 0'
    }
  }, "CEO, Touchmark Descience")))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Circle.jsx
try { (() => {
/* Circle - forest closing section: stacked Bebas headline, the standing
   host portrait, the WhatsApp community QR, and social links. */
const {
  DisplayHeading,
  SocialIcon
} = window.The100CRLeaderDesignSystem_2a705c;
function Circle() {
  return /*#__PURE__*/React.createElement("section", {
    id: "connect",
    style: {
      background: 'var(--forest-900)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-32) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 360px 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "stacked",
    color: "var(--paper)",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, "THE", /*#__PURE__*/React.createElement("br", null), "100 CR", /*#__PURE__*/React.createElement("br", null), "LEADER", /*#__PURE__*/React.createElement("br", null), "CIRCLE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 340,
      borderTop: '1px solid var(--rule-dark)',
      paddingTop: 'var(--space-6)',
      margin: 0
    }
  }, "A private community for founders, business owners, and leaders exploring growth, scale, leadership, and real business conversations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '3 / 4',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/author-photo.png",
    alt: "Bharathiraja Thangapplalam",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--gold)',
      margin: 0,
      textAlign: 'center'
    }
  }, "Scan to Join the WhatsApp Community"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/whatsapp-qr-placeholder.png",
    alt: "WhatsApp community QR",
    width: "220",
    height: "220",
    style: {
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    platform: "linkedin",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    platform: "facebook",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    platform: "x",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    platform: "instagram",
    tone: "dark"
  })))));
}
window.Circle = Circle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Circle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Episodes.jsx
try { (() => {
/* Episodes - the Featured Episodes list on paper. */
const {
  SectionLabel,
  EpisodeCard
} = window.The100CRLeaderDesignSystem_2a705c;
const EPISODES = [{
  episode: 1,
  title: 'The ₹25 Lakh CFO Who Paid for Herself in 90 Days',
  total: '09:45',
  current: '04:24',
  progress: 0.42
}, {
  episode: 2,
  title: 'Trends VS Fundamental',
  total: '12:10',
  current: '00:00',
  progress: 0.0,
  playing: true
}, {
  episode: 3,
  title: 'PERFECT RESUME. WRONG PERSON. The Worst Hire I Ever Made',
  total: '14:32',
  current: '06:11',
  progress: 0.55
}, {
  episode: 4,
  title: 'Why Staying Small Could Be Hurting 200 Families',
  total: '11:08',
  current: '02:45',
  progress: 0.28
}];
const TEASER = 'Before we start… I want to ask you one question. If you disappeared for the next 30 days - No calls. No WhatsApp. No approvals. No follow-ups. What would happen to your business? Think about it carefully. Would the business continue to move forward? Or would everything…';
function Episodes() {
  return /*#__PURE__*/React.createElement("section", {
    id: "podcast",
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true,
    style: {
      marginBottom: 'var(--space-12)'
    }
  }, "Featured Episodes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, EPISODES.map(e => /*#__PURE__*/React.createElement(EpisodeCard, {
    key: e.episode,
    episode: e.episode,
    title: e.title,
    teaser: TEASER,
    duration: `${e.total}min`,
    date: "12-06-2026",
    current: e.current,
    total: e.total,
    progress: e.progress,
    defaultPlaying: !!e.playing,
    seed: `ep${e.episode}`
  })))));
}
window.Episodes = Episodes;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Episodes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero - forest top with the giant Bebas wordmark, scrolling host
   marquee, the faint waveform backdrop, the navy "with … name" block,
   and the platform listening bar. Mirrors OP-2 of the Figma. */
const {
  NavBar,
  DisplayHeading,
  Marquee,
  Waveform,
  PlatformPill
} = window.The100CRLeaderDesignSystem_2a705c;
function Hero() {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest)',
      paddingBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Home"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      padding: '0 var(--page-gutter) 8px'
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "hero",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "THE 100 CR LEADER"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--paper)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--page-gutter)',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Waveform, {
    variant: "hero",
    height: 300,
    count: 16,
    color: "var(--paper-3)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--page-gutter)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--navy)',
      margin: '0 0 8px'
    }
  }, "with"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--navy)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1.02,
      margin: 0
    }
  }, "Bharathiraja", /*#__PURE__*/React.createElement("br", null), "Thangapplalam"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h5)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--navy)',
      margin: '18px 0 0'
    }
  }, "CEO, Touchmark Descience")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest-700)',
      borderTop: '1px solid var(--rule-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PlatformPill, {
    platform: "spotify",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(PlatformPill, {
    platform: "youtube",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(PlatformPill, {
    platform: "google",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(PlatformPill, {
    platform: "jiosaavn",
    tone: "dark"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.AudioPlayer = __ds_scope.AudioPlayer;

__ds_ns.EpisodeCard = __ds_scope.EpisodeCard;

__ds_ns.PlatformIcon = __ds_scope.PlatformIcon;

__ds_ns.PlatformPill = __ds_scope.PlatformPill;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

})();
