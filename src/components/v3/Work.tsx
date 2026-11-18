import type { CSSProperties } from "react";
import { Cases } from "./Cases";

export function Work() {
  return (
    <section className="dh-sec dh-sec--dark dh-work" id="work">
      <div className="dh-work__glow" aria-hidden="true" />
      <div className="dh-wrap">
        <header className="dh-shead dh-shead--dark">
          <p className="dh-pill dh-pill--dark dh-rv">
            <i className="dh-dot" />
            Selected work
          </p>
          <div>
            <h2 className="dh-display dh-display--light dh-rv">
              Different sectors. Different systems.{" "}
              <em>Measurable outcomes.</em>
            </h2>
            <p
              className="dh-lede dh-lede--dark dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              Every engagement starts from a different place. Here is how
              connected thinking and controlled delivery moved four
              organisations closer to production.
            </p>
          </div>
        </header>
      </div>
      <Cases />
    </section>
  );
}
