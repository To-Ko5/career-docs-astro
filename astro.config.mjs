import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://to-ko5.github.io',
  base: '/docs',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})
