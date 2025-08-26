import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Japanleaning2/', // 设置为您的仓库名称
  build: {
    outDir: 'dist',
  }
})
