# BUILD WORLDS (thecameraroll.net) — About & Video page documentation

Source files (local, Format.com export):
- `/Users/judebartlett/build-worlds/raw-pages/about.html`
- `/Users/judebartlett/build-worlds/raw-pages/video-23.html`

Site: **BUILD WORLDS** — concert photography/videography portfolio by **Alex O'Brien** (Format.com site, "Using Format" footer). Live domain: `https://www.thecameraroll.net`.

Primary nav (all pages): Photo, Video (`/video-23`), Graphic Design (`/graphic-design`), About (`/about`). Home = `https://www.thecameraroll.net`.

---

## 1. ABOUT PAGE

### Full bio (verbatim)

Heading: **About Me**

> My name is Alex O'Brien, I'm 24 and I was brought up in SouthEastern Massachusetts. Since I was a boy, I've asked myself and others around me the question: "If money were no object and you could do anything you wanted with your time, what would you do?" I've always known I wanted to shoot concerts, but for a while, it felt like just a dream. I tried other things, accounting, computer science, but nothing stuck. Once I picked up a camera in 2017, everything started to make sense. Working with artists to help them create worlds for their music to live inside of is where I've found my passion burning. It's one thing to do a one off shoot with a photographer of videographer, but its another thing to build a relationship with them and work together to create something more intentional.

(Typos preserved as in source: "of videographer" should read "or videographer"; "its another thing".)

### Notable Artists Worked with/Shot for

Heading: **Notable Artists Worked with/Shot for**. Exact order as listed in the HTML:

1. The Backseat Lovers
2. Peach Pit
3. Briston Maroney
4. Flipturn
5. Anees
6. Black Joe Lewis and the HoneyBears
7. Shane Guerrette
8. Eli Patterson
9. Rosie
10. Ryley Tate Wilson
11. Joe P
12. Michigander

### Contact form

```
<form data-editable-type="contact-form" id="contact_form_1" class=" email_form"
      name="contact_form_1" action="/13879887/messages" method="POST"
      data-id="266616593">
```

- **Action:** `/13879887/messages`
- **Method:** `POST`

Fields (rendered labels: "Name", "Email", "Message", and a "Send Message" button). Note: fields have **no `placeholder` attribute** — they use `data-validate` for client-side validation. Actual field names differ from the visible labels:

| Visible label | input element | `name` attribute | `data-validate` | type |
|---|---|---|---|---|
| Name | `<input>` | `name` | `name` | text |
| Email | `<input>` | `from` | `email` | email |
| Message | `<textarea rows="8">` | `body` | `body` | textarea |
| Send Message | `<input>` (submit) | `submit` | — | submit (value is empty; label rendered via CSS/markup) |

Hidden inputs included in the form:
- `module_name` = `contact_03`
- `authenticity_token` = (CSRF token, long base64-ish value)
- `subject` = (empty)

### Images on the About page

All images are served from `format.creatorcdn.com` (CDN base id `b04da936-475c-4d03-9036-dc06a8f699fe`). Notable ones:

- **Hero / landscape banner:** `…/web+landscape.png`
- **"Nice to meet you" graphic:** `…/nice+to+meet+you.png` (decorative heading image)
- A grid of artist/portfolio thumbnail images (jpg/jpeg/webp), e.g. `26084.jpg`, `0011930325_25.jpg`, several Spotify-style artist art files (`ab676161…jpeg`), `channels4_profile.jpg`, `unnamed+(7).jpg.webp`, `22700269.jpeg`, and others — roughly a dozen thumbnail images total. These are auto-generated CDN crops, not individually labeled.

> Note: about.html also contains the same Instagram reel `<blockquote>` embed markup found on the video page (the embeds are present sitewide in markup), but they are rendered/used on the Video page.

---

## 2. CONTACT / SOCIAL (sitewide)

Confirmed exact values from the HTML:

| Item | Value | In HTML as |
|---|---|---|
| Phone | **Text me!  (774) 274 - 3078** | plain text (footer) — **no `tel:` link** |
| Email | **camerarollshots@gmail.com** ("Email me!") | plain text (footer) — **no `mailto:` link** |
| Instagram (site) | `https://www.instagram.com/thecameraroll__` | `<a href>` (footer social icon) — handle **@thecameraroll__** |
| Facebook | `http://facebook.com/thecameraroll` | `<a href>` (footer social icon) |
| LinkedIn | `http://linkedin.com/alexobryn` | `<a href>` (footer social icon) |
| Instagram (personal) | **@alexobryn** | appears **only as embed caption text** ("alex o'brien photo video (@alexobryn)") — not a standalone footer profile link |

Notes:
- Facebook and LinkedIn use `http://` (not https) in the markup.
- Phone and email are rendered as plain footer text, NOT clickable links.
- The site's footer social links are exactly three: Instagram (thecameraroll__), Facebook, LinkedIn.

---

## 3. VIDEO PAGE (`video-23.html` → `/video-23`)

The page embeds Instagram Reels via `<blockquote class="instagram-media">` blocks plus the `instagram.com/embed.js` script. **Total: 10 reel embeds.**

Ordered list as they appear in the markup, mapped to the artist from each embed's "A post shared by …" caption:

| # | Reel URL | Shared by (caption) |
|---|---|---|
| 1 | https://www.instagram.com/reel/DOwAFvQDc76/ | Ryley Tate (@its_ryleytate) |
| 2 | https://www.instagram.com/reel/DOuJ5ZRjXOE/ | Ryley Tate (@its_ryleytate) |
| 3 | https://www.instagram.com/reel/DQXhi8HDxtz/ | Shane Guerrette (@shaneguerrette) |
| 4 | https://www.instagram.com/reel/DRIunCIjNPc/ | Eli Patterson (@elipattersonsongs) |
| 5 | https://www.instagram.com/reel/DPum9evASXX/ | Shane Guerrette (@shaneguerrette) |
| 6 | https://www.instagram.com/reel/DPpP_BfEsB7/ | Shane Guerrette (@shaneguerrette) |
| 7 | https://www.instagram.com/reel/DKftyL3ssHB/ | alex o'brien photo video (@alexobryn) |
| 8 | https://www.instagram.com/reel/DKS5OSDNRXe/ | alex o'brien photo video (@alexobryn) |
| 9 | https://www.instagram.com/reel/DKM6dOlNUHI/ | alex o'brien photo video (@alexobryn) |
| 10 | https://www.instagram.com/reel/DKFlGODxRg0/ | (no caption text in embed — author not specified) |

Summary by artist: Ryley Tate Wilson ×2, Shane Guerrette ×3, Eli Patterson ×1, alex o'brien (@alexobryn, the photographer's own account) ×3, unattributed ×1.

The clickable permalink hrefs in the markup carry tracking params, e.g.:
`https://www.instagram.com/reel/DOwAFvQDc76/?utm_source=ig_embed&utm_campaign=loading`
