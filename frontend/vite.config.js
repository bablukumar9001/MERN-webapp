import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load environment variables based on the mode (e.g., development or production)
  const env = loadEnv(mode, process.cwd());

  // Log the environment variable for debugging
  console.log("VITE_BASE_URL:", env.VITE_BASE_URL);

  return defineConfig({
    plugins: [react()],
    build: {
      manifest: true, // Ensure build manifest is generated
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL, // Use environment variable for backend URL
          changeOrigin: true, // Change the origin header to the target URL
          secure: false, // Allow self-signed SSL certificates
          rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix before forwarding to the target
        },
        "/clientdata": {
          target: env.VITE_CLIENTDATA_URL || "http://localhost:5000", // Use env variable or fallback
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
