import { defineConfig as defineViteConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineViteConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-jkw07-quizgame-adccddtjlp3.ws-eu117.gitpod.io', // Add your host here
      'localhost', // Optionally add localhost if it's not already included
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom', // Simulates DOM in React tests
    setupFiles: './src/setupTests.ts', // You can add setup for tests (e.g., RTL)
  },
  },
);
