import type { StaticImageData } from "next/image";
import { img } from "./images";


// All copy comes from BanjuBits_Capabilities_Provato_Deck.pptx (November 2026) and the
// 18 Nov team call ("School & website - updates"): a homepage visitors understand in
// seconds, product-led, anchored on the deck, honest about what is and is not built yet.
//
// STATUS LABELS ARE THE ONE THING TO CHECK. They are my reading of the deck and the call,
// not confirmed by the team. Change `stage` here and the whole page follows.

export const email = "coreops@banjubits.com";
export const linkedin = "https://www.linkedin.com/company/banjubits/";

export const NAV = [
  { label: "What we build", href: "#products" },
  { label: "Promises", href: "#promises" },
  { label: "Proof", href: "#proof" },
  { label: "How we engage", href: "#engage" },
];

export type Stage = "proven" | "partial" | "roadmap";

/** The three honest levels of "built". */
export const STAGES: Record<Stage, { label: string; short: string }> = {
  proven: { label: "Proven in delivery", short: "Proven" },
  partial: { label: "Partly built", short: "Partly built" },
  roadmap: { label: "Roadmap", short: "Roadmap" },
};

export type ProductId = "atlas" | "hub" | "renew" | "forge" | "voice" | "delivery";

export type Product = {
  id: ProductId;
  /** the plain-language job, written the way a buyer would say it */
  job: string;
  name: string;
  capability: string;
  stage: Stage;
  /** one honest sentence under the status chip */
  stageNote: string;
  headline: string;
  summary: string;
  changes: string[];
  proof: { value: string; label: string; text: string };
  photo: StaticImageData;
  photoAlt: string;
  position: string;
  icon: string;
  /** a leadership concern from deck slide 2 that this product answers */
  say?: string;
  /** what it plugs into on the left of the "how it fits" diagram */
  from: string[];
  /** what people get on the right */
  to: string;
};

export const products: Product[] = [
  {
    id: "atlas",
    job: "Get trusted answers from our documents and know-how",
    name: "Mentis Atlas",
    capability: "Knowledge & Copilots",
    stage: "proven",
    stageNote: "Three knowledge assistants run in production for a client. Atlas is the reusable package.",
    headline: "Put your company's know-how to work",
    summary:
      "A knowledge copilot with secure connectors. It reads only what each person is allowed to see and logs every access.",
    changes: [
      "Plain-language answers, each showing its source",
      "New hires productive sooner",
      "Know-how that stays when experts leave",
    ],
    proof: {
      value: "3",
      label: "knowledge assistants in production",
      text: "Answering with citations across bug data, program documents, email, meeting transcripts and customer requirements at a leading AI computing company.",
    },
    photo: img.analytics,
    photoAlt: "A laptop showing an analytics dashboard with usage and latency charts",
    position: "50% 78%",
    icon: "book-open",
    say: "I can't sign off on answers nobody can check.",
    from: ["Documents", "Email & chat", "Tickets & apps", "Engineering data"],
    to: "Answers with sources",
  },
  {
    id: "hub",
    job: "Get AI to finish work across our systems",
    name: "Mentis Hub",
    capability: "Agentic AI & Automation",
    stage: "proven",
    stageNote: "The pattern runs in production for a client today. Hub is the reusable package.",
    headline: "AI assistants that finish the job, safely",
    summary:
      "One front door that routes each request to the right AI assistant, under shared safety and governance rules.",
    changes: [
      "Existing assistants behind one front door, no rewrite",
      "A named person approves every important step",
      "One view of AI usage and spend",
    ],
    proof: {
      value: "22",
      label: "assistants on one platform",
      text: "Across Teams, Slack and web, with every backend preserved. Measured in production: 20,130+ users, 750 ms P90 latency, 85%+ routing accuracy.",
    },
    photo: img.workforce,
    photoAlt: "Two colleagues reviewing a live dashboard on a wall display",
    position: "50% 40%",
    icon: "route",
    say: "Our best people are stuck on repetitive work and old systems.",
    from: ["Email & chat", "Tickets & apps", "Existing assistants"],
    to: "Tasks done, approved",
  },
  {
    id: "renew",
    job: "Move off old systems without a big-bang switch",
    name: "Mentis Renew",
    capability: "AI-led Modernization",
    stage: "proven",
    stageNote: "The method was used on a production engagement. Renew is the reusable package.",
    headline: "Modernize old systems without the big-bang risk",
    summary:
      "Our AI-led method to map, rebuild and test old systems side by side with the new.",
    changes: [
      "AI works out what the old system really does",
      "Rebuilt one part at a time on modern cloud",
      "Old and new run together until results match",
    ],
    proof: {
      value: "100%",
      label: "scoring parity before go-live",
      text: "Licensed scoring pipelines rebuilt as cloud-native services, validated before any production traffic switched. About $20K a year in license cost removed.",
    },
    photo: img.codeGlow,
    photoAlt: "Lines of code glowing on a dark screen",
    position: "50% 50%",
    icon: "code-xml",
    from: ["Legacy code"],
    to: "Same results, new stack",
  },
  {
    id: "forge",
    job: "Cut engineering design cycles",
    name: "Mentis Forge",
    capability: "Engineering Design AI",
    stage: "roadmap",
    stageNote: "Not built yet. We are looking for design partners. Related delivery is real; Forge is not.",
    headline: "Shorter design cycles for engineering teams",
    summary:
      "A workflow that connects engineering tools, runs design loops and records every sign-off.",
    changes: [
      "Customer requirements become a checklist each design must pass",
      "Many design options generated and tested automatically",
      "An engineer signs off every key step, with a full record",
    ],
    proof: {
      value: "3 → 1",
      label: "design assistants unified (related work)",
      text: "Three assistants on a product design platform became one, on a bill-of-materials knowledge graph over PLM data. This is related delivery, not Forge itself.",
    },
    photo: img.lab,
    photoAlt: "An engineer working at a test rig in a lab",
    position: "50% 35%",
    icon: "cpu",
    from: ["Engineering data"],
    to: "Signed-off designs",
  },
  {
    id: "voice",
    job: "Answer customers and candidates around the clock",
    name: "Mentis Voice & HR",
    capability: "Voice & Customer AI",
    stage: "partial",
    stageNote: "HR is live in our own hiring. Voice is in development, with a working demo.",
    headline: "Always-on service that knows when to hand over",
    summary:
      "Voice and chat agents for customers and candidates, with a smooth handover to your people.",
    changes: [
      "Help on your website, phone lines and kiosks, 24/7",
      "Every answer grounded in your own content",
      "A person takes over, with the full conversation",
    ],
    proof: {
      value: "~50",
      label: "candidates met through Mentis HR",
      text: "Mentis HR runs our own hiring. Recruiters make the final call. Mentis Voice is in development; a concierge demo for a cultural district is live.",
    },
    photo: img.callcentre,
    photoAlt: "A service team on headsets at a bright call-centre desk",
    position: "50% 40%",
    icon: "mic",
    from: ["Phone & web"],
    to: "Handover with context",
  },
  {
    id: "delivery",
    job: "Get AI into production, securely and affordably",
    name: "Delivery automation",
    capability: "Cloud, Data & AI Ops",
    stage: "proven",
    stageNote: "Delivered in production for a client; this is the toolkit behind it.",
    headline: "A secure, reliable, affordable foundation for AI",
    summary:
      "An infrastructure agent that turns plain English into Terraform, checks what already exists, then validates and self-heals errors before deployment.",
    changes: [
      "Secure pipelines that feed AI with data you can trust",
      "Releases and infrastructure automated, security built in",
      "AI usage and cost tracked, so spend stays in view",
    ],
    proof: {
      value: "K8s",
      label: "production pipelines, fully audited",
      text: "Scoring pipelines as containerized services on Kubernetes, with central monitoring, logging and a complete audit trail.",
    },
    photo: img.servers,
    photoAlt: "Server racks with glowing cabling",
    position: "50% 50%",
    icon: "server",
    say: "I can't see what our AI costs, let alone control it.",
    from: ["Cloud & data"],
    to: "Costs in plain sight",
  },
];

export const FIT_SOURCES = [
  { id: "Documents", icon: "file-search" },
  { id: "Email & chat", icon: "message-square" },
  { id: "Tickets & apps", icon: "layers" },
  { id: "Existing assistants", icon: "bot" },
  { id: "Legacy code", icon: "code-xml" },
  { id: "Engineering data", icon: "cpu" },
  { id: "Phone & web", icon: "mic" },
  { id: "Cloud & data", icon: "cloud" },
] as const;

export const PROMISES = [
  {
    icon: "eye",
    title: "Every answer shows its source",
    text: "People see where each answer comes from, so they can check it, trust it and act on it.",
  },
  {
    icon: "badge-check",
    title: "Your people make the call",
    text: "AI does the legwork. A named person approves every important decision.",
  },
  {
    icon: "lock",
    title: "Your data stays inside your walls",
    text: "We run in your cloud or on your premises, with the AI models you choose.",
  },
];

export type CaseStatus = "In delivery" | "Built · live demo" | "Proposal stage";

export const cases: {
  tag: CaseStatus;
  title: string;
  text: string;
  note: string;
  photo: StaticImageData;
  alt: string;
}[] = [
  {
    tag: "In delivery",
    title: "One platform for a 60-year-old school that ran on paper",
    text: "Learning, school administration and alumni on one login, with AI tutors. Open source, so other schools can adopt it with no per-seat fees.",
    note: "Education",
    photo: img.education,
    alt: "Students working at tables beside tall windows",
  },
  {
    tag: "Built · live demo",
    title: "A concierge for a cultural district",
    text: "Scan a QR code, say what you would like to do, and get a personal itinerary drawn from the events of 10+ institutions.",
    note: "Civic AI · working software, not yet client delivery",
    photo: img.civic,
    alt: "Visitors using self-service kiosks in a bright public hall",
  },
  {
    tag: "Proposal stage",
    title: "Regional workforce intelligence",
    text: "One trusted view of a region's labor demand, supply and outcomes, with an AI Navigator that cites every claim. A 120-day pilot design.",
    note: "Workforce · not delivered work",
    photo: img.teamScreen,
    alt: "Colleagues working together at a laptop",
  },
];

export const proofStats = [
  { value: 22, suffix: "", label: "separate assistants now run on one platform for one client" },
  { value: 100, suffix: "%", label: "scoring parity proven before any production traffic switched" },
  { value: 3, suffix: " years", label: "one client has kept us on, with our engineers in its own teams" },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    time: "About 2 weeks",
    text: "Choose the one or two AI uses worth doing. Check the data, the risks and who will use it.",
    get: "A business case and a plan",
  },
  {
    n: "02",
    title: "Prove",
    time: "6–8 weeks",
    text: "Build a working pilot on your real data, with real users.",
    get: "Results against today's baseline",
  },
  {
    n: "03",
    title: "Scale",
    time: "At your pace",
    text: "Roll out to more teams and connect more systems.",
    get: "AI in daily work, not in a lab",
  },
  {
    n: "04",
    title: "Hand over",
    time: "Your choice",
    text: "We run and improve it for you, or train your team to own it.",
    get: "A system your team understands",
  },
];

export const industries = [
  "Technology & semiconductors",
  "Industrial manufacturing",
  "Financial services",
  "Education",
  "Public sector & civic",
];

export const reasons = [
  "The people who scope the work are the people who build it",
  "Your cloud, your sign-in, your rules",
  "Open standards, and your choice of AI models",
];

/** Deck slide 2: what leadership teams tell us, and our answer. */
export const hear: { say: string; answer: string; to: ProductId | "engage" | "promise" }[] = [
  {
    say: "We ran the pilots. None made it into daily work.",
    answer: "We start where the value is: a working pilot in 6–8 weeks, on your real data, with real users.",
    to: "engage",
  },
  {
    say: "I can't sign off on answers nobody can check.",
    answer: "Every answer shows its source, so people can check it, trust it and act on it.",
    to: "atlas",
  },
  {
    say: "Our most sensitive data can't leave the building.",
    answer: "We run in your cloud or on your premises, with the AI models you choose.",
    to: "promise",
  },
  {
    say: "Our best people are stuck on repetitive work and old systems.",
    answer: "AI does the legwork and old systems are rebuilt safely, while a named person approves what matters.",
    to: "hub",
  },
  {
    say: "I can't see what our AI costs, let alone control it.",
    answer: "Usage and cost are tracked from day one, so spend stays in plain sight.",
    to: "delivery",
  },
];

/**
 * Scripted previews for the prompt hero. These are NOT a live model: they restate what the deck
 * says each accelerator does. Names and figures in them are illustrative.
 */
export type HeroStep = { t: string; d: string; bar?: boolean };
export const heroScripts: Record<
  ProductId,
  { label: string; prompt: string; steps: HeroStep[]; sources: string[]; keys: string[] }
> = {
  atlas: {
    label: "Answer from our documents",
    prompt: "Which customer programs are still waiting on qualification?",
    steps: [
      { t: "Read only what you are allowed to see", d: "Documents, email, tickets and engineering data, through secure connectors. Every access is logged." },
      { t: "Answered in plain language", d: "Each claim shows its source, so people can check it and act on it." },
      { t: "Know-how stays when experts leave", d: "New hires get productive sooner, with answers auditors can check." },
    ],
    sources: ["Program doc §4", "Email, 12 Nov", "Ticket 4821"],
    keys: ["document", "answer", "knowledge", "search", "policy", "wiki", "question", "who knows", "find"],
  },
  hub: {
    label: "Finish work across systems",
    prompt: "Route this customer issue to the right assistant and draft the reply.",
    steps: [
      { t: "Routed to the right assistant", d: "One front door for every AI assistant, across Teams, Slack and the web, with none rewritten." },
      { t: "Drafted the reply across your systems", d: "AI does the legwork, end to end, using the right model for the job." },
      { t: "A named person approves", d: "Nothing important goes out without a person's yes, and it is logged." },
    ],
    sources: ["Routing log", "Ticket 4821", "Approval record"],
    keys: ["automat", "workflow", "assistant", "agent", "route", "approval", "process", "manual", "repetitive", "task"],
  },
  renew: {
    label: "Move off old systems",
    prompt: "Move our old scoring system to the cloud without a big-bang switch.",
    steps: [
      { t: "Mapped what the old system really does", d: "Business rules written in plain language for your experts to confirm." },
      { t: "Rebuilt one part at a time on modern cloud", d: "Old and new run side by side while you watch the results." },
      { t: "Parity proven before any live traffic switched", d: "One engagement reached 100% scoring parity before cutover.", bar: true },
    ],
    sources: ["Rule map", "Parity report", "Runbook"],
    keys: ["legacy", "old system", "migrat", "moderni", "mainframe", "cobol", "rebuild", "cloud", "license", "switch", "replace"],
  },
  forge: {
    label: "Cut design cycles",
    prompt: "Our engineers lose days moving numbers between design and simulation tools.",
    steps: [
      { t: "Connected the engineering tools you already own", d: "Design, simulation and calculation tools in one workflow." },
      { t: "Turned requirements into a checklist each design must pass", d: "Many design options generated and tested automatically." },
      { t: "An engineer signs off every key step", d: "With a full record, ready for design reviews and customers." },
    ],
    sources: ["Requirements list", "Design review log"],
    keys: ["engineer", "design", "simulation", "cad", "plm", "manufactur", "prototype", "bom"],
  },
  voice: {
    label: "Answer customers 24/7",
    prompt: "Answer customer calls and candidate questions at any hour.",
    steps: [
      { t: "Voice and chat agents on your site, phones and kiosks", d: "Every answer grounded in your own content and live data." },
      { t: "Hands over to a person when judgment is needed", d: "They get the full conversation, so nobody repeats themselves." },
      { t: "Every outcome captured", d: "So the service keeps improving, and your team keeps the harder cases." },
    ],
    sources: ["Call summary", "Handover note"],
    keys: ["call", "customer", "voice", "chat", "support", "hiring", "candidate", "recruit", "interview", "concierge", "24/7", "service"],
  },
  delivery: {
    label: "Get AI into production",
    prompt: "Get our AI pilot into production, securely, with costs under control.",
    steps: [
      { t: "Plain English to Terraform", d: "Checks what already exists, then validates, lints and self-heals errors before deployment." },
      { t: "Secure pipelines and automated releases", d: "Security checks built in, in your cloud or on your premises." },
      { t: "Usage and cost tracked", d: "So spend stays in plain sight and under control." },
    ],
    sources: ["Terraform plan", "Release log", "Cost report"],
    keys: ["deploy", "production", "devops", "pipeline", "infrastructure", "terraform", "kubernetes", "cost", "security", "release", "data pipeline"],
  },
};

/** Which accelerator is closest to what the visitor typed. */
export function matchProduct(input: string): ProductId {
  const t = input.toLowerCase();
  let best: ProductId = "atlas";
  let score = 0;
  (Object.keys(heroScripts) as ProductId[]).forEach((id) => {
    const n = heroScripts[id].keys.reduce((a, k) => a + (t.includes(k) ? 1 : 0), 0);
    if (n > score) {
      score = n;
      best = id;
    }
  });
  return best;
}
