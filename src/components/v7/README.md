# Homepage v7 (`/v3`): "Ledger Route"

Built from a reference page the user supplied (a navigation-themed consultancy homepage), minus its hero banner: the page opens straight on the intro headline. It uses the brand lab's **Ledger** palette: warm paper `#FAF7F0` and warm ink `#1C1917`, with Ledger's **deep orange `#C2410C`** (its viz4 swatch; `#E26D3A` in dark mode) as the primary for buttons, accents and fills, at the user's request instead of the saffron CTA. White text on it is 5.2:1. The primary is set in `v7.css` (`--rt-orange`), so it does not follow the palette selector's primary token; paper, ink and surfaces still do. Plus Jakarta Sans throughout. Bright, rounded cards and pill buttons with a circle arrow, as in the reference. All styles live in `v7.css`, prefixed `rt-` and scoped under `.rt-root`; colours read the shared `--t-*` palette-selector tokens and fall back to the Ledger values.

**Sections, in order** (reference section in brackets):
1. Hero (redesigned after the first one, a centred headline over a bento, was rejected): a split layout. Left: a headline whose words rise in, with a hand-drawn orange swash under "production", the lede, CTAs and three proof ticks. Right: an arch of the delivery working-session photo over a solid orange disc, slowly turning orbit rings with satellites, a rotating "PLAN • BUILD • REVIEW • SHIP" badge, and three floating proof cards (a gate approved by a person, "≥95%" cited answers, a Plan → Build → In production mini route). Under it, a dark band of the four headline figures (7→1, ≥95%, 100%, 50k+) counting up, then a sector ticker. The photo and cards are decorative (`aria-hidden`).
2. The problem, on a dark slab: six arrows pulling in different directions (the "growth slows" slab).
3. Four bearings: a compass whose needle swings with scroll, flanked by the four principles (the compass cards).
4. Services: four rows, text + photo, alternating (choose the right path).
5. Comparison table: in-house vs generic vendor vs Banjubits (right guide).
6. Approach: four steps along a drawn, pinned route; a vertical timeline on mobile (how we find direction).
7. Selected work: tabbed case carousel on a dark slab (measurable results).
8. Proof: the figures again plus "what you receive at handover" (replaces the testimonials slot; see below).
9. Tools: an interactive six-question AI readiness check, plus the three Mentis products (practical tools).
10. About: "a simple belief" with the delivery working-session photo.
11. Insights: three articles plus an "All insights" tile.
12. Closing saffron CTA card and the footer with a large wordmark.

## Premium layer (`luxe.css`)

`luxe.css` loads after `v7.css` and overrides it, added when the first pass was judged "a bit simple". Fraunces (the serif the brand lab pairs with Ledger) carries headlines, figures, quotes and the wordmark, with italic orange accent words; Plus Jakarta Sans stays for UI and body. Paper and ink get film grain; dark sections get warm orange light and fine concentric rings; shadows give way to hairlines; sections are numbered ("01 | The problem"); the hero photo and the about photo wear an offset hairline frame; the comparison column is dark with an orange header; service numerals are outlined; case images drift slowly; cards, service rows, products and the readiness check catch the pointer with a soft orange glow (the `rt-lit` class is added in `Motion.tsx`). Ledger's amber `#BD7E0E` appears only as a tiny hairline detail (the progress line), never as a fill.

## Decisions worth knowing

- **No testimonials.** The reference has a ratings and quotes section. There are no real client quotes to use, so it became "Proof, not promises". Add real quotes there once they exist.
- **No client logos.** The logo strip is a ticker of sectors (from `src/lib/content.ts`) instead.
- The page is self-contained: own CSS, own components, nothing imported from another version. Photos come from the shared `src/assets/img/`.

## Before launch

- The logo in `Logo.tsx` is a placeholder (four "bits", one saffron).
- Titles, sectors, services, models, products, insights and the four headline figures come from `src/lib/content.ts`. **Draft copy that needs checking** (all in `data.ts` unless noted): the bearings, the problem-slab text, the comparison table, the approach steps, case summaries and tags, the handover deliverables, the readiness questions and their three result bands, the "simple belief" text, and the closing paragraph (`Closing.tsx`).
- The "Meet the team" button points at `#contact`; there is no team section yet. Article, Privacy and Terms links point to `#`.
- The readiness check is indicative only (it says so on the page). It runs entirely in the browser and sends nothing.

## Motion

Reveals on scroll, count-up figures, an outcome ring and route path that draw in, bar growth, a swaying problem diagram, a scroll-driven compass needle, a ticker, and a top progress line. All progressive (content shows without JavaScript) and switched off under `prefers-reduced-motion`.
