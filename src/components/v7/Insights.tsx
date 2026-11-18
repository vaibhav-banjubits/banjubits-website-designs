import Image from "next/image";
import { insights } from "@/lib/content";
import { Icon } from "./Icon";

export function Insights() {
  return (
    <section className="rt-sec rt-stone" id="insights" aria-labelledby="rt-ins-title">
      <div className="rt-wrap">
        <div className="rt-head rt-rv">
          <div>
            <p className="rt-kicker">
              <i />
              Insights
            </p>
            <h2 id="rt-ins-title" className="rt-h2">
              Ideas that move <em>business forward</em>
            </h2>
          </div>
          <div className="rt-head__aside">
            <p>Notes from the delivery floor on getting AI to production and keeping it there.</p>
          </div>
        </div>

        <ul className="rt-posts">
          {insights.map((p, i) => (
            <li key={p.title} className="rt-rv" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <a href="#" className="rt-post">
                <div className="rt-post__media">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 400px"
                    placeholder="blur"
                  />
                  <span className="rt-chip">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="rt-link">
                  Read the article
                  <Icon n="arrow" />
                </span>
              </a>
            </li>
          ))}
          <li className="rt-rv" style={{ ["--d" as string]: "0.24s" }}>
            <a href="#" className="rt-post rt-post--all">
              <Icon n="arrow-ur" className="rt-post__go" />
              <h3>All insights</h3>
              <p>Browse every article on AI delivery, architecture and governance.</p>
              <span className="rt-link">
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
