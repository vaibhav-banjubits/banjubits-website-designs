import Image from "next/image";
import { cases, industries, proofStats } from "./data";
import { Icon } from "./Icon";
import { CountUp } from "./Motion";

export function Proof() {
  return (
    <section className="ld-sec ld-proof" id="proof" aria-labelledby="ld-proof-h">
      <div className="ld-wrap">
        <div className="ld-proof__top">
          <div className="ld-head ld-rv">
            <p className="ld-label ld-label--dark">Proof</p>
            <h2 className="ld-h2" id="ld-proof-h">
              Running in production, <em>not just in demos</em>.
            </h2>
          </div>
          <ul className="ld-stats ld-rv">
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

        <div className="ld-cases">
          {cases.map((c, n) => (
            <article className="ld-case ld-rv" style={{ ["--d" as string]: `${n * 0.09}s` }} key={c.title}>
              <div className="ld-case__photo">
                <Image src={c.photo} alt={c.alt} fill sizes="(max-width: 980px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <span className={`ld-case__tag ld-case__tag--${c.tag === "In delivery" ? "d" : c.tag === "Proposal stage" ? "p" : "b"}`}>
                  {c.tag}
                </span>
              </div>
              <div className="ld-case__body">
                <small>{c.note}</small>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="ld-proof__honest ld-rv">
          <Icon n="badge-check" />
          Stated plainly: only the first card is client delivery in progress. The labels say what each one really is.
        </p>

        <ul className="ld-ind ld-rv" aria-label="Industries we work in">
          {industries.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
