"use client";

import { useState } from "react";
import type { ProductId } from "./data";
import { Icon } from "./Icon";

// Small illustrative interfaces, one per Mentis product. None of this is real product output:
// each window carries an "Illustrative" tag. They replay their animation each time they mount.

const k = (n: number) => ({ "--k": n }) as React.CSSProperties;

function Chrome({ title, children, body = "" }: { title: string; children: React.ReactNode; body?: string }) {
  return (
    <div className="hb-mock hb-demo">
      <div className="hb-mock__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
        <em className="hb-mock__tag">Illustrative</em>
      </div>
      <div className={`hb-mock__body ${body}`}>{children}</div>
    </div>
  );
}

/** Atlas: a cited answer writes itself in. */
function AtlasDemo() {
  return (
    <Chrome title="Atlas · Controls" body="hb-mock__body--atlas">
      <aside aria-hidden="true">
        <b>Library</b>
        <span data-on>Policies</span>
        <span>Controls</span>
        <span>Evidence</span>
        <span>Email</span>
      </aside>
      <div className="hb-mock__chat" aria-hidden="true">
        <p className="hb-q">Which controls cover third-party access to customer data?</p>
        <div className="hb-a">
          <span className="hb-a__who">
            <Icon n="sparkle" /> Atlas
          </span>
          <p className="hb-line" style={k(0)}>
            Three controls apply. Access is limited to approved vendors and reviewed every quarter.
          </p>
          <p className="hb-line" style={k(1)}>
            Contracts require breach notice within 72 hours, and every access is logged.
          </p>
          <div className="hb-cites hb-line" style={k(2)}>
            <span>AC-3 · Access</span>
            <span>VM-1 · Vendors</span>
            <span>LG-2 · Logging</span>
          </div>
        </div>
        <p className="hb-grounded hb-line" style={k(3)}>
          <Icon n="check" /> Shows only what this person may see. Every access logged.
        </p>
      </div>
    </Chrome>
  );
}

/** Hub: one front door routes a request to the right assistant. */
function HubDemo() {
  const agents = ["Supply planning", "Customer programs", "Quality reports"];
  return (
    <Chrome title="Hub · Front door" body="hb-mock__body--hub">
      <div className="hb-hub" aria-hidden="true">
        <div className="hb-hub__req">
          <span>Request</span>
          <b>Where is this week&apos;s back-end chip plan?</b>
        </div>
        <div className="hb-hub__gate">
          <span className="hb-hub__ring" />
          <Icon n="shield" />
          <small>Hub</small>
        </div>
        <ul className="hb-hub__agents">
          {agents.map((a, i) => (
            <li key={a} style={{ "--i": i } as React.CSSProperties}>
              <i />
              {a}
            </li>
          ))}
        </ul>
      </div>
      <ul className="hb-hub__facts" aria-hidden="true">
        <li className="hb-line" style={k(1)}>
          <Icon n="check" /> Routed to the right assistant
        </li>
        <li className="hb-line" style={k(2)}>
          <Icon n="check" /> Same safety rules for every assistant
        </li>
        <li className="hb-line" style={k(3)}>
          <Icon n="check" /> Human approval before any write
        </li>
      </ul>
    </Chrome>
  );
}

/** Renew: old and new systems run side by side until every result matches. */
function RenewDemo() {
  const rows = ["Case 0412", "Case 0413", "Case 0418", "Case 0421", "Case 0425"];
  return (
    <Chrome title="Renew · Parity check" body="hb-mock__body--renew">
      <div className="hb-par" aria-hidden="true">
        <div className="hb-par__head">
          <span>Old system</span>
          <span>New, cloud-native</span>
          <span />
        </div>
        {rows.map((r, i) => (
          <div key={r} className="hb-par__row hb-line" style={k(i * 0.7)}>
            <span>{r}</span>
            <span>
              <i />
            </span>
            <span className="hb-par__ok">
              <Icon n="check" />
            </span>
          </div>
        ))}
        <div className="hb-par__bar">
          <i />
        </div>
        <p className="hb-par__foot">
          <b>100% parity</b> before any live traffic switches
        </p>
      </div>
    </Chrome>
  );
}

/** Forge: a human approval gate you can actually press. */
function ForgeDemo() {
  const [approved, setApproved] = useState(false);
  return (
    <div className="hb-demo" data-approved={approved || undefined}>
      <Chrome title="Forge · Bracket assembly" body="hb-mock__body--forge">
        <div className="hb-part" aria-hidden="true">
          <svg viewBox="0 0 320 220">
            <defs>
              <linearGradient id="hbF-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4fe3d6" />
                <stop offset="1" stopColor="#2b8fb8" />
              </linearGradient>
            </defs>
            <path className="hb-part__l" d="M70 120 L160 168 L250 122 L160 76 Z" fill="url(#hbF-top)" opacity=".92" />
            <path className="hb-part__l" d="M70 120 L70 78 L160 32 L160 76 Z" fill="#1d4f86" />
            <path className="hb-part__l" d="M250 122 L250 80 L160 32 L160 76 Z" fill="#163e6c" />
            <path className="hb-part__l" d="M70 120 L160 168 L160 126 L70 78 Z" fill="#0f2d52" opacity=".9" />
            <circle className="hb-part__hole" cx="165" cy="104" r="14" />
          </svg>
        </div>
        <ol className="hb-steps2">
          <li data-done>
            <i>
              <Icon n="check" />
            </i>
            Requirements turned into a checklist
          </li>
          <li data-done>
            <i>
              <Icon n="check" />
            </i>
            Design options generated and tested
          </li>
          <li data-now={!approved || undefined} data-done={approved || undefined}>
            <i>{approved ? <Icon n="check" /> : "3"}</i>
            Engineer sign-off
          </li>
          <li data-done={approved || undefined}>
            <i>{approved ? <Icon n="check" /> : "4"}</i>
            Decision recorded, export to CAD
          </li>
        </ol>
        <button
          type="button"
          className="hb-approve"
          aria-pressed={approved}
          onClick={() => setApproved((a) => !a)}
        >
          {approved ? (
            <>
              <Icon n="check" /> Signed off by you · undo
            </>
          ) : (
            <>Approve as the engineer</>
          )}
        </button>
      </Chrome>
    </div>
  );
}

/** Voice & HR: a spoken request becomes an itinerary, and a person can take over. */
function VoiceDemo() {
  return (
    <Chrome title="Voice · Concierge" body="hb-mock__body--voice">
      <div className="hb-mock__chat" aria-hidden="true">
        <p className="hb-q hb-q--voice">
          <Icon n="mic" /> “Free afternoon, two kids.”
        </p>
        <div className="hb-a">
          <span className="hb-a__who">
            <Icon n="sparkle" /> Concierge
          </span>
          <p className="hb-line" style={k(0)}>
            Three things near you this afternoon:
          </p>
          <ul className="hb-iti">
            <li className="hb-line" style={k(1)}>
              <b>2:00</b> Family concert
            </li>
            <li className="hb-line" style={k(2)}>
              <b>3:30</b> Garden walk
            </li>
            <li className="hb-line" style={k(3)}>
              <b>4:30</b> Museum workshop
            </li>
          </ul>
        </div>
        <p className="hb-grounded hb-line" style={k(4)}>
          <Icon n="check" /> Hands over to a person, with the whole conversation, when judgment is needed
        </p>
      </div>
    </Chrome>
  );
}

/** Delivery automation: plain English in, checked infrastructure code out. */
function DeliveryDemo() {
  return (
    <Chrome title="Delivery · Infrastructure agent" body="hb-mock__body--delivery">
      <div className="hb-mock__chat" aria-hidden="true">
        <p className="hb-q">Add a private storage area for the scoring data.</p>
        <pre className="hb-code hb-line" style={k(0)}>
          <code>
            {`resource "storage_bucket" "scoring_data" {
  access = "private"
  encrypt = true
}`}
          </code>
        </pre>
        <ul className="hb-hub__facts">
          <li className="hb-line" style={k(1)}>
            <Icon n="check" /> Checked for existing resources
          </li>
          <li className="hb-line" style={k(2)}>
            <Icon n="check" /> Validated and linted
          </li>
          <li className="hb-line" style={k(3)}>
            <Icon n="check" /> One error self-healed before deployment
          </li>
        </ul>
      </div>
    </Chrome>
  );
}

const DEMOS: Record<ProductId, () => React.JSX.Element> = {
  atlas: AtlasDemo,
  hub: HubDemo,
  renew: RenewDemo,
  forge: ForgeDemo,
  voice: VoiceDemo,
  delivery: DeliveryDemo,
};

export function Demo({ id }: { id: ProductId }) {
  const D = DEMOS[id];
  return <D />;
}
