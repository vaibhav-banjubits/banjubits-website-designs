"use client";

import { useEffect } from "react";

/**
 * Page-level motion for v6. Everything is progressive: content is fully visible without
 * JavaScript (reveals only hide elements once `data-js` is on the root) and every effect
 * is skipped under prefers-reduced-motion.
 *
 *  - scroll reveals, step rails and outcome rings (IntersectionObserver)
 *  - count-up figures
 *  - pointer-lit card edges and gentle tilt on product cards
 *  - image parallax, the pinned case stack and the top progress line (one rAF-batched scroll pass)
 */
export function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".gl-root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia("(hover: hover)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- reveals: anything already on screen shows at once, the rest on scroll */
    const selector = ".gl-rv, .gl-unmask-io, [data-steps], [data-ring]";
    const reveals = [...root.querySelectorAll<HTMLElement>(selector)];
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add("gl-in");
    }
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("gl-in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => !el.classList.contains("gl-in") && io.observe(el));
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
          const t0 = performance.now() + 250;
          const tick = (t: number) => {
            const p = Math.min(1, Math.max(0, (t - t0) / 1900));
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

    /* ---------- pointer light on cards + tilt on product cards */
    if (!reduce && hover) {
      const onMove = (ev: PointerEvent) => {
        const target = ev.target as Element | null;
        const card = target?.closest<HTMLElement>(".gl-lit");
        if (!card) return;
        const r = card.getBoundingClientRect();
        const x = ev.clientX - r.left;
        const y = ev.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        if (card.classList.contains("gl-tilt")) {
          card.style.setProperty("--ry", `${((x / r.width - 0.5) * 7).toFixed(2)}deg`);
          card.style.setProperty("--rx", `${((0.5 - y / r.height) * 7).toFixed(2)}deg`);
        }
      };
      const onLeave = (ev: PointerEvent) => {
        const card = (ev.target as Element | null)?.closest<HTMLElement>(".gl-tilt");
        if (!card) return;
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };
      root.addEventListener("pointermove", onMove, { passive: true });
      root.addEventListener("pointerout", onLeave, { passive: true });
      cleanups.push(() => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerout", onLeave);
      });
    }

    /* ---------- scroll pass: progress line, parallax, pinned case stack */
    const pars = [...root.querySelectorAll<HTMLElement>("[data-par]")];
    const cases = [...root.querySelectorAll<HTMLElement>(".gl-case")];
    const wide = window.matchMedia("(min-width: 901px)");
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const doc = document.documentElement;

      const max = doc.scrollHeight - vh;
      root.style.setProperty("--prog", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : "0");

      if (!reduce) {
        for (const el of pars) {
          const r = el.parentElement?.getBoundingClientRect();
          if (!r || r.bottom < -80 || r.top > vh + 80) continue;
          const k = Number(el.dataset.par) || 0.06;
          const offset = (r.top + r.height / 2 - vh / 2) * -k;
          el.style.setProperty("--py", `${offset.toFixed(1)}px`);
        }
      }

      if (!reduce && wide.matches) {
        cases.forEach((card, i) => {
          const next = cases[i + 1];
          let p = 0;
          if (next) {
            const stick = parseFloat(getComputedStyle(card).top) || 0;
            const h = card.offsetHeight;
            const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top;
            // 0 while the next card is a full card-height away, 1 once it has covered this one
            p = Math.min(1, Math.max(0, (h - gap) / (h - 24)));
            if (card.getBoundingClientRect().top > stick + 2) p = 0;
          }
          card.style.setProperty("--p", p.toFixed(3));
        });
      } else {
        cases.forEach((card) => card.style.setProperty("--p", "0"));
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
