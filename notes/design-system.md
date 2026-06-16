# BUILD WORLDS — Design System

Reverse-engineered from the locally saved Format.com (theme "Point", `theme_version` 190) portfolio site
**thecameraroll.net** — "BUILD WORLDS" by **Alex O'Brien** (concert / live-music photographer).

Source: embedded theme-settings JSON inside `raw-pages/index.html` (the `"theme":{ … }` object, 145 keys) plus the
Adobe Typekit CSS in `assets/fonts/typekit-*.css`. All values below are exact, copied from that JSON.

The vibe: near-black background, soft pale-blue (`#dae6f0`) body text, hand-drawn "Indie Flower" body copy, two
display Typekit faces (`acid-green` for the logo, `caraque-melted` for headings/menu), and red/amber accents.

---

## 1. Color Palette

Every hex color present in the theme JSON, with role inferred from the key it appears on. Counts = how many times the hex
occurs across the theme settings.

| Hex | Count | Role / Usage |
|-----|------:|--------------|
| `#010101` | 1 | **Page background** (`background_color`) — near-pure black, the dominant canvas. |
| `#000000` | 3 | **Menu background** (`menu_background_color`, `enable_menu_background_color: true`); proofing header overlay color. Pure black header bar over the `#010101` page. |
| `#13131b` | 10 | **Surface / panel color** — very dark blue-black. Used for: `base_background_color`, button fill (`button_color`, `store_button_color`, `proofing_button_color`), menu category dropdown bg (`menu_category_background_color`, `mobile_menu_category_background_color`), gallery lightbox bg (`gallery_popup_background`), gallery thumbnail hover tint (`gallery_thumbnail_hover_color`), gallery up-arrow icon color (`gallery_arrow_up_color`), listing title overlay (`listing_title_overlay_color`). |
| `#dae6f0` | 30 | **Primary text / UI accent** — pale icy blue. The most-used color. Body text (`base_text_color`, `body_typography`, `text_typography`, `small_text_typography`), all headings (`heading_text`, `headline_typography`, `large_heading_text`), form borders/labels, button text & borders, gallery captions & preview text, gallery arrows/close/social icons, scrollbar (`scroller_color`), up-arrow button background (`gallery_arrow_up_background_color`), blog text. |
| `#f3f3f3` | 3 | **Menu link text** (default state) — near-white. `menu_typography`, `mobile_menu_typography`, `submenu_title_typography`. |
| `#ffffff` | 2 | **Pure white** — the "BUILD WORLDS" logo text (`logo_typography`) and gallery thumbnail caption color (`gallery_thumbnail_caption_color`). |
| `#ffa300` | 2 | **Amber — selected/active accent.** Active (selected) menu item color in `menu_typography.selected` and `mobile_menu_typography.selected`. |
| `#5f3d00` | 1 | **Dark amber/brown — menu hover.** `menu_typography.hover.color` — desktop nav link hover. |
| `#c03737` | 5 | **Red — brand accent.** `base_accent_color`; inline link color & hover (`link_typography`); listing caption color (`listing_caption_typography`); blog title hover (`blog_title_typography.hover`). |
| `#f0dada` | 1 | **Soft pink-white** — the footer "post text" ("Text me! … Email me! …") in `post_text_typography`. |
| `#515151` | 1 | **Mid grey** — mobile menu hamburger button color (`mobile_menu_button_color`). |
| `#c0c0c0` | 1 | **Light grey** — social link icon color (`social_links_typography`). |
| `#252525` | 1 | **Near-black grey** — social link hover (`social_links_typography.hover`). |
| `#232323` | 1 | **Near-black grey** — blog caption text (`blog_caption_typography`). |
| `#555555` | 1 | **Grey** — store collection menu text (`store_collection_typography`); its `.selected` state is `#000000`. |

### Practical palette (the ones that matter for the public site)

```
Background      #010101   (page)
Header bar      #000000   (menu background)
Surface/panel   #13131b   (buttons, overlays, lightbox, dropdowns)
Text            #dae6f0   (pale icy blue — body + headings + most UI)
Logo / white    #ffffff
Menu link       #f3f3f3
Menu hover      #5f3d00   (dark amber)
Menu active     #ffa300   (amber)
Brand accent    #c03737   (red — links, listing captions)
Footer contact  #f0dada   (soft pink-white)
```

---

## 2. Typography

### Font families in use

| Family | Source | `tk-` class | Weights loaded | Role |
|--------|--------|-------------|----------------|------|
| **acid-green** | Adobe Typekit (`wao3sjs` / `xux0fgw`) | `.tk-acid-green` | `400` normal (`fvd=n4`) | **Logo only** — "BUILD WORLDS". |
| **caraque-melted** | Adobe Typekit (`erk4ymo`) | `.tk-caraque-melted` | `500` normal (`fvd=n5`) | **Display / headings / nav menu.** Note: theme requests `font-weight:"bold"` for the menu but the only webfont weight loaded is 500. |
| **Indie Flower** | Google-style web font (referenced by name in theme) | — | normal | **Body copy**, captions, form labels, buttons, footer contact text. |
| **Constantia Regular** | System / referenced by name | — | normal | **Social link labels** only (`social_links_typography`). |
| imaginaryfriend-bb | Typekit (`xux0fgw`, class only) | `.tk-imaginaryfriend-bb` | — | Available in kit, not bound to any active theme setting. |
| degular-mono | Typekit (`xux0fgw`, class only) | `.tk-degular-mono` | — | Available in kit, not bound to any active theme setting. |

Typekit account `a=43188201`. The `@font-face` `src` URLs (woff2/woff/opentype) live in the three CSS files under
`assets/fonts/`.

### Exact type specs (from theme JSON)

**Logo** — `logo_typography` (`logo_type_toggle: "text"`, `logo_text: "BUILD WORLDS"`)
- font-family `acid-green`, **font-size 51px**, color **`#ffffff`**, font-weight normal, line-height 1.
- `logo_size: 48`, `mobile_logo_size: 100`, `mobile_logo_font_size: 75`.

**Desktop nav menu** — `menu_typography`
- font-family `caraque-melted`, **font-size 17px**, **font-weight bold**, color **`#f3f3f3`**.
- hover → color **`#5f3d00`**; selected (active page) → color **`#ffa300`**, text-decoration none.

**Mobile nav menu** — `mobile_menu_typography`
- `caraque-melted`, 16px, bold, `#f3f3f3`; selected → `#ffa300`, no underline.

**Submenu / dropdown title** — `submenu_title_typography`
- `caraque-melted`, 14px, normal, `#f3f3f3`.

**Headings**
- `headline_typography` — `caraque-melted` 32px / normal / `#dae6f0` / line-height 1.8.
- `heading_text` — `caraque-melted` 24px / `#dae6f0` / lh 1.8.
- `large_heading_text` — `caraque-melted` 32px / `#dae6f0` / lh 1.1.
- `base_heading_font` — `caraque-melted`, normal.

**Body text**
- `body_typography` — `Indie Flower` **18px** / `#dae6f0` / lh 1.6 / normal.
- `text_typography` — `Indie Flower` 14px / `#dae6f0` / lh 1.6.
- `small_text_typography` — `Indie Flower` 14px / `#dae6f0` / lh 1.6.
- `base_body_font` — `Indie Flower`. `base_font_size: 0` (theme-default scale).

**Inline links** — `link_typography`
- color `#c03737`, underlined; hover same color `#c03737`, underlined.

**Footer contact text** — `post_text_typography`
- `Indie Flower` 20px normal, color `#f0dada`.
- `post_text`: `Text me!&nbsp;&nbsp;(774) 274 - 3078<br/>Email me! camerarollshots@gmail.com`

**Gallery caption** — `gallery_caption_typography`
- `Indie Flower` 14px normal `#dae6f0`; `gallery_caption_h2_font_size: 14`; `gallery_caption_alignment: Center`.

**Listing (collection grid) caption** — `listing_caption_typography`
- `Indie Flower` **32px** / line-height 1.5 / color **`#c03737`** (red).

**Social links** — `social_links_typography`
- `Constantia Regular` 12px normal, color `#c0c0c0`; hover `#252525`.

**Buttons** — `button_typography`: `Indie Flower` 14px `#dae6f0`; fill `#13131b`; border `#dae6f0`; radius 0.

---

## 3. Layout

### Galleries (the photo grids — `/photo`, etc.)

| Setting | Value | Meaning |
|---------|-------|---------|
| `gallery_thumbnails_style` | **Masonry** | Masonry asset-grid (variable-height bricks). |
| `gallery_thumbnails_grid` | **3** | 3 columns. |
| `gallery_thumbnails_size` | **Large** | Large thumbnails. |
| `gallery_thumbnails_space` | **0** | Zero gap between thumbnails (tight, gapless masonry). |
| `gallery_thumbnails_order` | false | Default order (not custom/shuffled). |
| `gallery_thumbnail_overlay_style` | **Border** | Hover reveals a border-style overlay. |
| `gallery_thumbnail_opacity_hover` | 100 | Thumb stays fully opaque on hover. |
| `gallery_thumbnail_hover_color` | `#13131b` | Hover tint color. |
| `gallery_thumbnail_caption_color` | `#ffffff` | Caption text over thumbnails. |
| `gallery_page_thumb_icon_color` | `#dae6f0` | Thumbnail page-icon color. |
| `gallery_header_fade` | false | No header fade-in. |

### Lightbox / image preview (overlay)

| Setting | Value |
|---------|-------|
| `gallery_popup_background` | `#13131b` |
| `gallery_popup_gradient` | true (gradient scrim behind image) |
| `gallery_preview_transition_type` | **Slide** |
| `gallery_preview_change_image_speed` | Normal |
| `gallery_preview_fullscreen` | true |
| `gallery_preview_text_color` | `#dae6f0` |
| `gallery_preview_arrows_color` | `#dae6f0` |
| `gallery_preview_close_color` | `#dae6f0` |
| `gallery_preview_social_icons_color` | `#dae6f0` |
| `show_social_sharing` | true |

### Listing / collection thumbnails (index of galleries)

| Setting | Value |
|---------|-------|
| `listing_thumbnail_style` | Square |
| `listing_thumbnail_size` | Large |
| `listing_thumbnails_space` | 20 |
| `listing_title_position` | Overlay Center |
| `listing_title_overlay_style` | Box |
| `listing_title_overlay_color` | `#13131b` |
| `listing_title_overlay_opacity` | 90 |
| `listing_title_overlay_hover` | true (overlay appears on hover) |
| `listing_title_overlay_dominant_color` | false |
| `listing_header_fade` | false |

### Menu / navigation

- **Nav items** (from rendered HTML, in order): `Photo` → `/photo`, `Video` → `/video-23`,
  `Graphic Design` → `/graphic-design`, `About` → `/about`. Logo "BUILD WORLDS" links home (`/`).
- `menu_alignment`: **Right** (nav sits right of the logo).
- `menu_height`: **Tight**.
- `menu_fixed`: **false** (header scrolls away, not sticky).
- `menu_separator`: None.
- `menu_in_footer`: true (nav repeated in footer).
- `enable_menu_background_color`: true → `menu_background_color` `#000000`.
- `menu_category_background_color`: `#13131b` (dropdown/submenu panels).
- `scroller_color`: `#dae6f0` (custom scrollbar).

### Mobile

| Setting | Value |
|---------|-------|
| `mobile_menu_height` | Short |
| `mobile_menu_alignment` | Center |
| `mobile_menu_spacing` | Tight |
| `mobile_menu_hide_on_scroll` | true |
| `mobile_menu_border` | false |
| `mobile_menu_button_color` | `#515151` (hamburger) |
| `mobile_menu_category_background_color` | `#13131b` |
| `mobile_submenu_visibility` | Collapsed |
| `mobile_logo_size` | 100 |
| `mobile_logo_font_size` | 75 |
| `social_icons_mobile_menu` | true |
| `mobile_social_icons_size` | 16 |

### Page spacing

- `vertical_space`: **19** (vertical rhythm between sections).
- `full_bleed_space`: None.
- `animate_loading`: true (loading animation enabled).

---

## 4. Other Notable Theme Settings

**Transitions / motion**
- Gallery preview transition: **Slide**, speed Normal.
- `animate_loading: true`.
- `gallery_popup_gradient: true`.

**Hover effects**
- Menu link hover → `#5f3d00`; active → `#ffa300`.
- Gallery thumbnail hover → Border overlay, opacity stays 100, tint `#13131b`.
- Listing title overlay appears on hover (Box style, `#13131b` @ 90% opacity).
- Inline link hover stays `#c03737`, underlined.
- Social icon hover → `#252525`.
- Blog title hover → `#c03737`, underlined.

**Borders & radius**
- Buttons: border `#dae6f0`, **border-radius 0** (sharp corners) — same for store & proofing buttons.
- Form border: `#dae6f0`.
- `gallery_arrow_up_border_radius`: 5 (the only rounded element; scroll-to-top button).

**Opacity**
- `gallery_arrow_up_background_opacity`: 100.
- `listing_title_overlay_opacity`: 90.
- `gallery_thumbnail_opacity_hover`: 100.
- `proofing_header_image_overlay_opacity`: 0.

**Up / scroll-to-top button** — `gallery_arrow_up_*`
- background `#dae6f0`, icon `#13131b`, radius 5, opacity 100.

**Social links**
- Style: Icon. Shown in footer (`social_icons_footer: true`) and mobile menu (`social_icons_mobile_menu: true`), not desktop menu (`social_icons_menu: false`).
- icon1 Instagram → https://www.instagram.com/thecameraroll__
- icon2 Facebook → http://facebook.com/thecameraroll
- icon3 LinkedIn → http://linkedin.com/alexobryn
- icon4 / icon5: None.

**Store (e-commerce — present in theme but `has_active_store: false`)**
- `store_columns`: Four; `store_layout_style`: Square; `store_thumbnails_space`: Normal; `store_label_alignment`: Center.
- Labels `caraque-melted` 26px `#dae6f0`; prices `Indie Flower` 16px `#dae6f0`; collection menu `Indie Flower` 32px `#555555` (selected `#000000`).

**Proofing (client galleries — configured but secondary)**
- Thumbnail size Small, layout Grid, spacing 20, grid style Fixed, border true.
- Header overlay color `#000000` at 0% opacity; overlay text `caraque-melted` 80px `#dae6f0`.

**Blog**
- Title `caraque-melted` 28px `#dae6f0` (hover `#c03737` underline); body `Indie Flower` 18px `#dae6f0` lh 1.8; caption `Indie Flower` 14px `#232323`; slideshow color Light.

---

## Quick-reference base tokens

```
base_background_color : #13131b
base_text_color       : #dae6f0
base_accent_color     : #c03737
base_heading_font     : caraque-melted (normal)
base_body_font        : Indie Flower
page background_color : #010101
```
