import type { StaticImageData } from "next/image";
import { img } from "./images";

// Titles, sectors, services and the four headline figures come from src/lib/content.ts.
// Summaries, tags, metric captions, sector blurbs and "best for" lines are draft copy:
// check them against the real engagements before launch.

export type CaseMetric = {
  /** Count-up figure; text is rendered around it (e.g. "≥" + 95 + "%"). */
  lead?: string;
  count?: number;
  tail?: string;
  /** Static figure, used where a count-up makes no sense (e.g. "7→1") or there is no number. */
  text?: string;
  word?: boolean;
  label: string;
};

export type Case = {
  no: string;
  sector: string;
  service: string;
  title: string;
  summary: string;
  metric: CaseMetric;
  tags: string[];
  photo: StaticImageData;
  alt: string;
  position?: string;
};

export const cases: Case[] = [
  {
    no: "01",
    sector: "Global technology company",
    service: "Agent orchestration",
    title: "Seven siloed assistants, one governed front door.",
    summary:
      "Seven separately built AI assistants now sit behind a single entry point, with routing, access control and an audit trail managed in one place.",
    metric: { text: "7→1", label: "AI assistants unified behind one governed entry point" },
    tags: ["Orchestration", "Access control", "Audit trail"],
    photo: img.caseOrchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    position: "50% 40%",
  },
  {
    no: "02",
    sector: "Financial services",
    service: "Voice AI",
    title: "Voice AI for first-line banking calls, with human escalation built in.",
    summary:
      "A conversational agent takes first-line customer calls in a regulated environment, and hands over to a person, with full context, whenever it should.",
    metric: {
      text: "Human in the loop",
      word: true,
      label: "An escalation path designed into every call flow",
    },
    tags: ["Voice AI", "Regulated", "Human escalation"],
    photo: img.caseVoice,
    alt: "Contact-centre specialist working alongside an AI call console",
    position: "62% 50%",
  },
  {
    no: "03",
    sector: "Workforce development",
    service: "Data & AI platform",
    title: "Regional workforce data and cited AI answers in one decision platform.",
    summary:
      "Labour-market data and a retrieval assistant in one place, where every answer cites its source so decision-makers can check it.",
    metric: {
      lead: "≥",
      count: 95,
      tail: "%",
      label: "of AI answers grounded and cited back to source",
    },
    tags: ["Retrieval", "Data platform", "Citations"],
    photo: img.industryWorkforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    position: "50% 50%",
  },
  {
    no: "04",
    sector: "Education",
    service: "Product engineering",
    title: "Meridian: alumni, school operations and AI learning on one open-source platform.",
    summary:
      "One open-source platform for alumni relations, school operations and AI-assisted learning, rolled out across several institutions.",
    metric: {
      count: 50,
      tail: "k+",
      label: "people reached through a multi-institution rollout",
    },
    tags: ["Open source", "Multi-institution", "AI learning"],
    photo: img.industryEducation,
    alt: "Students working on laptops in a bright university study hall",
    position: "40% 50%",
  },
];

export type SectorPanel = {
  name: string;
  text: string;
  tags: string[];
  photo: StaticImageData;
  alt: string;
  position?: string;
};

export const sectorPanels: SectorPanel[] = [
  {
    name: "Financial services",
    text: "Voice AI, document processing and governed assistants for teams that answer to regulators.",
    tags: ["Voice AI", "Compliance copilots", "Document processing"],
    photo: img.industryBanking,
    alt: "Banker meeting a customer at a desk in a bright office",
    position: "60% 50%",
  },
  {
    name: "Public & civic institutions",
    text: "Citizen-facing platforms and service portals, built to be accessible, auditable and easy to maintain.",
    tags: ["Service portals", "Accessibility", "Auditability"],
    photo: img.industryCivic,
    alt: "Visitors using self-service kiosks in a civic building atrium",
    position: "30% 50%",
  },
  {
    name: "Enterprise technology",
    text: "Orchestration, internal tooling and release engineering for large, distributed teams.",
    tags: ["Agent orchestration", "Platform engineering", "Internal tools"],
    photo: img.industryEnterprise,
    alt: "Open-plan enterprise office with a colleague walking between desks",
    position: "55% 50%",
  },
  {
    name: "Workforce development",
    text: "Labour-market data and cited AI answers that decision-makers can check, claim by claim.",
    tags: ["Data platforms", "Retrieval", "Dashboards"],
    photo: img.caseWorkforce,
    alt: "Analysts around a table reviewing charts and regional maps",
    position: "50% 40%",
  },
];

export const alsoSectors = [
  "Education",
  "Healthcare",
  "Manufacturing",
  "Logistics & supply chain",
  "Retail & eCommerce",
  "Professional services",
];

export const gates = ["Plan gate", "Code-review gate", "Deploy gate"];

export const modelExtras = [
  { icon: "users", best: "You have a backlog and need senior hands inside it." },
  { icon: "boxes", best: "You want AI-accelerated delivery without losing human control." },
  { icon: "target", best: "You want a fixed scope, a written outcome and one accountable owner." },
] as const;

export const productExtras = [
  { kicker: "Governance, risk & compliance", best: "Risk, audit and compliance teams" },
  { kicker: "Hiring", best: "High-volume recruiting teams" },
  { kicker: "Engineering", best: "Design and engineering teams" },
] as const;
