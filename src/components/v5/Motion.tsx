"use client";

import { useEffect } from "react";

/**
 * Page-level motion for v5: scroll reveals, image unmasking, count-ups,
 * pointer-lit cards and the approach timeline. Content stays visible without
 * JavaScript, because reveals only hide elements once `data-js` is on the root.
 */
export function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".lx-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* reveals: anything already on screen shows at once, the rest on scroll */
    const reveals = [...root.querySelectorAll<HTMLElement>(".lx-rv, .lx-mask")];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add("lx-in");
    }
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("lx-in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("lx-in") && io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      root.removeAttribute("data-js");
    });

    /* count-ups: data-count is the number, the element keeps its own prefix/suffix spans */
    const rafs = new Set<number>();
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          countIO.unobserve(e.target);
          if (reduce) continue;
          const el = e.target as HTMLElement;
          const end = Number(el.dataset.count);
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1800);
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

    /* pointer-lit cards: a soft champagne light follows the cursor */
    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      const onMove = (ev: PointerEvent) => {
        const card = (ev.target as Element | null)?.closest<HTMLElement>(".lx-lit");
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        card.style.setProperty("--my", `${ev.clientY - r.top}px`);
      };
      root.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => root.removeEventListener("pointermove", onMove));
    }

    /* approach timeline: the rail fills as the steps scroll past */
    const rail = root.querySelector<HTMLElement>(".lx-steps");
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!rail) return;
      const r = rail.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      rail.style.setProperty("--p", p.toFixed(3));
      rail.querySelectorAll<HTMLElement>(".lx-step").forEach((s) => {
        s.classList.toggle("lx-step--on", s.getBoundingClientRect().top < mid);
      });
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
