import Image from "next/image";
import { Icon } from "./Icon";
import { cases, type CaseMetric } from "./data";

function Figure({ m }: { m: CaseMetric }) {
  if (m.word) return <b className="gl-metric__word">{m.text}</b>;
  if (m.count != null) {
    return (
      <b className="gl-metric__fig">
        {m.lead}
        <span data-count={m.count}>{m.count}</span>
        {m.tail}
      </b>
    );
  }
  return <b className="gl-metric__fig">{m.text}</b>;
}

export function Work() {
  return (
    <section className="gl-sec gl-sec--night gl-work" id="work" aria-labelledby="gl-work-title">
      <div className="gl-work__bg" aria-hidden="true" />
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">Selected work</p>
            <h2 id="gl-work-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              Systems in production, <em>measured</em> by what changed.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Four engagements across four sectors. Client names stay confidential; the outcomes
              don&rsquo;t. Each one is judged by what changed for the people who run it.
            </p>
            <a href="#contact" className="gl-btn gl-btn--night gl-btn--sm">
              Discuss your project
              <span className="gl-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
        </header>

        <div className="gl-stack">
          {cases.map((c, i) => (
            <article
              key={c.no}
              className="gl-case"
              data-flip={i % 2 === 1 || undefined}
              style={{ ["--i" as string]: i }}
              aria-labelledby={`gl-case-${c.no}`}
            >
              <div className="gl-case__in gl-lit gl-grain">
                <div className="gl-case__copy">
                  <div className="gl-case__top">
                    <span className="gl-case__no">
                      {c.no}
                      <i aria-hidden="true" />
                      <small>/ 04</small>
                    </span>
                    <span className="gl-pill">{c.sector}</span>
                  </div>

                  <h3 id={`gl-case-${c.no}`} className="gl-case__title">
                    {c.title}
                  </h3>
                  <p className="gl-case__sum">{c.summary}</p>

                  <div className="gl-case__foot">
                    <p className={`gl-metric${c.metric.word ? " gl-metric--word" : ""}`}>
                      <Figure m={c.metric} />
                      <span>{c.metric.label}</span>
                    </p>
                    <a href="#contact" className="gl-case__cta" aria-label={`Discuss a project like: ${c.title}`}>
                      <span>Discuss a similar build</span>
                      <span className="gl-go gl-go--sm" aria-hidden="true">
                        <Icon n="arrow-ur" />
                      </span>
                    </a>
                  </div>
                </div>

                <figure className="gl-case__media">
                  <div className="gl-par" data-par="0.06">
                    <Image
                      src={c.photo}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 720px"
                      placeholder="blur"
                      style={{ objectPosition: c.position }}
                    />
                  </div>
                  <div className="gl-case__veil" aria-hidden="true" />
                  <figcaption className="gl-glass-chip">
                    <Icon n="spark" />
                    {c.service}
                  </figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
