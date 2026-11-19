"use client";

import { useEffect, useId, useRef, useState } from "react";
import { products, STAGES, type ProductId } from "./data";
import { Icon } from "./Icon";

export type Topic = ProductId | "other";

const OPTIONS: { id: Topic; icon: string; title: string; sub: string; stage?: keyof typeof STAGES }[] = [
  ...products.map((p) => ({ id: p.id as Topic, icon: p.icon, title: p.job, sub: p.name, stage: p.stage })),
  { id: "other", icon: "sparkles", title: "Something else", sub: "Tell us in your own words" },
];

/** A custom select: each choice shows its accelerator, one-line job and status. Keyboard friendly. */
export function TopicPicker({ value, onChange }: { value: Topic; onChange: (t: Topic) => void }) {
  const uid = useId();
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const sel = Math.max(0, OPTIONS.findIndex((o) => o.id === value));
  const cur = OPTIONS[sel];
  const optId = (i: number) => `${uid}-opt-${i}`;

  // Close on an outside click.
  useEffect(() => {
    if (!open) return;
    const on = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", on);
    return () => document.removeEventListener("pointerdown", on);
  }, [open]);

  const reveal = (i: number) =>
    requestAnimationFrame(() => document.getElementById(optId(i))?.scrollIntoView({ block: "nearest" }));
  const move = (i: number) => {
    const n = (i + OPTIONS.length) % OPTIONS.length;
    setActive(n);
    reveal(n);
  };
  const show = () => {
    setActive(sel);
    setOpen(true);
    reveal(sel);
  };
  const pick = (i: number) => {
    onChange(OPTIONS[i].id);
    setOpen(false);
    btn.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) show();
      else move(active + (e.key === "ArrowDown" ? 1 : -1));
    } else if (e.key === "Home" && open) {
      e.preventDefault();
      move(0);
    } else if (e.key === "End" && open) {
      e.preventDefault();
      move(OPTIONS.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open) pick(active);
      else show();
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className={`st-dd${open ? " st-dd--open" : ""}`} ref={root}>
      <span className="st-dd__lbl" id={`${uid}-lbl`}>
        I would like AI to
      </span>
      <button
        ref={btn}
        type="button"
        className="st-dd__btn"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${uid}-list`}
        aria-labelledby={`${uid}-lbl ${uid}-val`}
        aria-activedescendant={open ? optId(active) : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKey}
      >
        <span className="st-sq">
          <Icon n={cur.icon} />
        </span>
        <span className="st-dd__val" id={`${uid}-val`}>
          <b>{cur.title}</b>
          <small>{cur.sub}</small>
        </span>
        <Icon n="chevron-down" className="st-dd__chev" />
      </button>

      {open && (
        <ul className="st-dd__list" role="listbox" id={`${uid}-list`} aria-labelledby={`${uid}-lbl`}>
          {OPTIONS.map((o, i) => (
            <li
              key={o.id}
              id={optId(i)}
              role="option"
              aria-selected={i === sel}
              className={`st-dd__opt${i === active ? " st-dd__opt--active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(i)}
            >
              <span className="st-sq st-sq--sm">
                <Icon n={o.icon} />
              </span>
              <span className="st-dd__val">
                <b>{o.title}</b>
                <small>{o.sub}</small>
              </span>
              {o.stage && <span className={`st-dot st-dot--${o.stage}`} role="img" aria-label={STAGES[o.stage].label} />}
              {i === sel && <Icon n="check" className="st-dd__tick" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
