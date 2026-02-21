// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), expressiveCode()],

  experimental: {
    fonts: [
      {
        name: "Fira Sans",
        cssVariable: "--font-fira-sans",
        provider: fontProviders.fontsource(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        // Specify styles that are actually used
        styles: ["normal"],
        // Download only font files for characters used on the page
        subsets: ["latin", "cyrillic"],
        // Download more font formats
        formats: ["woff2", "woff"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        // Download only font files for characters used on the page
        subsets: ["latin", "latin-ext"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
  ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});