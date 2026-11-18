import Image from "next/image";
import type { CSSProperties } from "react";
import { img } from "./images";
import { Icon } from "./Icon";

export function Belief() {
  return (
    <section className="dh-sec dh-sec--light dh-sec--tight dh-belief">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot"></i>What we believe
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              Behind every system is a <em>simple belief.</em>
            </h2>
          </div>
        </header>
        <div className="dh-belief__grid">
          <div className="dh-polaroids dh-rv" aria-hidden="true">
            <figure className="dh-pol dh-pol--1">
              <Image
                src={img["workshop"]}
                alt=""
                sizes="(max-width: 860px) 45vw, 340px"
              />
              <figcaption>Build</figcaption>
            </figure>
            <figure className="dh-pol dh-pol--2">
              <Image
                src={img["ops-floor"]}
                alt=""
                sizes="(max-width: 860px) 45vw, 340px"
              />
              <figcaption>Run</figcaption>
            </figure>
          </div>
          <div
            className="dh-belief__txt dh-rv"
            style={{ "--d": ".1s" } as CSSProperties}
          >
            <blockquote>
              <Icon n="quote" className="dh-qmark" />A demo proves an idea.
              Production proves the engineering, and production is the only
              place AI starts paying for itself.
            </blockquote>
            <p>
              Banjubits exists because of a pattern we keep seeing across
              industries. Capable teams invest in AI, yet too many pilots never
              reach the people who need them. The problem was rarely ambition.
              It was the missing path from prototype to a system that is
              governed, observable and owned.
            </p>
            <p>
              That is why we build the review gates in, keep every change
              controlled, and hand over properly. When delivery is deliberate,
              AI stops being an experiment and becomes part of how the
              organisation works.
            </p>
            <p className="dh-sign">
              <b>The Banjubits studio</b>AI engineering &amp; product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
