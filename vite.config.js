import { defineConfig } from 'vite';
import * as path from 'path';

// 使用相对路径而不是 __dirname
export default defineConfig({
  root: 'example',
  publicDir: 'public',
  server: {
    open: true,
    port: 3000,
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: '../dist-example',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
});