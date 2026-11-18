"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#process" },
  { label: "Products", href: "#products" },
  { label: "Insights", href: "#insights" },
];

const MOBILE_NAV = NAV.filter((n) => n.href !== "#top").concat({
  label: "Contact",
  href: "#contact",
});

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

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
        className={`dh-hdr${solid ? " dh-is-solid" : ""}${hidden && !open ? " dh-is-hidden" : ""}`}
      >
        <div className="dh-hdr__in">
          <a
            href="#top"
            className="dh-logo"
            aria-label="Banjubits, back to top"
            onClick={close}
          >
            <span className="dh-logo__word">Banjubits</span>
            <span className="dh-logo__bit" aria-hidden="true" />
          </a>

          <nav className="dh-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={active === n.href ? "dh-is-active" : undefined}
                aria-current={active === n.href ? "location" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="dh-btn dh-btn--sm dh-hdr__cta">
            <span>Start a project</span>
            <span className="dh-btn__chip">
              <Icon n="arrow-right" />
            </span>
          </a>

          <button
            className="dh-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="dh-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`dh-menu${open ? " dh-is-open" : ""}`}
        id="dh-menu"
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
        <a href="#contact" className="dh-btn" onClick={close}>
          <span>Start a project</span>
          <span className="dh-btn__chip">
            <Icon n="arrow-right" />
          </span>
        </a>
      </div>
    </>
  );
}
