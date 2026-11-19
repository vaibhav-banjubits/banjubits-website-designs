# Homepage (`/`): "Harbour Flow", product-led rebuild

Visual language: Deep Harbour (navy + teal), Manrope + Inter, aurora hero, deep-navy slabs, glass and gradients (see `v1.css`). Rebuilt on 19 Nov 2026 as a **product-led** homepage after the 18 Nov team call ("School & website - updates" in Fireflies) and `BanjuBits_Capabilities_Provato_Deck.pptx`.

## What the team asked for (and where it is)

- **Say what we do, in plain words.** Hero: "We build AI into real business work, in a way leadership can trust", the three promises, and a live **product stage** that cycles through the six Mentis products with a small demo each (`Hero.tsx`, `Demos.tsx`).
- **Product-led.** The six accelerators come straight after the hero (`Products.tsx`), each linking to its own page.
- **Each product has its own page** with a demo, an explainer-video slot, challenge / what we do / what changes, proof, and links to the others: `/mentis/[slug]` (`ProductPage.tsx`, `app/(v1)/mentis/[slug]/page.tsx`). Slugs: atlas, hub, renew, forge, voice-hr, delivery-automation.
- **Proof strip demoted.** B Kumar was "not a fan", so it moved below the products, pains and case studies and became "What our engagements prove" (`Proof.tsx`).
- **Not anchored on the Brand Lab kit.** The blueprint-led hero, industry picker, "draft blueprint" card and bento were removed. Structure is the deck's story.
- **Deck anchors the content.** Pains and answer (slide 2), capabilities and accelerators (4-5), per-product challenge/what we do/changes/proof (7-12), case studies incl. education, civic and workforce (13-16), engagement steps (17), why us and industries (18), next step (19).

## Section order

Hero (product stage) → industries ribbon → Mentis products → what we hear from leadership + our answer → case studies (6, each honestly labelled) → what our engagements prove → how we engage (sticky "what you have so far" ticks as you scroll) → why BanjuBits, three promises, industries → start a project (90-minute working session) → footer.

## Status labels: check these

All in `data.ts` (`products[].status` and `statusNote`). They are my reading of the deck plus the Brand Lab, not confirmed by the team:
Atlas **Pilot**, Hub **Live**, Renew **Live**, Forge **Roadmap**, Voice & HR **In development** (HR is live internally, Voice has a live demo), Delivery automation **Live**. Case statuses: delivered / in delivery / built · live demo / proposal-stage (the deck's own wording).

## Before launch

- **Deck figures disagree with each other and with the old site.** Slide 9: 22 assistants, 20,130+ users; slide 18: "more than 11,000 users"; the previously published figure was 7→1 assistants. The site uses slide 9 for Hub and slide 18 for the "why us" line. Pick one and align.
- The deck is marked **Confidential** and says references are under NDA. Check that these figures and the $20K licence saving are cleared for public use.
- Product demos are illustrative HTML (tagged "Illustrative"). The explainer video slots say "coming soon". The doc and the team both want real product screenshots and videos (storytelling, professional, possibly real people).
- The "Start a project" form sends nothing. Footer legal links point at `#`. Logo is a placeholder (another session has since changed it).
- Photos are the shared AI-generated studio set.
- `noindex` was removed when this became the homepage (route group `(v1)`).

## Refinement pass (19 Nov)

- "What we hear from leadership teams" is now a **they-say / we-answer** pairing (`Pains.tsx`): five concerns from the deck's slide 2, each with its own answer panel and links to the relevant product or section; arrow-key navigable. "Why leadership teams choose us" is now an editorial layout (`Why.tsx`): sticky statement and industries on the left, six borderless reasons on the right, and the three promises as a full-width navy band. The earlier white-card grids were replaced because they repeated the product-card look.
- Hero stage tabs are one compact row (icon-only, the active one shows its name), arrow/Home/End keyboard navigation, roving tabindex; demo panel height held steady so the stage no longer jumps.
- Header scroll-spy highlights the section you are in.
- Tighter vertical rhythm; shorter engagement steps; product cards show how well each is evidenced (e.g. "Delivered · In production").
- Proof numbers resized so 20,130+ and "3 years" fit their cards.
- Open Graph metadata and Organization JSON-LD added.
- Removed ~95 dead CSS rules and three unused components (old bento, blueprint card, industry picker context).

## Notes

- Self-contained: `v1.css` (original layout) + `products.css` (product-led additions), prefix `hb-`, scoped under `.hb-root`; photos in `src/assets/v1/`.
- Colours read the shared `--t-*` palette-selector tokens with Deep Harbour (light) as the fallback.
- Motion is progressive and off under `prefers-reduced-motion`. Demos replay on mount; the hero stage auto-advances every 8 s and pauses on hover/focus.
