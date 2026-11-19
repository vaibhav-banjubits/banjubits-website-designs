"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "./Icon";
import { productCopy, products, promises } from "./data";
import { selectProduct } from "./select";

const N = products.length;
// Plain-word labels for the orbiting pills (the product names live in the section below).
const ORBIT_LABEL: Record<string, string> = {
  atlas: "Answers",
  hub: "Automation",
  renew: "Modernize",
  forge: "Engineering",
  voice: "Voice & hiring",
  delivery: "Cloud",
};
const SPEED = 0.16; // radians per second: one full turn in about 40 s

/**
 * The hero object: the six Mentis products orbiting a glowing core, in 2.5D.
 * Whichever product is at the front is described underneath. Hover, focus or
 * tap a product to hold it there. Positions are written straight to the DOM in
 * a requestAnimationFrame loop, so React does not re-render every frame.
 */
function ProductOrbit() {
  const stage = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLButtonElement | null)[]>([]);
  const held = useRef<number | null>(null);
  const [front, setFront] = useState(0);
  const [pinned, setPinned] = useState<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t0 = performance.now();
    let angle = -Math.PI / 2; // product 0 starts at the front
    let tilt = 0.44;
    let tiltTarget = 0.44;
    let speed = SPEED; // eased, so hovering slows the orbit to a stop instead of freezing it
    let lastFront = 0;

    // Positions are GPU transforms in pixels (no layout work per frame). The stage width is cached.
    let W = stage.current?.clientWidth ?? 500;
    const ro = new ResizeObserver(() => {
      W = stage.current?.clientWidth ?? W;
    });
    if (stage.current) ro.observe(stage.current);

    const place = () => {
      let best = -2;
      let bestI = 0;
      for (let i = 0; i < N; i++) {
        const a = angle + (i * Math.PI * 2) / N;
        const z = Math.sin(a); // 1 = front, -1 = back
        const x = Math.cos(a) * 0.43 * W;
        const y = (z * 0.43 * tilt - 0.04) * W;
        const k = (z + 1) / 2;
        const el = nodes.current[i];
        if (el) {
          el.style.setProperty("--tx", `${x.toFixed(2)}px`);
          el.style.setProperty("--ty", `${y.toFixed(2)}px`);
          el.style.setProperty("--k", k.toFixed(3));
          el.style.zIndex = z > 0 ? "10" : "1";
        }
        if (z > best) {
          best = z;
          bestI = i;
        }
      }
      if (bestI !== lastFront) {
        lastFront = bestI;
        setFront(bestI);
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      // frame-rate independent easing: the same feel at 60 Hz and 120 Hz
      speed += ((held.current === null ? SPEED : 0) - speed) * (1 - Math.exp(-dt * 4));
      angle += dt * speed;
      tilt += (tiltTarget - tilt) * (1 - Math.exp(-dt * 5));
      stage.current?.style.setProperty("--tilt", tilt.toFixed(3));
      place();
      raf = requestAnimationFrame(loop);
    };

    place();
    if (!reduce) raf = requestAnimationFrame(loop);

    const el = stage.current;
    const move = (e: PointerEvent) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      tiltTarget = Math.max(0.3, Math.min(0.58, 0.44 + ny * 0.22));
    };
    const leave = () => (tiltTarget = 0.44);
    el?.addEventListener("pointermove", move);
    el?.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el?.removeEventListener("pointermove", move);
      el?.removeEventListener("pointerleave", leave);
    };
  }, []);

  const hold = (i: number | null) => {
    held.current = i;
    setPinned(i);
  };

  const shown = products[pinned ?? front];

  return (
    <div className="dh-orbit">
      <div className="dh-orbit__stage" ref={stage}>
        <div className="dh-orbit__shadow" aria-hidden="true" />
        <div className="dh-orbit__sweep" aria-hidden="true" />
        <div className="dh-orbit__halo" aria-hidden="true" />
        <div className="dh-orbit__ring dh-orbit__ring--a" aria-hidden="true" />
        <div className="dh-orbit__ring dh-orbit__ring--b" aria-hidden="true" />
        <div className="dh-orbit__core" aria-hidden="true">
          <span className="dh-orbit__pulse" />
          <span className="dh-orbit__pulse dh-orbit__pulse--2" />
          <b>Mentis</b>
          <i>Ready-made AI</i>
        </div>

        {products.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            type="button"
            className={`dh-node${(pinned ?? front) === i ? " dh-is-on" : ""} dh-node--${p.stage === "Roadmap" ? "road" : p.stage === "Partly built" ? "part" : "live"}`}
            aria-label={`${p.name}: ${p.stage}. Show details`}
            onPointerEnter={() => hold(i)}
            onPointerLeave={() => hold(null)}
            onFocus={() => hold(i)}
            onBlur={() => hold(null)}
            onClick={() => selectProduct(p.id)}
          >
            <Icon n={p.icon} />
            <span>{ORBIT_LABEL[p.id]}</span>
          </button>
        ))}
      </div>

      <div className="dh-orbit__card" aria-live="polite">
        <div className="dh-orbit__cardtop">
          <strong>{productCopy[shown.id].plain}</strong>
          <span className={`dh-chip dh-chip--${shown.stage === "Roadmap" ? "road" : shown.stage === "Partly built" ? "part" : "live"}`}>
            {shown.stage}
          </span>
        </div>
        <p>{productCopy[shown.id].line}</p>
        <button type="button" className="dh-link" onClick={() => selectProduct(shown.id)}>
          See how it works <Icon n="arrow-right" />
        </button>
      </div>
    </div>
  );
}

// Fixed positions (percent of the hero) for the twinkling sparks in the background.
const SPARKS: [number, number, number][] = [
  [10, 24, 2], [30, 80, 2], [47, 14, 2], [66, 84, 2], [88, 22, 2], [94, 62, 2],
];

export function Hero() {
  // The background and the orbit drift a few pixels with the pointer (fine pointers only).
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".dh-hero");
    if (!hero || !window.matchMedia("(hover: hover)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      hero.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
    };
    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  return (
    <section className="dh-hero" id="top">
      <div className="dh-hero__bg" aria-hidden="true">
        <div className="dh-hero__aurora" />
        {SPARKS.map(([x, y, s], i) => (
          <i key={i} className="dh-spark" style={{ left: `${x}%`, top: `${y}%`, "--s": s, "--n": i } as CSSProperties} />
        ))}
      </div>

      <div className="dh-hero__in">
        <div className="dh-hero__copy">
          <p className="dh-kicker dh-rv">
            <i /> AI engineering company
          </p>
          <h1 className="dh-hero__title">
            <span className="dh-line">We build AI into</span>
            <span className="dh-line dh-line--2 dh-hl">real business work.</span>
          </h1>
          <p className="dh-hero__lede dh-rv" style={{ "--d": ".1s" } as CSSProperties}>
            We design, build and run AI for enterprises. Our ready-made Mentis products get you to a working
            pilot in weeks, with your people in charge.
          </p>
          <div className="dh-hero__cta dh-rv" style={{ "--d": ".2s" } as CSSProperties}>
            <a href="#products" className="dh-btn dh-btn--lg">
              <span>Explore the products</span>
              <span className="dh-btn__chip">
                <Icon n="arrow-right" />
              </span>
            </a>
            <a href="#start" className="dh-btn dh-btn--lg dh-btn--ghost">
              <span>Book a working session</span>
            </a>
          </div>
        </div>

        <div className="dh-hero__orbit dh-rv" style={{ "--d": ".15s" } as CSSProperties}>
          <ProductOrbit />
        </div>
      </div>

      <ul className="dh-promises dh-wrap dh-rv" style={{ "--d": ".3s" } as CSSProperties}>
        {promises.map((p) => (
          <li key={p.title}>
            <Icon n={p.icon} />
            {p.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
