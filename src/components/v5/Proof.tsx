import { sectors } from "@/lib/content";
import { Metric } from "./Metric";

type Stat = { pre?: string; n?: number; text?: string; post?: string; label: string };

const STATS: Stat[] = [
  { text: "7→1", label: "Siloed AI assistants unified behind one governed entry point" },
  { pre: "≥", n: 95, post: "%", label: "AI answers grounded and cited back to source" },
  { n: 50, post: "k+", label: "People reached through a multi-institution platform rollout" },
  { n: 100, post: "%", label: "Scoring parity validated before a legacy system cutover" },
];

export function Proof() {
  return (
    <section className="lx-proof" id="proof" aria-label="Track record">
      <div className="lx-wrap">
        <dl className="lx-stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="lx-stat lx-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <dt className="lx-stat__v">
                {s.pre}
                {s.n !== undefined ? <span data-count={s.n}>{s.n}</span> : <Metric v={s.text ?? ""} />}
                {s.post && <sup>{s.post}</sup>}
              </dt>
              <dd className="lx-stat__l">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="lx-sectors lx-rv">
          <p className="lx-sectors__label">Sectors we build for</p>
          <div className="lx-sectors__track" aria-hidden="true">
            <div className="lx-sectors__run">
              {[...sectors, ...sectors].map((s, i) => (
                <span key={`${s}-${i}`}>{s}</span>
              ))}
            </div>
          </div>
          <ul className="lx-sr">
            {sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
