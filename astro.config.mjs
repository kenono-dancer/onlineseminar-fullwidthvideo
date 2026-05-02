import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://itxdancer.com',
  integrations: [
    react(), 
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  build: {
    // Inline CSS into <style> tags → eliminates render-blocking <link rel="stylesheet">
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('framer-motion')) return 'framer-motion';
          },
        },
      },
    },
  },
  trailingSlash: 'ignore',
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 4326,
    allowedHosts: true,
  },
});
