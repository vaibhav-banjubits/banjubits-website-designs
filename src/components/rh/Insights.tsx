import Image from "next/image";
import { insights } from "@/lib/content";
import { Icon } from "./Icon";

export function Insights() {
  return (
    <section className="rh-sec rh-stone" id="insights" aria-labelledby="rh-ins-title">
      <div className="rh-wrap">
        <div className="rh-head rh-rv">
          <div>
            <p className="rh-kicker">
              <i />
              Insights
            </p>
            <h2 id="rh-ins-title" className="rh-h2">
              Ideas that move <em>business forward</em>
            </h2>
          </div>
          <div className="rh-head__aside">
            <p>Notes from the delivery floor on getting AI to production and keeping it there.</p>
          </div>
        </div>

        <ul className="rh-posts">
          {insights.map((p, i) => (
            <li key={p.title} className="rh-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <a href="#" className="rh-post">
                <div className="rh-post__media">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 400px"
                    placeholder="blur"
                  />
                  <span className="rh-chip">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="rh-link">
                  Read the article
                  <Icon n="arrow" />
                </span>
              </a>
            </li>
          ))}
          <li className="rh-rv" style={{ ["--d" as string]: "0.24s" }}>
            <a href="#" className="rh-post rh-post--all">
              <Icon n="arrow-ur" className="rh-post__go" />
              <h3>All insights</h3>
              <p>Browse every article on AI delivery, architecture and governance.</p>
              <span className="rh-link">
                View the journal
                <Icon n="arrow" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
