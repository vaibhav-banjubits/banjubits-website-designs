import Image from "next/image";
import { cases, industries, proofStats } from "./data";
import { CountUp } from "./Motion";

const DOT = { "In delivery": "proven", "Built · live demo": "partial", "Proposal stage": "roadmap" } as const;

export function Proof() {
  return (
    <section className="gd-proof" id="proof" aria-labelledby="gd-proof-h">
      <div className="gd-proof__band">
        <div className="gd-wrap gd-proof__grid">
          <div className="gd-rv">
            <p className="gd-label gd-label--ink">Proof</p>
            <h2 className="gd-h2" id="gd-proof-h">
              Running in production, not just in demos.
            </h2>
          </div>
          <ul className="gd-stats gd-rv">
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

      <div className="gd-wrap gd-proof__body">
        <div className="gd-cases">
          {cases.map((c, n) => (
            <article className="gd-case gd-rv" style={{ ["--d" as string]: `${n * 0.08}s` }} key={c.title}>
              <figure className="gd-case__photo">
                <Image src={c.photo} alt={c.alt} fill sizes="(max-width: 980px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <p className="gd-case__tag">
                <span className={`gd-dot gd-dot--${DOT[c.tag]}`} />
                {c.tag}
                <small>{c.note}</small>
              </p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <p className="gd-proof__honest gd-rv">
          Stated plainly: only the first is client delivery in progress. The labels say what each one really is.
        </p>

        <ul className="gd-ind gd-rv" aria-label="Industries we work in">
          {industries.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
