import { email, linkedin, NAV, products } from "./data";

export function Footer() {
  return (
    <footer className="gd-foot">
      <div className="gd-wrap gd-foot__grid">
        <div>
          <a href="#top" className="gd-logo gd-logo--foot" aria-label="Banjubits, back to top">
            <span className="gd-logo__word">Banjubits</span>
            <span className="gd-logo__bit" aria-hidden="true" />
          </a>
          <p className="gd-foot__tag">AI built into real business work.</p>
        </div>
        <nav aria-label="Footer: site">
          <h2>Site</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer: Mentis">
          <h2>Mentis</h2>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                <a href="#products">{p.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gd-wrap gd-foot__base">
        <span>© 2026 Banjubits. All rights reserved.</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}
