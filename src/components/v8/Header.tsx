"use client";

import { useEffect, useState } from "react";
import { NAV } from "./data";
import { Icon } from "./Icon";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 520);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 981px)");
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
      <header className={`ld-hdr${solid ? " ld-is-solid" : ""}${hidden && !open ? " ld-is-hidden" : ""}`}>
        <div className="ld-hdr__in">
          <a href="#top" className="ld-logo" aria-label="Banjubits, back to top" onClick={close}>
            <span className="ld-logo__word">Banjubits</span>
            <span className="ld-logo__bit" aria-hidden="true" />
          </a>

          <nav className="ld-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={active === n.href ? "ld-is-active" : undefined}
                aria-current={active === n.href ? "location" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#start" className="ld-btn ld-btn--sm ld-hdr__cta">
            <span>Book a working session</span>
            <Icon n="arrow-right" />
          </a>

          <button
            className="ld-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="ld-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`ld-menu${open ? " ld-is-open" : ""}`} id="ld-menu" aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#start" className="ld-btn" onClick={close}>
          <span>Book a working session</span>
          <Icon n="arrow-right" />
        </a>
      </div>
    </>
  );
}
