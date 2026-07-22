# najiagul.com

Personal site for Najia Gul — fractional product management for AI teams.
Built with [Astro](https://astro.build), styled by hand, with Crimson Pro,
Plus Jakarta Sans, and JetBrains Mono self-hosted via Fontsource.
Single page for now; the blog is a future addition.

## Working on the site

```bash
npm install      # once
npm run dev      # local dev server at localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Adding your photo

Drop an image into `public/` (e.g. `public/najia.jpg`), then open
`src/pages/index.astro`, find the `photo slot` comment in the middle
column, and paste in the `<img>` line shown there.

## Deployment

The site is live at **https://najiagul.com**, served by GitHub Pages with a
custom domain (`public/CNAME`). Every push to `main` redeploys automatically
via `.github/workflows/deploy.yml`.

### DNS (one-time, at the domain registrar)

- Apex `najiagul.com` / `@` — four **A records**:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` — a **CNAME record** → `najiagul.github.io`
- Repo → Settings → Pages → **Custom domain** = `najiagul.com`, with
  **Enforce HTTPS** enabled once the DNS check passes.
