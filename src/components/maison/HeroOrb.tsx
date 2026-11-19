"use client";

import { useState, type CSSProperties } from "react";
import { productCopy, products } from "./data";
import { Icon } from "./Icon";
import { selectProduct } from "./select";

// Six satellites on a hexagon, starting at the top.
const ANGLES = [-90, -30, 30, 90, 150, 210];

/**
 * The Maison pearl, now carrying the range: each Mentis product sits on the
 * orbit as a glass tag. Hover, focus or tap one to read what it does; click to
 * open it in the explorer below.
 */
export function HeroOrb() {
  const [hot, setHot] = useState(0);
  const cur = products[hot];
  const copy = productCopy[cur.id];

  return (
    <div className="mn-orbwrap mn-rv" style={{ "--d": ".25s" } as CSSProperties}>
      <div className="mn-orb">
        <div className="mn-orb__halo" aria-hidden="true" />
        <div className="mn-orb__stage" aria-hidden="true">
          <div className="mn-ring mn-ring--a">
            <svg viewBox="0 0 600 600">
              <circle cx="300" cy="300" r="262" className="mn-ring__line" />
              <circle cx="300" cy="300" r="250" className="mn-ring__dots" />
              <circle cx="562" cy="300" r="5" className="mn-ring__sat" />
            </svg>
          </div>
          <div className="mn-ring mn-ring--b">
            <svg viewBox="0 0 600 600">
              <circle cx="300" cy="300" r="222" className="mn-ring__line" />
              <circle cx="78" cy="300" r="4" className="mn-ring__sat" />
            </svg>
          </div>
          <div className="mn-core">
            <span className="mn-core__spark" />
            <span className="mn-core__ring" />
          </div>
        </div>
        <span className="mn-orb__mark" aria-hidden="true">
          Mentis
        </span>

        <ul className="mn-sats">
          {products.map((p, i) => {
            const a = (ANGLES[i] * Math.PI) / 180;
            const style = {
              left: `${(50 + 44 * Math.cos(a)).toFixed(2)}%`,
              top: `${(50 + 44 * Math.sin(a)).toFixed(2)}%`,
              "--d": `${(i * 0.45).toFixed(2)}s`,
            } as CSSProperties;
            return (
              <li key={p.id} className="mn-sat" style={style}>
                <a
                  href="#products"
                  className={hot === i ? "mn-is-hot" : undefined}
                  onMouseEnter={() => setHot(i)}
                  onFocus={() => setHot(i)}
                  onClick={() => selectProduct(p.id)}
                >
                  <Icon n={p.icon} />
                  {p.short}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mn-orbcap" aria-live="polite">
        <b>{cur.name}</b>
        <span>{copy.plain}</span>
      </p>
    </div>
  );
}
