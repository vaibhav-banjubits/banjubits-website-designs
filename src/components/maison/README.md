# Homepage "Maison" (`/maison`): product-led rebuild

Rebuilt 19 Nov 2026 after the 18 Nov team call ("School & website - updates") and `BanjuBits_Capabilities_Provato_Deck.pptx`. The original serif Maison is backed up in `_backup-v3-maison/components-v3/` at the project root.

**Kept from the original:** the midnight navy + champagne gold + warm ivory palette (still driven by the shared `--t-*` palette tokens, "As built" is unchanged), the pearl-and-orbits hero, glass pill header, gold gradient buttons with chip arrows, numbered section labels (CSS counter), film grain, hairline cards, the self-drawing process road, the coverflow case carousel, slow reveal-on-scroll motion.

**Changed:**
- **Sans-serif only.** Jost (headlines, numbers, wordmark; light weight with a light italic for the gold accent) and Manrope (text, labels). The palette selector's font pairings are deliberately NOT read here.
- **Product-led.** The call said visitors "do not understand what you do", so the six Mentis products are on the first screen (orbiting the pearl, hover to read, click to open) and are the first section, as an index + stage explorer.
- **Honest status labels** on every product (Proven / Partly built / Roadmap) with a legend. Forge is shown as a concept.
- **Fewer, crisper sections:** Hero, Product explorer, Five leadership worries with straight answers, Proof carousel (one photo, one number, one sentence), How we engage (road), Why Banjubits, Book a working session. The old intro bento, "gap", foundations, services accordion, comparison table, insights and belief sections are gone.

## Files
`Hero.tsx` + `HeroOrb.tsx` (client: orbit tags), `Explorer.tsx` + `Mocks.tsx` (tabs, six illustrative interfaces), `Sections.tsx` (products wrapper, worries, proof, approach, why), `Cases.tsx` (carousel), `Footer.tsx` (form + links), `data.ts` (ALL copy and status labels, own copy of the v3 data), `select.ts` (hero/footer ask the explorer to open a product). Own assets in `src/assets/maison/`. Never import across `maison`, `v3`, `v1`.

## Check before launch
- **Status labels are my reading of the deck and the call, not confirmed** (`products[].stage` in `data.ts`).
- Deck figures conflict: 22 assistants / 20,130+ users (slide 9) vs "11,000+ users" (slide 18). The deck is marked Confidential and references are under NDA: clear the figures and the ~$20K saving before public use.
- Product interfaces are illustrations. Product pages (`/mentis/[slug]`, explainer videos) are NOT built yet, as asked.
- The form has no back end: it opens the visitor's email app. Privacy / Terms link to `#`. Route is `noindex`.

## Credits
Photos: AI-generated set (WebP). Icons: Lucide (ISC), inlined in `sprite.ts`. Fonts: Jost, Manrope via `next/font/google` (OFL).
