# Gallery Catalog — thecameraroll.net ("BUILD WORLDS" by Alex O'Brien)

Source: Format.com portfolio, theme "Point". Logo text: **BUILD WORLDS** (site name `AlexOBryn`, brand "The Camera Roll").
Site: https://www.thecameraroll.net · Contact: camerarollshots@gmail.com · IG @thecameraroll__

Both pages use `<div class="gallery no-title">` → **captions/titles are hidden**. Each gallery is a
`<div class="asset-grid masonry" id="masonry-gallery">` (Masonry.js v4.2.2). There are **no per-image
alt, title, data-title, or caption strings** in the DOM — items are identified only by the source
filename embedded in the CDN srcset URL, a numeric `data-id` (DOM index) and `data-slide` (lightbox id).
Theme setting `gallery_thumbnails_order: false` / `masonry_order: false`, so the **masonry layout order
is simply the DOM order** below (Masonry flows them left→right into the shortest column; theme uses a
3-column masonry grid, `gallery_thumbnails_grid: 3`).

The `width`/`height` on each item's `<canvas class="image-placeholder">` is the **display aspect-ratio
placeholder** (all scaled to width 550), not the real file size. True file dimensions come from `file`
on the downloaded assets and are listed as "file:".

---

## 1. PHOTO gallery (`/photo` — "Tour Photo and Video")

**25 gallery items**, DOM/masonry order. Files in `assets/images/photo/`.
Naming: `TCR#####.jpg` = straight concert/tour photos (camera-roll exports). Descriptively-named PNGs/JPGs
= edited / composite art (glowy, double-exposure, collage).

| # | data-slide | Filename | File dims | Aspect (placeholder) | Type |
|---|-----------|----------|-----------|----------------------|------|
| 0 | 276611886 | TCR06392.jpg | 2499×3333 | 550×733 | concert photo |
| 1 | 276616692 | TCR05734.jpg | 1784×2379 | 550×733 | concert photo |
| 2 | 276611887 | TCR06397.jpg | 2499×3333 | 550×733 | concert photo |
| 3 | 266938097 | TCR06416.jpg | 2499×2499 | 550×550 (square) | concert photo |
| 4 | 248376179 | TCR05175.jpg | 2499×3124 | 550×688 | concert photo |
| 5 | 272958945 | TCR02609.jpg | 2499×3331 | 550×733 | concert photo |
| 6 | 272958946 | TCR03343-3.jpg | 2249×2999 | 550×733 | concert photo |
| 7 | 248376172 | **take me over glowy.png** | 2499×2499 | 550×550 (square) | **edited / composite art** (glowy) |
| 8 | 256961908 | TCR02404.jpg | 2499×2499 | 550×550 (square) | concert photo |
| 9 | 266619322 | **new collage.jpg** | 1079×1349 | 550×688 | **composite / collage** |
| 10 | 276615258 | **Untitled-5.png** | 1079×1349 | 550×688 | **edited art** (untitled composite) |
| 11 | 276615259 | **madeline blue glowy double exposure.png** | 1079×1349 | 550×688 | **edited / composite art** (double exposure) |
| 12 | 248376175 | TCR03251.JPG | 1368×2047 | 550×823 | concert photo |
| 13 | 272958953 | TCR00596.jpg | 2499×3333 | 550×733 | concert photo |
| 14 | 272958952 | TCR00543.jpg | 2499×3333 | 550×733 | concert photo |
| 15 | 265000951 | TCR04287.jpg | 2499×3124 | 550×688 | concert photo |
| 16 | 270334204 | TCR09851.jpg | 2428×3642 | 550×825 | concert photo |
| 17 | 248376184 | **zack.png** | 2429×3642 | 550×825 | **edited art** (named subject "Zack") |
| 18 | 266588277 | TCR05846.jpg | 2428×3642 | 550×825 | concert photo |
| 19 | 270334208 | TCR09942.jpg | 2428×3642 | 550×825 | concert photo |
| 20 | 266938099 | TCR06248.jpg | 2428×3642 | 550×825 | concert photo |
| 21 | 270334203 | TCR09833.jpg | 2428×3642 | 550×825 | concert photo |
| 22 | 265000957 | TCR04294.jpg | 2499×2499 | 550×550 (square) | concert photo |
| 23 | 248376176 | TCR03381.JPG | 1368×2047 | 550×823 | concert photo |
| 24 | 265000949 | TCR02628.jpg | 2428×3642 | 550×825 | concert photo |

**Composite/edited art (5):** take me over glowy.png, new collage.jpg, Untitled-5.png,
madeline blue glowy double exposure.png, zack.png.
**Straight concert/tour photos (20):** all `TCR#####` files.

Not gallery items (present in `assets/images/photo/` but used elsewhere):
- `thumbnail1.png` (2499×2499) — page **og:image / social-share** thumbnail.
- `little+logo.png` (191×191) — site **favicon / logo**.

---

## 2. GRAPHIC DESIGN gallery (`/graphic-design` — "Graphic Design")

**14 gallery items**, DOM/masonry order. Files in `assets/images/graphic-design/`.
These are band/artist merch designs, posters, tee mockups and single/album art. Artist inferred from
filename where the name is explicit.

| # | data-slide | Filename | File dims | Inferred type | Artist (from filename) |
|---|-----------|----------|-----------|---------------|------------------------|
| 0 | 287683916 | **wild horses hudson freeman.png** | 2499×2499 | single/album art or merch graphic | **Hudson Freeman** ("Wild Horses") |
| 1 | 287644885 | **final front and back mockup.png** | 2499×2499 | tee mockup (front + back) | — |
| 2 | 287646320 | **final white front back.png** | 2499×2499 | tee mockup (white tee, front + back) | — |
| 3 | 287374311 | **no face blue star mockup.png** | 2499×1612 (landscape) | merch/graphic mockup ("blue star") | — |
| 4 | 287776236 | **starworld pastel salmon.png** | 2499×1612 (landscape) | graphic / colorway ("Starworld", pastel salmon) | — (Starworld) |
| 5 | 287374310 | **design 2 mockup.png** | 2499×1612 (landscape) | merch/design mockup (v2) | — |
| 6 | 248376612 | **chop me down tee mockup social.png** | 1199×1499 | **tee mockup** (social crop) | "Chop Me Down" (song/release title) |
| 7 | 248376613 | **dial drunk shirt social mockup broad.png** | 1199×1499 | **shirt mockup** (social) | "Dial Drunk" — Noah Kahan single |
| 8 | 287633810 | **gvp gravity.png** | 2499×2499 | single/album art or graphic | **GVP** ("Gravity") |
| 9 | 248377950 | 364077198_...n.jpg | 1079×1055 | design/merch (Instagram-sourced export) | — (filename is an IG asset id) |
| 10 | 248377400 | 476380736_...jpeg | 1079×1349 | design/merch (Instagram-sourced export) | — (IG asset id) |
| 11 | 266608255 | **worry club bottom lounge flyer v2.png** | 1199×1499 | **gig/show poster (flyer)** | **Worry Club** @ Bottom Lounge (Chicago venue), v2 |
| 12 | 248377401 | 480569434_...jpeg | 1079×1349 | design/merch (Instagram-sourced export) | — (IG asset id) |
| 13 | 248893704 | **autumn drive poster portfolio.png** | 1199×1499 | **poster** (portfolio version) | "Autumn Drive" |

Not gallery items (in `assets/images/graphic-design/` but used elsewhere):
- `briston+maroney+sunflower+graphic.png` (2499×2499) — page **og:image / social-share** image
  (Briston Maroney "Sunflower" graphic). Appears only in `og:image`/`fb_image`, not in the masonry grid.
- `little+logo.png` (191×191) — site favicon/logo.

---

## Recreation notes / totals

- **Photo gallery:** 25 items (20 concert photos + 5 composite/edited pieces).
- **Graphic design gallery:** 14 items (tee/shirt mockups, posters/flyers, single-art graphics).
- Layout: 3-column **Masonry** (`gallery_thumbnails_grid: 3`, style "Masonry", spacing 0), thumbnails
  size "Large". `gallery no-title` → no visible thumbnail captions. Lightbox is a sliding popup
  (`gallery_preview_transition_type: Slide`, fullscreen enabled, dark popup bg `#13131b`).
- **No alt text / titles / captions** exist on any gallery item in the DOM — only filenames, `data-id`
  (DOM order), and `data-slide` (lightbox id). To recreate captions you would need to author them.
- Image source order to reproduce the masonry = the DOM order in the tables above (data-id 0..N).
- Palette/typography hints from theme: background `#010101`/`#13131b`, text `#dae6f0`, accent red
  `#c03737`, selected/menu gold `#ffa300`; logo font `acid-green`, headings `caraque-melted`, body `Indie Flower`.
