# Homepage v5 (`/v5`): "Ivory & Ink"

A premium, editorial concept. The palette comes from the hero photograph (navy glass, brass mullions, dusk light): ivory paper `#F6F4EF`, midnight ink `#141B2B`, and champagne brass `#A8824C` used only for detailing. Display type is Fraunces at a high optical size; text and UI are Geist. All styles live in `v5.css`, prefixed `lx-` and scoped under `.lx-root`. Colours read the shared `--t-*` palette-selector tokens, falling back to the values above.

**Sections, in order of importance:**
1. Hero: an editorial headline, then a panoramic photo with a featured engagement card.
2. Track record: four count-up figures and a slow sector marquee.
3. **Selected work**, the centrepiece: an interactive case spotlight. The four cases auto-advance every 8 seconds with a progress line. Rotation pauses on hover, has a pause button, is off under reduced motion, and supports arrow-key navigation (ARIA tabs).
4. Capabilities: four framed cards with a pointer-following brass edge light.
5. How we work: a sticky intro next to a four-step timeline whose rail fills as you scroll. Three engagement models follow.
6. Mentis products: the page's one dark band, with animated line-art emblems.
7. Insights: one lead article and two side articles.
8. Closing CTA panel and footer, with an oversized wordmark.

**Motion:** headline lines rise in, the hero image unmasks and settles, sections reveal on scroll, figures count up, cards lift on hover, and the spotlight crossfades between cases. Everything is disabled under `prefers-reduced-motion`.

## Before launch

- The logo in `Logo.tsx` is a placeholder monogram.
- Titles, sectors, services, stats and products come from `src/lib/content.ts`. **New draft copy that needs checking:** the case summaries, tags and metric captions in `Work.tsx` (in particular, the voice case's "100% of call flows with a human escalation path"), the hero lede variant, the section headlines, the product kickers, the "Best for" lines, and the service CTA labels.
- Article, Privacy and Terms links point to `#`.

## Assets

- `src/assets/v5/facade-dusk.webp` and `hero-towers.webp` are Unsplash (Unsplash licence). They were copied here so v5 does not break when other versions change their own asset folders.
- The other photos are shared studio imagery from `src/assets/img/`.
- Icons: Lucide (ISC), inlined in `Icon.tsx`. Fonts: Fraunces and Geist via `next/font/google` (OFL).
