---
title: How to write a post (this file never publishes)
description: Reference for adding posts to the blog.
pubDate: 2026-07-20
draft: true
---

Files in this folder that start with `_` are ignored by the site — that's why
this one is safe to keep around as a reference.

## Adding a post

1. Create a new `.md` file in this folder. The filename becomes the URL:
   `shipping-fast-breaks-measurement.md` → `najiagul.com/blog/shipping-fast-breaks-measurement/`
2. Start the file with frontmatter:

```md
---
title: Shipping fast breaks measurement first
description: One or two sentences shown on the blog list and in search results.
pubDate: 2026-08-01
---

Your post starts here, in plain markdown.
```

3. Commit and push to `main` — the site rebuilds and deploys automatically.

Set `draft: true` in the frontmatter to keep a post out of the published site
while you work on it.
