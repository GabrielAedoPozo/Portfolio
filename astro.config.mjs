// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-plum-omega-80.vercel.app/',
  base: '/Portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
