import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { spawn } from 'node:child_process';
export default defineConfig({
  plugins: [react(), {
    name: 'early-access-service',
    configureServer(server) {
      const executable = process.env.PYTHON || (process.platform === 'win32' ? 'python' : 'python3');
      const child = spawn(executable, ['early-access/server.py'], { stdio: 'inherit', env: { ...process.env, PORT: '4181', HOST: '127.0.0.1' } });
      child.on('error', error => console.error('Early access service could not start:', error.message));
      server.httpServer?.once('close', () => child.kill());
    }
  }],
  server: { host: '0.0.0.0', port: 3000, strictPort: true, proxy: { '/early-access': 'http://127.0.0.1:4181', '/api': 'http://127.0.0.1:4181' } },
  preview: { host: '0.0.0.0' },
});
