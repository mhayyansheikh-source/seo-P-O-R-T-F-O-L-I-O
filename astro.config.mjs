import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.seoustaad.com',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('framer-motion')) return 'motion';
              if (id.includes('gsap')) return 'gsap';
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('hls.js')) return 'hls';
              return 'vendor';
            }
          }
        }
      }
    }
  }
});
