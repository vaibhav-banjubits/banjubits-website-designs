import type { CSSProperties, ReactNode } from "react";
import type { ProductId } from "./data";
import { Icon } from "./Icon";

// Small illustrative interfaces, one per product. None of this is real product output.

function Bar({ title }: { title: string }) {
  return (
    <div className="mn-mock__bar">
      <i />
      <i />
      <i />
      <span>{title}</span>
    </div>
  );
}

function Atlas() {
  return (
    <div className="mn-mock">
      <Bar title="Atlas · Ask your business" />
      <div className="mn-msg mn-msg--q">Which suppliers failed audit last quarter?</div>
      <div className="mn-msg mn-msg--a">
        <p>Two suppliers failed. Both were re-audited and cleared in September.</p>
        <div className="mn-cites">
          {["Audit log Q3", "Email thread", "Supplier file"].map((c) => (
            <span key={c}>
              <Icon n="file-search" />
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="mn-bar">
        <span>Shown only what you may see</span>
        <i style={{ "--w": "100%" } as CSSProperties} />
      </div>
    </div>
  );
}

function Hub() {
  const rows: [string, string, boolean][] = [
    ["IT assistant", "94%", true],
    ["HR assistant", "21%", false],
    ["Finance assistant", "9%", false],
  ];
  return (
    <div className="mn-mock">
      <Bar title="Hub · One front door" />
      <div className="mn-msg mn-msg--q">Reset my VPN access</div>
      <ul className="mn-route">
        {rows.map(([n, p, on]) => (
          <li key={n} className={on ? "mn-on" : undefined}>
            <Icon n={on ? "check" : "bot"} />
            {n}
            <b>{p}</b>
          </li>
        ))}
      </ul>
      <div className="mn-review">
        <Icon n="users" />
        Manager approval before access is granted
      </div>
    </div>
  );
}

function Renew() {
  return (
    <div className="mn-mock">
      <Bar title="Renew · Side by side" />
      <div className="mn-par">
        <div>
          <small>Old system</small>
          <b>0.8472</b>
        </div>
        <Icon n="scale" />
        <div>
          <small>New cloud service</small>
          <b>0.8472</b>
        </div>
      </div>
      <div className="mn-bar">
        <span>Results match · 100%</span>
        <i style={{ "--w": "100%" } as CSSProperties} />
      </div>
      <ol className="mn-steps">
        <li>
          <Icon n="check" />
          Map the old system
        </li>
        <li>
          <Icon n="check" />
          Rebuild one part at a time
        </li>
        <li className="mn-gate">
          <Icon n="lock" />
          Switch over · waiting for sign-off
        </li>
      </ol>
    </div>
  );
}

function Forge() {
  return (
    <div className="mn-mock">
      <Bar title="Forge · Bracket design loop" />
      <svg
        className="mn-cad"
        viewBox="0 0 320 190"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <g className="mn-cad__grid" strokeWidth="1">
          <path d="M0 150 160 190 320 150" />
          <path d="M0 120 160 160 320 120" opacity=".5" />
        </g>
        <g strokeWidth="2">
          <path d="M70 120 160 150 250 120 160 90Z" className="mn-cad__top" />
          <path d="M70 120v-34l90 30v34Z" className="mn-cad__l" />
          <path d="M250 120v-34l-90 30v34Z" className="mn-cad__r" />
          <path d="M70 86l90-30 90 30-90 30Z" className="mn-cad__t2" />
          <circle cx="160" cy="86" r="14" strokeDasharray="4 4" />
        </g>
      </svg>
      <ol className="mn-steps">
        <li>
          <Icon n="check" />
          48 design options tested
        </li>
        <li className="mn-gate">
          <Icon n="lock" />
          Engineer sign-off · recorded
        </li>
      </ol>
    </div>
  );
}

function Voice() {
  return (
    <div className="mn-mock">
      <Bar title="Voice · Live conversation" />
      <div className="mn-wave" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="mn-tline">
        <b>Visitor</b>Something for two people on Saturday, indoors.
      </div>
      <div className="mn-tline mn-tline--me">
        <b>Assistant</b>Three options across two venues. Shall I plan the evening?
      </div>
      <div className="mn-review">
        <Icon n="users" />
        Hands over to a person when judgment is needed
      </div>
    </div>
  );
}

function Delivery() {
  return (
    <div className="mn-mock">
      <Bar title="Delivery · Plain English to cloud" />
      <div className="mn-tline mn-tline--me">
        <b>You</b>A private network with two subnets and a database.
      </div>
      <pre className="mn-code" aria-hidden="true">
        {`resource "aws_vpc" "main" {\n  cidr_block = "10.0.0.0/16"\n}`}
      </pre>
      <ol className="mn-steps">
        <li>
          <Icon n="check" />
          Existing resources checked
        </li>
        <li>
          <Icon n="check" />
          Validated and linted
        </li>
        <li>
          <Icon n="check" />
          One error found and fixed itself
        </li>
      </ol>
    </div>
  );
}

const MOCKS: Record<ProductId, ReactNode> = {
  atlas: <Atlas />,
  hub: <Hub />,
  renew: <Renew />,
  forge: <Forge />,
  voice: <Voice />,
  delivery: <Delivery />,
};

export function Mock({ id }: { id: ProductId }) {
  return <>{MOCKS[id]}</>;
}
