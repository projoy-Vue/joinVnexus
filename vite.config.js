import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  define: {
    __WS_TOKEN__: JSON.stringify(process.env.VITE_WS_TOKEN),
  },
  base: '/joinVnexus/',  // 👈 Ensure this is correct
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

