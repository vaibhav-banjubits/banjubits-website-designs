# Homepage v8 "Ledger Index" (`/v8`)

Built 19 Nov 2026 from the 18 Nov team call ("School & website - updates", Fireflies) and `BanjuBits_Capabilities_Provato_Deck.pptx`. **Sans-serif only** (Hanken Grotesk). Ledger palette: warm paper, ink and saffron, with Ledger's brown (`#9A4F06`, the `--t-accent` token) as the **primary** (buttons, links, key words). Prefix `ld-`, scoped under `.ld-root`. Own photos in `src/assets/v8/` (copies; never import from another version).

## What the earlier versions were missing
The call's closing message (B Kumar, 41:00 onward): "you're still looking from a typography and a color perspective". What the page must do first is let a visitor understand **what Banjubits does and how it can help**, in seconds, anchored on the deck. Kuba: "reimagine, rationalize and simplify" rather than tweak the same layout. So v8 changes the structure, not just the skin:

1. **Hero says it in one sentence** (deck slide 1) plus a looping picture of the three promises at work: a question answered with its sources, then waiting for a named person to approve.
2. **"Start with the job you need done"**: the six Mentis products entered through the buyer's own words ("Get trusted answers from our documents", "Move off old systems without a big-bang switch"), not product names. Each shows its status honestly.
3. **"How it fits"**: one diagram of what we do. Your systems, the Mentis layer wrapped in the three promises, what your people get. Hover or tab a product to see what it touches.
4. **Proof, demoted but honest**: three numbers and three cases, each labelled what it really is (In delivery / Built · live demo / Proposal stage). B Kumar is "not a fan" of the proof strip, so it sits after the explanation.
5. **How we engage** (deck slide 17) and a 90-minute working-session form that pre-selects the job from the product panel.

Not built, as asked: separate product pages. Each product panel carries "Explainer video · coming soon" for the video explainer the call asked for.

## Status labels: check these
`data.ts` (`products[].stage`) is my reading of the deck and the call, **not confirmed**: Atlas, Hub, Renew, Delivery automation = "Proven in delivery"; Voice & HR = "Partly built" (HR live in our own hiring, Voice in development); Forge = "Roadmap" (not built; its proof is labelled related work). Change a stage in one place and the page follows.

## Before launch
- Deck figures disagree: slide 9 (22 assistants, 20,130+ users) vs slide 18 ("more than 11,000 users"). The page uses slide 9 for Hub only. Pick one.
- Deck is marked Confidential and references are under NDA: clear the figures and the $20K licence saving for public use.
- The AI answer card in the hero is an illustration (labelled). Names in it (Aurora, R. Shah) are invented.
- The form has no back end: it opens the visitor's email app. Privacy/Terms point at `#`. Photos are the shared AI-generated set. Route is `noindex`.
- Accessibility (B Kumar flagged the school site failing a checker): skip link, real tab/tabpanel roles with arrow keys, visible focus, reduced-motion support. Not yet run through an automated checker.
