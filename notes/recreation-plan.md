# Recreation plan — building BUILD WORLDS, better

Goal: rebuild thecameraroll.net as a faster, cleaner, more intentional site that keeps the dark/atmospheric
"build worlds" feeling but fixes the things Format.com forced on it.

## What's weak about the current (Format.com) site — and what to fix
| Problem on live site | Fix in rebuild |
|---|---|
| Heavy Format theme + Turbolinks + New Relic; slow, bloated DOM | Static/edge-rendered, minimal JS |
| Images served from `creatorcdn` with signed tokens, no real `alt` text | Self-host + `next/image` (or responsive `<img srcset>`), write real alt text → SEO + a11y |
| Phone & email are **plain text**, not clickable | `tel:` / `mailto:` links |
| Galleries have **no captions/titles** (`gallery no-title`) | Optional caption per item (artist, venue, date) — data already scaffolded in `galleries.md` |
| Video page = raw Instagram embeds (slow, tracker-heavy, leaves site) | Lazy-load IG embeds, or better: self-host/Vimeo with lightweight poster + facade |
| Contact form posts to Format's `/messages` endpoint | Real form (Formspree / Resend / a serverless route) |
| `caraque-melted` "bold" has no bold weight in kit (synthesized) | Pick correct weights, or self-host fonts |
| No favicon/OG polish beyond defaults | Proper favicon set, per-page OG images |

## Recommended stack
**Next.js (App Router) + Tailwind + Framer Motion**, deployed on Vercel.
- Matches the user's existing toolchain (other projects are Next.js).
- `next/image` for the 199 MB of photos → automatic responsive/AVIF, huge perf win.
- A masonry via CSS columns or a small lib (e.g. `react-masonry-css`) to match the 3-column gapless look.
- A lightbox (e.g. `yet-another-react-lightbox`) to replace Format's overlay.
- Fonts: license **acid-green** + **caraque-melted** from Adobe Fonts (Typekit) OR substitute close display faces. Indie Flower is free (Google Fonts).

## Page-by-page build
1. **Layout / shell** — near-black bg `#010101`, fixed/transparent top bar with "BUILD WORLDS" logo left, nav right (Photo · Video · Graphic Design · About). Footer repeats nav + clickable contact. Tokens from `design-system.md`.
2. **/ (home)** = Photo gallery — masonry of the 25 photo items (`assets/images/photo/`). Order in `galleries.md`. Lightbox on click.
3. **/video** — grid of the 10 reels (`about-and-video.md` has URL→artist map). Use lite-embed/facade for performance; group by artist optionally.
4. **/graphic-design** — masonry of the 14 design items (`assets/images/graphic-design/`). Consider captions naming the artist/release.
5. **/about** — bio (verbatim in `about-and-video.md`), "Notable Artists" list, working contact form, contact block.

## Suggested improvements beyond a 1:1 copy
- Add **alt text + captions** (artist / song / venue) — content + SEO.
- A real **booking/contact CTA** above the fold ("Build a world for your music").
- **Case studies**: pair a photo set + the graphic design + the reel for one artist (e.g. Shane Guerrette) into one project page — shows the "intentional, relationship-driven" pitch from his bio.
- Performance budget: defer IG embeds, lazy-load below-fold images, preload the two display fonts.
- Accessibility: focus states, keyboard-navigable lightbox, color-contrast check on `#dae6f0`-on-`#010101` (passes) and `#5f3d00` hover (check).

## Assets ready to go
- `assets/images/photo/` — 27 files, up to 2499×3333.
- `assets/images/graphic-design/` — 16 files (some 4000px+).
- `assets/images/about/` — bio/UI images incl. `web+landscape.png` hero, `nice+to+meet+you.png` heading.
- Fonts CSS in `assets/fonts/`. Reel URLs in `about-and-video.md`.
