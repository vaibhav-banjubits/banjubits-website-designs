import { proof } from "./data";
import { Icon } from "./Icon";

/** Proof straight under the hero: four published headline results on a deep navy stage. */
export function Proof() {
  return (
    <section className="hb-proof" aria-label="Results at a glance">
      <div className="hb-slab hb-slab--navy">
        <div className="hb-glow hb-glow--a" aria-hidden="true" />
        <div className="hb-glow hb-glow--b" aria-hidden="true" />
        <div className="hb-wrap">
          <div className="hb-proof__head hb-rv">
            <p className="hb-kicker hb-kicker--dark">
              <i /> Results, not roadmaps
            </p>
            <p className="hb-proof__sub">Four outcomes from real engagements, each one published.</p>
          </div>
          <ul className="hb-proof__list">
            {proof.map((p, i) => (
              <li key={p.sector} className="hb-rv" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                <a href={p.href} className="hb-proof__item">
                  <span className="hb-proof__sector">{p.sector}</span>
                  <strong className="hb-proof__fig">
                    {p.count > 0 ? (
                      <>
                        {p.lead}
                        <span data-count={p.count}>{p.count}</span>
                        {p.tail}
                      </>
                    ) : (
                      p.figure
                    )}
                  </strong>
                  <span className="hb-proof__label">{p.label}</span>
                  <span className="hb-proof__go">
                    <Icon n="arrow-ur" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
