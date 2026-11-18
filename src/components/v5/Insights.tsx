import Image from "next/image";
import { insights } from "@/lib/content";
import { Icon } from "./Icon";

export function Insights() {
  return (
    <section className="lx-sec lx-ins" id="insights" aria-labelledby="lx-ins-title">
      <div className="lx-wrap">
        <header className="lx-head lx-head--split">
          <div>
            <p className="lx-eyebrow lx-rv">
              <span className="lx-eyebrow__rule" aria-hidden="true" />
              Insights
            </p>
            <h2 id="lx-ins-title" className="lx-h2 lx-rv" style={{ ["--d" as string]: ".06s" }}>
              Notes from the <span className="lx-soft">delivery floor.</span>
            </h2>
          </div>
          <a href="#" className="lx-btn lx-btn--ghost lx-rv" style={{ ["--d" as string]: ".12s" }}>
            All insights <Icon n="arrow" />
          </a>
        </header>

        <div className="lx-posts">
          {insights.map((p, i) => (
            <article key={p.title} className={`lx-post lx-rv${i === 0 ? " lx-post--lead" : ""}`} style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <a href="#" className="lx-post__link">
                <div className="lx-post__media">
                  <Image src={p.image} alt={p.alt} fill sizes={i === 0 ? "(max-width: 960px) 100vw, 680px" : "(max-width: 960px) 100vw, 420px"} placeholder="blur" />
                </div>
                <div className="lx-post__body">
                  <span className="lx-post__cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="lx-post__go">
                    Read the article <Icon n="arrow" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
