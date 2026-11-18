// Home page copy. Sourced from the live site (lib/siteData.ts, lib/engagements.ts,
// app/LandingPage.tsx). Client work is anonymised to sector; Banjubits' own
// brands (Meridian, Mentis) are named.

import type { StaticImageData } from "next/image";
import caseOrchestration from "@/assets/img/case-01-orchestration.webp";
import caseVoice from "@/assets/img/case-02-voice.webp";
import caseWorkforce from "@/assets/img/industry-workforce.webp";
import caseMeridian from "@/assets/img/industry-education.webp";
import insightProduction from "@/assets/img/insight-01-production.webp";
import insightArchitecture from "@/assets/img/insight-02-architecture.webp";
import insightVoice from "@/assets/img/insight-03-voice.webp";
import svcAi from "@/assets/img/industry-banking.webp";
import svcProducts from "@/assets/img/industry-civic.webp";
import svcCloud from "@/assets/img/closing-datacentre.webp";
import svcData from "@/assets/img/industry-enterprise.webp";

export const email = "coreops@banjubits.com";
export const linkedin = "https://www.linkedin.com/company/banjubits/";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Insights", href: "#insights" },
];

export const sectors = [
  "Financial services",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Logistics & supply chain",
  "Public & civic institutions",
  "Workforce development",
  "Retail & eCommerce",
  "Professional services",
];

export const stats = [
  { value: "7→1", label: "Siloed AI assistants unified behind one governed entry point" },
  { value: "≥95%", label: "AI answers grounded and cited back to source" },
  { value: "50k+", label: "People reached through a multi-institution platform rollout" },
  { value: "100%", label: "Scoring parity validated before a legacy system cutover" },
];

export type CaseStudy = {
  title: string;
  sector: string;
  service: string;
  image: StaticImageData;
  alt: string;
  shape: "tall" | "wide";
};

// Two columns: [0, 2] left, [1, 3] right (offset down).
export const work: CaseStudy[] = [
  {
    title: "Seven siloed assistants, one governed front door.",
    sector: "Global technology company",
    service: "Agent orchestration",
    image: caseOrchestration,
    alt: "Team reviewing a live agent-orchestration dashboard on a wall display",
    shape: "tall",
  },
  {
    title: "Voice AI for first-line banking calls, with human escalation built in.",
    sector: "Financial services",
    service: "Voice AI",
    image: caseVoice,
    alt: "Contact-centre specialist working alongside an AI call console",
    shape: "wide",
  },
  {
    title: "Regional workforce data and cited AI answers in one decision platform.",
    sector: "Workforce development",
    service: "Data & AI platform",
    image: caseWorkforce,
    alt: "Two analysts reviewing a regional workforce dashboard",
    shape: "wide",
  },
  {
    title: "Meridian: alumni, school operations and AI learning on one open-source platform.",
    sector: "Education",
    service: "Product engineering",
    image: caseMeridian,
    alt: "Students working on laptops in a bright university study hall",
    shape: "tall",
  },
];

export type Service = {
  title: string;
  text: string;
  items: string[];
  image: StaticImageData;
};

export const services: Service[] = [
  {
    title: "AI systems",
    text: "Agents, orchestration, voice AI and retrieval, designed around how your teams actually work and governed from the first prototype.",
    items: ["Agent orchestration", "Voice AI", "RAG & knowledge assistants", "AI governance"],
    image: svcAi,
  },
  {
    title: "Digital products",
    text: "Web platforms, portals, APIs and internal tools, built with product thinking and the structure to stay maintainable long after launch.",
    items: ["Web & mobile apps", "APIs & integrations", "Design systems", "Quality engineering"],
    image: svcProducts,
  },
  {
    title: "Cloud & platforms",
    text: "Cloud foundations, release pipelines and observability, so delivery teams stop firefighting and ship on a predictable cadence.",
    items: ["Cloud modernisation", "CI/CD & release controls", "Infrastructure as code", "Observability"],
    image: svcCloud,
  },
  {
    title: "Automation & data",
    text: "Workflow automation, document processing and operational data that removes repetitive handoffs without creating process debt.",
    items: ["Workflow automation", "Document processing", "Edge & IoT data", "Operational dashboards"],
    image: svcData,
  },
];

export const models = [
  {
    name: "Embedded engineers",
    text: "Our engineers join your team and work inside your backlog, tools and release process.",
  },
  {
    name: "Delivery pod",
    text: "A lead and engineers with AI agents that plan, code and test, behind three human gates.",
  },
  {
    name: "Fixed outcome",
    text: "We own delivery to a written Definition of Done, from discovery through handoff.",
  },
];

export const principles = [
  {
    title: "Start with the outcome",
    text: "We map the operational outcome and the workflow that has to change before we choose any technology.",
  },
  {
    title: "Build the review gates in",
    text: "Plan, code-review and deploy gates are part of delivery from day one, not bolted on after the system exists.",
  },
  {
    title: "Keep every change controlled",
    text: "Access, deployment and change decisions stay controlled, reviewable and auditable throughout.",
  },
  {
    title: "Hand it over properly",
    text: "We build for the people who will operate and own the system, with the documentation to match.",
  },
];

export const products = [
  {
    name: "Mentis Atlas",
    text: "A governance, risk and compliance copilot that maps policies, controls and evidence, and answers with citations.",
  },
  {
    name: "Mentis Interviews",
    text: "AI-led interviews that screen at scale, while every hiring decision stays with a person.",
  },
  {
    name: "Mentis Forge",
    text: "An engineering copilot that drives CAD tools through governed steps, with approval at every gate.",
  },
];

export const insights = [
  {
    category: "AI delivery",
    title: "Why most enterprise AI projects fail before production",
    text: "The gap between a demo and a production system is where most AI initiatives stall. Here is how to bridge it.",
    image: insightProduction,
    alt: "Deployment pipeline with passing build and test stages",
  },
  {
    category: "Architecture",
    title: "Designing agent orchestration for enterprise compliance",
    text: "Multi-agent systems need governance from day one. Architecture patterns that hold up at scale.",
    image: insightArchitecture,
    alt: "Hand-drawn service architecture diagram on a whiteboard",
  },
  {
    category: "Voice AI",
    title: "Building voice AI that handles real banking conversations",
    text: "Lessons from deploying conversational AI in regulated financial environments, with human escalation paths.",
    image: insightVoice,
    alt: "Headset beside a screen showing a call audio waveform",
  },
];

export const footerNav = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Approach", href: "#approach" },
      { label: "Insights", href: "#insights" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Mentis Atlas", href: "#products" },
      { label: "Mentis Interviews", href: "#products" },
      { label: "Mentis Forge", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];
