/* About - forest "Built From Real Business Journeys" section: the
   seated host portrait left, the manifesto copy + signature right. */
const { SectionLabel } = window.The100CRLeaderDesignSystem_2a705c;

function About() {
  return (
    <section id="about" style={{ background: 'var(--forest)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: 'var(--space-32) var(--page-gutter)',
        display: 'grid', gridTemplateColumns: '420px 1fr', gap: 'var(--space-24)', alignItems: 'center',
      }}>
        <div style={{
          borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--paper)',
          boxShadow: 'var(--shadow-photo)', aspectRatio: '4 / 5',
        }}>
          <img src="../../assets/author-seated.png" alt="Bharathiraja Thangapplalam"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div style={{ maxWidth: 760 }}>
          <SectionLabel icon={null} tone="dark" style={{ marginBottom: 'var(--space-6)' }}>Built From Real Business Journeys</SectionLabel>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', fontWeight: 'var(--fw-light)',
            color: 'var(--text-on-dark)', lineHeight: 'var(--lh-body)', margin: '0 0 var(--space-10)',
          }}>
            Built from real conversations with founders, operators, and business owners across India,
            The 100 CR Leader explores the realities of scaling a business beyond survival. From
            leadership and growth mindset to execution, expansion, and long-term thinking - this series
            is designed for entrepreneurs building businesses with ambition, resilience, and vision.
          </p>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)', color: 'var(--text-on-dark)', margin: 0 }}>Bharathiraja Thangapplalam</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-light)', color: 'var(--text-on-dark-muted)', margin: '4px 0 0' }}>CEO, Touchmark Descience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
