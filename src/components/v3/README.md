# Homepage v3 "Maison" (`/v3`)

A luxury-leaning concept: midnight navy and warm ivory with champagne-gold accents, an editorial serif (Instrument Serif) for headlines, tracked small caps for labels, hairline borders, film grain and slow, considered motion. All styles live in `v3.css`, prefixed `dh-` and scoped under `.dh-root`, so the other homepage versions are unaffected.

**Highlights:** a 3D "armillary" hero orb that tilts with the pointer, numbered section labels (pure CSS counters), cards with a soft pointer-following gold spotlight, a self-drawing process road, a coverflow case-study carousel, tabbed Mentis product mock-ups.

## Palette selector

Colours and fonts read the shared `--t-*` tokens from the palette & type selector, with the gold look as the "As built" fallback. On dark surfaces the accent is the palette's *inverse accent*; on light surfaces it is the palette's *primary* (see the token block at the top of `v3.css`).

## Before launch

- Case-study challenge/direction text, the comparison rows, the belief paragraph and the "Most requested" badge are **new draft copy**; check them against real engagements.
- The Mentis interfaces and hero chips are illustrative, not real product output.
- The newsletter form validates in the browser only; connect it to a mailing-list service.
- Article, Privacy and Terms links point to `#`.
- The route is `noindex` (see `src/app/v3/layout.tsx`); remove that when it replaces the live homepage.

## Credits

Photos: Unsplash (WebP in `src/assets/v3/`). Icons: Lucide (ISC), inlined in `sprite.ts`. Fonts: Instrument Serif, Manrope, JetBrains Mono via `next/font/google` (OFL).
