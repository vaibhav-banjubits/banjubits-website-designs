import type { StaticImageData } from "next/image";
import { img } from "./images";

// Copy follows the Banjubits Brand Direction doc (blueprint-led homepage, proof right under the hero,
// one main action: "Start a project"). Figures are the ones already published on banjubits.com.
// Everything marked DRAFT needs checking against the real engagements before launch.

export const sectors = [
  "Financial services",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Logistics and supply chain",
  "Public and civic institutions",
  "Workforce development",
  "Retail and eCommerce",
  "Professional services",
];

// The Definition of Done that ticks off as a visitor scrolls the delivery steps.
export const doneItems = [
  { label: "Outcome and constraints mapped", gate: "" },
  { label: "Plan approved", gate: "Gate 1" },
  { label: "Code reviewed by a person", gate: "Gate 2" },
  { label: "Release signed off", gate: "Gate 3" },
  { label: "Handed over with runbooks", gate: "" },
];

export const principles = [
  { icon: "shield", title: "Govern", text: "Access, change and deployment stay controlled, reviewable and auditable." },
  { icon: "target", title: "Ground", text: "Answers are grounded in approved sources and cited back to them." },
  { icon: "user", title: "Humans decide", text: "A person approves every gate that matters, from plan to release." },
];

export const email = "coreops@banjubits.com";
export const linkedin = "https://www.linkedin.com/company/banjubits/";

export const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Case studies", href: "#work" },
  { label: "AI demos", href: "#products" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#delivery" },
];

export type Status = "Live" | "Pilot" | "Roadmap";

export type IndustryId = "enterprise" | "banking" | "workforce" | "education" | "civic";

export type Industry = {
  id: IndustryId;
  label: string;
  caption: string;
  photo: StaticImageData;
  alt: string;
  position: string;
  blueprint: {
    title: string;
    workstreams: { name: string; status: Status }[];
    proof: { figure: string; label: string };
  };
};

// DRAFT: the workstreams are what we would propose first, each labelled with how mature
// that capability is today. Proof figures are already published.
export const industries: Industry[] = [
  {
    id: "enterprise",
    label: "Enterprise",
    caption: "Global technology company",
    photo: img.orchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    position: "62% 50%",
    blueprint: {
      title: "One governed front door for your AI assistants",
      workstreams: [
        { name: "Agent routing and orchestration", status: "Live" },
        { name: "Access control and audit trail", status: "Live" },
        { name: "Governed knowledge copilot", status: "Pilot" },
      ],
      proof: { figure: "7 → 1", label: "Siloed AI assistants unified behind one governed entry point" },
    },
  },
  {
    id: "banking",
    label: "Banking",
    caption: "Financial services",
    photo: img.banking,
    alt: "Banking adviser meeting a customer at a desk in a bright branch",
    position: "60% 50%",
    blueprint: {
      title: "First-line voice AI with a person always one step away",
      workstreams: [
        { name: "Voice agent for first-line calls", status: "Live" },
        { name: "Human escalation with full context", status: "Live" },
        { name: "Policy-grounded answers with citations", status: "Pilot" },
      ],
      proof: { figure: "Human in the loop", label: "An escalation path designed into every call flow" },
    },
  },
  {
    id: "workforce",
    label: "Workforce",
    caption: "Workforce development",
    photo: img.workforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    position: "50% 50%",
    blueprint: {
      title: "Regional labour-market data with answers you can check",
      workstreams: [
        { name: "Decision dashboards on one data layer", status: "Live" },
        { name: "Retrieval assistant with source citations", status: "Live" },
        { name: "Programme matching", status: "Roadmap" },
      ],
      proof: { figure: "≥95%", label: "AI answers grounded and cited back to source" },
    },
  },
  {
    id: "education",
    label: "Education",
    caption: "Schools and alumni",
    photo: img.education,
    alt: "Students working on laptops in a bright university study hall",
    position: "40% 50%",
    blueprint: {
      title: "One open-source platform for schools, alumni and learning",
      workstreams: [
        { name: "School operations and alumni platform", status: "Live" },
        { name: "AI-assisted learning", status: "Pilot" },
        { name: "AI-led interviews, a person decides", status: "Roadmap" },
      ],
      proof: { figure: "50k+", label: "People reached through a multi-institution rollout" },
    },
  },
  {
    id: "civic",
    label: "Civic",
    caption: "Public and civic institutions",
    photo: img.civic,
    alt: "Citizens using self-service kiosks in a public building lobby",
    position: "40% 50%",
    blueprint: {
      title: "Legacy services moved over without changing the outcome",
      workstreams: [
        { name: "Legacy modernisation with parity checks", status: "Live" },
        { name: "Self-service intake and records", status: "Pilot" },
        { name: "Multilingual citizen assistant", status: "Roadmap" },
      ],
      proof: { figure: "100%", label: "Scoring parity validated before a legacy system cutover" },
    },
  },
];

export const proof = [
  { sector: "Enterprise AI", lead: "", figure: "7→1", count: 0, tail: "", label: "Siloed AI assistants unified behind one governed entry point", href: "#work" },
  { sector: "Knowledge AI", lead: "≥", figure: "95%", count: 95, tail: "%", label: "AI answers grounded and cited back to source", href: "#work" },
  { sector: "Multi-institution rollout", lead: "", figure: "50k+", count: 50, tail: "k+", label: "People reached through one platform rollout", href: "#work" },
  { sector: "Legacy modernisation", lead: "", figure: "100%", count: 100, tail: "%", label: "Scoring parity validated before a system cutover", href: "#work" },
];

export type CaseSector = "enterprise" | "banking" | "workforce" | "education";

export type Case = {
  sector: CaseSector;
  sectorLabel: string;
  service: string;
  metric: string;
  metricLabel: string;
  title: string;
  summary: string;
  tags: string[];
  photo: StaticImageData;
  alt: string;
  position: string;
};

export const caseFilters: { id: "all" | CaseSector; label: string }[] = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise" },
  { id: "banking", label: "Banking" },
  { id: "workforce", label: "Workforce" },
  { id: "education", label: "Education" },
];

export const cases: Case[] = [
  {
    sector: "enterprise",
    sectorLabel: "Global technology company",
    service: "Agent orchestration",
    metric: "7 → 1",
    metricLabel: "AI assistants unified behind one governed entry point",
    title: "Seven siloed assistants, one governed front door.",
    summary:
      "Seven separately built assistants now sit behind a single entry point, with routing, access control and an audit trail managed in one place.",
    tags: ["Orchestration", "Access control", "Audit trail"],
    photo: img.orchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    position: "60% 50%",
  },
  {
    sector: "workforce",
    sectorLabel: "Workforce development",
    service: "Data and AI platform",
    metric: "≥95%",
    metricLabel: "of AI answers grounded and cited back to source",
    title: "Regional workforce data and cited AI answers in one decision platform.",
    summary:
      "Labour-market data and a retrieval assistant in one place, where every answer cites its source so decision-makers can check it.",
    tags: ["Retrieval", "Data platform", "Citations"],
    photo: img.workforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    position: "50% 50%",
  },
  {
    sector: "banking",
    sectorLabel: "Financial services",
    service: "Voice AI",
    metric: "Human in the loop",
    metricLabel: "An escalation path designed into every call flow",
    title: "Voice AI for first-line banking calls, with human escalation built in.",
    summary:
      "A conversational agent takes first-line customer calls in a regulated environment, and hands over to a person, with full context, whenever it should.",
    tags: ["Voice AI", "Regulated", "Human escalation"],
    photo: img.voice,
    alt: "Contact-centre specialist working alongside an AI call console",
    position: "62% 50%",
  },
  {
    sector: "education",
    sectorLabel: "Education",
    service: "Product engineering",
    metric: "50k+",
    metricLabel: "people reached through a multi-institution rollout",
    title: "Meridian: alumni, school operations and AI learning on one open-source platform.",
    summary:
      "One open-source platform for alumni relations, school operations and AI-assisted learning, rolled out across several institutions.",
    tags: ["Open source", "Multi-institution", "AI learning"],
    photo: img.education,
    alt: "Students working on laptops in a bright university study hall",
    position: "40% 50%",
  },
];

export const solutions = [
  {
    no: "A1",
    title: "AI systems",
    link: "AI systems",
    text: "Agents, orchestration, voice AI and retrieval, designed around how your teams actually work and governed from the first prototype.",
    items: ["Agent orchestration", "Voice AI", "RAG and knowledge assistants", "AI governance"],
    art: "ai",
  },
  {
    no: "A2",
    title: "Digital products",
    link: "digital products",
    text: "Web platforms, portals, APIs and internal tools, built with product thinking and the structure to stay maintainable long after launch.",
    items: ["Web and mobile apps", "APIs and integrations", "Design systems", "Quality engineering"],
    art: "product",
  },
  {
    no: "A3",
    title: "Production engineering",
    link: "production engineering",
    text: "Cloud foundations, release pipelines, workflow automation and operational data, so delivery stops firefighting and ships on a cadence.",
    items: ["Cloud modernisation", "CI/CD and release controls", "Workflow automation", "Observability"],
    art: "pipeline",
  },
] as const;

export const products = [
  {
    id: "atlas",
    name: "Mentis Atlas",
    kind: "GRC knowledge copilot",
    status: "Pilot" as Status,
    text: "A governance, risk and compliance copilot that maps policies, controls and evidence, and answers with citations. Pilot figures are approved and anonymised.",
    tags: ["Control map", "Evidence search", "Cited answers"],
  },
  {
    id: "forge",
    name: "Mentis Forge",
    kind: "Engineering CAD copilot",
    status: "Roadmap" as Status,
    text: "A design copilot that drives engineering tools through governed steps, with approval at every gate. Offered as a design-partner programme.",
    tags: ["Design agent", "Tool adapters", "Human gates"],
  },
];

export const steps = [
  {
    no: "01",
    title: "Orient",
    text: "We map the outcome, the workflow that has to change and the constraints around data, access and regulation.",
    gate: "",
  },
  {
    no: "02",
    title: "Chart",
    text: "Architecture, review gates and a written Definition of Done are agreed before anything is built.",
    gate: "Gate 1 · Plan approved",
  },
  {
    no: "03",
    title: "Build",
    text: "Short increments. Agents help code and test; a person reviews and signs off every release.",
    gate: "Gates 2 and 3 · Code review, deploy sign-off",
  },
  {
    no: "04",
    title: "Hand over",
    text: "Runbooks, documentation and training, so the team that operates the system truly owns it.",
    gate: "",
  },
];

export const models = [
  { name: "Embedded engineers", text: "Our engineers join your team and work inside your backlog, tools and release process." },
  { name: "Delivery pod", text: "A lead and engineers with AI agents that plan, code and test, behind three human gates." },
  { name: "Fixed outcome", text: "We own delivery to a written Definition of Done, from discovery through handoff." },
];

export const footerNav = [
  {
    title: "Solutions",
    links: [
      { label: "AI systems", href: "#solutions" },
      { label: "Digital products", href: "#solutions" },
      { label: "Production engineering", href: "#solutions" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case studies", href: "#work" },
      { label: "AI demos", href: "#products" },
      { label: "Start a project", href: "#start" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Mentis Atlas", href: "#products" },
      { label: "Mentis Forge", href: "#products" },
      { label: "Mentis Interviews", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#delivery" },
      { label: "Contact", href: "#start" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];
