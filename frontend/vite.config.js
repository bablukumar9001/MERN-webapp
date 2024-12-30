import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true, // Ensure build manifest is generated
  },
  server: {
    proxy: {
      "/api": { // Proxy any request starting with `/api`
        target: "https://mern-webapp-api.onrender.com/" || "http://localhost:5000", // Use env variable or fallback to localhost
        changeOrigin: true, // Change the origin header to the target URL
        secure: false, // Allow self-signed SSL certificates
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix before forwarding to the target
      },
     
    },
  },
});
