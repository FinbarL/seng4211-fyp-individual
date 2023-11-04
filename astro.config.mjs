import { defineConfig, sharpImageService, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["stseng4211images.blob.core.windows.net"],
    service: squooshImageService(),
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), vue()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      sizes: [250, 500],
    },
  }),
});