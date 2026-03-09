# Kemal Baran Dursun — Portfolio

A one-page portfolio site for job applications and professional presence. Content is filled from your CV. Static HTML/CSS/JS, no build step — easy to host on any domain.

## Quick start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
   Then visit `http://localhost:3000`.

2. **Optional tweaks** in `index.html`:
   - **Contact**: Update LinkedIn and GitHub URLs to your real profile links (e.g. `linkedin.com/in/yourusername`, `github.com/yourusername`).
   - **Projects**: Add `href` links to your project repos or demos (replace `#` on the two project cards).

3. Optional: tweak colors and fonts in `styles.css` (see `:root` at the top).

## Deploying to your domain

- **Netlify / Vercel**: Drag the project folder into the dashboard, or connect your Git repo. Set your custom domain in site settings.
- **GitHub Pages**: Push to a repo, enable Pages in Settings → Pages, choose “Deploy from branch” (e.g. `main` / `root`). Use a custom domain in the same settings.
- **Any static host**: Upload the contents of this folder (including `resume.pdf`) to your web host’s public directory and point your domain there.

## File structure

```
.
├── index.html   # All content and structure
├── styles.css   # Layout and design
├── script.js   # Nav toggle, footer year
├── resume.pdf  # Your CV (included)
└── README.md   # This file
```

## Tips for job applications

- Keep project links up to date (GitHub repos or live demos) so recruiters can see your work.
- When you update your CV, replace `resume.pdf` in this folder with the new file so the site always points to the latest version.
