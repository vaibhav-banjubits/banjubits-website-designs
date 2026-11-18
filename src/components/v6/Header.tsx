"use client";

import { useEffect, useState } from "react";
import { email } from "@/lib/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Sectors", href: "#sectors" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Insights", href: "#insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    document.querySelectorAll(".gl-root main > section[id]").forEach((el) => io.observe(el));
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
    <header className="gl-hdr" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="gl-hdr__bar">
        <a href="#top" className="gl-hdr__logo" aria-label="Banjubits, back to top" onClick={close}>
          <Logo />
        </a>

        <nav className="gl-hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={active === n.href ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="gl-hdr__end">
          <a href="#contact" className="gl-btn gl-btn--ink gl-btn--sm gl-hdr__cta">
            Start a project
            <span className="gl-btn__ic">
              <Icon n="arrow" />
            </span>
          </a>
          <button
            type="button"
            className="gl-hdr__burger"
            aria-expanded={open}
            aria-controls="gl-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="gl-sr">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="gl-menu" className="gl-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.concat({ label: "Contact", href: "#contact" }).map((n, i) => (
            <a key={n.href} href={n.href} onClick={close} style={{ ["--i" as string]: i }}>
              <span>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${email}`} className="gl-menu__mail" onClick={close}>
          {email}
        </a>
      </div>
    </header>
  );
}
