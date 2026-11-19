"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Questions", href: "#questions" },
  { label: "Proof", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Why us", href: "#why" },
];

const MOBILE_NAV = NAV.concat({ label: "Contact", href: "#contact" });

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Solid once scrolled; tuck away on the way down, return on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 420);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape / desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 861px)");
    const onMq = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`mn-hdr${solid ? " mn-is-solid" : ""}${hidden && !open ? " mn-is-hidden" : ""}`}
      >
        <div className="mn-hdr__in">
          <a
            href="#top"
            className="mn-logo"
            aria-label="Banjubits, back to top"
            onClick={close}
          >
            <span className="mn-logo__word">Banjubits</span>
            <span className="mn-logo__bit" aria-hidden="true" />
          </a>

          <nav className="mn-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={active === n.href ? "mn-is-active" : undefined}
                aria-current={active === n.href ? "location" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="mn-btn mn-btn--sm mn-hdr__cta">
            <span>Book a session</span>
            <span className="mn-btn__chip">
              <Icon n="arrow-right" />
            </span>
          </a>

          <button
            className="mn-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mn-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mn-menu${open ? " mn-is-open" : ""}`}
        id="mn-menu"
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile">
          {MOBILE_NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="mn-btn" onClick={close}>
          <span>Book a session</span>
          <span className="mn-btn__chip">
            <Icon n="arrow-right" />
          </span>
        </a>
      </div>
    </>
  );
}
