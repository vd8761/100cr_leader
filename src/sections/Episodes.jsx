import { SectionLabel } from '../components/SectionLabel.jsx';
import { EpisodeCard } from '../components/EpisodeCard.jsx';
import { Button } from '../components/Button.jsx';
import { EPISODES, LINKS } from '../data/site.js';

/* Podcast - "The 100 Cr Leader - the show." */
export function Episodes() {
  return (
    <section id="podcast" className="episodes section" data-chapter="podcast">
      <div className="episodes__inner">
        <span className="kicker kicker--light">04 - The Show</span>
        <div className="episodes__head">
          <SectionLabel rule>The 100 Cr Leader - the show</SectionLabel>
          <Button variant="outline" icon="arrow-right" href={LINKS.spotifyShow} target="_blank" rel="noreferrer">
            All Episodes
          </Button>
        </div>

        <div className="episodes__list" data-stagger>
          {EPISODES.map((e) => (
            <EpisodeCard
              key={e.episode}
              episode={e.episode}
              title={e.title}
              teaser={e.desc}
              duration={`${e.total}min`}
              date="On Spotify"
              current={e.current}
              total={e.total}
              progress={e.progress}
              defaultPlaying={false}
              seed={`ep${e.episode}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
