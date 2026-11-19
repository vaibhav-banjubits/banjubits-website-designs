"use client";

import { useEffect, useState } from "react";
import { email, products, type ProductId } from "./data";
import { TopicPicker, type Topic } from "./TopicPicker";
import { Icon } from "./Icon";

export function Start() {
  const [topic, setTopic] = useState<Topic>("atlas");

  // The "Talk to us about…" buttons in the product index pre-select the topic here.
  useEffect(() => {
    const on = (e: Event) => setTopic((e as CustomEvent<ProductId>).detail);
    window.addEventListener("st:topic", on);
    return () => window.removeEventListener("st:topic", on);
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
    <section className="st-sec st-start" id="start" aria-labelledby="st-start-h">
      <div className="st-wrap st-start__grid">
        <div className="st-start__copy st-rv">
          <p className="st-label st-label--dark">Next step</p>
          <h2 className="st-h2" id="st-start-h">
            Bring one business problem. <em>Leave with a plan.</em>
          </h2>
          <p className="st-sub">
            A 90-minute working session: you leave with the AI options, the risks and the shape of a first pilot.
            References are available under NDA.
          </p>
          <a className="st-mail" href={`mailto:${email}`}>
            {email} <Icon n="arrow-up-right" />
          </a>
        </div>

        <form className="st-form st-rv" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            <span>Company</span>
            <input name="company" autoComplete="organization" />
          </label>
          <TopicPicker value={topic} onChange={setTopic} />
          <label>
            <span>The problem, in a sentence or two</span>
            <textarea name="problem" rows={3} />
          </label>
          <button className="st-btn st-btn--lg st-btn--saffron" type="submit">
            <span>Book a working session</span>
            <Icon n="arrow-right" />
          </button>
          <p className="st-form__note">This opens your email app to {email}.</p>
        </form>
      </div>
    </section>
  );
}
