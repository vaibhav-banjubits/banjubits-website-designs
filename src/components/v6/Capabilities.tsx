import { services } from "@/lib/content";
import { ArtAI, ArtCloud, ArtFlow, ArtProduct } from "./Art";
import { Icon } from "./Icon";

// One illustration, icon and tone per service, in the same order as src/lib/content.ts.
const LOOK = [
  { Art: ArtAI, icon: "spark", tone: "night" },
  { Art: ArtProduct, icon: "grid", tone: "paper" },
  { Art: ArtCloud, icon: "cloud", tone: "paper" },
  { Art: ArtFlow, icon: "flow", tone: "night" },
] as const;

export function Capabilities() {
  return (
    <section className="gl-sec gl-caps" id="capabilities" aria-labelledby="gl-caps-title">
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">Capabilities</p>
            <h2 id="gl-caps-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              Four disciplines, <em>one</em> accountable team.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              AI is only as useful as the product, platform and data around it. We build all four
              together, so nothing is lost at a hand-off.
            </p>
          </div>
        </header>

        <div className="gl-bento">
          {services.map((s, i) => {
            const { Art, icon, tone } = LOOK[i];
            return (
              <article
                key={s.title}
                className={`gl-svc gl-svc--${tone} gl-lit gl-rv`}
                style={{ ["--d" as string]: `${(i % 2) * 0.1}s` }}
              >
                <div className="gl-svc__art" aria-hidden="true">
                  <Art />
                </div>
                <div className="gl-svc__top">
                  <span className="gl-svc__ic">
                    <Icon n={icon} />
                  </span>
                  <span className="gl-svc__no">0{i + 1}</span>
                </div>
                <div className="gl-svc__body">
                  <h3 className="gl-h3">{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="gl-tags">
                    {s.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="gl-svc__go" aria-label={`Discuss ${s.title}`}>
                  <span>Discuss this</span>
                  <span className="gl-go gl-go--sm" aria-hidden="true">
                    <Icon n="arrow-ur" />
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
