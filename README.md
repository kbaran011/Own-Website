# Kemal Baran Dursun — Personal Portfolio

A modern, fully static personal portfolio site. No frameworks, no build step — pure HTML, CSS, and vanilla JS.

**Live features:**
- Dark / light mode (persisted via `localStorage`)
- Typing animation cycling through roles in the hero
- Scroll-triggered reveal animations on every section
- Animated stat counters (projects, internships, certifications)
- Custom cursor with trailing follower (desktop only)
- Preloader with initials + progress bar
- Scroll progress bar at the top of the page
- Active nav link tracking based on scroll position
- Vertical timeline for experience
- Project card grid with hover effects
- Responsive mobile nav with hamburger → X animation

---

## Getting started

No install required. Open directly in a browser:

```bash
open index.html
```

Or run a local dev server for proper asset loading:

```bash
npx serve .
# → http://localhost:3000
```

```bash
# Alternative with Python
python3 -m http.server 8000
# → http://localhost:8000
```

---

## File structure

```
.
├── index.html      # All content and markup
├── styles.css      # Design system, layout, animations, dark mode
├── script.js       # Preloader, typing effect, counters, cursor, scroll logic
├── resume.pdf      # CV — linked from the contact section
├── assets/
│   └── photo.png   # Profile photo (used in hero)
└── README.md
```

---

## Customization

### Colors & fonts
All design tokens are in `styles.css` under `:root`. The main accent color is green (`--accent`). To change the palette, update only these variables — nothing else needs to change.

```css
:root {
  --accent:       rgb(22, 125, 19);
  --accent-hover: rgb(18, 105, 15);
  --accent-soft:  rgba(22, 125, 19, 0.10);
  /* ... */
}
```

### Typing phrases
Edit the `phrases` array in `script.js`:

```js
var phrases = [
  "quantitative tools.",
  "data pipelines.",
  "risk models.",
  "financial analytics."
];
```

### Content
All text content is in `index.html`. Sections in order: Hero → About → Experience → Projects → Contact. Each section is a `<section>` tag with a matching `id`.

### Resume
Replace `resume.pdf` in the root folder. The download button in the contact section points to it automatically.

### Profile photo
Replace `assets/photo.png`. The image is displayed at 300 × 300 px in a circular crop — square source images work best.

---

## Deployment

### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to `Deploy from a branch` → `main` / `root`.
4. (Optional) Add a custom domain under the **Custom domain** field.

### Netlify
1. Drag the project folder into [app.netlify.com](https://app.netlify.com) — done.
2. Or connect the GitHub repo for automatic deploys on push.
3. Set your custom domain in **Site settings → Domain management**.

### Vercel
```bash
npx vercel
```
Follow the prompts. Custom domain available in the Vercel dashboard.

### Any static host (cPanel, S3, etc.)
Upload all files (including `assets/` and `resume.pdf`) to the public root of your host.

---

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). The custom cursor is automatically hidden on touch/pointer-coarse devices.

---

## License

Personal use. Not intended for redistribution as a template.
