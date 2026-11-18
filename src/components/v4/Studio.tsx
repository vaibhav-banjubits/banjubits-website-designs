import Image from "next/image";
import { sectors } from "@/lib/content";
import { Icon } from "./Icon";
import { img } from "./images";

export function SecHead({ n, label, aside, dark }: { n: string; label: string; aside?: string; dark?: boolean }) {
  return (
    <div className={`sg-sechead sg-rv${dark ? " sg-sechead--dark" : ""}`}>
      <span>
        <b>({n})</b> {label}
      </span>
      {aside ? <span className="sg-sechead__aside">{aside}</span> : null}
    </div>
  );
}

export function Studio() {
  return (
    <section className="sg-sec sg-studio" id="about" aria-labelledby="sg-studio-title">
      <div className="sg-wrap">
        <SecHead n="01" label="The studio" aside="Who we are" />
        <div className="sg-studio__grid">
          <figure className="sg-studio__img sg-reveal">
            <Image
              src={img.shadowWalker}
              alt="A person walking through bands of light and shadow"
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </figure>
          <div className="sg-studio__body">
            <h2 id="sg-studio-title" className="sg-statement sg-rv">
              We help ambitious organisations adopt AI <em>with confidence,</em>{" "}
              <span className="sg-dim">
                starting from the outcome they need and ending with a team that can run what we
                built.
              </span>
            </h2>
            <div className="sg-studio__cols sg-rv">
              <p>
                Banjubits is an AI engineering and product studio. We map the operational outcome
                and the workflow that has to change before we choose any technology.
              </p>
              <p>
                Plan, code-review and deploy gates are part of delivery from day one, so every
                change stays controlled, reviewable and auditable.
              </p>
            </div>
            <a href="#approach" className="sg-textlink sg-rv">
              Our principles <Icon n="arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="sg-marquee" aria-label="Sectors we work in">
        <div className="sg-marquee__track">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1 || undefined}>
              {sectors.map((s) => (
                <li key={s}>
                  {s}
                  <i aria-hidden="true">✦</i>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
