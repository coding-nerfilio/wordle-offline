import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#d7d1cb",
        background_color: "#ece9e6",
        display: "fullscreen",
        scope: "/",
        start_url: "/",
        name: "Offline Wordle",
        short_name: "Offline Wordle",
        description: "Wordle game, totally offline",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "/wordle-offline/",
});
