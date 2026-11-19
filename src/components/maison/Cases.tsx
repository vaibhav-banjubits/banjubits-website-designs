"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { cases } from "./data";
import { Icon } from "./Icon";

/** Keep arrows and comparison signs in the text face. */
function withSymbols(text: string) {
  return text.split(/([→≥])/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="mn-sym">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Coverflow of four proof points: a photo, one number, one sentence. */
export function Cases() {
  const scroller = useRef<HTMLDivElement>(null);
  const slides = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const pick = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bd = Infinity;
    slides.current.forEach((s, i) => {
      if (!s) return;
      const dist = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid);
      if (dist < bd) {
        bd = dist;
        best = i;
      }
    });
    if (best !== activeRef.current) {
      activeRef.current = best;
      setActive(best);
    }
  }, []);

  const go = useCallback((i: number, smooth = true) => {
    const el = scroller.current;
    const s = slides.current[Math.max(0, Math.min(cases.length - 1, i))];
    if (!el || !s) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: s.offsetLeft + s.offsetWidth / 2 - el.clientWidth / 2,
      behavior: smooth && !reduce ? "smooth" : "auto",
    });
  }, []);

  useEffect(() => {
    const onResize = () => go(activeRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [go]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  return (
    <>
      <div
        className="mn-cases"
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Case studies"
        aria-roledescription="carousel"
        onScroll={pick}
        onKeyDown={onKey}
      >
        <div className="mn-cases__track">
          {cases.map((c, i) => (
            <article
              key={c.id}
              ref={(el) => {
                slides.current[i] = el;
              }}
              className={`mn-case${active === i ? " mn-is-active" : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${cases.length}`}
              onClick={() => active !== i && go(i)}
            >
              <div className="mn-case__img">
                <Image
                  src={c.photo}
                  alt={c.alt}
                  sizes="(max-width: 700px) 86vw, 600px"
                />
                <span className="mn-case__tag">{c.status}</span>
              </div>
              <p className="mn-case__metric">{withSymbols(c.metric)}</p>
              <p className="mn-case__label">{c.metricLabel}</p>
              <h3 className="mn-case__title">{c.title}</h3>
              <a
                className="mn-case__link"
                href="#contact"
                tabIndex={active === i ? 0 : -1}
              >
                Discuss a similar project
                <span className="mn-round">
                  <Icon n="arrow-right" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="mn-cases__nav">
        <button
          className="mn-round mn-round--lg"
          aria-label="Previous case study"
          onClick={() => go(active - 1)}
        >
          <Icon n="chevron-left" />
        </button>
        <p className="mn-cases__count" aria-live="polite">
          <b>{String(active + 1).padStart(2, "0")}</b> /{" "}
          {String(cases.length).padStart(2, "0")}
        </p>
        <button
          className="mn-round mn-round--lg"
          aria-label="Next case study"
          onClick={() => go(active + 1)}
        >
          <Icon n="chevron-right" />
        </button>
      </div>
    </>
  );
}
