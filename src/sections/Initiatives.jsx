import { INITIATIVES } from '../data/site.js';

/* Three initiatives. One mission. - a horizontally-pinned track on
   desktop (cards slide sideways as you scroll); stacked on mobile. */
export function Initiatives() {
  return (
    <section id="work" className="inits on-light" data-horizontal data-chapter="work">
      <div className="inits__rail" data-h-track>
        <div className="inits__intro" data-h-panel>
          <span className="kicker kicker--light">06 - The Tools</span>
          <h2 className="lead-h" data-lines>Three initiatives. <span className="em">One mission.</span></h2>
          <p className="lead-p">
            Put the right person in the right role. Give founders the right thinking. Build leaders
            who last.
          </p>
        </div>

        {INITIATIVES.map((it) => {
          const ext = it.href.startsWith('http') || it.href.startsWith('mailto');
          return (
            <article key={it.title} className="init-card" data-h-panel>
              <span className="init-card__tag">{it.tag}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <a
                className="init-card__link"
                href={it.href}
                data-cursor="hover"
                {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {it.cta}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
