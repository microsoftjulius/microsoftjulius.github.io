import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['//src/assets/vendors/jquery/jquery-3.4.1.js',
      '//src/assets/vendors/bootstrap/bootstrap.bundle.js',
      '//src/assets/css/meyawo.css',
      '//src/assets/vendors/bootstrap/bootstrap.affix.js',
      '//src/assets/js/meyawo.js'
    ]
    }
  }
});
