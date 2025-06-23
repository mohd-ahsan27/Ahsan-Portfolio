import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./", // only needed if you're deploying to a subfolder
  plugins: [react()],
});
