import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Lee variable para imitar tu "disableHotReload"
const disableHmr = process.env.VITE_DISABLE_HOT_RELOAD === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    // Si quieres desactivar HMR en dev: VITE_DISABLE_HOT_RELOAD=true npm run dev
    hmr: disableHmr ? false : undefined,
  },
})
