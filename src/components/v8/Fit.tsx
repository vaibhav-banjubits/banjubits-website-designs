"use client";

import { useEffect, useRef, useState } from "react";
import { FIT_SOURCES, PROMISES, products, type ProductId } from "./data";
import { Icon } from "./Icon";

/**
 * "How it fits": the one picture that explains what we do. Your systems on the left, the Mentis
 * layer in the middle (wrapped in the three promises), your people on the right.
 * Cycles through the products until someone hovers or focuses one.
 */
export function Fit() {
  const [id, setId] = useState<ProductId>("atlas");
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setId((cur) => products[(products.findIndex((p) => p.id === cur) + 1) % products.length].id);
    }, 3200);
    return () => window.clearInterval(t);
  }, [paused, seen]);

  const cur = products.find((p) => p.id === id)!;

  return (
    <section className="ld-sec ld-fit" id="fit" aria-labelledby="ld-fit-h">
      <div className="ld-wrap">
        <div className="ld-head ld-head--center ld-rv">
          <p className="ld-label">How it fits</p>
          <h2 className="ld-h2" id="ld-fit-h">
            One layer between your systems and <em>your people</em>.
          </h2>
          <p className="ld-sub">
            Mentis connects to what you already run, does the legwork, and hands every important decision to a
            named person. Pick a product to see what it touches.
          </p>
        </div>

        <div
          className="ld-fit__board ld-rv"
          ref={box}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="ld-fit__col ld-fit__col--src">
            <h3>Your systems</h3>
            <ul>
              {FIT_SOURCES.map((s) => (
                <li key={s.id} className={cur.from.includes(s.id) ? "ld-lit" : ""}>
                  <Icon n={s.icon} />
                  {s.id}
                </li>
              ))}
            </ul>
          </div>

          <div className="ld-fit__flow" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <div className="ld-fit__core">
            <ul className="ld-fit__guard" aria-label="Three promises on every engagement">
              {PROMISES.map((p) => (
                <li key={p.title}>
                  <Icon n={p.icon} />
                  {p.title}
                </li>
              ))}
            </ul>
            <div className="ld-fit__tiles" role="group" aria-label="Mentis products">
              {products.map((p) => (
                <button
                  key={p.id}
                  className={`ld-tile${p.id === id ? " ld-is-on" : ""}`}
                  aria-pressed={p.id === id}
                  onClick={() => setId(p.id)}
                  onMouseEnter={() => setId(p.id)}
                  onFocus={() => setId(p.id)}
                >
                  <Icon n={p.icon} />
                  <b>{p.name.replace("Mentis ", "")}</b>
                  <small>{p.capability}</small>
                  <span className={`ld-dot ld-dot--${p.stage}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="ld-fit__flow" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <div className="ld-fit__col ld-fit__col--out">
            <h3>Your people get</h3>
            <ul aria-live="polite">
              {products.map((p) => (
                <li key={p.id} className={p.id === id ? "ld-lit" : ""}>
                  <Icon n="circle-check" />
                  {p.to}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
