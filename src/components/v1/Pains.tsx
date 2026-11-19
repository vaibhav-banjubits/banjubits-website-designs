"use client";

import Link from "next/link";
import { useState } from "react";
import { pains } from "./data";
import { Icon } from "./Icon";

/**
 * "They say / we answer": five things leadership teams tell us, each paired with the deck's own
 * answer. Pick a concern on the left; the answer panel on the right changes.
 */
export function Pains() {
  const [active, setActive] = useState(0);
  const cur = pains[active];

  return (
    <section id="why-now" className="hb-sec hb-sec--tight-top">
      <div className="hb-wrap">
        <div className="hb-head hb-rv">
          <div>
            <p className="hb-kicker">
              <i /> What we hear from leadership teams
            </p>
            <h2 className="hb-h2">
              Most AI never leaves the pilot. <em>We build the kind that does.</em>
            </h2>
          </div>
          <p className="hb-head__side">Pick the one that sounds like your week.</p>
        </div>

        <div className="hb-says hb-rv">
          <ul className="hb-says__list" role="tablist" aria-label="What leadership teams tell us" aria-orientation="vertical">
            {pains.map((p, i) => (
              <li key={p.q} className="hb-say" data-on={i === active || undefined}>
                <button
                  type="button"
                  role="tab"
                  id={`hb-say-${i}`}
                  aria-selected={i === active}
                  aria-controls="hb-answer"
                  tabIndex={i === active ? 0 : -1}
                  className="hb-say__btn"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onKeyDown={(e) => {
                    const dir = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
                    if (!dir) return;
                    e.preventDefault();
                    const next = (active + dir + pains.length) % pains.length;
                    setActive(next);
                    document.getElementById(`hb-say-${next}`)?.focus();
                  }}
                >
                  <span className="hb-say__no">0{i + 1}</span>
                  <span className="hb-say__q">{p.q}</span>
                  <span className="hb-say__go" aria-hidden="true">
                    <Icon n="arrow" />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div id="hb-answer" role="tabpanel" aria-labelledby={`hb-say-${active}`} className="hb-ans" aria-live="polite">
            <div className="hb-glow hb-glow--a" aria-hidden="true" />
            <div key={active} className="hb-ans__body">
              <p className="hb-ans__k">
                <i /> Our answer
              </p>
              <h3 className="hb-ans__h">{cur.answer}</h3>
              <p>{cur.text}</p>
              <div className="hb-ans__links">
                {cur.links.map((l) => (
                  <Link key={l.href + l.label} href={l.href}>
                    {l.label} <Icon n="arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="hb-says__foot hb-rv">
          In one line: start where the value is, build AI your people can audit, keep them in charge, and keep its cost in
          plain sight.
        </p>
      </div>
    </section>
  );
}
