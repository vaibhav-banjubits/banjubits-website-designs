"use client";

import { useState } from "react";
import { products } from "./data";
import { Icon } from "./Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Mentis Atlas: a cited answer that writes itself in. Illustrative, not real product output. */
function AtlasMock() {
  return (
    <div className="hb-mock" aria-hidden="true">
      <div className="hb-mock__bar">
        <i />
        <i />
        <i />
        <span>Atlas · Controls</span>
      </div>
      <div className="hb-mock__body hb-mock__body--atlas">
        <aside>
          <b>Library</b>
          <span data-on>Policies</span>
          <span>Controls</span>
          <span>Evidence</span>
          <span>Frameworks</span>
        </aside>
        <div className="hb-mock__chat">
          <p className="hb-q">Which controls cover third-party access to customer data?</p>
          <div className="hb-a">
            <span className="hb-a__who">
              <Icon n="sparkle" /> Atlas
            </span>
            <p className="hb-line" style={{ "--k": 0 } as React.CSSProperties}>
              Three controls apply. Access is limited to approved vendors and reviewed every quarter.
            </p>
            <p className="hb-line" style={{ "--k": 1 } as React.CSSProperties}>
              Contracts require breach notice within 72 hours, and every access is logged.
            </p>
            <div className="hb-cites hb-line" style={{ "--k": 2 } as React.CSSProperties}>
              <span>AC-3 · Access</span>
              <span>VM-1 · Vendors</span>
              <span>LG-2 · Logging</span>
            </div>
          </div>
          <p className="hb-grounded hb-line" style={{ "--k": 3 } as React.CSSProperties}>
            <Icon n="check" /> Grounded in 3 approved sources, every claim cited
          </p>
        </div>
      </div>
    </div>
  );
}

/** Mentis Forge: a human approval gate you can actually press. */
function ForgeMock() {
  const [approved, setApproved] = useState(false);
  return (
    <div className="hb-mock" data-approved={approved || undefined}>
      <div className="hb-mock__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>Forge · Bracket assembly</span>
      </div>
      <div className="hb-mock__body hb-mock__body--forge">
        <div className="hb-part" aria-hidden="true">
          <svg viewBox="0 0 320 220">
            <defs>
              <linearGradient id="hbF-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4fe3d6" />
                <stop offset="1" stopColor="#2b8fb8" />
              </linearGradient>
            </defs>
            <path className="hb-part__l" d="M70 120 L160 168 L250 122 L160 76 Z" fill="url(#hbF-top)" opacity=".92" />
            <path className="hb-part__l" d="M70 120 L70 78 L160 32 L160 76 Z" fill="#1d4f86" />
            <path className="hb-part__l" d="M250 122 L250 80 L160 32 L160 76 Z" fill="#163e6c" />
            <path className="hb-part__l" d="M70 120 L160 168 L160 126 L70 78 Z" fill="#0f2d52" opacity=".9" />
            <circle className="hb-part__hole" cx="165" cy="104" r="14" />
          </svg>
        </div>
        <ol className="hb-steps2">
          <li data-done>
            <i>
              <Icon n="check" />
            </i>
            Generate bracket concept
          </li>
          <li data-done>
            <i>
              <Icon n="check" />
            </i>
            Check clearances
          </li>
          <li data-now={!approved || undefined} data-done={approved || undefined}>
            <i>{approved ? <Icon n="check" /> : "3"}</i>
            Gate 2 · Review and approve
          </li>
          <li data-done={approved || undefined}>
            <i>{approved ? <Icon n="check" /> : "4"}</i>
            Export to CAD
          </li>
        </ol>
        <button
          type="button"
          className="hb-approve"
          aria-pressed={approved}
          onClick={() => setApproved((a) => !a)}
        >
          {approved ? (
            <>
              <Icon n="check" /> Approved by you · undo
            </>
          ) : (
            <>Approve gate 2</>
          )}
        </button>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="hb-sec hb-sec--tight">
      <div className="hb-slab hb-slab--navy">
        <div className="hb-glow hb-glow--a" aria-hidden="true" />
        <div className="hb-glow hb-glow--d" aria-hidden="true" />
        <div className="hb-wrap">
          <div className="hb-head hb-rv">
            <div>
              <p className="hb-kicker hb-kicker--dark">
                <i /> Products
              </p>
              <h2 className="hb-h2">
                Mentis copilots, <em>built by the engineers who ship.</em>
              </h2>
            </div>
            <p className="hb-head__side">
              The patterns we deliver for clients, packaged as products. Press the gate on Forge to
              see how a person stays in control.
            </p>
          </div>

          <ul className="hb-prods">
            {products.map((p, i) => (
              <li key={p.id} className="hb-prod hb-rv" style={d(i * 100)}>
                {p.id === "atlas" ? <AtlasMock /> : <ForgeMock />}
                <div className="hb-prod__body">
                  <div className="hb-prod__top">
                    <h3 className="hb-h3">{p.name}</h3>
                    <span className={`hb-pill hb-pill--${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <p className="hb-prod__kind">{p.kind}</p>
                  <p>{p.text}</p>
                  <a href="#start" className="hb-link">
                    Explore {p.name} <Icon n="arrow" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="hb-prods__foot hb-rv">
            <p>
              <b>Also in the family: Mentis Interviews.</b> AI-led interviews that screen at scale,
              while every hiring decision stays with a person.
            </p>
            <p className="hb-legend">
              <span className="hb-pill hb-pill--live">Live</span>
              <span className="hb-pill hb-pill--pilot">Pilot</span>
              <span className="hb-pill hb-pill--roadmap">Roadmap</span>
              <span>Every product is labelled, so nothing is over-promised. Interfaces shown are illustrative.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
