"use client";

import { useState } from "react";
import { products } from "@/lib/content";
import { bands, questions } from "./data";
import { Icon } from "./Icon";

type Answer = boolean | null;

function Check() {
  const [answers, setAnswers] = useState<Answer[]>(() => questions.map(() => null));
  const done = answers.filter((a) => a !== null).length;
  const score = answers.filter((a) => a === true).length;
  const band = bands.find((b) => score <= b.max) ?? bands[bands.length - 1];
  const complete = done === questions.length;

  const set = (i: number, v: boolean) =>
    setAnswers((prev) => prev.map((a, n) => (n === i ? v : a)));

  return (
    <div className="rt-check rt-rv">
      <div className="rt-check__top">
        <div>
          <p className="rt-kicker">
            <i />
            Readiness check
          </p>
          <h3 className="rt-h3">Is your AI project ready to build?</h3>
        </div>
        <p className="rt-check__count" aria-live="polite">
          {done}/{questions.length}
        </p>
      </div>

      <div className="rt-meter" aria-hidden="true">
        <i style={{ width: `${(done / questions.length) * 100}%` }} />
      </div>

      <ol className="rt-check__qs">
        {questions.map((q, i) => (
          <li key={q}>
            <fieldset>
              <legend>{q}</legend>
              <div className="rt-seg">
                <label>
                  <input
                    type="radio"
                    name={`rt-q-${i}`}
                    checked={answers[i] === true}
                    onChange={() => set(i, true)}
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name={`rt-q-${i}`}
                    checked={answers[i] === false}
                    onChange={() => set(i, false)}
                  />
                  <span>Not yet</span>
                </label>
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="rt-check__out" data-done={complete || undefined} aria-live="polite">
        {complete ? (
          <>
            <p className="rt-check__score">
              {score}
              <small>/{questions.length}</small>
            </p>
            <div>
              <h4>{band.title}</h4>
              <p>{band.text}</p>
            </div>
            <div className="rt-check__act">
              <a href="#contact" className="rt-btn rt-btn--sm">
                Talk it through
                <span className="rt-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <button type="button" className="rt-link" onClick={() => setAnswers(questions.map(() => null))}>
                <Icon n="rotate" />
                Start again
              </button>
            </div>
          </>
        ) : (
          <p className="rt-check__hint">
            Answer {questions.length - done} more to see where you stand. An indicative
            conversation starter, not an assessment.
          </p>
        )}
      </div>
    </div>
  );
}

export function Tools() {
  return (
    <section className="rt-sec rt-stone" id="tools" aria-labelledby="rt-tools-title">
      <div className="rt-wrap">
        <div className="rt-center rt-rv">
          <p className="rt-kicker">
            <i />
            Tools &amp; products
          </p>
          <h2 id="rt-tools-title" className="rt-h2">
            Explore practical tools for <em>smarter decisions</em>
          </h2>
        </div>

        <div className="rt-tools">
          <Check />

          <div className="rt-prods">
            <p className="rt-prods__head rt-rv">
              From our own lab: <b>Mentis</b>, AI products where a person always keeps the decision.
            </p>
            {products.map((p, i) => (
              <article
                key={p.name}
                className="rt-prod rt-rv"
                style={{ ["--d" as string]: `${i * 0.08}s` }}
              >
                <span className="rt-card__ic rt-card__ic--night">
                  <Icon n={["shield", "users", "boxes"][i]} />
                </span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
                <Icon n="arrow-ur" className="rt-prod__go" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
