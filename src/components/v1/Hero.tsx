"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useBlueprint } from "./Blueprint";
import { industries, type Status } from "./data";
import { Icon, industryIcon } from "./Icon";

function Pill({ status }: { status: Status }) {
  return <span className={`hb-pill hb-pill--${status.toLowerCase()}`}>{status}</span>;
}

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  const { industry, setIndustry } = useBlueprint();
  const cur = industries.find((i) => i.id === industry) ?? industries[0];
  const root = useRef<HTMLElement>(null);

  // Pointer parallax: the stage tilts a few degrees and its floating pieces drift at different depths.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (min-width: 1020px)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", String(((e.clientX - r.left) / r.width - 0.5) * 2));
        el.style.setProperty("--my", String(((e.clientY - r.top) / r.height - 0.5) * 2));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section id="top" className="hb-hero" ref={root}>
      <div className="hb-aurora" aria-hidden="true">
        <i className="hb-aurora__a" />
        <i className="hb-aurora__b" />
        <i className="hb-aurora__c" />
      </div>

      <div className="hb-wrap hb-hero__in">
        <div className="hb-hero__copy">
          <p className="hb-kicker hb-up" style={d(0)}>
            <i /> AI engineering and product studio
          </p>
          <h1 className="hb-h1 hb-up" style={d(80)}>
            Production AI and digital platforms <em>built for real operations.</em>
          </h1>
          <p className="hb-lede hb-up" style={d(180)}>
            We design, build and govern the systems your business runs on. Choose your industry and
            see the draft we would start from, before you fill in a single form.
          </p>

          <div className="hb-pick hb-up" style={d(260)}>
            <p className="hb-pick__q" id="hb-pick-q">
              Choose your industry
            </p>
            <div className="hb-chips" role="group" aria-labelledby="hb-pick-q">
              {industries.map((i) => (
                <button
                  key={i.id}
                  type="button"
                  className="hb-chip"
                  aria-pressed={i.id === industry}
                  onClick={() => setIndustry(i.id)}
                >
                  <Icon n={industryIcon[i.id]} />
                  {i.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hb-actions hb-up" style={d(340)}>
            <a href="#start" className="hb-btn" data-magnet>
              <span>Start a project</span>
              <span className="hb-btn__ic">
                <Icon n="arrow" />
              </span>
            </a>
            <a href="#work" className="hb-btn hb-btn--ghost" data-magnet>
              <span>See our results</span>
            </a>
          </div>
        </div>

        <div className="hb-stage hb-up" style={d(160)}>
          <div className="hb-stage__tilt">
            <i className="hb-stage__back" aria-hidden="true" />
            <figure className="hb-stage__photo">
              {industries.map((i, n) => (
                <Image
                  key={i.id}
                  src={i.photo}
                  alt={i.id === industry ? i.alt : ""}
                  aria-hidden={i.id === industry ? undefined : true}
                  fill
                  sizes="(min-width: 1020px) 44vw, 100vw"
                  priority={n === 0}
                  loading="eager"
                  data-on={i.id === industry || undefined}
                  style={{ objectPosition: i.position }}
                />
              ))}
              <span className="hb-stage__shade" aria-hidden="true" />
            </figure>

            <div className="hb-float hb-float--live" aria-hidden="true">
              <span className="hb-dot" />
              <span>
                Live draft<b>{cur.label}</b>
              </span>
            </div>

            <div className="hb-float hb-float--gate" aria-hidden="true">
              <span className="hb-float__ic">
                <Icon n="shield" />
              </span>
              <span>
                Gate 3 · Deploy<b>Awaiting human sign-off</b>
              </span>
            </div>

            <aside className="hb-bp" aria-live="polite" aria-label="Draft blueprint">
              <div key={cur.id} className="hb-bp__body">
                <div className="hb-bp__head">
                  <span>Draft blueprint</span>
                  <span className="hb-bp__ind">{cur.label}</span>
                </div>
                <h2 className="hb-bp__title">{cur.blueprint.title}</h2>
                <ul className="hb-bp__list">
                  {cur.blueprint.workstreams.map((w, n) => (
                    <li key={w.name} style={{ "--n": n } as React.CSSProperties}>
                      <span>{w.name}</span>
                      <Pill status={w.status} />
                    </li>
                  ))}
                </ul>
                <div className="hb-bp__proof">
                  <strong data-long={cur.blueprint.proof.figure.length > 7 || undefined}>
                    {cur.blueprint.proof.figure}
                  </strong>
                  <span>{cur.blueprint.proof.label}</span>
                </div>
                <a href="#start" className="hb-bp__link">
                  Open the full blueprint
                  <Icon n="arrow" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
