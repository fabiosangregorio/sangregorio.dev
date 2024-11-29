import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    imagetools()
  ],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: 'sass',
        sassOptions: {
          indentedSyntax: true,
          includePaths: [path.resolve(__dirname, 'src/sass')]
        }
      }
    }
  },
  publicDir: '../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}); 