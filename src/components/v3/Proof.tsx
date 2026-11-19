"use client";

import { useRef } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { cases, type CaseStatus } from "./data";

const tone = (s: CaseStatus) =>
  s === "Delivered · In production" ? "live" : s === "In delivery" ? "part" : s === "Built · Live demo" ? "demo" : "road";

export function Proof() {
  const rail = useRef<HTMLUListElement>(null);
  const by = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="dh-sec dh-proof" id="proof">
      <div className="dh-wrap">
        <div className="dh-railhead">
          <header className="dh-head">
            <h2 className="dh-h2 dh-rv">
              Proven <span>in delivery.</span>
            </h2>
            <p className="dh-sub dh-rv">Real engagements, each labelled for what it is.</p>
          </header>
          <div className="dh-railhead__btns">
            <button type="button" onClick={() => by(-1)} aria-label="Previous case studies">
              <Icon n="chevron-left" />
            </button>
            <button type="button" onClick={() => by(1)} aria-label="Next case studies">
              <Icon n="chevron-right" />
            </button>
          </div>
        </div>
      </div>

      <ul className="dh-rail" ref={rail} tabIndex={0} aria-label="Case studies">
        {cases.map((c) => (
          <li key={c.id} className="dh-case">
            <Image src={c.photo} alt={c.alt} sizes="(max-width: 700px) 84vw, 400px" className="dh-case__img" />
            <div className="dh-case__shade" aria-hidden="true" />
            <div className="dh-case__in">
              <span className={`dh-chip dh-chip--${tone(c.status)}`}>{c.status}</span>
              <b className="dh-case__metric">{c.metric}</b>
              <span className="dh-case__ml">{c.metricLabel}</span>
              <h4>{c.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
