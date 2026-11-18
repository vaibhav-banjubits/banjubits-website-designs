import Image from "next/image";
import { models, principles } from "@/lib/content";
import { gates, modelExtras } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

export function Approach() {
  return (
    <section className="gl-sec gl-approach" id="approach" aria-labelledby="gl-approach-title">
      <div className="gl-wrap">
        <header className="gl-head gl-head--split">
          <div>
            <p className="gl-eyebrow gl-rv">How we work</p>
            <h2 id="gl-approach-title" className="gl-h2 gl-rv" style={{ ["--d" as string]: ".06s" }}>
              Governed from the <em>first prototype</em>, not bolted on after.
            </h2>
          </div>
          <div className="gl-head__aside gl-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Delivery runs through human review gates, with every change controlled, reviewable
              and auditable, so what we hand over is something your team can own.
            </p>
          </div>
        </header>

        <figure className="gl-banner gl-rv gl-unmask-io">
          <div className="gl-par" data-par="0.05">
            <Image
              src={img.workingSession}
              alt="Engineers and a client lead mapping delivery stages on a glass wall"
              fill
              sizes="(max-width: 1380px) 100vw, 1320px"
              placeholder="blur"
            />
          </div>
          <div className="gl-banner__veil" aria-hidden="true" />
          <figcaption className="gl-banner__cap">
            <p>Three human gates on every engagement</p>
            <ul>
              {gates.map((g, i) => (
                <li key={g} style={{ ["--i" as string]: i }}>
                  <span aria-hidden="true">
                    <Icon n="shield" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>

        <ol className="gl-steps" data-steps>
          {principles.map((p, i) => (
            <li key={p.title} className="gl-step" style={{ ["--i" as string]: i }}>
              <span className="gl-step__node" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="gl-models">
          <div className="gl-models__head gl-rv">
            <p className="gl-eyebrow">Ways to work with us</p>
            <p className="gl-models__sub">Three engagement models, one standard of delivery.</p>
          </div>
          <div className="gl-models__grid">
            {models.map((m, i) => (
              <article
                key={m.name}
                className={`gl-model gl-lit gl-rv${i === 1 ? " gl-model--feature" : ""}`}
                style={{ ["--d" as string]: `${i * 0.08}s` }}
              >
                {i === 1 && <span className="gl-model__flag">AI-accelerated</span>}
                <span className="gl-model__ic">
                  <Icon n={modelExtras[i].icon} />
                </span>
                <h3 className="gl-h3">{m.name}</h3>
                <p>{m.text}</p>
                <p className="gl-model__best">
                  <small>Best when</small>
                  {modelExtras[i].best}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
