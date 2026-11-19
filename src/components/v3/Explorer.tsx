"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { Visual } from "./Visuals";
import { productCopy, productSlug, products, type ProductId, type Stage } from "./data";

const tone = (s: Stage) => (s === "Roadmap" ? "road" : s === "Partly built" ? "part" : "live");
const STEP = 6500; // ms each product stays on stage while auto-advancing

/**
 * One product on stage at a time: big photo, big name, one line, one number. It advances by
 * itself (pauses on hover or focus), and stops for good once the visitor picks a product.
 * The hero orbit and the footer links pick a product through the `dh-select` event.
 */
export function Explorer() {
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const on = (e: Event) => {
      const i = products.findIndex((p) => p.id === (e as CustomEvent<ProductId>).detail);
      if (i >= 0) {
        setIdx(i);
        setAuto(false);
      }
    };
    window.addEventListener("dh-select", on);
    return () => window.removeEventListener("dh-select", on);
  }, []);

  const playing = auto && !paused && !reduce;
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % products.length), STEP);
    return () => clearTimeout(t);
  }, [playing, idx]);

  const pick = (i: number) => {
    setIdx(i);
    setAuto(false);
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = products.length;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next < 0) return;
    e.preventDefault();
    pick(next);
    tabs.current[next]?.focus();
  };

  const p = products[idx];
  const c = productCopy[p.id];

  return (
    <section className="dh-sec dh-products" id="products">
      <div className="dh-wrap">
        <header className="dh-head">
          <h2 className="dh-h2 dh-rv">
            Ready-made AI for real problems. <span>Weeks, not months.</span>
          </h2>
          <p className="dh-sub dh-rv">Mentis is our toolkit of AI products. Pick the problem you want solved.</p>
        </header>

        <div
          className="dh-show dh-rv"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="dh-show__glow" aria-hidden="true" />
          <div className="dh-show__top">
          <div className="dh-show__tabs" role="tablist" aria-label="Mentis products">
            {products.map((x, i) => (
              <button
                key={x.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`show-tab-${x.id}`}
                aria-selected={i === idx}
                aria-controls="dh-show-panel"
                tabIndex={i === idx ? 0 : -1}
                className="dh-show__tab"
                onClick={() => pick(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <Icon n={x.icon} />
                <span>{productCopy[x.id].task}</span>
                {i === idx && auto && !reduce && (
                  <i
                    className={`dh-show__bar${paused ? " dh-is-paused" : ""}`}
                    style={{ animationDuration: `${STEP}ms` }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
          <span className="dh-show__count" aria-hidden="true">
            <b>0{idx + 1}</b> / 0{products.length}
          </span>
          </div>

          <div className="dh-show__stage" role="tabpanel" id="dh-show-panel" aria-labelledby={`show-tab-${p.id}`}>
            <div className="dh-show__copy" key={p.id}>
              <span className="dh-show__tags">
                <span className="dh-show__name">{p.name}</span>
                <span className={`dh-chip dh-chip--${tone(p.stage)}`}>{p.stage}</span>
              </span>
              <h3>{c.plain}</h3>
              <p>{c.line}</p>
              <div className="dh-show__stat">
                <b>{c.stat.value}</b>
                <span>{c.stat.label}</span>
              </div>
              <Link href={`/v4/mentis/${productSlug[p.id]}`} className="dh-btn">
                <span>Explore {p.name}</span>
                <span className="dh-btn__chip">
                  <Icon n="arrow-right" />
                </span>
              </Link>
            </div>

            <div className="dh-show__visual" aria-hidden="true">
              <Visual id={p.id} key={p.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
