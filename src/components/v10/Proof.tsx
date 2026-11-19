import Image from "next/image";
import { cases, industries, proofStats } from "./data";
import { CountUp } from "./Motion";

const DOT = { "In delivery": "proven", "Built · live demo": "partial", "Proposal stage": "roadmap" } as const;

export function Proof() {
  return (
    <section className="st-proof" id="proof" aria-labelledby="st-proof-h">
      <div className="st-proof__band">
        <div className="st-wrap st-proof__grid">
          <div className="st-rv">
            <p className="st-label st-label--ink">Proof</p>
            <h2 className="st-h2" id="st-proof-h">
              Running in production, not just in demos.
            </h2>
          </div>
          <ul className="st-stats st-rv">
            {proofStats.map((s) => (
              <li key={s.label}>
                <strong>
                  <CountUp to={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="st-wrap st-proof__body">
        <div className="st-cases">
          {cases.map((c, n) => (
            <article className="st-case st-rv" style={{ ["--d" as string]: `${n * 0.08}s` }} key={c.title}>
              <figure className="st-case__photo">
                <Image src={c.photo} alt={c.alt} fill sizes="(max-width: 980px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <p className="st-case__tag">
                <span className={`st-dot st-dot--${DOT[c.tag]}`} />
                {c.tag}
                <small>{c.note}</small>
              </p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <p className="st-proof__honest st-rv">
          Stated plainly: only the first is client delivery in progress. The labels say what each one really is.
        </p>

        <ul className="st-ind st-rv" aria-label="Industries we work in">
          {industries.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
