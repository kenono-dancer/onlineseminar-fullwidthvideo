import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://itxdancer.com',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'ignore',
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 4326,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
