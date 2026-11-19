"use client";

import { useEffect, useRef } from "react";

/**
 * Page-level motion for the v3 homepage: the scroll-progress bar, scroll reveals
 * and a soft pointer-following light on cards. Content stays visible without
 * JavaScript: reveals only hide elements once `data-js` is set on the root.
 */
export function Motion() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".dh-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---- scroll reveals ---- */
    const reveals = [...root.querySelectorAll<HTMLElement>(".dh-rv")];
    // Anything already on screen is marked in the same tick that hiding starts,
    // so above-the-fold content never flashes.
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) el.classList.add("dh-in");
    }
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("dh-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("dh-in") && io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    /* ---- soft light that follows the pointer over cards ---- */
    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      const SURFACES = ".dh-bar li, .dh-route__card, .dh-why__list li, .dh-case";
      let current: HTMLElement | null = null;
      const clear = () => {
        current?.style.removeProperty("--mx");
        current?.style.removeProperty("--my");
        current = null;
      };
      const onMove = (e: PointerEvent) => {
        const el = (e.target as Element | null)?.closest<HTMLElement>(SURFACES) ?? null;
        if (el !== current) clear();
        if (!el) return;
        current = el;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", clear);
      cleanups.push(() => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", clear);
        clear();
      });
    }

    /* ---- scroll progress bar ---- */
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="dh-progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  );
}
