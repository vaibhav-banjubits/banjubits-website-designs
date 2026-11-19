import type { StaticImageData } from "next/image";
import { img } from "./images";

// All copy comes from BanjuBits_Capabilities_Provato_Deck.pptx (November 2026), plus the
// 18 Nov team call (product-led homepage, each product on its own page, simpler structure).
//
// STATUS LABELS ARE THE ONE THING TO CHECK. They are my reading of the deck and the Brand Lab
// (Atlas = Pilot and Forge = Roadmap in the Brand Direction doc; deck: "Mentis Voice is in
// development", "Mentis HR runs our own hiring"). Change them here and the site follows.

export const email = "coreops@banjubits.com";
export const linkedin = "https://www.linkedin.com/company/banjubits/";

export const NAV = [
  { label: "Products", href: "/v4#products" },
  { label: "Case studies", href: "/v4#work" },
  { label: "How we engage", href: "/v4#engage" },
  { label: "Why BanjuBits", href: "/v4#why" },
];

export type Status = "Live" | "Pilot" | "In development" | "Roadmap";

export type ProductId = "atlas" | "hub" | "renew" | "forge" | "voice" | "delivery";

export type Product = {
  id: ProductId;
  slug: string;
  name: string; // accelerator name
  short: string; // tab label
  capability: string;
  status: Status;
  statusNote: string;
  headline: string; // the deck's slide headline
  summary: string;
  speedsUp: string;
  result: string;
  challenge: string;
  does: string[];
  changes: string[];
  proof: { label: string; text: string; metrics?: { value: string; label: string }[] };
  photo: StaticImageData;
  photoAlt: string;
  photoPosition: string;
  icon: string;
};

export const products: Product[] = [
  {
    id: "atlas",
    slug: "atlas",
    name: "Mentis Atlas",
    short: "Atlas",
    capability: "Knowledge & Copilots",
    status: "Pilot",
    statusNote: "Pilot: running in a named-sector pilot, with approved and anonymised figures only.",
    headline: "Put your company's know-how to work",
    summary:
      "A knowledge copilot with secure connectors. It reads only what each person is allowed to see and logs every access.",
    speedsUp: "Knowledge & Copilots",
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
    proof: {
      label: "Delivered · In production",
      text: "Three knowledge assistants in production at a leading AI computing company answer with citations across bug data, program documents, email, meeting transcripts and customer requirements.",
      metrics: [{ value: "3", label: "knowledge assistants in production" }],
    },
    photo: img.office,
    photoAlt: "People working at desks in a large open-plan office, one colleague walking towards the windows",
    photoPosition: "60% 50%",
    icon: "book",
  },
  {
    id: "hub",
    slug: "hub",
    name: "Mentis Hub",
    short: "Hub",
    capability: "Agentic AI & Automation",
    status: "Live",
    statusNote: "Live: the pattern runs in production for a client today.",
    headline: "AI assistants that finish the job, safely",
    summary:
      "One front door that routes each request to the right AI assistant, under shared safety and governance rules.",
    speedsUp: "Agentic AI & Automation",
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
    proof: {
      label: "Delivered · In production",
      text: "Twenty-two separate assistants now run on one platform across Teams, Slack and web, with every backend preserved at a leading AI computing company. Measured in production.",
      metrics: [
        { value: "20,130+", label: "users" },
        { value: "≤750 ms", label: "P90 latency" },
        { value: "≥85%", label: "routing accuracy" },
      ],
    },
    photo: img.orchestration,
    photoAlt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    photoPosition: "60% 50%",
    icon: "route",
  },
  {
    id: "renew",
    slug: "renew",
    name: "Mentis Renew",
    short: "Renew",
    capability: "AI-led Modernization",
    status: "Live",
    statusNote: "Live: the method was used on a production engagement.",
    headline: "Modernize old systems without the big-bang risk",
    summary:
      "Our AI-led method to map, rebuild and test old systems side by side with the new.",
    speedsUp: "AI-led Modernization",
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
    proof: {
      label: "Delivered · In production",
      text: "Licensed scoring pipelines were rebuilt as cloud-native services and validated to 100% scoring parity before any production traffic switched. About $20K a year in license cost was removed.",
      metrics: [
        { value: "100%", label: "scoring parity before cutover" },
        { value: "~$20K", label: "a year in license cost removed" },
      ],
    },
    photo: img.datacentre,
    photoAlt: "A quiet data-centre aisle lined with server racks and cabling",
    photoPosition: "50% 50%",
    icon: "swap",
  },
  {
    id: "forge",
    slug: "forge",
    name: "Mentis Forge",
    short: "Forge",
    capability: "Engineering Design AI",
    status: "Roadmap",
    statusNote: "Roadmap: not built yet. We are looking for design partners.",
    headline: "Shorter design cycles for engineering teams",
    summary:
      "A workflow that connects engineering tools, runs design loops and records every sign-off.",
    speedsUp: "Engineering Design AI",
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
    proof: {
      label: "Related delivery · In production",
      text: "Three assistants on a product design platform were unified into one, built on a bill-of-materials knowledge graph over product lifecycle (PLM) data at a leading AI computing company. This is related work, not Forge itself.",
    },
    photo: img.workforce,
    photoAlt: "Two colleagues reviewing a data dashboard on a wall display",
    photoPosition: "50% 50%",
    icon: "cube",
  },
  {
    id: "voice",
    slug: "voice-hr",
    name: "Mentis Voice & HR",
    short: "Voice & HR",
    capability: "Voice & Customer AI",
    status: "In development",
    statusNote:
      "Mentis HR is live and runs our own hiring (about 50 candidates to date). Mentis Voice is in development; a live demo exists.",
    headline: "Always-on service that knows when to hand over",
    summary:
      "Voice agents for customer calls, and AI interviews where recruiters make the final call.",
    speedsUp: "Voice & Customer AI",
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
    proof: {
      label: "Built · Live demo",
      text: "A voice and chat concierge for a Cleveland cultural district: scan a QR code, speak, and receive a personal itinerary drawn from the events of 10+ institutions.",
      metrics: [{ value: "10+", label: "institutions in one conversation" }],
    },
    photo: img.civic,
    photoAlt: "Visitors using self-service kiosks in a bright public lobby",
    photoPosition: "40% 50%",
    icon: "mic",
  },
  {
    id: "delivery",
    slug: "delivery-automation",
    name: "Delivery automation",
    short: "Delivery",
    capability: "Cloud, Data & AI Ops",
    status: "Live",
    statusNote: "Live: used in our own delivery work.",
    headline: "A secure, reliable, affordable foundation for AI",
    summary:
      "Our infrastructure agent turns plain English into Terraform, checks for existing resources, then validates, lints and self-heals errors before deployment.",
    speedsUp: "Cloud, Data & AI Ops",
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
    proof: {
      label: "Delivered · In production",
      text: "Production scoring pipelines run as containerized services on Kubernetes, with central monitoring, logging and a complete audit trail at a leading AI computing company.",
    },
    photo: img.datacentre,
    photoAlt: "A quiet data-centre aisle lined with server racks and cabling",
    photoPosition: "50% 50%",
    icon: "layers",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const promises = [
  { title: "Every answer shows its source", text: "People see where each answer comes from, so they can check it, trust it and act on it." },
  { title: "Your people make the call", text: "AI does the legwork. A named person approves every important decision." },
  { title: "Your data stays inside your walls", text: "We run in your cloud or on your premises, with the AI models you choose." },
];

export type Pain = {
  q: string;
  answer: string;
  text: string;
  links: { label: string; href: string }[];
};

// Each leadership concern from the deck's slide 2, paired with the deck's own answer to it
// (slides 3, 4, 7, 9, 10 and 17).
export const pains: Pain[] = [
  {
    q: "We ran the pilots. None made it into daily work.",
    answer: "Start where the value is.",
    text: "We choose the one or two AI uses worth doing, then build a working pilot on your real data, with real users, and measure it against today's baseline. AI in daily work, not in a lab.",
    links: [{ label: "How we engage", href: "/v4#engage" }],
  },
  {
    q: "I can't sign off on answers nobody can check.",
    answer: "Every answer shows its source.",
    text: "People see where each answer comes from, so they can check it, trust it and act on it. Atlas respects each person's access rights and logs every request, so auditors can check too.",
    links: [{ label: "Mentis Atlas", href: "/v4/mentis/atlas" }],
  },
  {
    q: "Our most sensitive data can't leave the building.",
    answer: "Your data stays inside your walls.",
    text: "We run in your cloud or on your premises, with the AI models you choose, inside your security and your sign-in. Sensitive data stays under your control.",
    links: [{ label: "Delivery automation", href: "/v4/mentis/delivery-automation" }],
  },
  {
    q: "Our best people are stuck on repetitive work and old systems.",
    answer: "Less manual work, and no big-bang risk.",
    text: "Hub brings your assistants behind one front door and lets AI finish tasks, with human approval where it matters. Renew moves old systems to a modern stack and proves the results match before you switch.",
    links: [
      { label: "Mentis Hub", href: "/v4/mentis/hub" },
      { label: "Mentis Renew", href: "/v4/mentis/renew" },
    ],
  },
  {
    q: "I can't see what our AI costs, let alone control it.",
    answer: "Keep its cost in plain sight.",
    text: "We choose the right AI model for each job and track usage and cost, so spend stays visible and under control, not a surprise at the end of the quarter.",
    links: [
      { label: "Mentis Hub", href: "/v4/mentis/hub" },
      { label: "Delivery automation", href: "/v4/mentis/delivery-automation" },
    ],
  },
];

export const industries = [
  "Technology & semiconductors",
  "Industrial manufacturing",
  "Financial services",
  "Education",
  "Public sector & civic institutions",
];

export type CaseStatus = "Delivered · In production" | "In delivery" | "Built · Live demo" | "Proposal-stage";

export type Case = {
  id: string;
  sector: string;
  service: string;
  status: CaseStatus;
  metric: string;
  metricLabel: string;
  title: string;
  summary: string;
  tags: string[];
  product?: string; // slug
  photo: StaticImageData;
  alt: string;
  position: string;
};

export const cases: Case[] = [
  {
    id: "hub",
    sector: "Leading AI computing company",
    service: "Mentis Hub",
    status: "Delivered · In production",
    metric: "22 → 1",
    metricLabel: "assistants on one platform, 20,130+ users, ≤750 ms P90",
    title: "Twenty-two assistants, one governed front door.",
    summary:
      "Separate assistants now run across Teams, Slack and web on one platform, with every backend preserved and shared safety rules.",
    tags: ["Agent platform", "Routing", "Governance"],
    product: "hub",
    photo: img.orchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    position: "60% 50%",
  },
  {
    id: "renew",
    sector: "Leading AI computing company",
    service: "Mentis Renew",
    status: "Delivered · In production",
    metric: "100%",
    metricLabel: "scoring parity before any production traffic switched",
    title: "Licensed pipelines rebuilt in the cloud, proven identical first.",
    summary:
      "Scoring pipelines were rebuilt as cloud-native services and run side by side with the old ones. About $20K a year in license cost was removed.",
    tags: ["Modernization", "Parity testing", "Cloud-native"],
    product: "renew",
    photo: img.datacentre,
    alt: "A quiet data-centre aisle lined with server racks and cabling",
    position: "50% 50%",
  },
  {
    id: "atlas",
    sector: "Leading AI computing company",
    service: "Mentis Atlas",
    status: "Delivered · In production",
    metric: "3",
    metricLabel: "knowledge assistants answering with citations",
    title: "Answers across bug data, programs, email and meetings, each with its source.",
    summary:
      "Three knowledge assistants in production answer across bug data, program documents, email, meeting transcripts and customer requirements.",
    tags: ["Knowledge", "Citations", "Access control"],
    product: "atlas",
    photo: img.office,
    alt: "People working at desks in a large open-plan office",
    position: "60% 50%",
  },
  {
    id: "education",
    sector: "Education",
    service: "Learning platform",
    status: "In delivery",
    metric: "1 login",
    metricLabel: "for nine roles across learning, school and alumni systems",
    title: "A 60-year-old school that ran on paper, now on one open-source platform.",
    summary:
      "Students learn and practice with AI tutors, and teachers run their classes in one place. The same platform runs administration and keeps alumni connected. Other schools can adopt it with no per-seat license fees.",
    tags: ["AI tutors", "Open source", "School management"],
    photo: img.education,
    alt: "Students working on laptops in a bright university study hall",
    position: "40% 50%",
  },
  {
    id: "civic",
    sector: "Cultural district",
    service: "Mentis Voice",
    status: "Built · Live demo",
    metric: "10+",
    metricLabel: "museums, gardens, orchestras and universities in one conversation",
    title: "Scan a code, say what you'd like to do, get a personal itinerary.",
    summary:
      "Voice and chat event discovery with persona detection and cached answers in under a second. Working software, not yet client delivery.",
    tags: ["Voice AI", "Civic", "Live demo"],
    product: "voice-hr",
    photo: img.civic,
    alt: "Visitors using self-service kiosks in a bright public lobby",
    position: "40% 50%",
  },
  {
    id: "workforce",
    sector: "Regional workforce",
    service: "Data & AI platform",
    status: "Proposal-stage",
    metric: "120 days",
    metricLabel: "pilot path. Targets, not results: ≥95% of claims cited to a source",
    title: "One trusted view of a region's labor demand, supply and outcomes.",
    summary:
      "A fully specified pilot design in active proposal development: three analytic views and an AI Navigator that answers from the same data. Not delivered work.",
    tags: ["Pilot targets", "Navigator", "People approve every step"],
    photo: img.workforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    position: "50% 50%",
  },
];

export const proofBar = [
  { value: 100, tail: "%", label: "scoring parity before a system was switched", tag: "Discipline" },
  { value: 3, tail: " years", label: "one client has kept us on, with our engineers inside its own teams", tag: "Trust" },
  { value: 20130, tail: "+", label: "users on one shared agent platform, measured in production", tag: "Scale" },
  { value: 22, tail: "", label: "assistants, each grounded in a different enterprise system", tag: "Breadth" },
];

export const steps = [
  {
    no: "01",
    title: "Discover",
    time: "Typically about 2 weeks",
    text: "Choose the one or two AI uses worth doing. Check the data, the risks and who will use it.",
    get: "A business case and a plan",
  },
  {
    no: "02",
    title: "Prove",
    time: "Typically 6–8 weeks",
    text: "Build a working pilot on your real data, with real users.",
    get: "Results measured against today's baseline",
  },
  {
    no: "03",
    title: "Scale",
    time: "At your pace",
    text: "Roll out to more teams and connect more systems.",
    get: "AI in daily work, not in a lab",
  },
  {
    no: "04",
    title: "Hand over",
    time: "Your choice",
    text: "We run and improve it for you or train your team to own it.",
    get: "A system your team understands",
  },
];

// Ticks on the "what you have so far" card once each step is reached.
export const doneItems = [
  "Use cases chosen, risks checked",
  "A business case and a plan",
  "A working pilot on your real data",
  "Results measured against today",
  "AI in daily work",
  "Handed over, run by you or by us",
];

export const why = [
  { icon: "users", title: "Senior team throughout", text: "The people who scope the work are the people who build it." },
  { icon: "check", title: "Production, not demos", text: "More than 11,000 users already work with what we've built." },
  { icon: "layers", title: "Ready-made accelerators", text: "Our Mentis toolkit gives you a faster, safer start." },
  { icon: "shield", title: "Inside your security", text: "Your cloud, your sign-in, your rules." },
  { icon: "target", title: "Measured against today", text: "We prove the value before anything scales." },
  { icon: "swap", title: "No lock-in", text: "Open standards and your choice of AI models." },
];

export const footerNav = [
  {
    title: "Mentis products",
    links: products.map((p) => ({ label: p.name, href: `/v4/mentis/${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Case studies", href: "/v4#work" },
      { label: "How we engage", href: "/v4#engage" },
      { label: "Why BanjuBits", href: "/v4#why" },
      { label: "Start a project", href: "/v4#start" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];
