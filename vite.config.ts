import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Safely expose ONLY the API_KEY to the client-side code, default to empty string if missing
      'process.env.API_KEY': JSON.stringify(env.API_KEY || "")
    }
  }
})