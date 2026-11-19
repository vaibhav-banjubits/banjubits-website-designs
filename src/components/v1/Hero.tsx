"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Demo } from "./Demos";
import { products, promises } from "./data";
import { Icon } from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cur = products[active];

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
            <i /> AI engineering company · Mentis accelerators
          </p>
          <h1 className="hb-h1 hb-up" style={d(80)}>
            We build AI into real business work, <em>in a way leadership can trust.</em>
          </h1>
          <p className="hb-lede hb-up" style={d(180)}>
            We design, build and run production AI for enterprises and institutions. Our own Mentis
            accelerators get you to a working pilot in weeks, not months.
          </p>

          <ul className="hb-prom hb-up" style={d(260)}>
            {promises.map((p) => (
              <li key={p.title}>
                <Icon n="check" />
                {p.title}
              </li>
            ))}
          </ul>

          <div className="hb-actions hb-up" style={d(340)}>
            <Link href="/v4#start" className="hb-btn" data-magnet>
              <span>Start a project</span>
              <span className="hb-btn__ic">
                <Icon n="arrow" />
              </span>
            </Link>
            <Link href="/v4#products" className="hb-btn hb-btn--ghost" data-magnet>
              <span>Explore the Mentis products</span>
            </Link>
          </div>
        </div>

        <div className="hb-stage hb-up" style={d(160)}>
          <div className="hb-stage__tilt">
            <i className="hb-stage__back" aria-hidden="true" />
            <div
              className="hb-pstage"
              data-paused={paused || undefined}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div
                className="hb-pstage__tabs"
                role="tablist"
                aria-label="Mentis products"
                onKeyDown={(e) => {
                  const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                  const jump = e.key === "Home" ? 0 : e.key === "End" ? products.length - 1 : null;
                  if (!dir && jump === null) return;
                  e.preventDefault();
                  const next = jump ?? (active + dir + products.length) % products.length;
                  setActive(next);
                  e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
                }}
              >
                {products.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    id={`hb-tab-${p.id}`}
                    aria-selected={i === active}
                    aria-controls="hb-tabpanel"
                    aria-label={p.name}
                    title={p.name}
                    tabIndex={i === active ? 0 : -1}
                    className="hb-pstage__tab"
                    onClick={() => setActive(i)}
                  >
                    <Icon n={p.icon} />
                    <span className="hb-pstage__lbl">{p.short}</span>
                  </button>
                ))}
              </div>
              <i
                key={active}
                className="hb-pstage__bar"
                aria-hidden="true"
                onAnimationEnd={() => setActive((a) => (a + 1) % products.length)}
              />
              <div id="hb-tabpanel" role="tabpanel" aria-labelledby={`hb-tab-${cur.id}`} className="hb-pstage__panel">
                <div key={cur.id} className="hb-pstage__demo">
                  <Demo id={cur.id} />
                </div>
              </div>
              <div className="hb-pstage__foot">
                <div>
                  <div className="hb-pstage__name">
                    <b>{cur.name}</b>
                    <span className={`hb-pill hb-pill--${cur.status.toLowerCase().replace(" ", "-")}`}>{cur.status}</span>
                  </div>
                  <p>{cur.summary}</p>
                </div>
                <Link href={`/v4/mentis/${cur.slug}`} className="hb-link">
                  Explore <Icon n="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
