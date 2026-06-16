import { Button } from '../components/Button.jsx';
import { BOOK_FEATURES } from '../data/site.js';

/* The Book - "Leadership Beyond Limits" / The 100cr Leader. */
export function Book({ onNavigate }) {
  /* "Notify me" isn't a separate signup - it routes founders straight to the
     Sunday-newsletter card and drops focus into the email field so they can
     subscribe in one motion (preventScroll so ScrollSmoother owns the glide). */
  const notify = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('newsletter');
    setTimeout(() => {
      document.getElementById('newsletter-email')?.focus({ preventScroll: true });
    }, 900);
  };

  return (
    <section id="book" className="book section section--pad on-light" data-chapter="book">
      <div className="section__inner book__grid">
        <div className="book__cover">
          <div className="book__mock" data-book>
            <div className="book__badge"><span>Coming</span><span>2026</span></div>
            <div>
              <div className="book__mock-title">The<br />100<span className="cr">cr</span><br />Leader</div>
              <div className="book__mock-sub">A Founder's Guide to Breaking Through the Ceiling</div>
            </div>
            <div className="book__mock-author">Bharathiraja Thangappalam</div>
          </div>
        </div>

        <div>
          <span className="kicker kicker--light">02 - The Map · Coming 2026</span>
          <h2 className="lead-h" data-lines>The book every founder at <span className="em">breakeven</span> needs to read.</h2>
          <p className="lead-p">
            Most founders don't fail from lack of effort. They fail because nobody gave them the
            right map. This book is the map.
          </p>
          <p className="lead-p">
            Built from real conversations, real business failures, and the hard-won frameworks that
            have helped founders across India break through the plateau and start building toward
            100 crore.
          </p>

          <div className="book__features" data-stagger>
            {BOOK_FEATURES.map((f) => (
              <div key={f.title}>
                <p className="book__feat-title">{f.title}</p>
                <p className="book__feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>

          <Button variant="solid" icon="arrow-right" href="#newsletter" onClick={notify}>
            Notify Me
          </Button>
        </div>
      </div>
    </section>
  );
}
