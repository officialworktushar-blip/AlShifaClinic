# Al Shifa Cupping Therapy – Site Editing Guide

Plain HTML/CSS/vanilla JS, no build tools. Edit the files directly with any text
editor, or ask an AI to make the same changes. The four pages share everything:
`index.html`, `about.html`, `services.html`, `contact.html` plus `css/style.css`
and `js/main.js`.

---

## 1. Phone number

Search for `970007498` across the four HTML files. It appears in these forms:

| What | How to change |
| --- | --- |
| Click-to-call buttons `href="tel:+919700007498"` | Replace `919700007498` with the new number as international digits (country code first, no `+` in the `tel:` value) |
| Displayed text `+91 97000 07498` | Replace with the new display format |
| WhatsApp links `https://wa.me/919700007498` | Replace `919700007498` with the new international digits (WhatsApp needs raw digits only) |
| `var WHATSAPP = '919700007498';` in `contact.html` (appointment form sends the enquiry to WhatsApp) | Same replacement |
| JSON-LD `"telephone": "+91-97000-07498"` in the `<head>` of **each** page | Keep the catalog format `+country-city-number` |

Quickest safe method: a find-and-replace of `970007498` → `9<N0...>` in all four
files, then double-check the `+91` display text and the JSON-LD `telephone` line.
The chat/call buttons, footer, contact cards and schema all update in one pass.

---

## 2. Reviews (video carousel on the homepage)

Location: `index.html`, the "What Our Clients Say" section (~lines 180–300).

- **Each slide** is one `<article class="review-card">` containing a
  `<video>` with `<source src="assets/reviews/<file>.webm">` plus the caption
  text and the person's name directly below.
- **To replace a review:** change the `.webm` filename in that slide's src and
  update the caption/name text in the same card.
- **To add a review:** copy a whole `review-card` block, paste it inside the
  carousel track, give it a new `.webm` file, and change the caption. The
  carousel and dots adjust automatically to the total number of slides.
- **Format:** must be `.webm` (the no-support message explains this). Keep files
  in `assets/reviews/`.
- There is no `poster` image; if you want a thumbnail, add
  `<video poster="assets/reviews/thumb.jpg">` to each slide.

---

## 3. Images

All images live in `assets/`.

| Folder | Content |
| --- | --- |
| `assets/logo.png` | Logo / brand mark. Also the OG (share) image and the source for the favicon. |
| `assets/services/` | 11 therapy photos used across pages (note two files have the original spelling typos: `HIJAMA WET BLOOD CUPPING THERAPHY.png`, `Migrane.png` is under treatments). |
| `assets/treatments/` | 24 condition photos used on services.html. |
| `assets/reviews/` | The 6 review video reels. |
| `assets/fonts/` | Self-hosted fonts (do not rename these). |

Rules:

- **To swap a picture:** keep the exact same filename and folder, or update the
  `src="..."` in the HTML to the new file. Then update the `alt="..."` text and
  the `width`/`height` attributes to the new image's real dimensions.
- **Recommended sizes:** therapy/condition cards are 800x533 (displayed at 600 wide);
  team photos are 600x750. Larger files will still work but slow the page down.
- **Team photos — currently missing (placeholders):** drop `man.jpeg` and
  `woman.jpeg` into `assets/`. The grey placeholder panels on the homepage and
  About page disappear automatically once the files exist. This is the only
  place where the filename matters (`assets/man.jpeg` / `assets/woman.jpeg`),
  because it is referenced in `index.html` and `about.html`.

---

## 4. Opening hours, socials and map

- **Opening hours** are placeholders in four places. Search for `Timings` and
  `Opening hours to be added` (footer of each page), then replace with the real
  hours. Example: `Mon–Sat, 9:00 am – 8:00 pm`.
- **Social links:** the footer of the homepage, About and Services pages still
  has `href="#"` for Facebook/Instagram/YouTube. `contact.html` already uses the
  real Instagram and Facebook URLs (see its footer). Replace the `#`s in the
  other three footers with the same URLs, and add the YouTube URL once known.
- **Google Map:** `contact.html` uses a placeholder embed
  (`google.com/maps?q=Hyderabad...`). There is a code comment at that iframe with
  the exact-address embed URL to paste in to point the map at the clinic.
- **Address:** the full address appears in `contact.html` (contact cards /
  directions button) and inside the JSON-LD on every page.

---

## 5. Anything else worth knowing

- **Mobile menu, reveal-on-scroll, carousel, counters, form:** all in
  `js/main.js`, nothing to edit unless you want new behaviour.
- **Style:** shared in `css/style.css`. Colours are CSS variables at the top of
  the file (`--brand`, `--bg`, etc.). Fonts are switched there too.
- **Search engines:** `robots.txt` and `sitemap.xml` list all four pages at
  `https://alshifacuppinghijama.com/`. If you add a new page, add it to
  `sitemap.xml` and keep one `<h1>` per page.
- The site makes **no medical claims** (wording chosen on purpose for safety).
  Please keep any new copy general and non-medical.