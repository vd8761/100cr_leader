import React from 'react';

const ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Book', id: 'book' },
  { label: 'Podcast', id: 'podcast' },
  { label: 'Newsletter', id: 'newsletter' },
  { label: 'Speaking', id: 'speaking' },
  { label: 'Connect', id: 'connect' },
];

/* NavBar - fixed floating nav. Gains a forest backdrop once scrolled,
   tracks the section in view, and collapses to a full-screen overlay
   on mobile. Navigation routes through the ScrollSmoother instance
   (via onNavigate) so anchor jumps stay buttery. */
export function NavBar({ onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('home');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean);
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const s of sections) {
        if (s.offsetTop <= mid) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while the mobile overlay is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (onNavigate) onNavigate(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <a className="nav__brand" href="#home" onClick={(e) => go(e, 'home')}>THE 100 CR</a>

        <nav className="nav__bar" aria-label="Primary">
          <div className="nav__links">
            {ITEMS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`nav__link${active === it.id ? ' is-active' : ''}`}
                data-cursor="hover"
                onClick={(e) => go(e, it.id)}
              >
                {it.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`nav__overlay${open ? ' is-open' : ''}`}>
        {ITEMS.map((it) => (
          <a key={it.id} href={`#${it.id}`} onClick={(e) => go(e, it.id)}>{it.label}</a>
        ))}
      </div>
    </>
  );
}
