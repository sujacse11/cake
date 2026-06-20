import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // ADD THIS EXACT LINE (Put your actual GitHub repository name between the slashes)
  base: '/cake/', 
  plugins: [react()],
})