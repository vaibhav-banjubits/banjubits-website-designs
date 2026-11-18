# Homepage v6 (`/v6`): "Ledger Studio"

A modern, premium concept built to put the work first, with generous spacing. It uses the brand lab's **Ledger** palette: warm paper `#FAF7F0`, warm ink `#1C1917`, saffron `#F0A830` for the one action and details, and deep amber `#9A4F06` for accent text on light. (The first version was petrol green; it was replaced at the user's request.) Headlines and UI are Instrument Sans; each headline gets one Newsreader italic word, rendered with a soft metallic sheen. All styles live in `v6.css`, prefixed `gl-` and scoped under `.gl-root`. Colours read the shared `--t-*` palette-selector tokens, falling back to the values above.

**Sections, in order:**
1. Hero: headline, then a bento stage with the featured engagement (photo card), an outcome ring (100% scoring parity) and a "more recent work" list. A sector ticker closes it.
2. **Selected work**, the centrepiece, on the page's one big dark slab: four large case cards that pin and stack as you scroll, each with its own metric in gilt numerals. They flip image side alternately.
3. Capabilities: a checkerboard bento of four cards (dark, light, light, dark), each with animated line art.
4. Sectors: an expanding image gallery (hover, focus or tap to open a panel), plus chips for the remaining sectors.
5. How we work: a photo banner with the three human gates, a four-step rail that draws itself, and three engagement models (the delivery pod is the dark feature card).
6. Mentis products: dark "metal" cards on a sage band, with tilt, a pointer-lit edge, a sheen sweep and animated emblems.
7. Insights: one lead article and two side articles.
8. Closing: a duotone architecture panel with a gilt ring, then the footer with an oversized wordmark.

**Motion:** words rise into the headline, hero cards stagger in, sections reveal on scroll, figures count up, the outcome ring and step rail draw in, case cards scale and dim as the next one covers them, photos drift with a light parallax, card edges are lit by the pointer, and the line art moves slowly. Everything is progressive (content shows without JavaScript) and is switched off under `prefers-reduced-motion`.

## Before launch

- The logo in `Logo.tsx` is a placeholder: four "bits", one of them gilt.
- Titles, sectors, services, models, products, insights and the four headline figures come from `src/lib/content.ts`. **New draft copy that needs checking** (all in `data.ts` unless noted): case summaries, tags and metric captions (the voice case deliberately has no number: "Human in the loop"), the sector blurbs and tags, the "Best when" and "Best for" lines, the section headlines and ledes, and the closing paragraph in `Closing.tsx`.
- Article, Privacy and Terms links point to `#`.

## Assets

- `src/assets/v6/arch-walker.webp` is Unsplash (Unsplash licence), copied from v4 so v6 does not depend on another version's folder. It is tinted to petrol with `mix-blend-mode: multiply`.
- All other photos are the shared studio imagery in `src/assets/img/`.
- Icons: Lucide (ISC), inlined in `Icon.tsx`. Line art and emblems are custom SVG in `Art.tsx`. Fonts: Instrument Sans and Newsreader via `next/font/google` (OFL).
