import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/microsoftjulius.github.io/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/microsoftjulius.github.io/src/assets/vendors/jquery/jquery-3.4.1.js',
      '/microsoftjulius.github.io/src/assets/vendors/bootstrap/bootstrap.bundle.js',
      '/microsoftjulius.github.io/src/assets/css/meyawo.css',
      '/microsoftjulius.github.io/src/assets/vendors/bootstrap/bootstrap.affix.js',
      '/microsoftjulius.github.io/src/assets/js/meyawo.js'
    ]
    }
  }
});
