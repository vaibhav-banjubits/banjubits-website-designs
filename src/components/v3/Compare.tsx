import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export function Compare() {
  return (
    <section className="dh-sec dh-sec--light dh-sec--tight" id="why">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot"></i>Why Banjubits
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              The right system needs the <em>right partner.</em>
            </h2>
            <p
              className="dh-lede dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              Many teams can build an AI demo. The difference is how they think,
              where they begin, and whether what they hand over can be trusted
              in production.
            </p>
          </div>
        </header>

        <div
          className="dh-cmp dh-rv"
          role="table"
          aria-label="How Banjubits compares with other approaches"
        >
          <div className="dh-cmp__row dh-cmp__row--head" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="columnheader">
              What matters
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="columnheader"
            >
              Typical AI vendors
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="columnheader"
            >
              In-house only
            </div>
            <div className="dh-cmp__cell dh-cmp__cell--us" role="columnheader">
              Banjubits
            </div>
          </div>

          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="target" />
              </span>
              Starting point
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Pitch a tool or a model first.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Start from the backlog and the skills available.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              The operational outcome, and the workflow that has to change.
            </div>
          </div>
          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="shield-check" />
              </span>
              Governance
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Added after the system exists.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Varies by team and often informal.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              Plan, code-review and deploy gates from day one.
            </div>
          </div>
          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="file-search" />
              </span>
              Evidence
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Confident answers, little traceability.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Depends on who built it.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              Answers grounded and cited back to source.
            </div>
          </div>
          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="route" />
              </span>
              Path to launch
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Demo first, production later.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Competes with the day job.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              A production path planned from the first sprint.
            </div>
          </div>
          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="book-open" />
              </span>
              Handover
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              A black box you keep paying for.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              Knowledge sits with a few people.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              Built for the people who run it, with the docs to match.
            </div>
          </div>
          <div className="dh-cmp__row" role="row">
            <div className="dh-cmp__cell dh-cmp__cell--key" role="rowheader">
              <span className="dh-cmp__ic">
                <Icon n="users" />
              </span>
              Who you work with
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="Typical AI vendors"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              An account layer between you and the builders.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--muted"
              role="cell"
              data-label="In-house only"
            >
              <span className="dh-mk dh-mk--no">
                <Icon n="x" />
              </span>
              People stretched across priorities.
            </div>
            <div
              className="dh-cmp__cell dh-cmp__cell--us"
              role="cell"
              data-label="Banjubits"
            >
              <span className="dh-mk dh-mk--yes">
                <Icon n="check" />
              </span>
              Engineers who join your backlog, tools and release process.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
