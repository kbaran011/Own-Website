# Go live with your portfolio

Your site is static (HTML/CSS/JS), so you can host it for free on several platforms. Pick one option below.

---

## Option 1: Netlify (recommended — no Git required)

1. Go to **[netlify.com](https://www.netlify.com)** and sign up (free).
2. On the dashboard: **Sites → Add new site → Deploy manually**.
3. **Drag and drop** your entire project folder (`Own Website`) into the drop zone.
4. Netlify will give you a URL like `random-name-123.netlify.app`. Your site is live.
5. **(Optional)** Add a custom domain: **Site settings → Domain management → Add custom domain**.

**If you use Git later:** Connect the same repo in Netlify; every push to `main` will auto-deploy.

---

## Option 2: Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign up (free).
2. **Add New Project** → **Import** your Git repo, or use **Vercel CLI**:
   ```bash
   npx vercel
   ```
   (If you don’t use Git, run `npx vercel` from inside your project folder and follow the prompts.)
3. You’ll get a URL like `your-project.vercel.app`. Done.

---

## Option 3: GitHub Pages

1. Create a **new repository** on GitHub (e.g. `portfolio` or `username.github.io`).
2. Push your project:
   ```bash
   cd "/Users/barandursun/AI PROJECT/Own Website"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** → folder: **/ (root)** → Save.
4. Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or `https://YOUR_USERNAME.github.io` if the repo is named `username.github.io`).

---

## Before you go live (checklist)

- [ ] **Photo:** Add `assets/photo.png` (your headshot) so the hero image isn’t broken.
- [ ] **Resume:** Add `resume.pdf` to the project folder so “Download Resume” works.
- [ ] Test locally: run `npx serve .` and click all links (nav, projects, contact, resume).

---

## After deploy

- Share your Netlify/Vercel/GitHub Pages URL on LinkedIn and in job applications.
- To update the site: change files locally, then either drag-and-drop again (Netlify) or push to Git (if connected).
