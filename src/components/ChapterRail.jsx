/* ChapterRail - a fixed story spine. Each dot maps to a section via
   data-target; initAnimations toggles `.is-active` as you scroll. */
const CHAPTERS = [
  { id: 'home', num: '00', label: 'Start' },
  { id: 'about', num: '01', label: 'The Problem' },
  { id: 'book', num: '02', label: 'The Map' },
  { id: 'newsletter', num: '03', label: 'Every Sunday' },
  { id: 'podcast', num: '04', label: 'The Show' },
  { id: 'speaking', num: '05', label: 'The Room' },
  { id: 'work', num: '06', label: 'The Tools' },
  { id: 'connect', num: '07', label: 'The Circle' },
];

export function ChapterRail({ onNavigate }) {
  return (
    <nav className="rail" aria-label="Chapters">
      {CHAPTERS.map((c) => (
        <button
          key={c.id}
          className="rail__item"
          data-target={c.id}
          data-cursor="hover"
          aria-label={`${c.num} - ${c.label}`}
          onClick={() => onNavigate && onNavigate(c.id)}
        >
          <span className="rail__num">{c.num}</span>
          <span className="rail__label">{c.label}</span>
          <span className="rail__dot" />
        </button>
      ))}
    </nav>
  );
}
