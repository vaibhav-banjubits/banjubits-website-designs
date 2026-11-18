import type { CSSProperties } from "react";
import { Icon } from "./Icon";
import { img } from "./images";
import { NewsForm } from "./NewsForm";
import { Year } from "./Year";

const EMAIL = "coreops@banjubits.com";
const LINKEDIN = "https://www.linkedin.com/company/banjubits/";

export function Footer() {
  return (
    <footer className="dh-foot" id="contact">
      <div
        className="dh-foot__bg"
        aria-hidden="true"
        style={
          { "--dh-photo": `url(${img["earth-night"].src})` } as CSSProperties
        }
      />
      <div className="dh-wrap">
        <div className="dh-cta">
          <div>
            <p className="dh-eyebrow dh-eyebrow--mint">
              <i className="dh-dot" />
              Start your project
            </p>
            <h2 className="dh-display dh-display--light">
              Every production system begins with a <em>conversation.</em>
            </h2>
          </div>
          <div className="dh-cta__side">
            <p>
              Whether you are shipping your first agent, rescuing a stalled
              pilot, or modernising the platform underneath it, let&apos;s work
              out the shortest safe path to production.
            </p>
            <a href={`mailto:${EMAIL}`} className="dh-btn dh-btn--lg">
              <span>Start a project</span>
              <span className="dh-btn__chip">
                <Icon n="arrow-right" />
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="dh-cta__mail">
              <Icon n="mail" />
              {EMAIL}
            </a>
          </div>
        </div>

        <NewsForm />

        <div className="dh-foot__cols">
          <div>
            <h5>Studio</h5>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Approach</a>
            <a href="#insights">Insights</a>
          </div>
          <div>
            <h5>Services</h5>
            <a href="#services">AI systems</a>
            <a href="#services">Digital products</a>
            <a href="#services">Cloud &amp; platforms</a>
            <a href="#services">Automation &amp; data</a>
          </div>
          <div>
            <h5>Products</h5>
            <a href="#products">Mentis Atlas</a>
            <a href="#products">Mentis Interviews</a>
            <a href="#products">Mentis Forge</a>
          </div>
          <div className="dh-foot__contact">
            <h5>Get in touch</h5>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
              <dt>Social</dt>
              <dd>
                <a
                  className="dh-soc"
                  href={LINKEDIN}
                  aria-label="Banjubits on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.64 4.74 6.07v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
                  </svg>
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="dh-foot__mark" aria-hidden="true">
          Banjubits
        </div>

        <div className="dh-foot__base">
          <p>
            © <Year /> Banjubits. All rights reserved.
          </p>
          <p>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
