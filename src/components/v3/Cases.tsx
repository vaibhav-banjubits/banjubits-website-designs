"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Icon } from "./Icon";
import { img } from "./images";

type Case = {
  tag: string;
  title: string;
  image: StaticImageData;
  alt: string;
  challenge: string;
  direction: string;
  highlights: Array<[string, string]>;
};

const CASES: Case[] = [
  {
    tag: "Global technology company",
    title: "Seven siloed assistants, one governed front door.",
    image: img["team-screen"],
    alt: "Two colleagues reviewing an orchestration dashboard on a wide monitor",
    challenge:
      "Seven separate AI assistants, each with its own access rules and no shared governance.",
    direction:
      "One entry point that routes every request to the right agent, under shared access control.",
    highlights: [
      ["7→1", "assistants unified"],
      ["1", "governed front door"],
      ["Agent", "orchestration"],
    ],
  },
  {
    tag: "Financial services",
    title:
      "Voice AI for first-line banking calls, with human escalation built in.",
    image: img["robot"],
    alt: "A friendly humanoid assistant robot holding a tablet",
    challenge:
      "First-line calls needed automating in a regulated setting, without losing the human safety net.",
    direction:
      "Conversational voice AI that handles routine calls and hands over to a person whenever it should.",
    highlights: [
      ["Voice AI", "first-line calls"],
      ["Human", "escalation built in"],
      ["Regulated", "banking setting"],
    ],
  },
  {
    tag: "Workforce development",
    title:
      "Regional workforce data and cited AI answers in one decision platform.",
    image: img["analytics"],
    alt: "Dark analytics dashboard with usage charts",
    challenge:
      "Regional workforce data sat in separate systems, and AI answers could not be checked.",
    direction:
      "A single decision platform combining the data with AI answers that cite their sources.",
    highlights: [
      ["≥95%", "answers grounded"],
      ["1", "decision platform"],
      ["Cited", "to source"],
    ],
  },
  {
    tag: "Education",
    title:
      "Meridian: alumni, school operations and AI learning on one open-source platform.",
    image: img["team-code"],
    alt: "Students working together on laptops",
    challenge:
      "Alumni, school operations and AI learning were spread across separate tools.",
    direction:
      "Meridian, one open-source platform that brings all three together.",
    highlights: [
      ["50k+", "people reached"],
      ["Open", "source"],
      ["3→1", "tools into one"],
    ],
  },
];

/** Render arrows and comparison signs in the text face; the serif lacks them. */
function withSymbols(text: string) {
  return text.split(/([→≥])/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="dh-sym">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

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
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid);
      if (d < bd) {
        bd = d;
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
    const s = slides.current[Math.max(0, Math.min(CASES.length - 1, i))];
    if (!el || !s) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
        className="dh-cases"
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="Case studies"
        aria-roledescription="carousel"
        onScroll={pick}
        onKeyDown={onKey}
      >
        <div className="dh-cases__track">
          {CASES.map((c, i) => (
            <article
              key={c.title}
              ref={(el) => {
                slides.current[i] = el;
              }}
              className={`dh-case${active === i ? " dh-is-active" : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${CASES.length}`}
              onClick={() => active !== i && go(i)}
            >
              <div className="dh-case__img">
                <Image
                  src={c.image}
                  alt={c.alt}
                  sizes="(max-width: 700px) 86vw, 680px"
                />
                <span className="dh-case__tag">{c.tag}</span>
              </div>
              <h3 className="dh-case__title">{c.title}</h3>
              <div className="dh-case__cols">
                <div>
                  <h4>Challenge</h4>
                  <p>{c.challenge}</p>
                </div>
                <div>
                  <h4>Our direction</h4>
                  <p>{c.direction}</p>
                </div>
              </div>
              <h4 className="dh-case__h">Highlights</h4>
              <div className="dh-metrics">
                {c.highlights.map(([big, small]) => (
                  <div key={big}>
                    <b>{withSymbols(big)}</b>
                    <span>{small}</span>
                  </div>
                ))}
              </div>
              <a
                className="dh-case__link"
                href="#contact"
                tabIndex={active === i ? 0 : -1}
              >
                Discuss a similar project
                <span className="dh-round">
                  <Icon n="arrow-right" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="dh-cases__nav">
        <button
          className="dh-round dh-round--lg"
          aria-label="Previous case study"
          onClick={() => go(active - 1)}
        >
          <Icon n="chevron-left" />
        </button>
        <p className="dh-cases__count" aria-live="polite">
          <b>{String(active + 1).padStart(2, "0")}</b> /{" "}
          {String(CASES.length).padStart(2, "0")}
        </p>
        <button
          className="dh-round dh-round--lg"
          aria-label="Next case study"
          onClick={() => go(active + 1)}
        >
          <Icon n="chevron-right" />
        </button>
      </div>
    </>
  );
}
