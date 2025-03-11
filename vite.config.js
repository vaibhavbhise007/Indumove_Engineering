import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Separate React into its own chunk
          vendor: ['redux', 'axios'], // Separate third-party libraries
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase limit if needed
  }
});
