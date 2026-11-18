import { principles, solutions } from "./data";
import { ArtAi, ArtPipeline, ArtProduct } from "./Art";
import { Icon } from "./Icon";

const ART = { ai: ArtAi, product: ArtProduct, pipeline: ArtPipeline } as const;
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Solutions() {
  const [ai, product, pipe] = solutions;
  const tile = (s: (typeof solutions)[number], cls: string, delay: number) => {
    const Art = ART[s.art];
    return (
      <article className={`hb-tile ${cls} hb-rv`} style={d(delay)}>
        <div className="hb-tile__art">
          <Art />
        </div>
        <div className="hb-tile__body">
          <h3 className="hb-h3">{s.title}</h3>
          <p>{s.text}</p>
          <ul className="hb-tags hb-tags--soft">
            {s.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <a href="#start" className="hb-link">
            Explore {s.link} <Icon n="arrow" />
          </a>
        </div>
      </article>
    );
  };

  return (
    <section id="solutions" className="hb-sec hb-sec--soft">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> What we do
            </p>
            <h2 className="hb-h2">
              Three disciplines. <em>One operating standard.</em>
            </h2>
          </div>
          <p className="hb-head__side">
            From the first workshop to production rollout and handoff, every system is built the same
            careful way.
          </p>
        </div>

        <div className="hb-bento">
          {tile(ai, "hb-tile--a", 0)}
          {tile(product, "hb-tile--b", 80)}
          {tile(pipe, "hb-tile--c", 0)}
          <article className="hb-tile hb-tile--d hb-rv" style={d(80)}>
            <div className="hb-glow hb-glow--c" aria-hidden="true" />
            <p className="hb-kicker hb-kicker--dark">
              <i /> How we build
            </p>
            <h3 className="hb-tile__big">Govern. Ground. Humans decide.</h3>
            <ul className="hb-prin">
              {principles.map((p) => (
                <li key={p.title}>
                  <span className="hb-prin__ic">
                    <Icon n={p.icon} />
                  </span>
                  <div>
                    <b>{p.title}</b>
                    <span>{p.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
