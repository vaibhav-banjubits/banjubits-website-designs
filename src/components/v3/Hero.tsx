import type { CSSProperties } from "react";
import { Icon } from "./Icon";

/**
 * Deliberately quiet: one headline, one sentence, two actions and a single
 * object to look at. The proof points live in the bento that follows.
 */
export function Hero() {
  return (
    <section className="dh-hero" id="top">
      <div className="dh-hero__bg" aria-hidden="true">
        <div className="dh-hero__aurora" />
        <div className="dh-hero__vignette" />
      </div>

      <div className="dh-hero__in">
        <div className="dh-hero__copy">
          <p className="dh-kicker dh-rv">AI engineering &amp; product studio</p>
          <h1
            className="dh-hero__title dh-rv"
            style={{ "--d": ".1s" } as CSSProperties}
          >
            Where AI ideas become <em>production systems.</em>
          </h1>
          <p
            className="dh-hero__lede dh-rv"
            style={{ "--d": ".2s" } as CSSProperties}
          >
            We design, build and ship AI systems, digital products and cloud
            platforms for enterprises and growing companies, governed from the
            first prototype.
          </p>
          <div
            className="dh-hero__cta dh-rv"
            style={{ "--d": ".3s" } as CSSProperties}
          >
            <a href="#contact" className="dh-btn">
              <span>Start a project</span>
              <span className="dh-btn__chip">
                <Icon n="arrow-right" />
              </span>
            </a>
            <a href="#work" className="dh-btn dh-btn--ghost">
              <span>See our work</span>
              <span className="dh-btn__chip dh-btn__chip--ghost">
                <Icon n="arrow-up-right" />
              </span>
            </a>
          </div>
        </div>

        {/* A pearl held by two hairline orbits. Decorative; tilts with the pointer. */}
        <div
          className="dh-orb dh-rv"
          style={{ "--d": ".25s" } as CSSProperties}
          aria-hidden="true"
        >
          <div className="dh-orb__halo" />
          <div className="dh-orb__stage">
            <div className="dh-ring dh-ring--a">
              <svg viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="262" className="dh-ring__line" />
                <circle cx="300" cy="300" r="250" className="dh-ring__dots" />
                <circle cx="562" cy="300" r="5" className="dh-ring__sat" />
              </svg>
            </div>
            <div className="dh-ring dh-ring--b">
              <svg viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="222" className="dh-ring__line" />
                <circle cx="78" cy="300" r="4" className="dh-ring__sat" />
              </svg>
            </div>
            <div className="dh-core">
              <span className="dh-core__spark" />
              <span className="dh-core__ring" />
            </div>
          </div>
        </div>
      </div>

      <div className="dh-hero__foot dh-wrap">
        <a href="#about" className="dh-scroll">
          <i aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
