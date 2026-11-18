"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Icon } from "./Icon";

type Tab = { id: "atlas" | "interviews" | "forge"; label: string };

const TABS: Tab[] = [
  { id: "atlas", label: "Mentis Atlas" },
  { id: "interviews", label: "Mentis Interviews" },
  { id: "forge", label: "Mentis Forge" },
];

function Copy({
  stage,
  name,
  text,
  points,
  cta,
}: {
  stage: string;
  name: string;
  text: string;
  points: string[];
  cta: string;
}) {
  return (
    <div className="dh-prod__copy">
      <span className="dh-stage">{stage}</span>
      <h3>{name}</h3>
      <p>{text}</p>
      <ul className="dh-ticks">
        {points.map((p) => (
          <li key={p}>
            <Icon n="check" />
            {p}
          </li>
        ))}
      </ul>
      <a href="#contact" className="dh-btn dh-btn--dark">
        <span>{cta}</span>
        <span className="dh-btn__chip">
          <Icon n="arrow-right" />
        </span>
      </a>
    </div>
  );
}

function Stage({
  badge,
  icon,
  children,
}: {
  badge: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <div className="dh-prod__stage">
      {children}
      <div className="dh-float">
        <Icon n={icon} />
        {badge}
      </div>
    </div>
  );
}

function MockBar({ title }: { title: string }) {
  return (
    <div className="dh-mock__bar">
      <i />
      <i />
      <i />
      <span>{title}</span>
    </div>
  );
}

const PANELS: Record<Tab["id"], ReactNode> = {
  atlas: (
    <>
      <Copy
        stage="Governance, risk & compliance"
        name="Mentis Atlas"
        text="A governance, risk and compliance copilot that maps policies, controls and evidence, and answers every question with citations."
        points={[
          "Maps policies to controls and evidence",
          "Every answer cites its source",
          "Built for review by risk teams",
        ]}
        cta="Talk to us about Atlas"
      />
      <Stage badge="Cited answer" icon="shield-check">
        <div className="dh-mock dh-mock--chat">
          <MockBar title="Atlas · Policy assistant" />
          <div className="dh-msg dh-msg--q">
            Which controls cover third-party access reviews?
          </div>
          <div className="dh-msg dh-msg--a">
            <p>
              Three controls apply. Quarterly access reviews are required for
              vendors with production access, and evidence must be retained for
              audit.
            </p>
            <div className="dh-cites">
              {["Policy 4.2", "Control AC-3", "Evidence log"].map((c) => (
                <span key={c}>
                  <Icon n="file-search" />
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="dh-bar">
            <span>Evidence mapped</span>
            <i style={{ "--w": "78%" } as CSSProperties} />
          </div>
        </div>
      </Stage>
    </>
  ),
  interviews: (
    <>
      <Copy
        stage="Talent & hiring"
        name="Mentis Interviews"
        text="AI-led interviews that screen at scale, while every hiring decision stays with a person."
        points={[
          "Consistent, structured conversations",
          "Scoring you can review and explain",
          "People make every final decision",
        ]}
        cta="Talk to us about Interviews"
      />
      <Stage badge="Live scoring" icon="mic">
        <div className="dh-mock dh-mock--voice">
          <MockBar title="Interviews · Live session" />
          <div className="dh-wave" aria-hidden="true">
            {Array.from({ length: 24 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="dh-tline">
            <b>AI</b>Tell me about a time you had to change a plan at short
            notice.
          </div>
          <div className="dh-tline dh-tline--me">
            <b>Candidate</b>We moved a release forward after a client
            escalation, so I…
          </div>
          <div className="dh-review">
            <Icon n="users" />
            Human review required before any decision
          </div>
        </div>
      </Stage>
    </>
  ),
  forge: (
    <>
      <Copy
        stage="Engineering & CAD"
        name="Mentis Forge"
        text="An engineering copilot that drives CAD tools through governed steps, with approval at every gate."
        points={[
          "Drives CAD through controlled steps",
          "Approval required at each gate",
          "A clear record of every change",
        ]}
        cta="Talk to us about Forge"
      />
      <Stage badge="Gate 2 of 3" icon="lock">
        <div className="dh-mock dh-mock--cad">
          <MockBar title="Forge · Bracket assembly" />
          <svg
            className="dh-cad"
            viewBox="0 0 320 190"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <g className="dh-cad__grid" strokeWidth="1">
              <path d="M0 150 160 190 320 150" />
              <path d="M0 120 160 160 320 120" opacity=".5" />
            </g>
            <g strokeWidth="2">
              <path
                d="M70 120 160 150 250 120 160 90Z"
                className="dh-cad__top"
              />
              <path d="M70 120v-34l90 30v34Z" className="dh-cad__l" />
              <path d="M250 120v-34l-90 30v34Z" className="dh-cad__r" />
              <path d="M70 86l90-30 90 30-90 30Z" className="dh-cad__t2" />
              <circle cx="160" cy="86" r="14" strokeDasharray="4 4" />
            </g>
            <g strokeWidth="1.4" opacity=".7">
              <path d="M262 100h38" />
              <path d="M262 130h38" />
              <path d="M300 100v30" />
            </g>
            <text
              x="262"
              y="92"
              fontSize="11"
              style={{ fontFamily: "var(--f-mono)" }}
              fill="currentColor"
              stroke="none"
            >
              42.0 mm
            </text>
          </svg>
          <ol className="dh-steps">
            <li className="dh-done">
              <Icon n="check" />
              Sketch profile
            </li>
            <li className="dh-done">
              <Icon n="check" />
              Extrude body
            </li>
            <li className="dh-gate">
              <Icon n="lock" />
              Approval gate · waiting on engineer
            </li>
          </ol>
        </div>
      </Stage>
    </>
  ),
};

export function Products() {
  const [current, setCurrent] = useState<Tab["id"]>("atlas");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (i: number, focus = false) => {
    setCurrent(TABS[i].id);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = TABS.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      select(next, true);
    }
  };

  return (
    <>
      <div
        className="dh-tabs dh-rv"
        role="tablist"
        aria-label="Mentis products"
      >
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`dh-tab-${t.id}`}
            aria-selected={current === t.id}
            aria-controls={`dh-panel-${t.id}`}
            tabIndex={current === t.id ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="dh-prod dh-rv">
        {TABS.map((t) => (
          <div
            key={t.id}
            className={`dh-prod__panel${current === t.id ? " dh-is-on" : ""}`}
            role="tabpanel"
            id={`dh-panel-${t.id}`}
            aria-labelledby={`dh-tab-${t.id}`}
            hidden={current !== t.id}
          >
            {PANELS[t.id]}
          </div>
        ))}
      </div>
    </>
  );
}
