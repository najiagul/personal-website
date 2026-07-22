// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live config: served at https://najiagul.com via GitHub Pages with a
// custom domain (public/CNAME). Every push to main redeploys.
export default defineConfig({
  site: 'https://najiagul.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
