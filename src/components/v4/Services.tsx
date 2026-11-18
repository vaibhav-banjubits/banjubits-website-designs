import Image from "next/image";
import { services } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";
import { SecHead } from "./Studio";

const PHOTOS = [img.curveGlass, img.handsLaptop, img.brutalBlocks, img.towersUp];

/** Capability index. On pointer devices a photo slides in beside the hovered row. */
export function Services() {
  return (
    <section className="sg-sec sg-services" id="services" aria-labelledby="sg-svc-title">
      <div className="sg-wrap">
        <SecHead n="02" label="Capabilities" aside="Four practices, one accountable team" />
        <div className="sg-split">
          <h2 id="sg-svc-title" className="sg-h2 sg-rv">
            Everything it takes to move AI <em>into production.</em>
          </h2>
          <p className="sg-lede sg-rv">
            Most programmes need more than one of these at once. One team carries them from
            discovery to production, so nothing gets lost between vendors.
          </p>
        </div>

        <ol className="sg-caps">
          {services.map((s, i) => (
            <li key={s.title} className="sg-cap sg-rv">
              <a href="#contact" className="sg-cap__link">
                <span className="sg-cap__num">({String(i + 1).padStart(2, "0")})</span>
                <h3 className="sg-cap__title">{s.title}</h3>
                <div className="sg-cap__body">
                  <p>{s.text}</p>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                <span className="sg-cap__go" aria-hidden="true">
                  <Icon n="arrow-ur" />
                </span>
                <span className="sg-cap__img" aria-hidden="true">
                  <Image src={PHOTOS[i]} alt="" fill sizes="280px" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
