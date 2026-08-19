import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Desactivar explícitamente los sourcemaps en producción por seguridad
    sourcemap: false,
    // Optimización y code-splitting del bundle JS para evitar paquetes gigantes
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion')) {
              return 'vendor-framer-motion'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide'
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            return 'vendor-core'
          }
        },
      },
    },
  },
})
