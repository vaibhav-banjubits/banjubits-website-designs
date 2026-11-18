# Homepage v4 "Atelier" (`/v4`)

An editorial, consultancy-grade concept. Warm ivory paper, ink and one terracotta accent; Instrument Serif for display and Geist for text; sharp edges, hairline rules, numbered section heads and black-and-white architectural photography. Styles live in `v4.css`, prefixed `sg-` and scoped under `.sg-root`. Colours and fonts read the shared `--t-*` tokens from the palette picker, with the Atelier values as fallbacks.

**Sections:** (00) hero with masked headline, rotating badge and full-bleed photo; outcome ledger; (01) studio statement and sector marquee; (02) capabilities index (rows invert to ink on hover and reveal a photo); (03) the production gap; (04) principles I–IV; (05) selected work as editorial spreads (photos turn to colour on hover); (06) comparison; (07) engagement models; (08) Mentis products; (09) journal index; (10) closing statement; footer with a large serif wordmark.

## Shared photos

`src/assets/v4/` is also imported by `/v5`. Check `grep -r "assets/v4" src` before removing anything there.

## Before launch

- The logo in `Logo.tsx` is a placeholder mark.
- Copy comes from `src/lib/content.ts`. These are **new draft copy** and need checking against real engagements: the comparison rows, the four "production gap" forces, the case-study metric lines (especially that 50k+ belongs to Meridian), and the "Best for" lines on the engagement models.
- Article, Privacy and Terms links point to `#`.

## Credits

- Photos: [Unsplash](https://unsplash.com) (Unsplash licence). The hero is the Heydar Aliyev Center.
- Icons: [Lucide](https://lucide.dev) (ISC).
- Fonts: Instrument Serif and Geist via `next/font/google` (OFL).
