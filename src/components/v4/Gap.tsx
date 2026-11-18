import Image from "next/image";
import { img } from "./images";
import { SecHead } from "./Studio";

const FORCES = [
  ["Pilots with no owner", "Experiments that never find a home in the business."],
  ["Data nobody trusts", "Answers that cannot be traced back to a source."],
  ["Governance bolted on", "Controls added after launch, when change is most expensive."],
  ["Systems nobody can run", "Hand-offs without the documentation to operate them."],
];

export function Gap() {
  return (
    <section className="sg-sec sg-sec--dark sg-gap" aria-labelledby="sg-gap-title">
      <div className="sg-gap__bg" aria-hidden="true">
        <Image src={img.concreteColumns} alt="" fill sizes="50vw" />
      </div>
      <div className="sg-wrap sg-gap__inner">
        <SecHead n="03" label="The production gap" aside="Why AI stalls" dark />
        <h2 id="sg-gap-title" className="sg-gap__title sg-rv">
          Most AI never reaches production. Not because the models fail, but because every part of
          the business pulls in <em>a different direction.</em>
        </h2>
        <ol className="sg-gap__list">
          {FORCES.map(([t, d], i) => (
            <li key={t} className="sg-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <span>{["I", "II", "III", "IV"][i]}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
