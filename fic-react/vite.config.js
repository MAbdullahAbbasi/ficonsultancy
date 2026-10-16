import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@emailjs') || id.includes('react-google-recaptcha')) {
              return 'vendor-forms'
            }
            if (id.includes('@fortawesome')) {
              return 'vendor-icons'
            }
            if (id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react'
            }
          }
        },
      },
    },
  },
})
