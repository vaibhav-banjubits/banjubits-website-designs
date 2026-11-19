import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";
import type { ProductId } from "./data";

/* One bold, simple graphic per product. Illustrative, built from glass cards and lines.
   Each one loops a small story: data moves, results fill in, a person approves. */

const at = (x: number, y: number, i = 0): CSSProperties =>
  ({ left: `${x}%`, top: `${y}%`, "--i": i }) as CSSProperties;

function Lines({ d }: { d: string[] }) {
  return (
    <svg className="vz-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {d.map((p) => (
        <path key={p} d={p} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/** A glowing dot that travels in a straight line from one point to another, again and again. */
function Packet({ from, to, i = 0, dur = 2.6 }: { from: [number, number]; to: [number, number]; i?: number; dur?: number }) {
  return (
    <span
      className="vz-pkt"
      aria-hidden="true"
      style={{ "--x0": `${from[0]}%`, "--y0": `${from[1]}%`, "--x1": `${to[0]}%`, "--y1": `${to[1]}%`, "--i": i, "--dur": `${dur}s` } as CSSProperties}
    />
  );
}

function Node({ x, y, i, children, label, lit }: { x: number; y: number; i: number; children: ReactNode; label?: string; lit?: number }) {
  return (
    <span className={`vz-node vz-in${lit !== undefined ? " vz-node--lit" : ""}`} style={{ ...at(x, y, i), "--l": lit ?? 0 } as CSSProperties}>
      {children}
      {label && <em>{label}</em>}
    </span>
  );
}

function Atlas() {
  const pts: [number, number][] = [[14, 18], [86, 20], [13, 82], [87, 80]];
  return (
    <>
      <Lines d={pts.map(([x, y]) => `M${x} ${y} L50 50`)} />
      {pts.map(([x, y], i) => (
        <Packet key={i} from={[x, y]} to={[50, 50]} i={i} />
      ))}
      <Node x={14} y={18} i={1}><Icon n="file-search" /></Node>
      <Node x={86} y={20} i={2}><Icon n="mail" /></Node>
      <Node x={13} y={82} i={3}><Icon n="message-square" /></Node>
      <Node x={87} y={80} i={4}><Icon n="database" /></Node>
      <div className="vz-card vz-answer vz-in" style={at(50, 50, 0)}>
        <small>Ask Atlas</small>
        <b>Which programs are waiting on sign-off?</b>
        <i className="vz-bar vz-bar--type" style={{ width: "92%", "--k": 0 } as CSSProperties} />
        <i className="vz-bar vz-bar--type" style={{ width: "74%", "--k": 1 } as CSSProperties} />
        <span className="vz-pills">
          <u style={{ "--k": 0 } as CSSProperties}>1 · Review notes</u>
          <u style={{ "--k": 1 } as CSSProperties}>2 · Transcript</u>
        </span>
      </div>
    </>
  );
}

function Hub() {
  const left: [number, number][] = [[14, 24], [14, 50], [14, 76]];
  const right: [number, number][] = [[86, 24], [86, 50], [86, 76]];
  return (
    <>
      {/* Same start and end points as the travelling dots, so they ride exactly on the lines.
          The nodes and the hub are drawn on top and hide the line ends. */}
      <Lines d={[...left, ...right].map(([x, y]) => (x < 50 ? `M${x} ${y} L50 50` : `M50 50 L${x} ${y}`))} />
      {left.map(([x, y], i) => (
        <Packet key={`l${i}`} from={[x, y]} to={[50, 50]} i={i} dur={2.2} />
      ))}
      {right.map(([x, y], i) => (
        <Packet key={`r${i}`} from={[50, 50]} to={[x, y]} i={i + 3} dur={2.2} />
      ))}
      <Node x={14} y={24} i={1} label="Teams"><Icon n="users" /></Node>
      <Node x={14} y={50} i={2} label="Slack"><Icon n="message-square" /></Node>
      <Node x={14} y={76} i={3} label="Web"><Icon n="laptop-min" /></Node>
      <Node x={86} y={24} i={4} lit={0}><Icon n="bot" /></Node>
      <Node x={86} y={50} i={5} lit={1}><Icon n="bot" /></Node>
      <Node x={86} y={76} i={6} lit={2}><Icon n="bot" /></Node>
      <span className="vz-hub vz-in" style={at(50, 50, 0)}>
        <i /> <i />
        <em className="vz-hub__ring" />
        <b>Hub</b>
      </span>
      <span className="vz-card vz-chip vz-approve vz-in" style={at(50, 86, 7)}>
        <Icon n="badge-check" /> Approved by you
      </span>
    </>
  );
}

function Renew() {
  const bars = ["100%", "70%", "86%", "54%"];
  return (
    <>
      <div className="vz-card vz-block vz-block--old vz-in" style={at(21, 50, 0)}>
        <small>Old system</small>
        {bars.map((w, i) => (
          <i key={i} style={{ width: w, "--k": i } as CSSProperties} />
        ))}
        <span className="vz-sweep" aria-hidden="true" />
      </div>
      <span className="vz-link" aria-hidden="true" />
      <div className="vz-card vz-block vz-block--new vz-in" style={at(79, 50, 2)}>
        <small>Cloud service</small>
        {bars.map((w, i) => (
          <i key={i} style={{ width: w, "--k": i } as CSSProperties} />
        ))}
      </div>
      <span className="vz-match vz-in" style={at(50, 50, 1)}>
        <b className="vz-ping" />
        <Icon n="circle-check" />
        <em>Match</em>
      </span>
    </>
  );
}

function Forge() {
  return (
    <>
      <span className="vz-scan" aria-hidden="true" />
      <span className="vz-persp" aria-hidden="true">
        <span className="vz-3d">
          <i /> <i /> <i /> <i /> <i /> <i />
        </span>
        <span className="vz-3d vz-3d--in">
          <i /> <i /> <i /> <i /> <i /> <i />
        </span>
      </span>
      <span className="vz-card vz-chip vz-tick vz-in" style={{ ...at(22, 22, 1), "--k": 0 } as CSSProperties}><Icon n="check" /> Weight</span>
      <span className="vz-card vz-chip vz-tick vz-in" style={{ ...at(80, 38, 2), "--k": 1 } as CSSProperties}><Icon n="check" /> Thermal</span>
      <span className="vz-card vz-chip vz-tick vz-in" style={{ ...at(24, 70, 3), "--k": 2 } as CSSProperties}><Icon n="check" /> Cost</span>
      <span className="vz-card vz-chip vz-chip--tag vz-in" style={at(74, 82, 4)}>Concept · not built yet</span>
    </>
  );
}

function Voice() {
  return (
    <>
      <span className="vz-wave vz-wave--l" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <i key={i} style={{ "--w": i } as CSSProperties} />
        ))}
      </span>
      <span className="vz-wave vz-wave--r" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <i key={i} style={{ "--w": i + 3 } as CSSProperties} />
        ))}
      </span>
      <span className="vz-mic vz-in" style={at(50, 52, 0)}>
        <i /> <i /> <i />
        <Icon n="mic" />
      </span>
      <span className="vz-card vz-bubble vz-bubble--you vz-in" style={at(70, 17, 2)}>“Free afternoon, two kids.”</span>
      <span className="vz-card vz-bubble vz-bubble--bot vz-in" style={at(30, 86, 3)}>
        <b className="vz-dots"><i /><i /><i /></b>
        <span>Gardens at 1, concert at 3.</span>
      </span>
    </>
  );
}

function Delivery() {
  const rows = ["Existing resources checked", "Terraform generated", "Validated, one error fixed", "Ready to deploy"];
  return (
    <div className="vz-card vz-term vz-in" style={at(50, 50, 0)}>
      <span className="vz-term__bar"><i /><i /><i /></span>
      <p><Icon n="code-xml" /> create a private cluster<em className="vz-cursor" /></p>
      {rows.map((r, i) => (
        <span key={r} className="vz-row" style={{ "--k": i } as CSSProperties}>
          <Icon n="circle-check" /> {r}
        </span>
      ))}
      <span className="vz-progress" aria-hidden="true"><i /></span>
    </div>
  );
}

export function Visual({ id }: { id: ProductId }) {
  return (
    <div className="vz">
      {id === "atlas" && <Atlas />}
      {id === "hub" && <Hub />}
      {id === "renew" && <Renew />}
      {id === "forge" && <Forge />}
      {id === "voice" && <Voice />}
      {id === "delivery" && <Delivery />}
    </div>
  );
}
