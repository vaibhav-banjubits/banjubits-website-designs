import type { CSSProperties } from "react";
import { Products } from "./Products";

export function ProductsSection() {
  return (
    <section className="dh-sec dh-sec--light" id="products">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot" />
            Our products
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              Meet Mentis, our <em>own AI products.</em>
            </h2>
            <p
              className="dh-lede dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              We build products as well as client systems. Mentis is where we
              put our approach to work, with humans in control at every
              important step.
            </p>
          </div>
        </header>
        <Products />
      </div>
    </section>
  );
}
