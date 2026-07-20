# najiagul.com

Landing page + blog for Najia Gul — fractional product management for AI teams.
Built with [Astro](https://astro.build), styled by hand (no CSS framework),
fonts self-hosted (Nunito, Karla, Caveat).

## Working on the site

```bash
npm install      # once
npm run dev      # local dev server at localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Writing a blog post

Add a markdown file to `src/content/blog/` — the filename becomes the URL.
See `src/content/blog/_how-to-write-a-post.md` for the frontmatter format
(files starting with `_` never publish). Push to `main` and the site
rebuilds and deploys on its own.

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
