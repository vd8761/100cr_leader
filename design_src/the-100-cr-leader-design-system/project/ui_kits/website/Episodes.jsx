/* Episodes - the Featured Episodes list on paper. */
const { SectionLabel, EpisodeCard } = window.The100CRLeaderDesignSystem_2a705c;

const EPISODES = [
  { episode: 1, title: 'The ₹25 Lakh CFO Who Paid for Herself in 90 Days', total: '09:45', current: '04:24', progress: 0.42 },
  { episode: 2, title: 'Trends VS Fundamental', total: '12:10', current: '00:00', progress: 0.0, playing: true },
  { episode: 3, title: 'PERFECT RESUME. WRONG PERSON. The Worst Hire I Ever Made', total: '14:32', current: '06:11', progress: 0.55 },
  { episode: 4, title: 'Why Staying Small Could Be Hurting 200 Families', total: '11:08', current: '02:45', progress: 0.28 },
];

const TEASER = 'Before we start… I want to ask you one question. If you disappeared for the next 30 days - No calls. No WhatsApp. No approvals. No follow-ups. What would happen to your business? Think about it carefully. Would the business continue to move forward? Or would everything…';

function Episodes() {
  return (
    <section id="podcast" style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-24) var(--page-gutter)' }}>
        <SectionLabel rule style={{ marginBottom: 'var(--space-12)' }}>Featured Episodes</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {EPISODES.map((e) => (
            <EpisodeCard
              key={e.episode}
              episode={e.episode}
              title={e.title}
              teaser={TEASER}
              duration={`${e.total}min`}
              date="12-06-2026"
              current={e.current}
              total={e.total}
              progress={e.progress}
              defaultPlaying={!!e.playing}
              seed={`ep${e.episode}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Episodes = Episodes;
