import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env': process.env,
    },
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/graphql': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
        }
      }
    }
  };
});
