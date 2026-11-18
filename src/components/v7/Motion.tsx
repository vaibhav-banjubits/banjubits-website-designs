"use client";

import { useEffect } from "react";

/**
 * Page-level motion for v7. Everything is progressive: content is fully visible without
 * JavaScript (reveals only hide elements once `data-js` is on the root) and every effect
 * is skipped under prefers-reduced-motion.
 *
 *  - scroll reveals, outcome rings, drawn route path (IntersectionObserver)
 *  - count-up figures
 *  - the compass needle swinging with scroll, and the top progress line
 */
export function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".rt-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- reveals: anything already on screen shows at once, the rest on scroll */
    const reveals = [...root.querySelectorAll<HTMLElement>(".rt-rv, [data-draw]")];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add("rt-in");
    }
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("rt-in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("rt-in") && io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    /* ---------- count-ups: data-count holds the number; surrounding symbols stay in the markup */
    const rafs = new Set<number>();
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          countIO.unobserve(e.target);
          if (reduce) continue;
          const el = e.target as HTMLElement;
          const end = Number(el.dataset.count);
          const t0 = performance.now() + 200;
          const tick = (t: number) => {
            const p = Math.min(1, Math.max(0, (t - t0) / 1700));
            el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 4))));
            if (p < 1) rafs.add(requestAnimationFrame(tick));
          };
          el.textContent = "0";
          rafs.add(requestAnimationFrame(tick));
        }
      },
      { threshold: 0.7 },
    );
    root.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));
    cleanups.push(() => {
      countIO.disconnect();
      rafs.forEach(cancelAnimationFrame);
    });

    /* ---------- pointer light on cards (the glow is CSS; this feeds it the pointer position) */
    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      root
        .querySelectorAll(".rt-card, .rt-svc, .rt-prod, .rt-deliver, .rt-case, .rt-check")
        .forEach((el) => el.classList.add("rt-lit"));
      const onMove = (ev: PointerEvent) => {
        const card = (ev.target as Element | null)?.closest<HTMLElement>(".rt-lit");
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        card.style.setProperty("--my", `${ev.clientY - r.top}px`);
      };
      root.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => root.removeEventListener("pointermove", onMove));
    }

    /* ---------- scroll pass: progress line + compass needle */
    const compass = root.querySelector<HTMLElement>(".rt-compass");
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      root.style.setProperty("--prog", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : "0");
      if (compass && !reduce) {
        const r = compass.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        compass.style.setProperty("--needle", `${(-62 + p * 124).toFixed(1)}deg`);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
