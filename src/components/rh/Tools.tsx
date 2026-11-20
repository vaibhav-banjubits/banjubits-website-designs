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
    <div className="rh-check rh-rv">
      <div className="rh-check__top">
        <div>
          <p className="rh-kicker">
            <i />
            Readiness check
          </p>
          <h3 className="rh-h3">Is your AI project ready to build?</h3>
        </div>
        <p className="rh-check__count" aria-live="polite">
          {done}/{questions.length}
        </p>
      </div>

      <div className="rh-meter" aria-hidden="true">
        <i style={{ width: `${(done / questions.length) * 100}%` }} />
      </div>

      <ol className="rh-check__qs">
        {questions.map((q, i) => (
          <li key={q}>
            <fieldset>
              <legend>{q}</legend>
              <div className="rh-seg">
                <label>
                  <input
                    type="radio"
                    name={`rh-q-${i}`}
                    checked={answers[i] === true}
                    onChange={() => set(i, true)}
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name={`rh-q-${i}`}
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

      <div className="rh-check__out" data-done={complete || undefined} aria-live="polite">
        {complete ? (
          <>
            <p className="rh-check__score">
              {score}
              <small>/{questions.length}</small>
            </p>
            <div>
              <h4>{band.title}</h4>
              <p>{band.text}</p>
            </div>
            <div className="rh-check__act">
              <a href="#contact" className="rh-btn rh-btn--sm">
                Talk it through
                <span className="rh-btn__ic">
                  <Icon n="arrow" />
                </span>
              </a>
              <button type="button" className="rh-link" onClick={() => setAnswers(questions.map(() => null))}>
                <Icon n="rotate" />
                Start again
              </button>
            </div>
          </>
        ) : (
          <p className="rh-check__hint">
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
    <section className="rh-sec rh-stone" id="tools" aria-labelledby="rh-tools-title">
      <div className="rh-wrap">
        <div className="rh-center rh-rv">
          <p className="rh-kicker">
            <i />
            Tools &amp; products
          </p>
          <h2 id="rh-tools-title" className="rh-h2">
            Explore practical tools for <em>smarter decisions</em>
          </h2>
        </div>

        <div className="rh-tools">
          <Check />

          <div className="rh-prods">
            <p className="rh-prods__head rh-rv">
              From our own lab: <b>Mentis</b>, AI products where a person always keeps the decision.
            </p>
            {products.map((p, i) => (
              <article
                key={p.name}
                className="rh-prod rh-rv"
                style={{ ["--d" as string]: `${i * 0.08}s` }}
              >
                <span className="rh-card__ic rh-card__ic--night">
                  <Icon n={["shield", "users", "boxes"][i]} />
                </span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
                <Icon n="arrow-ur" className="rh-prod__go" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
