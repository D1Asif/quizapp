import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY),
      'process.env.REACT_APP_AUTH_DOMAIN': JSON.stringify(env.REACT_APP_AUTH_DOMAIN),
      'process.env.REACT_APP_PROJECT_ID': JSON.stringify(env.REACT_APP_PROJECT_ID),
      'process.env.REACT_APP_STORAGE': JSON.stringify(env.REACT_APP_STORAGE),
      'process.env.REACT_APP_MESSAGING': JSON.stringify(env.REACT_APP_MESSAGING),
      'process.env.REACT_APP_APP_ID': JSON.stringify(env.REACT_APP_APP_ID),
      'process.env.REACT_APP_DATABASE_URL': JSON.stringify(env.REACT_APP_DATABASE_URL),
      'process.env.REACT_APP_PEXELS_API_KEY': JSON.stringify(env.REACT_APP_PEXELS_API_KEY),
    },
    plugins: [react()],
  }
})
