"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { email, products, type ProductId } from "./data";
import { Icon } from "./Icon";
import { img } from "./images";

export function Start() {
  const [topic, setTopic] = useState<ProductId | "other">("atlas");

  // The "Talk to us about…" buttons in the product finder pre-select the topic here.
  useEffect(() => {
    const on = (e: Event) => setTopic((e as CustomEvent<ProductId>).detail);
    window.addEventListener("ld:topic", on);
    return () => window.removeEventListener("ld:topic", on);
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
    <section className="ld-sec ld-start" id="start" aria-labelledby="ld-start-h">
      <Image src={img.chairs} alt="" fill sizes="100vw" className="ld-start__bg" style={{ objectFit: "cover" }} />
      <div className="ld-start__veil" />
      <div className="ld-wrap ld-start__grid">
        <div className="ld-start__copy ld-rv">
          <p className="ld-label ld-label--dark">Next step</p>
          <h2 className="ld-h2" id="ld-start-h">
            Bring one business problem. <em>Leave with a plan.</em>
          </h2>
          <p className="ld-sub">
            A 90-minute working session: you leave with the AI options, the risks and the shape of a first pilot.
            References are available under NDA.
          </p>
          <ul className="ld-start__list">
            <li>
              <Icon n="check" /> No slide decks, a working conversation
            </li>
            <li>
              <Icon n="check" /> The people who scope it are the people who build it
            </li>
            <li>
              <Icon n="check" /> Your data stays with you
            </li>
          </ul>
        </div>

        <form className="ld-form ld-rv" onSubmit={submit}>
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
          <button className="ld-btn ld-btn--lg ld-btn--full" type="submit">
            <span>Book a working session</span>
            <Icon n="arrow-right" />
          </button>
          <p className="ld-form__note">This opens your email app to {email}.</p>
        </form>
      </div>
    </section>
  );
}
