// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Staging config: serves at https://najiagul.github.io/personal-website
// until najiagul.com's DNS is switched over. At launch: set site to
// 'https://najiagul.com', remove `base`, and restore public/CNAME
// (see README "Going live").
export default defineConfig({
  site: 'https://najiagul.github.io',
  base: '/personal-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
