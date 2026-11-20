import Image from "next/image";
import { sectors, stats } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";

const TITLE = ["Ship", "AI", "that", "holds", "up", "in"];

// Headline figures under the hero. The number is the count-up target; text around it stays in markup.
const FIGURES = [
  { text: "7→1" },
  { pre: "≥", n: 95, post: "%" },
  { n: 100, post: "%" },
  { n: 50, post: "k+" },
];
// stats in content.ts are ordered 7→1, ≥95%, 50k+, 100%
const LABEL = [stats[0].label, stats[1].label, stats[3].label, stats[2].label];

const BADGE_TEXT = "PLAN • BUILD • REVIEW • SHIP • ";

export function Intro() {
  const loop = [...sectors, ...sectors];
  return (
    <section className="rt-hero" id="top" aria-labelledby="rt-hero-title">
      <div className="rt-wrap">
        <div className="rt-hero__grid">
          <div className="rt-hero__copy">
            <p className="rt-kicker rt-kicker--live rt-fade">
              <i />
              AI engineering &amp; product studio
            </p>
            <h1 id="rt-hero-title" className="rt-hero__title">
              {TITLE.map((w, i) => (
                <span key={w + i}>
                  <span className="rt-w" style={{ ["--i" as string]: i }}>
                    {w}
                  </span>{" "}
                </span>
              ))}
              <span className="rt-w rt-hero__em" style={{ ["--i" as string]: TITLE.length }}>
                production
                <svg className="rt-swash" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 9 C 70 2, 170 2, 297 8" pathLength="100" />
                </svg>
              </span>
              <span className="rt-w" style={{ ["--i" as string]: TITLE.length + 1 }}>
                .
              </span>
            </h1>
            <p className="rt-hero__lede rt-fade" style={{ ["--d" as string]: "0.75s" }}>
              Banjubits designs, builds and governs AI systems, digital products and cloud platforms
              for enterprises and growing companies, with review gates built in and a proper
              handover at the end.
            </p>
            <div className="rt-ctas rt-fade" style={{ ["--d" as string]: "0.9s" }}>
              <a href="#contact" className="rt-btn">
                Start a project
                <span className="rt-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <a href="#work" className="rt-btn rt-btn--ghost">
                See our work
              </a>
            </div>
            <ul className="rt-hero__facts rt-fade" style={{ ["--d" as string]: "1.05s" }}>
              <li>
                <Icon n="check" />
                Review gates built in
              </li>
              <li>
                <Icon n="check" />
                A person approves every release
              </li>
              <li>
                <Icon n="check" />
                Full handover
              </li>
            </ul>
          </div>

          <div className="rt-art" aria-hidden="true">
            <svg className="rt-art__orbit" viewBox="-300 -300 600 600" role="presentation">
              <circle r="290" className="o1" />
              <circle r="236" className="o2" />
              <g className="rt-art__spin">
                <circle r="290" fill="none" stroke="none" />
                <circle cx="290" cy="0" r="7" className="dot" />
                <circle cx="-205" cy="-205" r="4.5" className="dot" />
              </g>
              <g className="rt-art__spin rt-art__spin--rev">
                <circle cx="0" cy="-236" r="6" className="dot" />
                <circle cx="167" cy="167" r="4" className="dot" />
              </g>
            </svg>
            <div className="rt-art__disc" />
            <div className="rt-art__photo">
              <Image
                src={img.workingSession}
                alt=""
                fill
                priority
                sizes="(max-width: 1000px) 80vw, 420px"
                placeholder="blur"
                style={{ objectPosition: "27% 50%" }}
              />
            </div>

            <div className="rt-fc rt-fc--a">
              <span className="rt-fc__ic">
                <Icon n="shield" />
              </span>
              <div>
                <small>Gate 02 · Code review</small>
                <b>Approved by a person</b>
              </div>
            </div>

            <div className="rt-fc rt-fc--b">
              <b>≥95%</b>
              <span>of AI answers cited back to source</span>
              <i />
            </div>

            <div className="rt-fc rt-fc--c">
              <div className="rt-route-mini">
                <span />
                <em />
                <span />
                <em />
                <span>
                  <Icon n="check" />
                </span>
              </div>
              <div>
                <span>Plan</span>
                <span>Build</span>
                <span>In production</span>
              </div>
            </div>

            <a href="#approach" className="rt-badge" tabIndex={-1}>
              <svg viewBox="0 0 128 128" aria-hidden="true">
                <defs>
                  <path id="rt-badge-path" d="M64 64 m-47 0 a47 47 0 1 1 94 0 a47 47 0 1 1 -94 0" />
                </defs>
                <text>
                  <textPath href="#rt-badge-path" textLength="295" lengthAdjust="spacing">
                    {BADGE_TEXT}
                  </textPath>
                </text>
              </svg>
              <span className="rt-badge__go">
                <Icon n="arrow-ur" />
              </span>
            </a>
          </div>
        </div>

        <div className="rt-stripe rt-rv">
          {FIGURES.map((f, i) => (
            <div key={i}>
              <p className="rt-big">
                {f.text ?? (
                  <>
                    {f.pre}
                    <span data-count={f.n}>{f.n}</span>
                    <span className="u">{f.post}</span>
                  </>
                )}
              </p>
              <p>{LABEL[i]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rt-marq" aria-label="Sectors we build for">
        <p className="rt-marq__label">Sectors we build for</p>
        <div className="rt-marq__view">
          <ul className="rt-marq__track">
            {loop.map((s, i) => (
              <li key={i} aria-hidden={i >= sectors.length || undefined}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
