# BUILD WORLDS — thecameraroll.net teardown & rebuild kit

Full scan of **thecameraroll.net**, the portfolio of **Alex O'Brien** (aka *AlexOBryn* / "The Camera Roll"),
a concert & tour photographer/videographer from SouthEastern Massachusetts. The site's logo/brand is
**"BUILD WORLDS"** — the idea that he builds visual worlds for an artist's music to live inside of.

Everything here was captured on **2026-06-16** so we can recreate the site in a better-built, better-organized way.

---

## What the live site is

| | |
|---|---|
| **Owner** | Alex O'Brien, 24, SE Massachusetts. Picked up a camera in 2017. |
| **Brand** | "BUILD WORLDS" (logo) / "The Camera Roll" / handle AlexOBryn |
| **Domain** | https://www.thecameraroll.net |
| **Platform** | **Format.com** portfolio builder (theme "Point" v190), Turbolinks, images on `format.creatorcdn.com` |
| **Aesthetic** | Dark, moody, atmospheric — near-black `#010101` bg, icy-blue text `#dae6f0`, custom display fonts |
| **Contact** | Text: (774) 274-3078 · Email: camerarollshots@gmail.com |
| **Social** | IG [@thecameraroll__](https://www.instagram.com/thecameraroll__) & @alexobryn · facebook.com/thecameraroll · linkedin.com/alexobryn |

### ⚠️ The nav only exposes 4 pages — the site is much bigger
The menu links to just **Photo · Video · Graphic Design · About**, but the sitemap reveals **~18 real content pages** reachable only by direct URL (full per-artist tour galleries, commercial work, a separate reels/video page). All of it is captured here. See **`notes/all-pages-catalog.md`** for the complete page-by-page breakdown.

**In the nav:**
- **`/photo`** (+ `/`) — "Tour Photo and Video": masonry gallery, **27 items** (concert/tour shots `TCR#####` + 5 edited composite art pieces). *Curated subset.*
- **`/video-23`** — "Video": **10 embedded Instagram Reels** (Ryley Tate Wilson ×2, Shane Guerrette ×3, Eli Patterson, Alex's own @alexobryn ×3, +1).
- **`/graphic-design`** — masonry gallery, **16 items** — band merch/tee mockups, posters/flyers, single artwork (Noah Kahan "Dial Drunk", Briston Maroney, Worry Club, etc.).
- **`/about`** — Bio + "Notable Artists Worked With" (12 acts) + contact form.

**Hidden (not in nav, found via sitemap) — the bulk of the real portfolio:**
- **Per-artist tour galleries:** `/13866297-shane-guerrette` (29), `/bjl` = Black Joe Lewis & The Honeybears (17), `/ethan-duquette` (16), `/flipturn` (15), `/briston-maroney` (12), `/morrissey-blvd` (band, 10), `/joe-p` (7), `/peach-pit` (4), `/anees` (1 stub).
- **`/home`** — the fuller "Tour Photo and Video" landing (separate from `/photo`).
- **Video:** `/video` (13 YouTube embeds), `/reels` (9 YouTube Shorts), `/commercial` (5 YouTube), `/video-custom` (self-hosted mp4 teasers).
- **Photo:** `/commercial-photo` (8 commercial images).
- **Utility/contact:** `/contact` (phone + email, no form).
- **Drafts / duplicates / empty:** `/home2`, `/attempt`, `/blog`, `/video-2`, `/video-3`, `/commercial-2` — captured but flagged as unfinished.

**Total media captured:** 24 pages of HTML · **184 images (~600 MB)** · 6 video poster frames · **23 YouTube video IDs** · 10 Instagram reels.

---

## Folder layout

```
build-worlds/
├── README.md                  ← you are here (master overview)
├── homepage.html              ← original fetched homepage
├── raw-pages/                 ← HTML of the 5 nav pages (index, photo, video-23, graphic-design, about)
│   └── extra/                 ← HTML of the ~22 hidden/sitemap pages (artist galleries, video, commercial…)
├── assets/
│   ├── images/                ← 184 high-res source images, organized by page (~600 MB)
│   │   ├── photo/  home/  commercial-photo/        ← photo galleries
│   │   ├── 13866297-shane-guerrette/ bjl/ ethan-duquette/ flipturn/
│   │   │   briston-maroney/ morrissey-blvd/ joe-p/ peach-pit/ anees/   ← per-artist tour sets
│   │   ├── graphic-design/                          ← merch/poster/art designs
│   │   ├── about/  contact/                         ← bio/UI images
│   │   └── video*/ commercial*/ reels/              ← video-page thumbnails
│   ├── video-posters/         ← 6 poster frames from self-hosted mp4s (real videos are HLS streams)
│   ├── fonts/                 ← Adobe Typekit CSS (acid-green, caraque-melted, …)
│   └── css/                   ← (reserved)
├── notes/
│   ├── design-system.md       ← FULL design tokens: colors, fonts, layout, lightbox, mobile
│   ├── all-pages-catalog.md   ← EVERY page (incl. hidden ones): type, images, video IDs, drafts
│   ├── galleries.md           ← ordered catalog of the photo & graphic-design nav galleries
│   ├── about-and-video.md     ← verbatim bio, artist list, contact form, IG reel→artist map
│   ├── _youtube_ids.txt       ← all 23 YouTube video IDs
│   └── recreation-plan.md     ← how we rebuild it, better
└── recreation/                ← (the new build goes here)
```

## Design system at a glance (full detail in `notes/design-system.md`)

- **Colors** — bg `#010101` · header bar `#000000` · surface `#13131b` · **primary text `#dae6f0`** (icy blue) · logo white `#ffffff` · nav link `#f3f3f3`, hover `#5f3d00`, active `#ffa300` · brand red `#c03737`.
- **Type** — Logo "BUILD WORLDS" in **acid-green** (51px white). Nav + headings in **caraque-melted** (17px). Body copy in **Indie Flower**. Small labels in **Constantia**. (All Adobe Typekit — license needed, see plan.)
- **Layout** — 3-column **gapless masonry**, large thumbnails, hover border overlay; lightbox slides over a `#13131b` backdrop. Right-aligned non-sticky nav repeated in footer.

## How to use this kit
1. Read this README, then `notes/recreation-plan.md` for the rebuild approach.
2. `notes/design-system.md` = your tokens/Tailwind config. `notes/galleries.md` = your gallery data. `notes/about-and-video.md` = your copy + contact + video data.
3. Source images are in `assets/images/<page>/` ready to drop in / optimize.
4. Build into `recreation/`.
