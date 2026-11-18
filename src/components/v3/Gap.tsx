import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export function Gap() {
  return (
    <section className="dh-sec dh-sec--dark dh-gap" id="gap">
      <div className="dh-gap__rings" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="dh-wrap dh-gap__in">
        <div className="dh-bubble dh-bubble--1 dh-rv">
          <span className="dh-bubble__ic">
            <Icon n="sparkles" />
          </span>
          The demo worked in the meeting. Security then asked for an audit
          trail, and nobody had one.
        </div>
        <div
          className="dh-bubble dh-bubble--2 dh-rv"
          style={{ "--d": ".08s" } as CSSProperties}
        >
          <span className="dh-bubble__ic">
            <Icon n="blocks" />
          </span>
          Seven teams built seven assistants, and none of them can talk to each
          other.
        </div>
        <div className="dh-gap__center">
          <p className="dh-pill dh-pill--dark dh-rv">
            <i className="dh-dot"></i>The production gap
          </p>
          <h2
            className="dh-display dh-display--light dh-center dh-rv"
            style={{ "--d": ".08s" } as CSSProperties}
          >
            Most AI stalls between the demo and <em>production.</em>
          </h2>
        </div>
        <div
          className="dh-bubble dh-bubble--3 dh-rv"
          style={{ "--d": ".12s" } as CSSProperties}
        >
          <span className="dh-bubble__ic">
            <Icon n="scan-search" />
          </span>
          The answers sound confident, but no one can say where they came from.
        </div>
        <div
          className="dh-bubble dh-bubble--4 dh-rv"
          style={{ "--d": ".2s" } as CSSProperties}
        >
          <span className="dh-bubble__ic">
            <Icon n="laptop-min" />
          </span>
          The pilot still lives on one engineer&apos;s laptop, and that engineer
          has moved on.
        </div>
      </div>
    </section>
  );
}
