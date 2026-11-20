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
    <section className="rh-hero" id="top" aria-labelledby="rh-hero-title">
      <div className="rh-wrap">
        <div className="rh-hero__grid">
          <div className="rh-hero__copy">
            <p className="rh-kicker rh-kicker--live rh-fade">
              <i />
              AI engineering &amp; product studio
            </p>
            <h1 id="rh-hero-title" className="rh-hero__title">
              {TITLE.map((w, i) => (
                <span key={w + i}>
                  <span className="rh-w" style={{ ["--i" as string]: i }}>
                    {w}
                  </span>{" "}
                </span>
              ))}
              <span className="rh-w rh-hero__em" style={{ ["--i" as string]: TITLE.length }}>
                production
                <svg className="rh-swash" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 9 C 70 2, 170 2, 297 8" pathLength="100" />
                </svg>
              </span>
              <span className="rh-w" style={{ ["--i" as string]: TITLE.length + 1 }}>
                .
              </span>
            </h1>
            <p className="rh-hero__lede rh-fade" style={{ ["--d" as string]: "0.75s" }}>
              Banjubits designs, builds and governs AI systems, digital products and cloud platforms
              for enterprises and growing companies, with review gates built in and a proper
              handover at the end.
            </p>
            <div className="rh-ctas rh-fade" style={{ ["--d" as string]: "0.9s" }}>
              <a href="#contact" className="rh-btn">
                Start a project
                <span className="rh-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <a href="#work" className="rh-btn rh-btn--ghost">
                See our work
              </a>
            </div>
            <ul className="rh-hero__facts rh-fade" style={{ ["--d" as string]: "1.05s" }}>
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

          <div className="rh-art" aria-hidden="true">
            <svg className="rh-art__orbit" viewBox="-300 -300 600 600" role="presentation">
              <circle r="290" className="o1" />
              <circle r="236" className="o2" />
              <g className="rh-art__spin">
                <circle r="290" fill="none" stroke="none" />
                <circle cx="290" cy="0" r="7" className="dot" />
                <circle cx="-205" cy="-205" r="4.5" className="dot" />
              </g>
              <g className="rh-art__spin rh-art__spin--rev">
                <circle cx="0" cy="-236" r="6" className="dot" />
                <circle cx="167" cy="167" r="4" className="dot" />
              </g>
            </svg>
            <div className="rh-art__disc" />
            <div className="rh-art__photo">
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

            <div className="rh-fc rh-fc--a">
              <span className="rh-fc__ic">
                <Icon n="shield" />
              </span>
              <div>
                <small>Gate 02 · Code review</small>
                <b>Approved by a person</b>
              </div>
            </div>

            <div className="rh-fc rh-fc--b">
              <b>≥95%</b>
              <span>of AI answers cited back to source</span>
              <i />
            </div>

            <div className="rh-fc rh-fc--c">
              <div className="rh-route-mini">
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

            <a href="#approach" className="rh-badge" tabIndex={-1}>
              <svg viewBox="0 0 128 128" aria-hidden="true">
                <defs>
                  <path id="rh-badge-path" d="M64 64 m-47 0 a47 47 0 1 1 94 0 a47 47 0 1 1 -94 0" />
                </defs>
                <text>
                  <textPath href="#rh-badge-path" textLength="295" lengthAdjust="spacing">
                    {BADGE_TEXT}
                  </textPath>
                </text>
              </svg>
              <span className="rh-badge__go">
                <Icon n="arrow-ur" />
              </span>
            </a>
          </div>
        </div>

        <div className="rh-stripe rh-rv">
          {FIGURES.map((f, i) => (
            <div key={i}>
              <p className="rh-big">
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

      <div className="rh-marq" aria-label="Sectors we build for">
        <p className="rh-marq__label">Sectors we build for</p>
        <div className="rh-marq__view">
          <ul className="rh-marq__track">
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
