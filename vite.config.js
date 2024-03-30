import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global : true,
    enviroment : "jsdom",
    setupFiles : "./test/setup.js"
  }
})
