import { email, linkedin, NAV, products } from "./data";

export function Footer() {
  return (
    <footer className="ld-foot">
      <div className="ld-wrap ld-foot__grid">
        <div>
          <a href="#top" className="ld-logo ld-logo--foot" aria-label="Banjubits, back to top">
            <span className="ld-logo__word">Banjubits</span>
            <span className="ld-logo__bit" aria-hidden="true" />
          </a>
          <p className="ld-foot__tag">AI built into real business work.</p>
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
      <div className="ld-wrap ld-foot__base">
        <span>© 2026 Banjubits. All rights reserved.</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}
