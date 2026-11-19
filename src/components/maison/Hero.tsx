import type { CSSProperties } from "react";
import { productCopy, products, promises } from "./data";
import { HeroOrb } from "./HeroOrb";
import { Icon } from "./Icon";

/**
 * Product-led: the headline says what we do in plain words, and the six Mentis
 * products are on the first screen, orbiting the pearl.
 */
export function Hero() {
  return (
    <section className="mn-hero" id="top">
      <div className="mn-hero__bg" aria-hidden="true">
        <div className="mn-hero__aurora" />
        <div className="mn-hero__vignette" />
      </div>

      <div className="mn-hero__in">
        <div className="mn-hero__copy">
          <p className="mn-kicker mn-rv">Mentis · AI accelerators by Banjubits</p>
          <h1
            className="mn-hero__title mn-rv"
            style={{ "--d": ".1s" } as CSSProperties}
          >
            We put AI to work <em>inside your business.</em>
          </h1>
          <p
            className="mn-hero__lede mn-rv"
            style={{ "--d": ".2s" } as CSSProperties}
          >
            Six ready-to-deploy products, proven in enterprise delivery. Pick the
            problem. We get you to a working pilot in weeks.
          </p>
          <div
            className="mn-hero__cta mn-rv"
            style={{ "--d": ".3s" } as CSSProperties}
          >
            <a href="#products" className="mn-btn">
              <span>Explore the products</span>
              <span className="mn-btn__chip">
                <Icon n="arrow-right" />
              </span>
            </a>
            <a href="#contact" className="mn-btn mn-btn--ghost">
              <span>Book a session</span>
              <span className="mn-btn__chip mn-btn__chip--ghost">
                <Icon n="arrow-up-right" />
              </span>
            </a>
          </div>

          {/* Phones: the orb gives way to a plain two-column list of products. */}
          <ul className="mn-herochips mn-rv" style={{ "--d": ".4s" } as CSSProperties}>
            {products.map((p) => (
              <li key={p.id}>
                <a href="#products">
                  <Icon n={p.icon} />
                  <span>
                    {p.short}
                    <small>{productCopy[p.id].task}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <HeroOrb />
      </div>

      <div className="mn-hero__foot mn-wrap">
        <ul className="mn-promises">
          {promises.map((p) => (
            <li key={p.title}>
              <Icon n={p.icon} />
              {p.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
