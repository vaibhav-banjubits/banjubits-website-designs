"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroScripts, matchProduct, products, STAGES, type ProductId } from "./data";
import { Icon } from "./Icon";

const ORDER: ProductId[] = ["atlas", "hub", "renew", "forge", "voice", "delivery"];

/**
 * The prompt is the hero: a visitor says what they want AI to do and gets the matching Mentis
 * accelerator, with its steps and honest status. Scripted preview, not a live model.
 */
export function Hero() {
  const [id, setId] = useState<ProductId>("renew");
  const [text, setText] = useState(heroScripts.renew.prompt);
  const [run, setRun] = useState(0);
  const [matched, setMatched] = useState(false);
  const timer = useRef(0);

  const type = useCallback((full: string) => {
    window.clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(full);
      return;
    }
    let n = 0;
    setText("");
    timer.current = window.setInterval(() => {
      n += 2;
      setText(full.slice(0, n));
      if (n >= full.length) window.clearInterval(timer.current);
    }, 16);
  }, []);

  const choose = useCallback(
    (pid: ProductId) => {
      setId(pid);
      setMatched(false);
      setRun((r) => r + 1);
      type(heroScripts[pid].prompt);
    },
    [type],
  );

  // Tiles in the bento below send the visitor back up to try that accelerator here.
  useEffect(() => {
    const on = (e: Event) => {
      choose((e as CustomEvent<ProductId>).detail);
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("st:ask", on);
    return () => {
      window.removeEventListener("st:ask", on);
      window.clearInterval(timer.current);
    };
  }, [choose]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!text.trim()) return;
    window.clearInterval(timer.current);
    setId(matchProduct(text));
    setMatched(true);
    setRun((r) => r + 1);
  };

  const p = products.find((x) => x.id === id)!;
  const s = heroScripts[id];

  return (
    <section className="st-hero" id="top" aria-labelledby="st-hero-h">
      <div className="st-blob st-blob--a" aria-hidden="true" />
      <div className="st-blob st-blob--b" aria-hidden="true" />
      <div className="st-blob st-blob--c" aria-hidden="true" />

      <div className="st-wrap st-hero__in">
        <p className="st-pill st-up" style={{ ["--i" as string]: 0 }}>
          <b>Mentis</b> accelerators, built from our own delivery work
        </p>
        <h1 className="st-h1 st-up" id="st-hero-h" style={{ ["--i" as string]: 1 }}>
          What should AI do for <em>your business?</em>
        </h1>

        <form className="st-ask st-up" style={{ ["--i" as string]: 2 }} onSubmit={submit}>
          <label className="st-sr" htmlFor="st-prompt">
            Describe what you want AI to do
          </label>
          <textarea
            id="st-prompt"
            className="st-ask__text"
            rows={2}
            value={text}
            placeholder="Describe a problem, in your own words"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
          />
          <div className="st-ask__row">
            <span className="st-mini">
              <Icon n="file-search" />
              Documents
            </span>
            <span className="st-mini">
              <Icon n="mail" />
              Email
            </span>
            <span className="st-mini">
              <Icon n="layers" />
              Tickets
            </span>
            <button className="st-send" type="submit" aria-label="Show me what Mentis would do">
              <Icon n="arrow-up" />
            </button>
          </div>
        </form>

        <div className="st-chips st-up" style={{ ["--i" as string]: 3 }} role="group" aria-label="Or start from a common job">
          {ORDER.map((k) => (
            <button
              key={k}
              type="button"
              className={`st-chip${k === id ? " st-chip--on" : ""}`}
              aria-pressed={k === id}
              onClick={() => choose(k)}
            >
              {heroScripts[k].label}
            </button>
          ))}
        </div>

        <article className="st-resp" key={run} aria-live="polite">
          {matched && (
            <p className="st-resp__match">
              Closest accelerator to what you described. Not quite right? Pick a job above.
            </p>
          )}
          <header className="st-resp__hd">
            <span className="st-sq">
              <Icon n={p.icon} />
            </span>
            <b>{p.name}</b>
            <span className="st-badge">
              <span className={`st-dot st-dot--${p.stage}`} />
              {STAGES[p.stage].label}
            </span>
          </header>

          <ol className="st-resp__steps">
            {s.steps.map((st, n) => (
              <li key={st.t} style={{ ["--i" as string]: n }}>
                <span className="st-ck">
                  <Icon n="check" />
                </span>
                <div>
                  <b>{st.t}</b>
                  <small>{st.d}</small>
                  {st.bar && (
                    <span className="st-meter" aria-hidden="true">
                      <i />
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {p.stage !== "proven" && (
            <p className="st-resp__note">
              <span className={`st-dot st-dot--${p.stage}`} />
              {p.stageNote}
            </p>
          )}

          <footer className="st-resp__ft">
            {s.sources.map((x) => (
              <span className="st-src" key={x}>
                {x}
              </span>
            ))}
            <a
              href="#start"
              className="st-btn"
              onClick={() => window.dispatchEvent(new CustomEvent("st:topic", { detail: id }))}
            >
              <span>Talk to us about {p.name.replace("Mentis ", "")}</span>
              <Icon n="arrow-right" />
            </a>
          </footer>
        </article>

        <p className="st-fine st-up" style={{ ["--i" as string]: 4 }}>
          Preview only: scripted from our delivery record, not a live model. Names and figures are illustrative.
        </p>
      </div>
    </section>
  );
}
