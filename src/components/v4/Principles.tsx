import Image from "next/image";
import { principles } from "@/lib/content";
import { img } from "./images";
import { SecHead } from "./Studio";

const ROMAN = ["I", "II", "III", "IV"];

export function Principles() {
  return (
    <section className="sg-sec sg-principles" id="approach" aria-labelledby="sg-pr-title">
      <div className="sg-wrap">
        <SecHead n="04" label="Principles" aside="How every engagement runs" />
        <div className="sg-principles__grid">
          <div className="sg-principles__side">
            <h2 id="sg-pr-title" className="sg-h2 sg-rv">
              Technology is the last decision we make, <em>not the first.</em>
            </h2>
            <figure className="sg-principles__img sg-reveal">
              <Image
                src={img.concreteCurve}
                alt="Curved concrete balconies stacked against a pale sky"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </figure>
          </div>
          <ol className="sg-principles__list">
            {principles.map((p, i) => (
              <li key={p.title} className="sg-rv">
                <span className="sg-principles__n">{ROMAN[i]}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
