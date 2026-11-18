# Homepage v1 (`/v1`): "Harbour Flow"

Built from `Banjubits-Brand-Direction.html` and the Brand Lab. Follows the doc's recommendation: **04 Deep Harbour** (navy `#0F2D52` + teal), **Manrope headings + Inter body**, the **blueprint-led homepage (concept C)** with B's proof right under the hero and A's product cards further down. Seven sections, one main action ("Start a project").

First pass (drafting-grid, hairline boxes, mono labels) was judged "too basic and mechanical", so this is the second pass: light and bright like before, but with depth, motion and interactive demos. `/v3` was the reference for "modern and impressive" (dark, gold, serif, 3D orb); v1 deliberately shares none of that look.

## Sections

1. **Hero**: drifting aurora, big headline with a slow gradient on the accent words, an industry picker (Enterprise, Banking, Workforce, Education, Civic) that swaps the photo and a glass **draft blueprint card** (workstreams with Live / Pilot / Roadmap pills + a proof figure). The photo stage tilts with the pointer and its floating glass pieces drift at different depths. The pick carries down to the form (`Blueprint.tsx`).
2. **Marquee** of sectors, then the **proof stage**: a deep-navy slab with 7→1, ≥95%, 50k+, 100% counting up (published figures only).
3. **Case showcase**: four cases as a list, one open at a time, big photo with the result on a glass card. Auto-advances every 7 s (paused on hover/focus, off under reduced motion).
4. **What we do**: a bento of three animated illustrations (agents routed through one governed gate, an app with a live chart, a pipeline with human gates) plus a navy "Govern. Ground. Humans decide." tile.
5. **Products** (navy slab): Atlas (Pilot) as an HTML mock where a cited answer writes itself in; Forge (Roadmap) with a **pressable "Approve gate 2"** button. Mentis Interviews gets a line and there is a status legend.
6. **How we deliver**: wide working-session photo, then four steps scrolling past a sticky **Definition of Done** that ticks itself (20% → 100%) as each step reaches the middle of the screen. Three engagement models below.
7. **Start a project**: teal-navy gradient slab with one short form. It sends nothing (concept build) and says so.

Nav follows the doc's proposed menu: Solutions, Case studies, AI demos, Products, About, Start a project.

## Notes

- Self-contained: own CSS (`v1.css`, prefix `hb-`, scoped under `.hb-root`), components and photos in `src/assets/v1/`.
- Colours read the shared `--t-*` palette-selector tokens with Deep Harbour (light) as the fallback.
- Motion is progressive: content shows without JS, and everything is off under `prefers-reduced-motion`.
- `noindex` until it replaces the live page.

## Before launch (draft copy to check)

- Blueprint workstreams and their Live / Pilot / Roadmap labels per industry (`data.ts`). Proof figures are the ones already published; Banking and Civic have no published number so they show "Human in the loop" and "100%".
- Atlas and Forge visuals are illustrative HTML mocks, labelled as such. The doc wants real product screenshots and demo clips.
- "Mentis Interviews" has no status label because none is stated in the doc.
- Logo is a placeholder. Case, product and footer links point to `#start` / `#`. The form needs the lead automation behind it.
- Photos are the shared AI-generated studio set.
