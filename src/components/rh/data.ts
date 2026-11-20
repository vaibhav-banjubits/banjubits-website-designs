import type { StaticImageData } from "next/image";
import { img } from "./images";

// Titles, sectors, services, models, products, insights and the four headline figures
// come from src/lib/content.ts. Everything in this file is DRAFT copy: check it against
// the real engagements before launch.

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export const bearings = [
  {
    no: "01",
    icon: "target",
    title: "Start with the outcome",
    text: "We map the operational outcome and the workflow that has to change before we choose any technology.",
  },
  {
    no: "02",
    icon: "shield",
    title: "Build the review gates in",
    text: "Plan, code-review and deploy gates are part of delivery from day one, not bolted on after the system exists.",
  },
  {
    no: "03",
    icon: "lock",
    title: "Keep every change controlled",
    text: "Access, deployment and change decisions stay controlled, reviewable and auditable throughout.",
  },
  {
    no: "04",
    icon: "file",
    title: "Hand it over properly",
    text: "We build for the people who will operate and own the system, with the documentation to match.",
  },
];

export const strainLeft = {
  text: "Prototypes get built in one corner, policy is written in another, and the platform team hears about it last. Each part moves at its own pace.",
  points: [
    "Demos that never meet a real workflow",
    "Governance reviewed after the build",
    "Handover treated as an afterthought",
  ],
};

export const strainRight = {
  text: "The cost shows up late: stalled pilots, duplicated tooling and systems that nobody feels able to own or change.",
  points: [
    "Seven assistants, seven sets of access rules",
    "Releases waiting on manual sign-off",
    "No clear owner once the project team leaves",
  ],
};

export const compare = {
  cols: ["Build in-house alone", "A generic AI vendor", "Banjubits"],
  rows: [
    {
      label: "Where it starts",
      cells: ["Whatever tooling is to hand", "The vendor's platform", "Your operational outcome"],
    },
    {
      label: "Review gates",
      cells: ["Added late, if at all", "Rarely part of delivery", "Plan, code-review and deploy gates from day one"],
    },
    {
      label: "Governance",
      cells: ["Defined after launch", "Left to you", "Audit trail and access control designed in"],
    },
    {
      label: "Who does the work",
      cells: ["Hire, then wait", "A black box", "Embedded engineers, a delivery pod or a fixed outcome"],
    },
    {
      label: "Handover",
      cells: ["Knowledge sits with a few people", "Ongoing dependency on the vendor", "Documentation and ownership for the people who operate it"],
    },
    {
      label: "Human oversight",
      cells: ["Depends on the team", "Depends on the contract", "A person approves every gate that matters"],
    },
  ],
};

export const steps = [
  {
    no: "01",
    title: "Orient",
    text: "We map the outcome, the workflow that has to change and the constraints around data, access and regulation.",
  },
  {
    no: "02",
    title: "Chart",
    text: "Architecture, review gates and a written Definition of Done are agreed before anything is built.",
  },
  {
    no: "03",
    title: "Build",
    text: "Short increments, with plan, code-review and deploy gates keeping a person in control of every release.",
  },
  {
    no: "04",
    title: "Hand over",
    text: "Runbooks, documentation and training, so the team that operates the system truly owns it.",
  },
];

export type CaseMetric = {
  lead?: string;
  count?: number;
  tail?: string;
  text?: string;
  label: string;
};

export type Case = {
  tab: string;
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
    tab: "Orchestration",
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
    tab: "Voice AI",
    sector: "Financial services",
    service: "Voice AI",
    title: "Voice AI for first-line banking calls, with human escalation built in.",
    summary:
      "A conversational agent takes first-line customer calls in a regulated environment, and hands over to a person, with full context, whenever it should.",
    metric: { text: "Human in the loop", label: "An escalation path designed into every call flow" },
    tags: ["Voice AI", "Regulated", "Human escalation"],
    photo: img.caseVoice,
    alt: "Contact-centre specialist working alongside an AI call console",
    position: "62% 50%",
  },
  {
    tab: "Workforce data",
    sector: "Workforce development",
    service: "Data & AI platform",
    title: "Regional workforce data and cited AI answers in one decision platform.",
    summary:
      "Labour-market data and a retrieval assistant in one place, where every answer cites its source so decision-makers can check it.",
    metric: { lead: "≥", count: 95, tail: "%", label: "of AI answers grounded and cited back to source" },
    tags: ["Retrieval", "Data platform", "Citations"],
    photo: img.industryWorkforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    position: "50% 50%",
  },
  {
    tab: "Meridian",
    sector: "Education",
    service: "Product engineering",
    title: "Meridian: alumni, school operations and AI learning on one open-source platform.",
    summary:
      "One open-source platform for alumni relations, school operations and AI-assisted learning, rolled out across several institutions.",
    metric: { count: 50, tail: "k+", label: "people reached through a multi-institution rollout" },
    tags: ["Open source", "Multi-institution", "AI learning"],
    photo: img.industryEducation,
    alt: "Students working on laptops in a bright university study hall",
    position: "40% 50%",
  },
];

export const deliverables = [
  {
    icon: "file",
    title: "A written Definition of Done",
    text: "Agreed up front, so \"finished\" is something you can check.",
  },
  {
    icon: "shield",
    title: "An audit trail you can open",
    text: "Who changed what, who approved it and when.",
  },
  {
    icon: "layers",
    title: "Runbooks and documentation",
    text: "Written for the people who will operate the system, not the people who built it.",
  },
  {
    icon: "key",
    title: "Full ownership of the code",
    text: "Source, infrastructure as code and access, all in your hands.",
  },
];

export const questions = [
  "We can name the one outcome or process we want AI to change.",
  "The data it needs is reachable, and we know who owns it.",
  "There is a named business owner for the result.",
  "We know which decisions must always stay with a person.",
  "We have a way to review and audit what the system does.",
  "We have a route to run it in production: hosting, access and release.",
];

export const bands = [
  {
    max: 2,
    title: "Start with orientation",
    text: "A short discovery to name the outcome, the owner and the constraints will save months later.",
  },
  {
    max: 4,
    title: "Ready to chart the route",
    text: "The foundations are there. Next: architecture, review gates and a written Definition of Done.",
  },
  {
    max: 6,
    title: "Ready to build",
    text: "You have what a delivery team needs. The question now is the right shape: embedded, pod or fixed outcome.",
  },
];

export const beliefs = [
  { title: "Production over demos", text: "A system only counts once it is running, controlled and used." },
  { title: "People stay in control", text: "Automation does the repeatable work. A person owns each decision that matters." },
  { title: "Built to be handed over", text: "Good delivery ends with your team able to run it without us." },
];
