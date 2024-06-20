import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      // 你可以在这里添加其他选项
    })
  ]
});
