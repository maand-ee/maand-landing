import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://maand-ee.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/maand-landing'
});