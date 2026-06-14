const ROLES =['Founder, OriginBI', 'Author', 'Podcast Host', 'Workshop Facilitator', 'Mentor', 'Leadership Speaker'];

/* About - the host's story: real conversations with stuck founders, the
   pull-quote, and the roles he plays. */
export function About() {
  return (
    <section id="about" className="about section on-dark" data-chapter="about">
      <span className="bg-ghost bg-ghost--about" data-ghost="left" aria-hidden="true">100 CR</span>

      <div className="about__grid">
        <div className="about__photo" data-unveil>
          <img src="/assets/brand/promo-author.png" alt="The 100 CR Leader - Bharathiraja Thangapplalam" />
        </div>

        <div className="about__copy">
          <span className="kicker kicker--dark">01 - The Problem</span>
          <h2 className="lead-h" data-lines style={{ color: 'var(--text-on-dark)' }}>
            I've sat across the table from <span className="em">every kind of stuck founder.</span>
          </h2>
          <p className="lead-p" style={{ color: 'var(--text-on-dark-muted)' }}>
            The one who works 14 hours a day and still can't break 5 crore. The one who doubled
            revenue and lost the culture. The one who hired the wrong person for the most critical
            role - twice. I've been in those rooms. I've had those conversations.
          </p>
          <blockquote className="about-pull" data-lines>
            "Most people don't fail because they lack ambition. They fail because nobody showed them
            the map."
          </blockquote>
          <p className="lead-p" style={{ color: 'var(--text-on-dark-muted)', marginTop: 0 }}>
            That's why I built OriginBI - AI that tells you who belongs where before it costs you.
            That's why I write the 100 Crore Leader every week. That's why I run the Reflect
            Leadership Workshop - because there are moments when a conversation changes everything.
          </p>

          <div className="chips" data-stagger>
            {ROLES.map((r) => <span key={r} className="chip">{r}</span>)}
          </div>

          <div style={{ marginTop: 'var(--space-10)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)', color: 'var(--text-on-dark)', margin: 0 }}>Bharathiraja Thangapplalam</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)', color: 'var(--text-on-dark-muted)', margin: '4px 0 0' }}>CEO, Touchmark Descience · Founder, OriginBI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
