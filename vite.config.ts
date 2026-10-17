import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This is a project site, served from /andrei-portfolio/ on GitHub Pages.
  base: '/andrei-portfolio/',
  plugins: [react()],
})
