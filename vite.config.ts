import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MUSEO-NELOVEK-Q-BO-MOKOIT/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        maximumFileSizeToCacheInBytes: 5000000, // 5 MB
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
        globIgnores: ['assets/background.png', 'assets/fondo_museo.svg'],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})
