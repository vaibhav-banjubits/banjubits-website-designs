import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export function Intro() {
  return (
    <section className="dh-sec dh-sec--light dh-intro" id="about">
      <div className="dh-wrap">
        <h2 className="dh-display dh-center dh-rv">
          Helping ambitious teams
          <span className="dh-inline-pill" aria-hidden="true">
            <Icon n="compass" />
          </span>
          ship AI that
          <span
            className="dh-inline-pill dh-inline-pill--wide"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 80 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 22 18 14l10 5 14-13 12 9 20-9" />
              <path d="M62 6h12v10" />
            </svg>
          </span>
          <em>holds up.</em>
        </h2>

        <div className="dh-bento">
          <article className="dh-card dh-card--a dh-rv">
            <p className="dh-card__kicker">One front door, not seven</p>
            <svg
              className="dh-doodle dh-doodle--converge"
              viewBox="0 0 340 228"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle
                cx="92"
                cy="114"
                r="92"
                className="dh-doodle__blob"
                stroke="none"
              />
              <g className="dh-doodle__dots">
                <circle cx="26" cy="24" r="9" />
                <circle cx="26" cy="54" r="9" />
                <circle cx="26" cy="84" r="9" />
                <circle cx="26" cy="114" r="9" />
                <circle cx="26" cy="144" r="9" />
                <circle cx="26" cy="174" r="9" />
                <circle cx="26" cy="204" r="9" />
              </g>
              <path
                className="dh-doodle__flow"
                d="M36 24C120 24 150 104 224 112M36 54C110 54 150 106 224 113M36 84C120 84 160 110 224 115M36 114C130 114 170 118 224 118M36 144C120 144 160 126 224 121M36 174C110 174 160 132 224 123M36 204C110 204 160 138 224 125"
                strokeDasharray="3 6"
              />
              <rect
                x="224"
                y="86"
                width="86"
                height="64"
                rx="20"
                className="dh-doodle__target"
              />
              <path d="m249 118 11 11 22-24" strokeWidth="3" />
              <path d="M302 60l8-12M314 70l12-6M296 52l2-12" opacity=".6" />
            </svg>
            <p className="dh-stat-lg">
              <span data-count="7">7</span>
              <i className="dh-sym">→</i>1
            </p>
            <h3 className="dh-card__title">
              Siloed AI assistants unified behind one governed entry point
            </h3>
          </article>

          <article
            className="dh-card dh-card--b dh-rv"
            style={{ "--d": ".08s" } as CSSProperties}
          >
            <svg className="dh-card__bgicon" aria-hidden="true">
              <use href="#i-shield-check" />
            </svg>
            <p className="dh-stat-md">
              <span className="dh-sym">≥</span>
              <span data-count="95">95</span>%
            </p>
            <h3 className="dh-card__title">
              AI answers grounded and cited back to source
            </h3>
            <svg
              className="dh-spark"
              viewBox="0 0 220 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 32c20 0 22-14 42-14s20 10 40 10 24-20 46-20 26 8 46 8 30-14 44-14" />
            </svg>
          </article>

          <article
            className="dh-card dh-card--c dh-rv"
            style={{ "--d": ".12s" } as CSSProperties}
          >
            <div className="dh-card__head">
              <h3 className="dh-card__title dh-card__title--sm">
                Sectors we work in
              </h3>
              <span className="dh-round-ic">
                <Icon n="layers" />
              </span>
            </div>
            <ul className="dh-chips">
              <li>Financial services</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Manufacturing</li>
              <li>Logistics</li>
              <li>Public sector</li>
            </ul>
            <p className="dh-card__muted">
              Anonymised client work across regulated and high-volume
              environments.
            </p>
          </article>

          <article
            className="dh-card dh-card--d dh-rv"
            style={{ "--d": ".16s" } as CSSProperties}
          >
            <p className="dh-stat-md dh-stat-md--ink">
              <span data-count="50">50</span>k+
            </p>
            <h3 className="dh-card__title">
              People reached through a multi-institution platform rollout
            </h3>
            <svg
              className="dh-doodle dh-doodle--reach"
              viewBox="0 0 220 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="110" cy="64" r="18" className="dh-doodle__fill" />
              <circle cx="110" cy="64" r="36" opacity=".7" />
              <circle
                cx="110"
                cy="64"
                r="56"
                opacity=".45"
                strokeDasharray="3 6"
              />
              <circle
                cx="110"
                cy="64"
                r="78"
                opacity=".25"
                strokeDasharray="3 7"
              />
              <g className="dh-doodle__people">
                <circle cx="40" cy="44" r="4.5" />
                <circle cx="64" cy="98" r="4.5" />
                <circle cx="170" cy="30" r="4.5" />
                <circle cx="186" cy="86" r="4.5" />
                <circle cx="148" cy="108" r="4.5" />
                <circle cx="82" cy="18" r="4.5" />
                <circle cx="16" cy="82" r="4.5" />
                <circle cx="206" cy="58" r="4.5" />
              </g>
            </svg>
          </article>

          <article
            className="dh-card dh-card--e dh-rv"
            style={{ "--d": ".2s" } as CSSProperties}
          >
            <div className="dh-ringstat" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" className="dh-ringstat__bg" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="dh-ringstat__fg"
                  pathLength="100"
                />
              </svg>
              <span>100%</span>
            </div>
            <h3 className="dh-card__title">
              Scoring parity validated before a legacy system cutover
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}
