"use client";

import { useRef, useState } from "react";
import { products, STAGES, type ProductId } from "./data";
import { Icon } from "./Icon";

function ask(id: ProductId) {
  window.dispatchEvent(new CustomEvent("st:ask", { detail: id }));
}

const bars = [14, 28, 42, 22, 48, 30, 14, 38, 50, 26, 16, 44, 24, 34, 14, 46, 20, 32, 40, 18];

/** One running demo per accelerator. Illustrative, and Forge is marked as a concept. */
function Demo({ id }: { id: ProductId }) {
  switch (id) {
    case "atlas":
      return (
        <div className="st-demo st-demo--atlas">
          <p className="st-bub" style={{ ["--i" as string]: 0 }}>
            Which programs are waiting on qualification?
          </p>
          <p className="st-ans" style={{ ["--i" as string]: 1 }}>
            Three programs, led by <b>Aurora</b>, which is blocked on a reliability report.
            <span className="st-src">1</span>
            <span className="st-src">2</span>
          </p>
          <p className="st-line" style={{ ["--i" as string]: 2 }}>
            <Icon n="check" /> Only what R. Shah may see, and logged
          </p>
        </div>
      );
    case "hub":
      return (
        <div className="st-demo st-demo--hub">
          <div className="st-route" style={{ ["--i" as string]: 0 }}>
            <span>Request</span>
            <i />
            <span className="st-route__on">Customer issues</span>
          </div>
          <b className="st-big">22</b>
          <small>assistants behind one front door</small>
        </div>
      );
    case "renew":
      return (
        <div className="st-demo st-demo--renew">
          <small>Old system vs new, side by side</small>
          <div className="st-meter">
            <i />
          </div>
          <b className="st-big st-big--good">100%</b>
          <small>parity before the switch</small>
        </div>
      );
    case "forge":
      return (
        <div className="st-demo st-demo--forge">
          <span className="st-concept">Concept</span>
          <div className="st-scat" aria-hidden="true">
            {[
              [12, 68], [26, 42, 1], [40, 76], [54, 24, 1], [66, 58], [78, 36], [90, 12, 1], [20, 22],
            ].map(([x, y, hot], n) => (
              <i key={n} className={hot ? "st-hot" : ""} style={{ left: `${x}%`, top: `${y}%` }} />
            ))}
          </div>
          <small>Design options tested, an engineer signs off</small>
        </div>
      );
    case "voice":
      return (
        <div className="st-demo st-demo--voice">
          <div className="st-wave" aria-hidden="true">
            {bars.map((h, n) => (
              <i key={n} style={{ height: h, ["--d" as string]: `${(n % 7) * 0.12}s` }} />
            ))}
          </div>
          <p className="st-ans">Passing you to Maya, with the full conversation.</p>
        </div>
      );
    case "delivery":
      return (
        <div className="st-demo st-demo--term" aria-hidden="true">
          <p style={{ ["--i" as string]: 0 }}>
            <b>&gt;</b> private AI cluster, 3 nodes, our cloud
          </p>
          <p style={{ ["--i" as string]: 1 }}>checking existing resources… none found</p>
          <p style={{ ["--i" as string]: 2 }}>
            <u>✓</u> validate <u>✓</u> lint <b>1 error</b> self-healed
          </p>
          <p style={{ ["--i" as string]: 3 }}>
            <u>✓</u> ready to deploy · cost tracked
          </p>
        </div>
      );
  }
}

export function Bento() {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  const step = () => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>("article");
    return (card?.offsetWidth ?? 420) + 20;
  };
  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setAt(Math.min(products.length - 1, Math.round(el.scrollLeft / step())));
  };

  return (
    <section className="st-sec st-bento" id="products" aria-labelledby="st-bento-h">
      <div className="st-wrap">
        <div className="st-head st-head--center st-rv">
          <p className="st-label">What we build</p>
          <h2 className="st-h2" id="st-bento-h">
            Six accelerators. <em>One job each.</em>
          </h2>
          <ul className="st-legend" aria-label="What the status dots mean">
            {(Object.keys(STAGES) as Array<keyof typeof STAGES>).map((k) => (
              <li key={k}>
                <span className={`st-dot st-dot--${k}`} />
                {STAGES[k].label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="st-car st-rv"
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-label="The six Mentis accelerators. Scroll sideways."
      >
        {products.map((p) => (
          <article key={p.id} className={`st-card st-card--${p.id}`}>
            <header>
              <span className="st-sq">
                <Icon n={p.icon} />
              </span>
              <b>{p.name}</b>
              <span className="st-badge">
                <span className={`st-dot st-dot--${p.stage}`} />
                {STAGES[p.stage].short}
              </span>
            </header>
            <h3>{p.job}</h3>
            <div className="st-card__stage">
              <Demo id={p.id} />
            </div>
            <button type="button" className="st-card__try" onClick={() => ask(p.id)}>
              Try it in the prompt <Icon n="arrow-up" />
            </button>
          </article>
        ))}
      </div>

      <div className="st-wrap">
        <div className="st-car__ctl">
          <button type="button" className="st-round" aria-label="Previous accelerator" onClick={() => go(-1)} disabled={at === 0}>
            <Icon n="chevron-left" />
          </button>
          <span className="st-car__n" aria-live="polite">
            {at + 1} / {products.length}
          </span>
          <button
            type="button"
            className="st-round"
            aria-label="Next accelerator"
            onClick={() => go(1)}
            disabled={at === products.length - 1}
          >
            <Icon n="chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
