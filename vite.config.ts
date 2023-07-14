/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import cssAutoImport from 'vite-plugin-css-auto-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteTsconfigPaths(), 
    svgrPlugin(),
    cssAutoImport()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: [
      '**/node_modules/**'
    ],
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: [
        '**/node_modules/**',
        './src/tests/setupTests.ts'
      ]
    }
  }
});