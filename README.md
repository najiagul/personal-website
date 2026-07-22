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

## Staging preview (current state)

The repo is configured for a **staging deploy** at
`https://najiagul.github.io/personal-website` — najiagul.com and the old
Hashnode blog are untouched until you do the launch steps below.

To get the staging URL live (one-time):

1. Merge this branch into `main`.
2. Repo → Settings → Pages → "Build and deployment" → Source:
   **GitHub Actions**.

After that, every push to `main` redeploys automatically via
`.github/workflows/deploy.yml`.

## Going live on najiagul.com (when you're ready)

**1. Switch the repo from staging to the real domain**

- In `astro.config.mjs`: set `site: 'https://najiagul.com'` and delete the
  `base` line.
- Create `public/CNAME` containing exactly one line: `najiagul.com`
- Push to `main`.

**2. Point najiagul.com away from Hashnode**

At your DNS provider (wherever you manage najiagul.com):

- Delete the existing records that point the domain at Hashnode.
- Add four **A records** for the apex (`najiagul.com` / `@`):
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Add a **CNAME record** for `www` → `najiagul.github.io`
- Back in Repo → Settings → Pages, set **Custom domain** to `najiagul.com`
  and tick **Enforce HTTPS** once the DNS check passes (can take up to a
  few hours).

Heads-up: the moment DNS switches, the old Hashnode blog stops being
reachable at najiagul.com.
