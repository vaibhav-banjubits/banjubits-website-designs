import Image from "next/image";
import { Icon } from "./Icon";
import { Metric } from "./Metric";
import { img } from "./images";

const LINES = ["AI systems built", "to the standard your", "business is held to."];

export function Hero() {
  return (
    <section className="lx-hero" id="top" aria-labelledby="lx-hero-title">
      <div className="lx-wrap">
        <div className="lx-hero__top">
          <div className="lx-hero__copy">
            <p className="lx-eyebrow lx-hero__eyebrow">
              <span className="lx-eyebrow__rule" aria-hidden="true" />
              AI engineering &amp; product studio
            </p>
            <h1 id="lx-hero-title" className="lx-hero__title">
              {LINES.map((l, i) => (
                <span key={l} className="lx-line" style={{ ["--i" as string]: i }}>
                  <span>{i === LINES.length - 1 ? <>business is <em>held to.</em></> : l}</span>
                </span>
              ))}
            </h1>
          </div>

          <div className="lx-hero__side">
            <p className="lx-hero__lede">
              We design, build and govern AI systems, digital products and cloud platforms for
              enterprises and growing companies, with review gates built in from the first prototype.
            </p>
            <div className="lx-hero__ctas">
              <a href="#contact" className="lx-btn lx-btn--ink">
                Start a project <Icon n="arrow" />
              </a>
              <a href="#work" className="lx-btn lx-btn--ghost">
                Explore our work
              </a>
            </div>
          </div>
        </div>

        <div className="lx-hero__stage">
          <div className="lx-hero__media">
            <Image
              src={img.facadeDusk}
              alt="Glass office façade catching the last light of dusk"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              placeholder="blur"
              className="lx-hero__img"
            />
            <div className="lx-hero__veil" aria-hidden="true" />
          </div>

          <a href="#work" className="lx-feature lx-glass" aria-label="Featured engagement: seven siloed assistants, one governed front door. View the case.">
            <div className="lx-feature__head">
              <span className="lx-live">
                <i aria-hidden="true" />
                In production
              </span>
              <span className="lx-feature__kicker">Featured engagement</span>
            </div>
            <p className="lx-feature__title">Seven siloed assistants, one governed front door.</p>
            <div className="lx-feature__foot">
              <div className="lx-feature__metric">
                <strong>
                  <Metric v="7→1" />
                </strong>
                <span>AI assistants unified</span>
              </div>
              <span className="lx-feature__go" aria-hidden="true">
                <Icon n="arrow-ur" />
              </span>
            </div>
            <p className="lx-feature__meta">Global technology company · Agent orchestration</p>
          </a>

          <a href="#proof" className="lx-scrollcue" aria-label="Scroll to our track record">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="lx-cue-path" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
              </defs>
              <text>
                <textPath href="#lx-cue-path" textLength="270" lengthAdjust="spacing">
                  Scroll to explore · Selected work ·
                </textPath>
              </text>
            </svg>
            <span className="lx-scrollcue__arrow">
              <Icon n="arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
