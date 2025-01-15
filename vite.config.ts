import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      // Configuration du plugin `vite-plugin-checker`
      typescript: true, // Active la vérification TypeScript
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint --config eslint.config.js "./src/**/*.{js,jsx,ts,tsx}"', // Commande pour vérifier tous les fichiers TypeScript et React
        dev: {logLevel: ['error']}
      },
    }),
    eslintPlugin({
      formatter: 'stylish',
      eslintOptions: {
        cache: true
      },
    }),
    tsconfigPaths(),
  ],
  envPrefix: 'VITE_',
  server: {
    port: 13370,
    open: true, // Ouvre automatiquement le navigateur lors du démarrage du serveur
  },
  resolve: {
    alias: {
      '~assets': '/src/assets', // Alias pour accéder facilement aux ressources dans src/assets
      '@': path.resolve(__dirname, './src'), // point vers src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/main.scss";`, // Import global du fichier SCSS
      },
    },
  },
  define: {
    /**
     * Variable APP_VERSION pour obtenir la version de l'application
     * Si `sportbet_app_version` n'est pas défini, on utilise `npm_package_version` ou "unknown" en fallback
     */
    APP_VERSION: JSON.stringify(process.env.sportbet_app_version ?? process.env.npm_package_version ?? 'unknown'),
  },
});
