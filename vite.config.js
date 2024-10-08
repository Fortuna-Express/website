import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js', // Apunta a tu archivo de configuración de PostCSS
  },
});
