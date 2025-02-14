// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://v1nte.github.io',
  // base: '/The-Motorsport-Calendar',
  outDir: 'public',
  publicDir: 'static',

  integrations: [tailwind()]
});
