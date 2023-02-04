import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      hooks: resolve(__dirname, "src/hooks"),
      pages: resolve(__dirname, "src/pages"),
      assets: resolve(__dirname, "src/assets"),
    },
  },
})
