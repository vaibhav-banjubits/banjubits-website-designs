"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type CSSProperties } from "react";
import { Icon } from "./Icon";
import { img } from "./images";

type Service = {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  items: Array<{ icon: string; label: string }>;
};

const SERVICES: Service[] = [
  {
    title: "AI systems",
    text: "Agents, orchestration, voice AI and retrieval, designed around how your teams actually work and governed from the first prototype.",
    image: img["network-blocks"],
    alt: "Interconnected blocks forming a network graph on a dark background",
    items: [
      { icon: "bot", label: "Agent orchestration" },
      { icon: "mic", label: "Voice AI" },
      { icon: "book-open", label: "RAG & knowledge assistants" },
      { icon: "scale", label: "AI governance" },
    ],
  },
  {
    title: "Digital products",
    text: "Web platforms, portals, APIs and internal tools, built with product thinking and the structure to stay maintainable long after launch.",
    image: img["dashboard-laptop"],
    alt: "Laptop showing an analytics dashboard",
    items: [
      { icon: "code-xml", label: "Web & mobile apps" },
      { icon: "workflow", label: "APIs & integrations" },
      { icon: "layers", label: "Design systems" },
      { icon: "badge-check", label: "Quality engineering" },
    ],
  },
  {
    title: "Cloud & platforms",
    text: "Cloud foundations, release pipelines and observability, so delivery teams stop firefighting and ship on a predictable cadence.",
    image: img["servers"],
    alt: "Server racks with glowing network cables",
    items: [
      { icon: "cloud", label: "Cloud modernisation" },
      { icon: "git-branch", label: "CI/CD & release controls" },
      { icon: "server", label: "Infrastructure as code" },
      { icon: "activity", label: "Observability" },
    ],
  },
  {
    title: "Automation & data",
    text: "Workflow automation, document processing and operational data that removes repetitive handoffs without creating process debt.",
    image: img["lab-engineer"],
    alt: "Engineer working at a laptop inside an automation lab",
    items: [
      { icon: "workflow", label: "Workflow automation" },
      { icon: "file-search", label: "Document processing" },
      { icon: "cpu", label: "Edge & IoT data" },
      { icon: "gauge", label: "Operational dashboards" },
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <div className="dh-svc">
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          // The reveal class lives on a static wrapper: Motion adds "dh-in" to it
          // imperatively, and React must never re-write that element's className.
          <div
            key={s.title}
            className="dh-rv"
            style={{ "--d": `${i * 0.05}s` } as CSSProperties}
          >
            <article className={`dh-svc__row${isOpen ? " dh-is-open" : ""}`}>
              <button
                className="dh-svc__head"
                aria-expanded={isOpen}
                aria-controls={`dh-svc-body-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="dh-svc__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="dh-svc__title">{s.title}</span>
                <span className="dh-svc__text">{s.text}</span>
                <span className="dh-svc__toggle">
                  <Icon n="plus" />
                </span>
              </button>
              <div
                className="dh-svc__body"
                id={`dh-svc-body-${i}`}
                inert={!isOpen}
              >
                <div>
                  <ul className="dh-tags">
                    {s.items.map((it) => (
                      <li key={it.label}>
                        <Icon n={it.icon} />
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <figure className="dh-svc__img">
                <Image src={s.image} alt={s.alt} sizes="250px" />
              </figure>
            </article>
          </div>
        );
      })}
    </div>
  );
}
