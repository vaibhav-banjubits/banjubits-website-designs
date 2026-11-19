import type { CSSProperties } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { industries, why } from "./data";
import { img } from "./images";

export function Why() {
  return (
    <section className="dh-sec dh-why" id="why">
      <div className="dh-wrap">
        <div className="dh-why__slab">
          <Image src={img["team-screen"]} alt="" fill sizes="1240px" className="dh-why__img" />
          <div className="dh-why__shade" aria-hidden="true" />
          <div className="dh-why__grid">
            <div className="dh-why__lead">
              <h2 className="dh-h2 dh-rv">
                Why teams <span>choose us.</span>
              </h2>
              <p className="dh-sub dh-rv">{industries.join(" · ")}</p>
            </div>
            <ul className="dh-why__list">
              {why.map((w, i) => (
                <li key={w.title} className="dh-rv" style={{ "--d": `${(i % 2) * 0.08}s` } as CSSProperties}>
                  <span className="dh-why__ic">
                    <Icon n={w.icon} />
                  </span>
                  <h3>{w.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
