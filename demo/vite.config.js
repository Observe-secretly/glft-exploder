import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  server: {
    open: true,
    port: 3001
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
});
