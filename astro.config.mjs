import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://Starshone-shiyin.github.io';
const base = process.env.BASE_PATH || '/Blog';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
});
