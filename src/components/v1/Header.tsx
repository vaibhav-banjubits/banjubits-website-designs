"use client";

import { useEffect, useState } from "react";
import { NAV } from "./data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1020px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="hb-hdr" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="hb-hdr__bar hb-wrap">
        <a href="#top" className="hb-hdr__logo" aria-label="Banjubits, back to top" onClick={close}>
          <Logo />
        </a>

        <nav className="hb-hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hb-hdr__end">
          <a href="#start" className="hb-btn hb-btn--sm hb-hdr__cta">
            Start a project
          </a>
          <button
            type="button"
            className="hb-hdr__burger"
            aria-expanded={open}
            aria-controls="hb-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="hb-sr">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="hb-menu" className="hb-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n, i) => (
            <a key={n.label} href={n.href} onClick={close}>
              <span>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#start" className="hb-btn hb-menu__cta" onClick={close}>
          Start a project
          <span className="hb-btn__ic">
            <Icon n="arrow" />
          </span>
        </a>
      </div>
    </header>
  );
}
