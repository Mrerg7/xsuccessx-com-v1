// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://xsuccessx.com',
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date('2026-07-08'),
    }),
  ],

  // No adapter — pure static for Cloudflare Workers Static Assets
  // Deploy with: npm run deploy
});
