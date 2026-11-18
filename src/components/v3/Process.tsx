import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export function Process() {
  return (
    <section className="dh-sec dh-sec--light" id="process">
      <div className="dh-wrap">
        <header className="dh-shead">
          <p className="dh-pill dh-rv">
            <i className="dh-dot"></i>Our approach
          </p>
          <div>
            <h2 className="dh-display dh-rv">
              From first conversation to <em>running in production.</em>
            </h2>
          </div>
        </header>

        <div className="dh-road" id="road">
          <svg
            className="dh-road__svg"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="dh-road__bed"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
            />
            <path
              className="dh-road__dash"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
            />
            <path
              className="dh-road__glow"
              id="dh-roadGlow"
              d="M-20 250 C 120 150, 260 150, 330 250 S 540 350, 640 240 S 860 130, 960 250 S 1120 330, 1220 220"
              pathLength="1"
            />
          </svg>
          <div className="dh-step dh-step--1 dh-rv">
            <span className="dh-pin">
              <Icon n="target" />
            </span>
            <div className="dh-step__txt">
              <small>Step 01</small>
              <h3>Frame the outcome</h3>
              <p>
                We map the operational outcome and the workflow that has to
                change before we choose any technology.
              </p>
            </div>
          </div>
          <div
            className="dh-step dh-step--2 dh-rv"
            style={{ "--d": ".08s" } as CSSProperties}
          >
            <span className="dh-pin">
              <Icon n="git-branch" />
            </span>
            <div className="dh-step__txt">
              <small>Step 02</small>
              <h3>Build the gates in</h3>
              <p>
                Plan, code-review and deploy gates are part of delivery from day
                one, not bolted on later.
              </p>
            </div>
          </div>
          <div
            className="dh-step dh-step--3 dh-rv"
            style={{ "--d": ".16s" } as CSSProperties}
          >
            <span className="dh-pin">
              <Icon n="rocket" />
            </span>
            <div className="dh-step__txt">
              <small>Step 03</small>
              <h3>Ship under control</h3>
              <p>
                Access, deployment and change decisions stay controlled,
                reviewable and auditable throughout.
              </p>
            </div>
          </div>
          <div
            className="dh-step dh-step--4 dh-rv"
            style={{ "--d": ".24s" } as CSSProperties}
          >
            <span className="dh-pin">
              <Icon n="handshake" />
            </span>
            <div className="dh-step__txt">
              <small>Step 04</small>
              <h3>Hand it over properly</h3>
              <p>
                We build for the people who will operate and own the system,
                with the documentation to match.
              </p>
            </div>
          </div>
        </div>

        <div className="dh-models">
          <p className="dh-models__label dh-rv">Three ways to work with us</p>
          <div className="dh-models__grid">
            <article className="dh-model dh-rv">
              <span className="dh-model__ic">
                <Icon n="users" />
              </span>
              <h3>Embedded engineers</h3>
              <p>
                Our engineers join your team and work inside your backlog, tools
                and release process.
              </p>
            </article>
            <article
              className="dh-model dh-model--hl dh-rv"
              style={{ "--d": ".08s" } as CSSProperties}
            >
              <span className="dh-model__badge">Most requested</span>
              <span className="dh-model__ic">
                <Icon n="blocks" />
              </span>
              <h3>Delivery pod</h3>
              <p>
                A lead and engineers with AI agents that plan, code and test,
                behind three human gates.
              </p>
            </article>
            <article
              className="dh-model dh-rv"
              style={{ "--d": ".16s" } as CSSProperties}
            >
              <span className="dh-model__ic">
                <Icon n="circle-check" />
              </span>
              <h3>Fixed outcome</h3>
              <p>
                We own delivery to a written Definition of Done, from discovery
                through handoff.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
