import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This is the configuration file for Vite.
// It includes plugins for React and Tailwind CSS.
export default defineConfig({
  plugins: [
    react(), // Enables React support
    tailwindcss() // Adds Tailwind CSS integration
  ],
})
