import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'always',
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
