import { defineConfig } from 'astro/config';

// GitHub Pages serves from the user/site root, so base is '/'.
// If you later host under a subpath, set base: '/creative-hub/'.
export default defineConfig({
  base: '/',
  site: 'https://mellowambience.github.io',
  prefetch: false,
  compressHTML: true,
});
