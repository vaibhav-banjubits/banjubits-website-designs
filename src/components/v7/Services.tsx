import Image from "next/image";
import { services } from "@/lib/content";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section className="rt-sec rt-stone" id="services" aria-labelledby="rt-svc-title">
      <div className="rt-wrap">
        <div className="rt-head rt-rv">
          <div>
            <p className="rt-kicker">
              <i />
              What we do
            </p>
            <h2 id="rt-svc-title" className="rt-h2">
              Choose the right path. <em>Every destination needs a different route</em>
            </h2>
          </div>
          <div className="rt-head__aside">
            <p>
              Four practices, one delivery model. Start with the one closest to your problem and
              widen from there.
            </p>
            <a href="#contact" className="rt-btn rt-btn--ink">
              Talk to an engineer
              <span className="rt-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
          </div>
        </div>

        <ol className="rt-svcs">
          {services.map((s, i) => (
            <li key={s.title} className="rt-svc rt-rv">
              <div className="rt-svc__body">
                <p className="rt-card__no">0{i + 1}</p>
                <h3 className="rt-h3 rt-h3--lg">{s.title}</h3>
                <p className="rt-svc__text">{s.text}</p>
                <ul className="rt-list">
                  {s.items.map((it) => (
                    <li key={it}>
                      <Icon n="check" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="rt-link">
                  Explore {s.title.toLowerCase()}
                  <Icon n="arrow" />
                </a>
              </div>
              <div className="rt-svc__media">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  placeholder="blur"
                />
                <span className="rt-chip">{s.items[0]}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
