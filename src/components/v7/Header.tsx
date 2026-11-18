"use client";

import { useEffect, useState } from "react";
import { email } from "@/lib/content";
import { NAV } from "./data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    document.querySelectorAll(".rt-root main > section[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1060px)");
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
    <header className="rt-hdr" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="rt-hdr__bar">
        <a href="#top" className="rt-hdr__logo" aria-label="Banjubits, back to top" onClick={close}>
          <Logo />
        </a>

        <nav className="rt-hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={active === n.href ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="rt-hdr__end">
          <a href="#contact" className="rt-btn rt-btn--sm rt-hdr__cta">
            Start a project
            <span className="rt-btn__ic">
              <Icon n="arrow" />
            </span>
          </a>
          <button
            type="button"
            className="rt-hdr__burger"
            aria-expanded={open}
            aria-controls="rt-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="rt-sr">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="rt-menu" className="rt-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.concat({ label: "Contact", href: "#contact" }).map((n, i) => (
            <a key={n.href} href={n.href} onClick={close}>
              <span>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${email}`} className="rt-menu__mail" onClick={close}>
          {email}
        </a>
      </div>
    </header>
  );
}
