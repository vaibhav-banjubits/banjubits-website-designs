import type { StaticImageData } from "next/image";
import { img } from "./images";

// All copy comes from BanjuBits_Capabilities_Provato_Deck.pptx (November 2026) and the
// 18 Nov team call: the homepage is product-led, the Mentis accelerators come first, and the
// deck anchors what the site says.
//
// STATUS LABELS ARE THE THING TO CHECK. Not every Mentis product is built yet. These labels are
// my reading of the deck and the call, not confirmed by the team. Change them here and the whole
// page follows.
//   "Proven in delivery": the capability runs in production in client work; the Mentis package is
//                         the reusable version we are productising.
//   "Partly built":       one half is live, the other half is in development.
//   "Roadmap":            not built yet.

export const email = "coreops@banjubits.com";
export const linkedin = "https://www.linkedin.com/company/banjubits/";

export type Stage = "Proven in delivery" | "Partly built" | "Roadmap";

export const stageNote: Record<Stage, string> = {
  "Proven in delivery":
    "Running in production in client work. The Mentis package is the reusable version of it.",
  "Partly built": "One half is live, the other half is in development.",
  Roadmap: "Not built yet. We are looking for design partners.",
};

export type ProductId = "atlas" | "hub" | "renew" | "forge" | "voice" | "delivery";

export type Product = {
  id: ProductId;
  name: string;
  short: string;
  capability: string;
  stage: Stage;
  stageDetail: string;
  headline: string;
  summary: string;
  result: string;
  challenge: string;
  does: string[];
  changes: string[];
  proofLabel: string;
  proof: string;
  metrics?: { value: string; label: string }[];
  icon: string;
  photo: StaticImageData;
  photoAlt: string;
};

export const products: Product[] = [
  {
    id: "atlas",
    name: "Mentis Atlas",
    short: "Atlas",
    capability: "Knowledge & Copilots",
    stage: "Proven in delivery",
    stageDetail: "Three knowledge assistants in production for one client",
    headline: "Put your company's know-how to work",
    summary:
      "A knowledge copilot with secure connectors. It reads only what each person is allowed to see and logs every access.",
    result: "Faster decisions, and know-how that stays when people leave",
    challenge:
      "Answers are buried in documents, systems and the heads of a few experts. When those experts leave, the know-how leaves with them.",
    does: [
      "Connect documents, email, chat, tickets and engineering data through secure connectors",
      "Capture expert knowledge before it is lost",
      "Give people plain-language answers, each showing its source",
      "Respect each person's existing access rights, and log every request",
    ],
    changes: [
      "Faster, better-informed decisions",
      "New hires productive sooner",
      "Know-how that stays with the company",
      "Answers auditors can check",
    ],
    proofLabel: "Delivered · In production",
    proof:
      "Three knowledge assistants in production at a leading AI computing company answer with citations across bug data, program documents, email, meeting transcripts and customer requirements.",
    metrics: [{ value: "3", label: "knowledge assistants in production" }],
    icon: "book-open",
    photo: img["circuit-board"],
    photoAlt: "Close view of a glowing circuit board",
  },
  {
    id: "hub",
    name: "Mentis Hub",
    short: "Hub",
    capability: "Agentic AI & Automation",
    stage: "Proven in delivery",
    stageDetail: "The pattern runs on one shared agent platform in production",
    headline: "AI assistants that finish the job, safely",
    summary:
      "One front door that routes each request to the right AI assistant, under shared safety and governance rules.",
    result: "Less manual work, and one front door for every AI assistant",
    challenge:
      "Teams have built AI assistants in isolation. Nobody can see them all, and few of them finish real work.",
    does: [
      "Bring existing assistants behind one front door, without rewriting them",
      "Let AI carry out tasks securely across your systems, end to end",
      "Add human approval wherever a decision matters",
      "Choose the right AI model for each job, and track the cost",
    ],
    changes: [
      "Less manual, repetitive work",
      "One set of safety rules for every assistant",
      "A clear view of AI usage and spend",
      "AI inside the tools people already use",
    ],
    proofLabel: "Delivered · In production",
    proof:
      "Twenty-two separate assistants now run on one platform across Teams, Slack and web, with every backend preserved at a leading AI computing company. Measured in production.",
    metrics: [
      { value: "20,130+", label: "users" },
      { value: "≤750 ms", label: "P90 latency" },
      { value: "≥85%", label: "routing accuracy" },
    ],
    icon: "workflow",
    photo: img["network-blocks"],
    photoAlt: "Glowing blocks joined by a network of light",
  },
  {
    id: "renew",
    name: "Mentis Renew",
    short: "Renew",
    capability: "AI-led Modernization",
    stage: "Proven in delivery",
    stageDetail: "The method was used to move licensed pipelines to the cloud",
    headline: "Modernize old systems without the big-bang risk",
    summary: "Our AI-led method to map, rebuild and test old systems side by side with the new.",
    result: "Lower running costs, without the big-bang risk",
    challenge:
      "Critical systems run on old code that few people understand. Every change is slow, and replacing them feels too risky.",
    does: [
      "Use AI to work out exactly what the old system does",
      "Write down the business rules buried in the code, in plain language your experts can confirm",
      "Rebuild it one part at a time on modern cloud technology",
      "Run the old and new systems together until they give the same results, then switch over",
    ],
    changes: [
      "Lower migration costs and license fees",
      "Updates that are quicker and easier to make",
      "No risky, all-at-once switch",
      "A system your own team can understand and maintain",
    ],
    proofLabel: "Delivered · In production",
    proof:
      "Licensed scoring pipelines were rebuilt as cloud-native services and validated to 100% scoring parity before any production traffic switched. About $20K a year in license cost was removed.",
    metrics: [
      { value: "100%", label: "scoring parity before cutover" },
      { value: "~$20K", label: "a year in license cost removed" },
    ],
    icon: "git-branch",
    photo: img["code-glow"],
    photoAlt: "Lines of code glowing on a dark screen",
  },
  {
    id: "forge",
    name: "Mentis Forge",
    short: "Forge",
    capability: "Engineering Design AI",
    stage: "Roadmap",
    stageDetail: "Not built yet. Related delivery work exists",
    headline: "Shorter design cycles for engineering teams",
    summary:
      "A workflow that connects engineering tools, runs design loops and records every sign-off.",
    result: "Shorter design cycles, with a full audit trail",
    challenge:
      "Engineers spend days moving numbers between design, simulation and spreadsheet tools, one design option at a time.",
    does: [
      "Connect the engineering tools you already own",
      "Turn customer requirements into a checklist each design must pass",
      "Generate and test many design options automatically",
      "Keep an engineer's sign-off at every key step, with a full record",
    ],
    changes: [
      "Optimal design options tested in less time",
      "Less copying of data from one tool to another",
      "A record of every decision, ready to show in design reviews and to customers",
      "Engineers spend their time on engineering, not data entry",
    ],
    proofLabel: "Related delivery · In production",
    proof:
      "Three assistants on a product design platform were unified into one, built on a bill-of-materials knowledge graph over product lifecycle (PLM) data at a leading AI computing company. This is related work, not Forge itself.",
    icon: "wrench",
    photo: img["lab-engineer"],
    photoAlt: "An engineer working in a laboratory",
  },
  {
    id: "voice",
    name: "Mentis Voice & HR",
    short: "Voice & HR",
    capability: "Voice & Customer AI",
    stage: "Partly built",
    stageDetail: "Mentis HR is live in our own hiring. Mentis Voice is in development",
    headline: "Always-on service that knows when to hand over",
    summary:
      "Voice agents for customer calls, and AI interviews where recruiters make the final call.",
    result: "Always-on service, with your people free for the harder cases",
    challenge:
      "Customers want help at any hour. Your team is busy with routine questions, so higher-priority problems wait.",
    does: [
      "Put voice and chat agents on your website, phone lines and kiosks",
      "Ground every answer in your own content and live data",
      "Hand over to a person, with the full conversation, when judgment is needed",
      "Capture the outcome of every conversation, so the service keeps improving",
    ],
    changes: [
      "Customers get help 24/7",
      "Routine questions answered without a wait",
      "Your team free for higher-priority work",
      "Every customer gets the same quality of answer",
    ],
    proofLabel: "Built · Live demo",
    proof:
      "A voice and chat concierge for a Cleveland cultural district: scan a QR code, speak, and receive a personal itinerary drawn from the events of 10+ institutions. Mentis HR runs our own hiring: about 50 candidates to date.",
    metrics: [
      { value: "10+", label: "institutions in one conversation" },
      { value: "~50", label: "candidates interviewed by Mentis HR" },
    ],
    icon: "mic",
    photo: img.robot,
    photoAlt: "A friendly robot facing the camera",
  },
  {
    id: "delivery",
    name: "Delivery automation",
    short: "Delivery",
    capability: "Cloud, Data & AI Ops",
    stage: "Proven in delivery",
    stageDetail: "Used in our own delivery work",
    headline: "A secure, reliable, affordable foundation for AI",
    summary:
      "Our infrastructure agent turns plain English into Terraform, checks for existing resources, then validates, lints and self-heals errors before deployment.",
    result: "A secure, scalable foundation for every AI project",
    challenge:
      "AI that works in a demo often stalls before production. The data isn't ready, releases are manual, and nobody can say what it costs to run.",
    does: [
      "Build secure pipelines that feed AI with data you can trust",
      "Automate releases and infrastructure, with security checks built in",
      "Run AI models in your cloud or on your premises",
      "Track usage and cost, so spend stays under control",
    ],
    changes: [
      "A shorter path from pilot to production",
      "Fewer manual release steps",
      "Sensitive data kept under your control",
      "Running costs you can see and plan for",
    ],
    proofLabel: "Delivered · In production",
    proof:
      "Production scoring pipelines run as containerized services on Kubernetes, with central monitoring, logging and a complete audit trail at a leading AI computing company.",
    icon: "server",
    photo: img.servers,
    photoAlt: "Rows of servers in a data centre",
  },
];

// One crisp line and one number per product. The long deck copy stays in the arrays above for later pages.
// Plain words first: `task` labels the tab by the problem it solves, `plain` says what it is in
// everyday language, `line` says how. The Mentis product name is secondary.
export const productCopy: Record<
  ProductId,
  { task: string; plain: string; line: string; stat: { value: string; label: string } }
> = {
  atlas: {
    task: "Find answers",
    plain: "AI that knows your business",
    line: "Ask in plain English. Get answers from your own documents, with the source shown.",
    stat: { value: "3", label: "knowledge assistants in production" },
  },
  hub: {
    task: "Automate work",
    plain: "AI assistants that finish the job",
    line: "All your AI assistants behind one front door, with a person approving what matters.",
    stat: { value: "20,130+", label: "users on one shared platform" },
  },
  renew: {
    task: "Modernize",
    plain: "Modernize old software, safely",
    line: "Move it to the cloud, and prove the results match before you switch.",
    stat: { value: "100%", label: "scoring parity before switching" },
  },
  forge: {
    task: "Design faster",
    plain: "AI for engineering design",
    line: "Test many more designs in less time, with every sign-off recorded.",
    stat: { value: "Next", label: "we are looking for design partners" },
  },
  voice: {
    task: "Calls & hiring",
    plain: "AI that talks to customers and candidates",
    line: "Voice and chat agents, always on, that hand over to your people when it counts.",
    stat: { value: "10+", label: "institutions in one conversation" },
  },
  delivery: {
    task: "Cloud",
    plain: "A secure base for your AI",
    line: "Describe the cloud setup you need in plain English. We build it, check it and audit it.",
    stat: { value: "K8s", label: "production pipelines, fully audited" },
  },
};

export const promises = [
  { icon: "file-search", title: "Every answer shows its source" },
  { icon: "users", title: "Your people make the call" },
  { icon: "lock", title: "Your data stays inside your walls" },
];

export type Pain = { q: string; answer: string; text: string };

export const pains: Pain[] = [
  { q: "Our AI pilots never reach daily work.", answer: "Start where the value is.", text: "One or two uses, a working pilot on your real data, measured against today." },
  { q: "We can't trust answers nobody can check.", answer: "Every answer shows its source.", text: "People can see where each answer comes from, and auditors can check too." },
  { q: "Our sensitive data can't leave the building.", answer: "Your data stays inside your walls.", text: "We run in your cloud or on your premises, with the models you choose." },
  { q: "Our people are stuck on manual work and old systems.", answer: "Less manual work, no big-bang risk.", text: "AI finishes the tasks. Old systems move over only once the results match." },
  { q: "We can't see what our AI costs.", answer: "Keep its cost in plain sight.", text: "Usage and cost are tracked for every model and every job." },
];

export type CaseStatus = "Delivered · In production" | "In delivery" | "Built · Live demo" | "Proposal-stage";

export type Case = {
  id: string;
  status: CaseStatus;
  metric: string;
  metricLabel: string;
  title: string;
  photo: StaticImageData;
  alt: string;
};

export const cases: Case[] = [
  { id: "hub", status: "Delivered · In production", metric: "22 → 1", metricLabel: "assistants on one platform", title: "One governed front door for twenty-two assistants.", photo: img["ops-floor"], alt: "An operations floor with large wall displays" },
  { id: "renew", status: "Delivered · In production", metric: "100%", metricLabel: "parity before any traffic switched", title: "Licensed pipelines rebuilt in the cloud, proven identical first.", photo: img.servers, alt: "Rows of servers in a data centre" },
  { id: "education", status: "In delivery", metric: "1 login", metricLabel: "for nine roles across a school", title: "A 60-year-old school moves from paper to one open-source platform.", photo: img.education, alt: "Students working on laptops in a bright study hall" },
  { id: "civic", status: "Built · Live demo", metric: "10+", metricLabel: "institutions in one conversation", title: "Scan a code, say what you'd like, get a personal itinerary.", photo: img.civic, alt: "Visitors using self-service kiosks in a bright public lobby" },
];

export const steps = [
  { no: "01", title: "Discover", time: "About 2 weeks", get: "A business case and a plan", icon: "compass" },
  { no: "02", title: "Prove", time: "6–8 weeks", get: "A pilot measured against today", icon: "target" },
  { no: "03", title: "Scale", time: "At your pace", get: "AI in daily work", icon: "rocket" },
  { no: "04", title: "Hand over", time: "Your choice", get: "A system your team owns", icon: "handshake" },
];

export const why = [
  { icon: "users", title: "Senior team throughout" },
  { icon: "check", title: "Production, not demos" },
  { icon: "layers", title: "Ready-made accelerators" },
  { icon: "shield-check", title: "Inside your security" },
  { icon: "gauge", title: "Measured against today" },
  { icon: "blocks", title: "No lock-in" },
];

// Product pages live under /v4/mentis/[slug] (built under the V4 Harbour Flow route).
export const productSlug: Record<ProductId, string> = {
  atlas: "atlas",
  hub: "hub",
  renew: "renew",
  forge: "forge",
  voice: "voice-hr",
  delivery: "delivery-automation",
};

export const industries = [
  "Technology & semiconductors",
  "Industrial manufacturing",
  "Financial services",
  "Education",
  "Public sector",
];
