# Homepage v10 "Ledger Prompt" (`/v10`)

Built 19 Nov 2026 from the hero comp you approved ("1 · The prompt is the hero", in `hero-concepts/`). Warm paper, ink and saffron (Ledger) with a peach and saffron aurora, Geist only (**no serif anywhere**). Prefix `st-`, scoped under `.st-root`. Own photos in `src/assets/v10/`. Reads the `--t-*` tokens like the other versions. In the palette picker as V10.

## Sections
1. **Prompt hero** (`Hero.tsx`): "What should AI do for your business?" A real textarea, six job chips, and a response card (steps, sources, honest status, "Talk to us about X"). Click a chip or type your own sentence and press Enter: it matches the closest Mentis accelerator by keyword (`matchProduct` in `data.ts`). Gibberish falls back to Atlas.
2. **What we build** (`Bento.tsx`), rebuilt to match the hero: a centred pill label and heading, then a sideways carousel of six tall tinted cards (one per accelerator). Each has a headline job, a large running demo (answer with citations, routing, parity, a concept scatter for Forge, voice waveform, a Terraform run), a status badge, and "Try it in the prompt", which runs that accelerator in the hero.
3. **Three promises you can test** (`Promises.tsx`): a dark stage for rhythm. Pick a promise on the left; the live demo opens on a large white card on the right (click citations for sources, approve or hold a decision, swap the model while data stays inside your walls). Each promise carries a leadership concern from deck slide 2.
4. **Proof** (a rounded saffron-to-peach card with three numbers, then three white photo cards labelled In delivery / Built · live demo / Proposal stage), **How we engage** (one white card with a stepper whose line draws in as you scroll; deck slide 17), and the **90-minute working-session form** (unchanged), whose topic is pre-selected from the hero.

Product pages are still not built (held). Explainer videos are not in this version.

## Be aware
- **The hero is a scripted preview, not a live model.** It says so under the card. Copy and steps live in `heroScripts` (`data.ts`); names (Aurora, R. Shah) and figures in demos are illustrative. A real model could be wired in later.
- **Status labels are my reading, not confirmed:** Atlas, Hub, Renew, Delivery automation = Proven in delivery; Voice & HR = Partly built; Forge = Roadmap (marked Concept; its hero preview shows the roadmap note). Change `stage` in `data.ts`.
- **Deck figures disagree** (slide 9: 22 assistants / 20,130+ users; slide 18: 11,000+). The page uses 22 assistants only. The deck is marked Confidential and references are under NDA: clear figures and the $20K licence saving before public use.
- The form has no back end (opens the visitor's email app). Privacy/Terms point at `#`. Photos are the shared AI-generated set. Route is `noindex`.
- Accessibility: skip link, labelled textarea, pressed-state chips, aria-live response, visible focus, reduced-motion support. Not yet run through an automated checker.
