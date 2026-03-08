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

## Custom domain (e.g. barandursun.com)

### 1. Get a domain

If you don’t have one yet, register it at a registrar, for example:

- **[Namecheap](https://www.namecheap.com)** — often cheap, easy to use  
- **[Cloudflare](https://www.cloudflare.com/products/registrar/)** — at-cost pricing  
- **[Google Domains](https://domains.google)** (now Squarespace Domains)  
- **[Porkbun](https://porkbun.com)** — low prices, simple UI  

Pick something like `barandursun.com` or `kemalbarandursun.com`.

---

### 2. Add the domain in Netlify

1. In **[Netlify](https://app.netlify.com)** go to **Sites** → click your portfolio site.
2. **Domain management** (or **Site configuration → Domain management**).
3. Click **Add custom domain** or **Add domain alias**.
4. Enter your domain (e.g. `barandursun.com`) and follow the prompts.
5. Netlify will show you what DNS records to add (see step 3).

---

### 3. Point your domain to Netlify (DNS)

**Option A — Use Netlify DNS (simplest)**  
1. In Netlify: **Domain management** → your domain → **Set up Netlify DNS** (or **Use Netlify DNS**).  
2. Netlify will show you two **nameservers** (e.g. `dns1.p01.nsone.net` and `dns2.p01.nsone.net`).  
3. At your **registrar** (Namecheap, Cloudflare, etc.): find **DNS / Nameservers** and **replace** the default nameservers with Netlify’s two. Save.  
4. Wait 5–60 minutes. Netlify will then handle DNS and HTTPS for you.

**Option B — Keep DNS at your registrar**  
1. In your registrar’s DNS settings, add an **A record**:  
   - **Host:** `@` (or leave blank for root domain)  
   - **Value / Points to:** `75.2.60.5` (Netlify’s load balancer; confirm in Netlify’s domain screen).  
2. For **www**: add a **CNAME** record:  
   - **Host:** `www`  
   - **Value:** `your-site-name.netlify.app` (your actual Netlify URL).  
3. In Netlify, add both `yourdomain.com` and `www.yourdomain.com` as custom domains so HTTPS works for both.

---

### 4. HTTPS (optional)

Netlify issues free SSL certificates (HTTPS) for custom domains. After DNS is correct, go to **Domain management → HTTPS** and click **Verify DNS configuration** / **Renew certificate** if needed. Once verified, your site will be served over `https://yourdomain.com`.

---

## After deploy

- Share your Netlify/Vercel/GitHub Pages URL (or custom domain) on LinkedIn and in job applications.
- To update the site: change files locally, then either drag-and-drop again (Netlify) or push to Git (if connected).
