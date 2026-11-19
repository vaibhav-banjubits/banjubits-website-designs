import { email, linkedin, NAV, products, PROMISES, STAGES } from "./data";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="st-foot">
      <div className="st-foot__glow" aria-hidden="true" />

      <div className="st-wrap st-foot__top">
        <div className="st-foot__lead">
          <a href="#top" className="st-logo st-logo--foot" aria-label="Banjubits, back to top">
            <span className="st-logo__word">Banjubits</span>
            <span className="st-logo__bit" aria-hidden="true" />
          </a>
          <p className="st-foot__tag">
            AI built into real business work, in a way leadership can trust.
          </p>
          <a href="#top" className="st-foot__ask">
            <span>What should AI do for your business?</span>
            <i>
              <Icon n="arrow-up" />
            </i>
          </a>
        </div>

        <nav aria-label="Footer: Mentis accelerators" className="st-foot__col">
          <h2>Mentis accelerators</h2>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                <a href="#products">
                  <span className={`st-dot st-dot--${p.stage}`} role="img" aria-label={STAGES[p.stage].label} />
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer: site" className="st-foot__col">
          <h2>Explore</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#start">Book a working session</a>
            </li>
          </ul>
        </nav>

        <div className="st-foot__col">
          <h2>Talk to us</h2>
          <ul>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="st-foot__note">References are available under NDA.</li>
          </ul>
        </div>
      </div>

      <div className="st-wrap">
        <ul className="st-foot__promises" aria-label="Three promises on every engagement">
          {PROMISES.map((p) => (
            <li key={p.title}>
              <Icon n={p.icon} />
              {p.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="st-foot__word" aria-hidden="true">
        Banjubits
      </div>

      <div className="st-wrap st-foot__base">
        <span>© 2026 Banjubits. All rights reserved.</span>
        <span className="st-foot__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#top" className="st-foot__up">
            Back to top <Icon n="arrow-up" />
          </a>
        </span>
      </div>
    </footer>
  );
}
