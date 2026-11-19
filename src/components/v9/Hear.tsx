"use client";

import { hear, products, type ProductId } from "./data";
import { Icon } from "./Icon";

export function Hear() {
  const go = (to: ProductId | "engage" | "promise") => {
    if (to === "engage") {
      document.getElementById("engage")?.scrollIntoView({ behavior: "smooth" });
    } else if (to === "promise") {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      window.dispatchEvent(new CustomEvent("gd:open", { detail: to }));
      document.getElementById(`gd-row-${to}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="gd-sec gd-hear" id="hear" aria-labelledby="gd-hear-h">
      <div className="gd-wrap gd-hear__grid">
        <div className="gd-hear__side gd-rv">
          <p className="gd-label">What we hear</p>
          <h2 className="gd-h2" id="gd-hear-h">
            Five things leadership teams tell us. <em>Our answer to each.</em>
          </h2>
        </div>
        <ol className="gd-hear__list">
          {hear.map((h, n) => {
            const target = products.find((p) => p.id === h.to);
            return (
              <li className="gd-rv" style={{ ["--d" as string]: `${n * 0.06}s` }} key={h.say}>
                <p className="gd-hear__say">“{h.say}”</p>
                <div className="gd-hear__ans">
                  <p>{h.answer}</p>
                  <button className="gd-link" onClick={() => go(h.to)}>
                    {target ? target.name : h.to === "engage" ? "How we engage" : "Our three promises"}
                    <Icon n="arrow-right" />
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
