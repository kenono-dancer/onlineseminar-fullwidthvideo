import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://itxdancer.com', 
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'ignore',
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 4325,
    allowedHosts: true,
  },
});
