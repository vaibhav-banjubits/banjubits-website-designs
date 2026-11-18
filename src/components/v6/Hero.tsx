import Image from "next/image";
import { Fragment } from "react";
import { sectors } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";

/** Splits a phrase into words that rise in one after another (CSS only, no JS needed). */
function Words({ text, start = 0, em = false }: { text: string; start?: number; em?: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className={`gl-w${em ? " gl-w--em" : ""}`} style={{ ["--i" as string]: start + i }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}

const RECENT = [
  {
    sector: "Financial services",
    title: "Voice AI for first-line banking calls",
    photo: img.caseVoice,
    alt: "Contact-centre specialist working alongside an AI call console",
  },
  {
    sector: "Workforce development",
    title: "Cited AI answers in one decision platform",
    photo: img.industryWorkforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
  },
];

export function Hero() {
  return (
    <section className="gl-hero" id="top" aria-labelledby="gl-hero-title">
      <div className="gl-hero__glow" aria-hidden="true" />
      <div className="gl-wrap">
        <div className="gl-hero__head">
          <p className="gl-chip gl-up" style={{ ["--d" as string]: "0.05s" }}>
            <i aria-hidden="true" />
            AI engineering &amp; product studio
          </p>

          <h1 id="gl-hero-title" className="gl-hero__title">
            <Words text="Engineering AI that" />{" "}
            <Words text="earns its place" start={4} em />{" "}
            <Words text="in production." start={7} />
          </h1>

          <div className="gl-hero__sub">
            <div className="gl-hero__copy gl-up" style={{ ["--d" as string]: "0.75s" }}>
              <p className="gl-hero__lede">
                We design, build and govern AI systems, digital products and cloud platforms for
                enterprises and growing companies, with review gates built in from the first
                prototype.
              </p>
              <div className="gl-hero__ctas">
                <a href="#contact" className="gl-btn gl-btn--ink">
                  Start a project
                  <span className="gl-btn__ic">
                    <Icon n="arrow" />
                  </span>
                </a>
                <a href="#work" className="gl-btn gl-btn--ghost">
                  See our work
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gl-stage">
          {/* Featured engagement */}
          <a
            href="#work"
            className="gl-feat gl-lit gl-unmask"
            aria-label="Featured engagement: seven siloed assistants, one governed front door. View the work."
          >
            <div className="gl-par" data-par="0.07">
              <Image
                src={img.caseOrchestration}
                alt="Team reviewing a live agent-orchestration dashboard on a wall display"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 840px"
                placeholder="blur"
                className="gl-feat__img"
              />
            </div>
            <div className="gl-feat__veil" aria-hidden="true" />
            <div className="gl-feat__top">
              <span className="gl-glass-chip">Featured engagement</span>
              <span className="gl-live">
                <i aria-hidden="true" />
                In production
              </span>
            </div>
            <div className="gl-feat__panel">
              <div className="gl-feat__text">
                <p className="gl-feat__meta">Global technology company · Agent orchestration</p>
                <p className="gl-feat__title">Seven siloed assistants, one governed front door.</p>
              </div>
              <div className="gl-feat__aside">
                <p className="gl-feat__metric">
                  <b>7→1</b>
                  <span>assistants unified</span>
                </p>
                <span className="gl-go" aria-hidden="true">
                  <Icon n="arrow-ur" />
                </span>
              </div>
            </div>
          </a>

          {/* Outcome ring */}
          <div className="gl-stat gl-up" style={{ ["--d" as string]: "0.55s" }}>
            <div className="gl-stat__top">
              <span className="gl-stat__kicker">Outcome</span>
              <span className="gl-stat__tag">Legacy cutover</span>
            </div>
            <div className="gl-stat__body">
              <div className="gl-ring" data-ring>
                <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
                  <circle className="gl-ring__orbit" cx="60" cy="60" r="57" />
                  <circle className="gl-ring__track" cx="60" cy="60" r="48" />
                  <circle className="gl-ring__bar" cx="60" cy="60" r="48" pathLength="100" />
                </svg>
                <span className="gl-ring__num">
                  <span data-count="100">100</span>
                  <small>%</small>
                </span>
              </div>
              <p className="gl-stat__text">
                Scoring parity validated before a legacy system cutover.
              </p>
            </div>
          </div>

          {/* More work */}
          <div className="gl-recent gl-up" style={{ ["--d" as string]: "0.7s" }}>
            <div className="gl-recent__head">
              <span>More recent work</span>
              <a href="#work" className="gl-link">
                View all <Icon n="arrow" />
              </a>
            </div>
            <ul>
              {RECENT.map((r) => (
                <li key={r.title}>
                  <a href="#work" className="gl-recent__item">
                    <span className="gl-recent__thumb">
                      <Image
                        src={r.photo}
                        alt={r.alt}
                        fill
                        sizes="96px"
                        placeholder="blur"
                      />
                    </span>
                    <span className="gl-recent__text">
                      <small>{r.sector}</small>
                      {r.title}
                    </span>
                    <span className="gl-recent__go" aria-hidden="true">
                      <Icon n="arrow-ur" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sector ticker */}
      <div className="gl-mq gl-up" style={{ ["--d" as string]: "1.05s" }}>
        <div className="gl-wrap gl-mq__in">
          <p className="gl-mq__label">Sectors we deliver in</p>
          <div className="gl-mq__view">
            <div className="gl-mq__track">
              {[0, 1].map((dup) => (
                <ul key={dup} aria-hidden={dup === 1 || undefined}>
                  {sectors.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
