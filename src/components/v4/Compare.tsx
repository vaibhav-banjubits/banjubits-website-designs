import { SecHead } from "./Studio";

const ROWS = [
  { k: "Starting point", them: "Pick a model, then look for a use", us: "The outcome and the workflow that has to change" },
  { k: "Governance", them: "Added after launch, if at all", us: "Plan, code-review and deploy gates from day one" },
  { k: "AI answers", them: "Fluent, but hard to verify", us: "Grounded and cited back to source" },
  { k: "People", them: "Automation that sidelines teams", us: "Decisions stay with a person, by design" },
  { k: "Releases", them: "Big-bang launches", us: "Controlled, reviewable, auditable changes" },
  { k: "When we leave", them: "A black box and a support contract", us: "Your code, your cloud, full documentation" },
];

export function Compare() {
  return (
    <section className="sg-sec sg-compare" aria-labelledby="sg-cmp-title">
      <div className="sg-wrap">
        <SecHead n="06" label="Why Banjubits" aside="A different kind of partner" />
        <h2 id="sg-cmp-title" className="sg-h2 sg-compare__title sg-rv">
          The right partner changes <em>the whole route.</em>
        </h2>

        <div className="sg-cmp sg-rv" role="table" aria-label="Typical AI vendor compared with Banjubits">
          <div className="sg-cmp__row sg-cmp__row--head" role="row">
            <span role="columnheader">
              <span className="sg-sr">Area</span>
            </span>
            <span role="columnheader">Typical AI vendor</span>
            <span role="columnheader">Banjubits</span>
          </div>
          {ROWS.map((r) => (
            <div key={r.k} className="sg-cmp__row" role="row">
              <span role="rowheader" className="sg-cmp__k">
                {r.k}
              </span>
              <span role="cell" className="sg-cmp__them">
                {r.them}
              </span>
              <span role="cell" className="sg-cmp__us">
                <i aria-hidden="true" />
                {r.us}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
