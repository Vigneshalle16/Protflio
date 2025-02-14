import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { defineConfig } from "vite";

// Ensures assets load correctly


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: "./", 
})

