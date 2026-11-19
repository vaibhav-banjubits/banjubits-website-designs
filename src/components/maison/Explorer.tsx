"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  productCopy,
  products,
  stageNote,
  type ProductId,
  type Stage,
} from "./data";
import { Icon } from "./Icon";
import { Mock } from "./Mocks";
import { SELECT_EVENT } from "./select";

const stageShort: Record<Stage, string> = {
  "Proven in delivery": "Proven",
  "Partly built": "Partly built",
  Roadmap: "Roadmap",
};
const stageClass: Record<Stage, string> = {
  "Proven in delivery": "proven",
  "Partly built": "partly",
  Roadmap: "road",
};

/**
 * The product explorer. On a desktop the six products are an index on the left
 * and one stage on the right; on a phone the index becomes a row of tabs above
 * the stage. Same elements, same keyboard support.
 */
export function Explorer() {
  const [current, setCurrent] = useState<ProductId>(products[0].id);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<ProductId>).detail;
      if (products.some((p) => p.id === id)) setCurrent(id);
    };
    window.addEventListener(SELECT_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_EVENT, onSelect);
  }, []);

  const select = (i: number, focus = false) => {
    setCurrent(products[i].id);
    if (focus) tabs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = products.length;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      select(next, true);
    }
  };

  return (
    <div className="mn-xp">
      <div className="mn-xp__grid">
      <div className="mn-xp__index mn-rv" role="tablist" aria-label="Mentis products">
        {products.map((p, i) => {
          const c = productCopy[p.id];
          return (
            <button
              key={p.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`mn-tab-${p.id}`}
              className="mn-xi"
              aria-selected={current === p.id}
              aria-controls={`mn-panel-${p.id}`}
              tabIndex={current === p.id ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="mn-xi__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="mn-xi__txt">
                <span className="mn-xi__task">{c.task}</span>
                <span className="mn-xi__name">{p.name}</span>
              </span>
              <span className={`mn-xi__st mn-st--${stageClass[p.stage]}`}>
                <i aria-hidden="true" />
                {stageShort[p.stage]}
              </span>
              <Icon n="arrow-right" className="mn-xi__go" />
            </button>
          );
        })}
      </div>

      <div className="mn-xp__panels mn-rv">
        {products.map((p) => {
          const c = productCopy[p.id];
          const on = current === p.id;
          return (
            <div
              key={p.id}
              className={`mn-panel${on ? " mn-is-on" : ""}`}
              role="tabpanel"
              id={`mn-panel-${p.id}`}
              aria-labelledby={`mn-tab-${p.id}`}
              hidden={!on}
            >
              <div className="mn-pstage">
                <Image
                  src={p.photo}
                  alt=""
                  fill
                  sizes="(max-width: 1000px) 100vw, 640px"
                  className="mn-pstage__img"
                />
                <span className="mn-pstage__tint" aria-hidden="true" />
                <span className={`mn-badge mn-st--${stageClass[p.stage]}`}>
                  <i aria-hidden="true" />
                  {p.stage}
                </span>
                <span className="mn-pstage__ill">
                  {p.stage === "Roadmap" ? "Concept" : "Illustrative"}
                </span>
                <Mock id={p.id} />
              </div>

              <div className="mn-pinfo">
                <div className="mn-pinfo__main">
                  <p className="mn-pinfo__name">
                    <Icon n={p.icon} />
                    {p.name}
                  </p>
                  <h3>{c.plain}</h3>
                  <p>{c.line}</p>
                </div>
                <div className="mn-pinfo__side">
                  <p className="mn-stat">
                    <b>{c.stat.value}</b>
                    <span>{c.stat.label}</span>
                  </p>
                  <a href="#contact" className="mn-btn mn-btn--sm">
                    <span>Talk to us about {p.short}</span>
                    <span className="mn-btn__chip">
                      <Icon n="arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>

      <ul className="mn-legend mn-rv" aria-label="What the status labels mean">
        {(Object.keys(stageNote) as Stage[]).map((s) => (
          <li key={s}>
            <span className={`mn-st--${stageClass[s]}`}>
              <i aria-hidden="true" />
              <b>{s}</b>
            </span>
            {stageNote[s]}
          </li>
        ))}
      </ul>
    </div>
  );
}
