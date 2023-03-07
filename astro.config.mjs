import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://6406b3425671d226c8ab63c0--vermillion-mochi-c1369f.netlify.app',
  integrations: [solid()]
});
