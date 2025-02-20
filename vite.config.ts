import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-jkw07-quizgame-adccddtjlp3.ws-eu117.gitpod.io', // Add your host here
      'localhost', // Optionally add localhost if it's not already included
    ],
  },
})
