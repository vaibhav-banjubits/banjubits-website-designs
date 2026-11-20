import Image from "next/image";
import { services } from "@/lib/content";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section className="rh-sec rh-stone" id="services" aria-labelledby="rh-svc-title">
      <div className="rh-wrap">
        <div className="rh-head rh-rv">
          <div>
            <p className="rh-kicker">
              <i />
              What we do
            </p>
            <h2 id="rh-svc-title" className="rh-h2">
              Choose the right path. <em>Every destination needs a different route</em>
            </h2>
          </div>
          <div className="rh-head__aside">
            <p>
              Four practices, one delivery model. Start with the one closest to your problem and
              widen from there.
            </p>
            <a href="#contact" className="rh-btn rh-btn--ink">
              Talk to an engineer
              <span className="rh-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
        </div>

        <ol className="rh-svcs">
          {services.map((s, i) => (
            <li key={s.title} className="rh-svc rh-rv">
              <div className="rh-svc__body">
                <p className="rh-card__no">0{i + 1}</p>
                <h3 className="rh-h3 rh-h3--lg">{s.title}</h3>
                <p className="rh-svc__text">{s.text}</p>
                <ul className="rh-list">
                  {s.items.map((it) => (
                    <li key={it}>
                      <Icon n="check" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="rh-link">
                  Explore {s.title.toLowerCase()}
                  <Icon n="arrow" />
                </a>
              </div>
              <div className="rh-svc__media">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  placeholder="blur"
                />
                <span className="rh-chip">{s.items[0]}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
