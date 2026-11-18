import Image from "next/image";
import { insights } from "@/lib/content";
import { Icon } from "./Icon";

export function Insights() {
  const [lead, ...rest] = insights;
  return (
    <section className="gl-sec gl-insights" id="insights" aria-labelledby="gl-insights-title">
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">Insights</p>
            <h2 id="gl-insights-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              What we are learning from <em>production</em>.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>Field notes on delivering AI that survives contact with real operations.</p>
            <a href="#insights" className="gl-btn gl-btn--ghost gl-btn--sm">
              All insights
            </a>
          </div>
        </header>

        <div className="gl-posts">
          <a href="#insights" className="gl-post gl-post--lead gl-lit gl-rv">
            <span className="gl-post__media">
              <Image
                src={lead.image}
                alt={lead.alt}
                fill
                sizes="(max-width: 900px) 100vw, 720px"
                placeholder="blur"
              />
            </span>
            <span className="gl-post__body">
              <span className="gl-pill gl-pill--light">{lead.category}</span>
              <span className="gl-post__title">{lead.title}</span>
              <span className="gl-post__text">{lead.text}</span>
              <span className="gl-post__read">
                Read article
                <span className="gl-go gl-go--sm" aria-hidden="true">
                  <Icon n="arrow-ur" />
                </span>
              </span>
            </span>
          </a>

          <div className="gl-posts__side">
            {rest.map((p, i) => (
              <a
                key={p.title}
                href="#insights"
                className="gl-post gl-post--row gl-lit gl-rv"
                style={{ ["--d" as string]: `${(i + 1) * 0.08}s` }}
              >
                <span className="gl-post__media">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 40vw, 260px"
                    placeholder="blur"
                  />
                </span>
                <span className="gl-post__body">
                  <span className="gl-pill gl-pill--light">{p.category}</span>
                  <span className="gl-post__title">{p.title}</span>
                  <span className="gl-post__read">
                    Read article
                    <span className="gl-go gl-go--sm" aria-hidden="true">
                      <Icon n="arrow-ur" />
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
