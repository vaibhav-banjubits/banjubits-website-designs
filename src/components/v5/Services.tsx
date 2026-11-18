import Image from "next/image";
import { services } from "@/lib/content";
import { Icon } from "./Icon";

const ICONS = ["spark", "grid", "cloud", "flow"];
const CTAS = ["Plan an AI system", "Scope a product", "Review your platform", "Map a workflow"];

export function Services() {
  return (
    <section className="lx-sec lx-sec--stone lx-svc" id="services" aria-labelledby="lx-svc-title">
      <div className="lx-wrap">
        <header className="lx-head lx-head--center">
          <p className="lx-eyebrow lx-rv">
            <span className="lx-eyebrow__rule" aria-hidden="true" />
            Capabilities
            <span className="lx-eyebrow__rule" aria-hidden="true" />
          </p>
          <h2 id="lx-svc-title" className="lx-h2 lx-rv" style={{ ["--d" as string]: ".06s" }}>
            Four disciplines. <span className="lx-soft">One accountable team.</span>
          </h2>
          <p className="lx-lede lx-rv" style={{ ["--d" as string]: ".12s" }}>
            From the first model to the platform it runs on, we cover the whole path to
            production, so nothing important falls between vendors.
          </p>
        </header>

        <div className="lx-cards">
          {services.map((s, i) => (
            <article key={s.title} className="lx-card lx-lit lx-rv" style={{ ["--d" as string]: `${(i % 2) * 0.08}s` }}>
              <div className="lx-card__media">
                <Image src={s.image} alt="" fill sizes="(max-width: 860px) 100vw, 640px" placeholder="blur" />
                <span className="lx-card__icon" aria-hidden="true">
                  <Icon n={ICONS[i]} />
                </span>
              </div>
              <div className="lx-card__body">
                <div className="lx-card__row">
                  <h3 className="lx-card__title">{s.title}</h3>
                  <span className="lx-card__no">0{i + 1}</span>
                </div>
                <p className="lx-card__text">{s.text}</p>
                <ul className="lx-card__list">
                  {s.items.map((it) => (
                    <li key={it}>
                      <Icon n="check" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="lx-link">
                  {CTAS[i]} <Icon n="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
