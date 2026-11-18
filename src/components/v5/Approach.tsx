import Image from "next/image";
import { models, principles } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";

const STEP_ICONS = ["target", "gate", "lock", "handoff"];
const MODEL_FOR = [
  "Teams that own the roadmap and need senior hands inside it.",
  "Programmes that need pace, with human review at every gate.",
  "A defined outcome, a fixed scope and one accountable owner.",
];

export function Approach() {
  return (
    <section className="lx-sec lx-appr" id="approach" aria-labelledby="lx-appr-title">
      <div className="lx-wrap">
        <div className="lx-appr__grid">
          <div className="lx-appr__intro">
            <div className="lx-appr__sticky">
              <p className="lx-eyebrow lx-rv">
                <span className="lx-eyebrow__rule" aria-hidden="true" />
                How we work
              </p>
              <h2 id="lx-appr-title" className="lx-h2 lx-rv" style={{ ["--d" as string]: ".06s" }}>
                Governed from the first prototype, <span className="lx-soft">not after the incident.</span>
              </h2>
              <p className="lx-lede lx-rv" style={{ ["--d" as string]: ".12s" }}>
                Every engagement runs on the same four commitments. They are how our systems pass
                review, and stay maintainable long after handover.
              </p>
              <figure className="lx-appr__photo lx-mask">
                <Image
                  src={img.workingSession}
                  alt="Delivery team planning a release around a wall of sticky notes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  placeholder="blur"
                />
              </figure>
            </div>
          </div>

          <ol className="lx-steps">
            <span className="lx-steps__rail" aria-hidden="true">
              <i />
            </span>
            {principles.map((p, i) => (
              <li key={p.title} className="lx-step lx-rv">
                <span className="lx-step__dot" aria-hidden="true">
                  <Icon n={STEP_ICONS[i]} />
                </span>
                <div className="lx-step__body">
                  <span className="lx-step__no">Principle 0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lx-models">
          <div className="lx-models__head lx-rv">
            <h3 className="lx-h3">Three ways to engage</h3>
            <p>Choose the model that fits your team today. Move between them as the work changes.</p>
          </div>
          <div className="lx-models__grid">
            {models.map((m, i) => (
              <article key={m.name} className="lx-model lx-lit lx-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <span className="lx-model__no">0{i + 1}</span>
                <h4>{m.name}</h4>
                <p>{m.text}</p>
                <div className="lx-model__for">
                  <span>Best for</span>
                  {MODEL_FOR[i]}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
