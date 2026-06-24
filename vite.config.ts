import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/mame/' : '/',
  plugins: [react()],
  server: {
    port: 8000,
    open: true,
    proxy: {
      '/api/explorer': {
        target: 'https://api.etherscan.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/explorer/, '/v2/api'),
      },
    },
  },
})
