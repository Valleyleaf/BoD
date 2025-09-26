import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows access from any network interface
    port: 5173,
    strictPort: true, // Fail if port is already in use
    open: false, // Don't auto-open browser
  },
  //Dunno if I need to keep the above but I am running into VPN issues.
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/',
})
