# BUILD WORLDS — rebuild

Luxury tour & concert photography site for **Alex O'Bryn**.
Hand-built static site (no build step). Warm black + burnt orange, editorial/magazine layout,
built around the vertical concert imagery.

## View it
```bash
cd ~/build-worlds/recreation
python3 -m http.server 8788
# open http://localhost:8788/
```
Or just double-click `index.html` (works on file://; needs internet for the Google Fonts).

## Stack & design
- **Pure HTML / CSS / JS** — zero dependencies, instant load, easy to deploy (Vercel/Netlify drag-drop).
- **Type**: Fraunces (display), Hanken Grotesk (body), Space Mono (labels) — distinctive, not AI-generic.
- **Palette**: warm near-black `#0b0a08` + burnt orange `#ff5a1f`, cream text.
- **Details**: film-grain overlay, custom orange cursor, scroll reveals, hover-color photos, artist marquee, hover-preview artist index, full lightbox.

## Pages
- `index.html` — hero → selected frames → artists index → motion (YouTube) → about/bio → contact CTA.
- `work.html` — full archive, filter by artist, lightbox.

## Data (all real, from the scan)
- `img/` — 135 optimized photos (9 artist sets), ~81 MB.
- `data.js` — gallery manifest (built from `src-data/galleries.json`).
- Bio, artist roster, phone/email/IG are the real ones. Video tiles use real YouTube IDs.

## Easy tweaks
- Hero photo: `index.html` → `img/selects/tcr06392.jpg`. About photo: `tcr05846.jpg`.
- Colors/fonts: top of `styles.css` (`:root`).
- Video IDs: `VIDS` array in `app.js`.
- Add/replace photos: drop files in `img/<artist>/`, re-run the manifest step.
