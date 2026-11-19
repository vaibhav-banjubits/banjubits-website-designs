"use client";

import { useEffect, useState } from "react";
import { email, products, type ProductId } from "./data";
import { Icon } from "./Icon";

export function Start() {
  const [topic, setTopic] = useState<ProductId | "other">("atlas");

  // The "Talk to us about…" buttons in the product index pre-select the topic here.
  useEffect(() => {
    const on = (e: Event) => setTopic((e as CustomEvent<ProductId>).detail);
    window.addEventListener("gd:topic", on);
    return () => window.removeEventListener("gd:topic", on);
  }, []);

  // No back end yet: opens the visitor's email app with the details filled in.
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const job = topic === "other" ? "Something else" : products.find((p) => p.id === topic)?.job;
    const body = [
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company") || "-"}`,
      `I would like to: ${job}`,
      "",
      `${f.get("problem") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Working session request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="gd-sec gd-start" id="start" aria-labelledby="gd-start-h">
      <div className="gd-wrap gd-start__grid">
        <div className="gd-start__copy gd-rv">
          <p className="gd-label gd-label--dark">Next step</p>
          <h2 className="gd-h2" id="gd-start-h">
            Bring one business problem. <em>Leave with a plan.</em>
          </h2>
          <p className="gd-sub">
            A 90-minute working session: you leave with the AI options, the risks and the shape of a first pilot.
            References are available under NDA.
          </p>
          <a className="gd-mail" href={`mailto:${email}`}>
            {email} <Icon n="arrow-up-right" />
          </a>
        </div>

        <form className="gd-form gd-rv" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            <span>Company</span>
            <input name="company" autoComplete="organization" />
          </label>
          <label>
            <span>I would like AI to</span>
            <select value={topic} onChange={(e) => setTopic(e.target.value as ProductId | "other")}>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.job}
                </option>
              ))}
              <option value="other">Something else</option>
            </select>
          </label>
          <label>
            <span>The problem, in a sentence or two</span>
            <textarea name="problem" rows={3} />
          </label>
          <button className="gd-btn gd-btn--lg gd-btn--saffron" type="submit">
            <span>Book a working session</span>
            <Icon n="arrow-right" />
          </button>
          <p className="gd-form__note">This opens your email app to {email}.</p>
        </form>
      </div>
    </section>
  );
}
