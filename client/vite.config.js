import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
=======
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
    resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
>>>>>>> 12a1e46b50b8f27a652df7ae647e3f492beea958
})
