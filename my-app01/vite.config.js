import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ReactJs/my-app01/'  // Path should match the folder structure
});
