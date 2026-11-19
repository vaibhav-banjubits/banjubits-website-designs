# Homepage v3 "Deep Harbour" (`/v3`): product-led rebuild

Rebuilt 19 Nov 2026 after the 18 Nov team call ("School & website - updates") and `BanjuBits_Capabilities_Provato_Deck.pptx`. Midnight navy and electric teal on a cool bright page. **Sans-serif only** (Inter Tight + Inter, no serif anywhere; the palette selector's colours apply, its font pairings deliberately do not). Prefix `dh-`, scoped under `.dh-root`. Previous "Maison" version is backed up in `_backup-v3-maison/` at the project root.

## Crisp pass (19 Nov, later)
Feedback: too busy, too much content, heading font disliked. Now one idea per section: short headings, one-line product copy and one number per product (`productCopy` in `data.ts`), no paragraphs in cases, steps or reasons, no explainer-video slot or challenge/what-we-do lists (the long deck copy is still in `data.ts` for the product pages later). Headings switched from Bricolage Grotesque to Inter Tight.

## Polish pass (19 Nov, later)
Logo restored to the original wordmark ("Banjubits" + blinking mint bit); do not change it again. Products section trimmed to name, one line, one number and one small mock-up. Light enhancements only: leadership answers get an icon and selection arrow, steps get outlined numerals, "Why us" sits on a photo slab with glass tiles, the closing section has a night-earth photo.

## What changed and why
The earlier versions were about colour and type. The call said the homepage must be **product-led**, because visitors "do not understand what you do": show the Mentis accelerators, keep the proof strip small, and let the deck anchor the content.

Section order: hero with the six products orbiting a core (hover/focus/tap a product, click to open it) and the three promises, then the **product explorer** (all six, each with challenge / what we do / what changes / proof / illustrative interface / explainer-video slot), what leadership teams tell us and our answer, proof and case studies, how we engage, why us, a 90-minute working session form, footer.

Product pages are NOT built (asked to hold the secondary pages). The explorer carries that content on the one page; product links and the orbit open it.

## Status labels: check these
Not every Mentis product is built. `data.ts` (`products[].stage`) is my reading of the deck and the call, not confirmed:
Atlas, Hub, Renew, Delivery automation = **Proven in delivery** (the capability runs in production for a client; the Mentis package is the reusable version being productised). Voice & HR = **Partly built** (HR is live in our own hiring, Voice is in development). Forge = **Roadmap** (not built; its mock-up is tagged "Concept").
Change them in one place and the whole page follows.

## Before launch
- Deck figures conflict: 22 assistants / 20,130+ users (slide 9) vs "more than 11,000 users" (slide 18). The page uses both as written. Pick one.
- The deck is marked Confidential and references are under NDA: clear the figures and the $20K saving for public use.
- Product interfaces are illustrations. Explainer videos say "coming soon".
- The form has no back end: it opens the visitor's email app. Privacy/Terms point at `#`. Logo is a placeholder "B" mark.
- Photos are the shared AI-generated set in `src/assets/v3/`. Route is `noindex`.

## Logo
The wordmark is the original: "Banjubits" with the small blinking dot (no letter mark). Do not change it again.
