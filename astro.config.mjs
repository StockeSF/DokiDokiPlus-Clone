// @ts-check
// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  integrations: [icon({ iconDir: 'src/assets/icons/' }), svelte()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  }
})
