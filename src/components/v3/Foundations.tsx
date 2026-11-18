import type { CSSProperties } from "react";
import { Icon } from "./Icon";

// Radar-dial tick marks: a long tick every 30 degrees, short ticks every 5.
const TICKS = Array.from({ length: 72 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180;
  const r1 = 186;
  const r2 = i % 6 === 0 ? 172 : 179;
  const p = (r: number) =>
    `${(200 + Math.sin(a) * r).toFixed(1)} ${(200 - Math.cos(a) * r).toFixed(1)}`;
  return `M${p(r1)}L${p(r2)}`;
}).join("");

export function Foundations() {
  return (
    <section className="dh-sec dh-sec--light" id="standard">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot"></i>Engineering standard
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              Every production system stands on <em>four foundations.</em>
            </h2>
            <p
              className="dh-lede dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              Shipping AI is not about doing more. It is about making every
              decision move in the same direction, so what you launch is
              governed, verifiable and yours to run.
            </p>
          </div>
        </header>

        <div className="dh-found">
          <article className="dh-fcard dh-fcard--l1 dh-rv">
            <span className="dh-fcard__ic">
              <Icon n="shield-check" />
            </span>
            <h3>Governed</h3>
            <span className="dh-fcard__tag">01</span>
            <p>
              Plan, code-review and deploy gates are part of delivery from day
              one. <b>If governance arrives late, the launch stalls.</b>
            </p>
          </article>
          <article
            className="dh-fcard dh-fcard--l2 dh-rv"
            style={{ "--d": ".06s" } as CSSProperties}
          >
            <span className="dh-fcard__ic">
              <Icon n="file-search" />
            </span>
            <h3>Grounded</h3>
            <span className="dh-fcard__tag">02</span>
            <p>
              Answers cite their source, so people can check what the AI says.{" "}
              <b>If it cannot be verified, it should not be trusted.</b>
            </p>
          </article>
          <div className="dh-dial" aria-hidden="true">
            <svg viewBox="0 0 400 400">
              <defs>
                <radialGradient id="dh-dg" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0"
                    style={{ stopColor: "var(--mint)" }}
                    stopOpacity=".28"
                  />
                  <stop
                    offset="1"
                    style={{ stopColor: "var(--mint)" }}
                    stopOpacity="0"
                  />
                </radialGradient>
                <linearGradient id="dh-sw" x1="0" y1="0" x2="1" y2="0">
                  <stop
                    offset="0"
                    style={{ stopColor: "var(--mint-3)" }}
                    stopOpacity="0"
                  />
                  <stop
                    offset="1"
                    style={{ stopColor: "var(--mint-3)" }}
                    stopOpacity=".55"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="200"
                cy="200"
                r="196"
                style={{ fill: "var(--card)" }}
              />
              <circle cx="200" cy="200" r="150" fill="url(#dh-dg)" />
              <g className="dh-dial__rings" fill="none" stroke="currentColor">
                <circle cx="200" cy="200" r="150" opacity=".22" />
                <circle cx="200" cy="200" r="104" opacity=".22" />
                <circle cx="200" cy="200" r="58" opacity=".22" />
              </g>
              <path
                d={TICKS}
                stroke="currentColor"
                strokeWidth="1.2"
                opacity=".5"
              />
              <path d="M200 200V16" stroke="currentColor" opacity=".18" />
              <path d="M200 200H384" stroke="currentColor" opacity=".18" />
              <path d="M200 200V384" stroke="currentColor" opacity=".18" />
              <path d="M200 200H16" stroke="currentColor" opacity=".18" />
              <g className="dh-dial__sweep">
                <path
                  d="M200 200 L200 30 A170 170 0 0 1 320 80 Z"
                  fill="url(#dh-sw)"
                />
                <path
                  d="M200 200V30"
                  style={{ stroke: "var(--mint-3)" }}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </g>
              <g className="dh-dial__nodes" style={{ fill: "var(--ink)" }}>
                <circle cx="200" cy="64" r="6" />
                <circle cx="336" cy="200" r="6" />
                <circle cx="200" cy="336" r="6" />
                <circle cx="64" cy="200" r="6" />
              </g>
              <circle cx="200" cy="200" r="10" style={{ fill: "var(--ink)" }} />
              <circle cx="200" cy="200" r="4" style={{ fill: "var(--mint)" }} />
              <g
                fontSize="15"
                fontWeight="600"
                style={{ fontFamily: "var(--f-display)", fill: "var(--ink)" }}
                textAnchor="middle"
              >
                <text x="200" y="40">
                  GOVERN
                </text>
                <text x="372" y="205">
                  OWN
                </text>
                <text x="200" y="372">
                  SEE
                </text>
                <text x="28" y="205">
                  PROVE
                </text>
              </g>
            </svg>
          </div>
          <article
            className="dh-fcard dh-fcard--r1 dh-rv"
            style={{ "--d": ".1s" } as CSSProperties}
          >
            <span className="dh-fcard__ic">
              <Icon n="eye" />
            </span>
            <h3>Observable</h3>
            <span className="dh-fcard__tag">03</span>
            <p>
              Access, deployment and change decisions stay controlled,
              reviewable and auditable.{" "}
              <b>You can always see what happened and why.</b>
            </p>
          </article>
          <article
            className="dh-fcard dh-fcard--r2 dh-rv"
            style={{ "--d": ".16s" } as CSSProperties}
          >
            <span className="dh-fcard__ic">
              <Icon n="handshake" />
            </span>
            <h3>Owned</h3>
            <span className="dh-fcard__tag">04</span>
            <p>
              We build for the people who will operate the system, with the
              documentation to match.{" "}
              <b>Handover is a deliverable, not an afterthought.</b>
            </p>
          </article>
        </div>

        <div className="dh-cta-row dh-rv">
          <span>See how a delivery runs, end to end.</span>
          <a href="#process" className="dh-btn">
            <span>View our approach</span>
            <span className="dh-btn__chip">
              <Icon n="arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
