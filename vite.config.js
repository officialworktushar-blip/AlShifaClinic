import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const SPA_ROUTES = ['about', 'services', 'contact']

function spaRouteFallbacks() {
  let outDir = 'dist'

  return {
    name: 'spa-route-fallbacks',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const indexPath = join(outDir, 'index.html')
      if (!existsSync(indexPath)) {
        this.warn('spa-route-fallbacks: index.html not found in build output, skipped')
        return
      }

      copyFileSync(indexPath, join(outDir, '404.html'))

      for (const route of SPA_ROUTES) {
        const routeDir = join(outDir, route)
        mkdirSync(routeDir, { recursive: true })
        copyFileSync(indexPath, join(routeDir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaRouteFallbacks()],
})
