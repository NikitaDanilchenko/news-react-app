import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // Этот путь будет проксироваться
        target: 'https://api.currentsapi.services/v1/',  // Целевой URL
        changeOrigin: true,  // Изменяет источник запроса на целевой домен
        rewrite: (path) => path.replace(/^\/api/, ''),  // Перезаписывает путь
      },
    }
  }
})
