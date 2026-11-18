import type { CSSProperties } from "react";
import { Services } from "./Services";

export function ServicesSection() {
  return (
    <section className="dh-sec dh-sec--light dh-sec--tight" id="services">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot" />
            Services
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              Four ways we take you from idea to <em>production.</em>
            </h2>
            <p
              className="dh-lede dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              Pick the route that fits where you are. Each one is built around
              how your teams actually work, and each ships with the controls to
              keep it running.
            </p>
          </div>
        </header>
        <Services />
      </div>
    </section>
  );
}
