import react from "@astrojs/react";
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base:'./dist',
      integrations: [react(), tailwind()]
});