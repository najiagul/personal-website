# najiagul.com

Personal site for Najia Gul — fractional product management for AI teams.
Built with [Astro](https://astro.build), styled by hand, Inter self-hosted.
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

## Going live (one-time setup)

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on every
push to `main`. Two things only you can do:

**1. Enable GitHub Pages**

- Repo → Settings → Pages → "Build and deployment" → Source: **GitHub Actions**.
- Merge this branch to `main` (or push to `main`) — the first deploy runs
  automatically. The site appears at `najiagul.github.io/personal-website`
  until the domain is connected.

**2. Point najiagul.com away from Hashnode**

At your DNS provider (wherever you manage najiagul.com):

- Delete the existing records that point the domain at Hashnode.
- Add four **A records** for the apex (`najiagul.com` / `@`):
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Add a **CNAME record** for `www` → `najiagul.github.io`
- Back in Repo → Settings → Pages, set **Custom domain** to `najiagul.com`
  and tick **Enforce HTTPS** once the DNS check passes (can take up to a
  few hours). The `public/CNAME` file in this repo keeps the domain
  attached across deploys.

Heads-up: the moment DNS switches, the old Hashnode blog stops being
reachable at najiagul.com.
