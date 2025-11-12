// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabrielaedopozo.github.io',
  base: '/Portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
