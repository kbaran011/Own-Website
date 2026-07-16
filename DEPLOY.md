# Deployment

The site is a static bundle (HTML/CSS/JS) deployed on **[Railway](https://railway.com)**.

## How it deploys

- The Railway service is connected to the GitHub repo **`kbaran011/Own-Website`**.
- **Every push to `main` triggers a redeploy** automatically.
- `railway.json` selects the Railpack builder, which detects the root `index.html` and serves the files statically (via Caddy). No build command is needed.

## Deploy the local working tree directly

To push the current local files without going through Git:

```bash
railway up
```

## Domains

The custom domains are already configured and live:

- **kemalbarandursun.com** (primary)
- **www.kemalbarandursun.com** (alias)

Domain and DNS management lives in the Railway dashboard under **Service → Settings → Networking**.
