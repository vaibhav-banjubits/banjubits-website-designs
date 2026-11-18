"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { img } from "./images";
import { Metric } from "./Metric";

type Case = {
  sector: string;
  service: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  photo: StaticImageData;
  alt: string;
};

// Titles, sectors and services come from src/lib/content.ts. Summaries and
// metric captions are draft copy: check against the real engagements.
const CASES: Case[] = [
  {
    sector: "Global technology company",
    service: "Agent orchestration",
    title: "Seven siloed assistants, one governed front door.",
    summary:
      "Separately built AI assistants were brought behind a single entry point, with routing, access control and an audit trail held in one place.",
    metric: "7→1",
    metricLabel: "AI assistants unified",
    tags: ["Orchestration", "Access control", "Audit trail"],
    photo: img.caseOrchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
  },
  {
    sector: "Financial services",
    service: "Voice AI",
    title: "Voice AI for first-line banking calls, with human escalation built in.",
    summary:
      "A conversational agent takes first-line customer calls in a regulated environment, and hands over to a person, with full context, whenever it should.",
    metric: "100%",
    metricLabel: "of call flows with a human escalation path",
    tags: ["Voice AI", "Regulated", "Human in the loop"],
    photo: img.caseVoice,
    alt: "Contact-centre specialist working alongside an AI call console",
  },
  {
    sector: "Workforce development",
    service: "Data & AI platform",
    title: "Regional workforce data and cited AI answers in one decision platform.",
    summary:
      "Labour-market data and a retrieval assistant in one place, where every answer cites its source so decision-makers can check it.",
    metric: "≥95%",
    metricLabel: "of answers cited back to source",
    tags: ["Retrieval", "Data platform", "Citations"],
    photo: img.industryWorkforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
  },
  {
    sector: "Education",
    service: "Product engineering",
    title: "Meridian: alumni, school operations and AI learning on one open-source platform.",
    summary:
      "One open-source platform for alumni relations, school operations and AI-assisted learning, rolled out across several institutions.",
    metric: "50k+",
    metricLabel: "people reached",
    tags: ["Open source", "Multi-institution", "AI learning"],
    photo: img.industryEducation,
    alt: "Students working on laptops in a bright university study hall",
  },
];

const DWELL = 8000;

export function Work() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
  const section = useRef<HTMLElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    if (section.current) io.observe(section.current);
    return () => {
      mq.removeEventListener("change", sync);
      io.disconnect();
    };
  }, []);

  const running = inView && !paused && !reduce;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % CASES.length), DWELL);
    return () => window.clearTimeout(t);
  }, [running, active]);

  const onKey = useCallback((e: React.KeyboardEvent, i: number) => {
    const k = e.key;
    let next = -1;
    if (k === "ArrowDown" || k === "ArrowRight") next = (i + 1) % CASES.length;
    if (k === "ArrowUp" || k === "ArrowLeft") next = (i - 1 + CASES.length) % CASES.length;
    if (k === "Home") next = 0;
    if (k === "End") next = CASES.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }, []);

  const c = CASES[active];

  return (
    <section ref={section} className="lx-sec lx-work" id="work" aria-labelledby="lx-work-title">
      <div className="lx-wrap">
        <header className="lx-head lx-head--split">
          <div>
            <p className="lx-eyebrow lx-rv">
              <span className="lx-eyebrow__rule" aria-hidden="true" />
              Selected work
            </p>
            <h2 id="lx-work-title" className="lx-h2 lx-rv" style={{ ["--d" as string]: ".06s" }}>
              Proof, not promises. <span className="lx-soft">Systems running in production today.</span>
            </h2>
          </div>
          <div className="lx-head__aside lx-rv" style={{ ["--d" as string]: ".12s" }}>
            <p>
              Four engagements across four sectors, each measured by what changed for the people
              who run it, not by what was demonstrated.
            </p>
            <div className="lx-work__controls">
              <span className="lx-work__count" aria-hidden="true">
                <b>0{active + 1}</b> / 0{CASES.length}
              </span>
              {!reduce && (
                <button
                  type="button"
                  className="lx-iconbtn"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Resume the case rotation" : "Pause the case rotation"}
                >
                  <Icon n={paused ? "play" : "pause"} />
                </button>
              )}
            </div>
          </div>
        </header>

        <div
          className="lx-spot"
          data-running={running || undefined}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="lx-spot__list lx-rv" role="tablist" aria-label="Case studies" aria-orientation="vertical">
            {CASES.map((k, i) => {
              const on = i === active;
              return (
                <div key={k.title} className="lx-spot__item" data-on={on || undefined}>
                  <button
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`lx-case-tab-${i}`}
                    aria-selected={on}
                    aria-controls="lx-case-panel"
                    tabIndex={on ? 0 : -1}
                    className="lx-spot__tab"
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKey(e, i)}
                  >
                    <span className="lx-spot__no">0{i + 1}</span>
                    <span className="lx-spot__txt">
                      <span className="lx-spot__meta">
                        {k.sector} <i aria-hidden="true">·</i> {k.service}
                      </span>
                      <span className="lx-spot__title">{k.title}</span>
                    </span>
                  </button>
                  <div className="lx-spot__more" aria-hidden={!on}>
                    <div>
                      <p>{k.summary}</p>
                      <ul className="lx-tags">
                        {k.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span className="lx-spot__bar" aria-hidden="true">
                    <i key={on ? `on-${active}-${running}` : "off"} />
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="lx-spot__stage lx-mask"
            id="lx-case-panel"
            role="tabpanel"
            aria-labelledby={`lx-case-tab-${active}`}
          >
            {CASES.map((k, i) => (
              <div key={k.title} className="lx-spot__shot" data-on={i === active || undefined} aria-hidden={i !== active}>
                <Image src={k.photo} alt={k.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" placeholder="blur" />
              </div>
            ))}
            <div className="lx-spot__veil" aria-hidden="true" />

            <span className="lx-spot__chip lx-glass">
              Case {String(active + 1).padStart(2, "0")} <i aria-hidden="true">/</i> {c.service}
            </span>

            <div className="lx-spot__card lx-glass" key={active}>
              <div className="lx-spot__metric">
                <strong>
                  <Metric v={c.metric} />
                </strong>
                <span>{c.metricLabel}</span>
              </div>
              <a href="#contact" className="lx-spot__cta">
                Discuss a similar project <Icon n="arrow-ur" />
              </a>
            </div>
          </div>
        </div>

        <p className="lx-note lx-rv">Client work is shown by sector to respect confidentiality.</p>
      </div>
    </section>
  );
}
