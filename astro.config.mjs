import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo at /creative-hub/ (project site), so base must match.
export default defineConfig({
  base: '/creative-hub/',
  site: 'https://mellowambience.github.io',
  prefetch: false,
  compressHTML: true,
});
