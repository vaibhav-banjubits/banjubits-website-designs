"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const SOURCES = [
  { k: "1", t: "Reliability report, section 4", d: "Opened by R. Shah, 14:02. Read access checked first." },
  { k: "2", t: "Email, 12 Nov", d: "Supplier reply. Visible to the programs team only." },
  { k: "3", t: "Ticket 4821", d: "Customer request. Logged with the answer." },
];

const MODELS = [
  { id: "a", label: "Model A", note: "A hosted model you already license" },
  { id: "b", label: "Model B", note: "A second hosted model, swapped in" },
  { id: "c", label: "Open source", note: "Runs fully on your own hardware" },
];

const ITEMS = [
  {
    title: "Every answer shows its source",
    say: "“I can’t sign off on answers nobody can check.”",
    text: "People see where each answer comes from, so they can check it, trust it and act on it.",
    hint: "Tap a number to open its source.",
  },
  {
    title: "Your people make the call",
    say: "“Our best people are stuck on repetitive work.”",
    text: "AI does the legwork. A named person approves every important decision.",
    hint: "Approve or hold the decision.",
  },
  {
    title: "Your data stays inside your walls",
    say: "“Our most sensitive data can’t leave the building.”",
    text: "We run in your cloud or on your premises, with the AI models you choose.",
    hint: "Swap the model. The data does not move.",
  },
];

/** The three promises, each one small enough to test with a click. */
export function Promises() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>("1");
  const [decision, setDecision] = useState<"idle" | "approved" | "held">("idle");
  const [model, setModel] = useState("a");
  const src = SOURCES.find((x) => x.k === open);
  const m = MODELS.find((x) => x.id === model)!;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setTab((t) => (t + 1) % ITEMS.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setTab((t) => (t + ITEMS.length - 1) % ITEMS.length);
    }
  };

  return (
    <section className="st-sec st-prom" id="promises" aria-labelledby="st-prom-h">
      <div className="st-wrap">
        <div className="st-head st-head--center st-rv">
          <p className="st-label">How it holds up</p>
          <h2 className="st-h2" id="st-prom-h">
            Three promises <em>you can test.</em>
          </h2>
          <p className="st-sub">Each one answers something leadership teams tell us. Try them.</p>
        </div>

        <div className="st-prom__grid st-rv">
          <div className="st-ptabs" role="tablist" aria-label="The three promises" aria-orientation="vertical" onKeyDown={onKey}>
            {ITEMS.map((it, n) => (
              <button
                key={it.title}
                type="button"
                role="tab"
                id={`st-ptab-${n}`}
                aria-selected={tab === n}
                aria-controls="st-pstage"
                tabIndex={tab === n ? 0 : -1}
                className="st-ptab"
                onClick={() => setTab(n)}
              >
                <span className="st-ptab__n">0{n + 1}</span>
                <b>{it.title}</b>
                <small>{it.say}</small>
                <p>{it.text}</p>
              </button>
            ))}
          </div>

          <div className="st-stage" id="st-pstage" role="tabpanel" aria-labelledby={`st-ptab-${tab}`} key={tab}>
            <p className="st-stage__hint">
              <Icon n="sparkles" /> {ITEMS[tab].hint}
            </p>

            {tab === 0 && (
              <div className="st-pc__demo">
                <p>
                  Aurora is blocked on a reliability report.
                  {SOURCES.map((x) => (
                    <button
                      key={x.k}
                      type="button"
                      className={`st-cite${open === x.k ? " st-cite--on" : ""}`}
                      aria-pressed={open === x.k}
                      onClick={() => setOpen(open === x.k ? null : x.k)}
                    >
                      {x.k}
                    </button>
                  ))}
                </p>
                <div className="st-pop" aria-live="polite">
                  {src ? (
                    <>
                      <b>{src.t}</b>
                      <small>{src.d}</small>
                    </>
                  ) : (
                    <small>Tap a number to see where it came from.</small>
                  )}
                </div>
              </div>
            )}

            {tab === 1 && (
              <div className="st-pc__demo">
                <div className={`st-appr st-appr--${decision}`}>
                  <b>Send the corrected invoice to 214 customers?</b>
                  {decision === "idle" && (
                    <div className="st-appr__bt">
                      <button type="button" className="st-btn st-btn--sm" onClick={() => setDecision("approved")}>
                        Approve
                      </button>
                      <button type="button" className="st-btn st-btn--ghost st-btn--sm" onClick={() => setDecision("held")}>
                        Hold
                      </button>
                    </div>
                  )}
                  {decision !== "idle" && (
                    <p>
                      <Icon n={decision === "approved" ? "badge-check" : "clock"} />
                      {decision === "approved" ? "Approved by you at 14:05. Sent and logged." : "Held for review. Nothing was sent."}
                      <button type="button" className="st-reset" onClick={() => setDecision("idle")}>
                        Reset
                      </button>
                    </p>
                  )}
                </div>
              </div>
            )}

            {tab === 2 && (
              <div className="st-pc__demo">
                <div className="st-seg" role="radiogroup" aria-label="Choose the AI model">
                  {MODELS.map((x) => (
                    <button
                      key={x.id}
                      type="button"
                      role="radio"
                      aria-checked={model === x.id}
                      className={model === x.id ? "st-seg--on" : ""}
                      onClick={() => setModel(x.id)}
                    >
                      {x.label}
                    </button>
                  ))}
                </div>
                <div className="st-walls">
                  <div className="st-walls__in">
                    <span className="st-walls__lbl">Your cloud or premises</span>
                    <span className="st-walls__n">Your data</span>
                    <span className="st-walls__n st-walls__n--hot">{m.label}</span>
                  </div>
                  <div className="st-walls__out">
                    <Icon n="lock" />
                    <small>Public internet: no data leaves</small>
                  </div>
                </div>
                <small className="st-walls__note" aria-live="polite">
                  {m.note}. Swap it any time.
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
