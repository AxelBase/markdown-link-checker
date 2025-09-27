import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// For SPA mode: fallback to index.html for non-prerendered routes
			fallback: '404.html',
			// Pre-render all pages by default
			precompress: true,

    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: '/markdown-link-checker'
    },
    prerender: {
      entries: ['*'],        // ✅ correct location
      handleHttpError: 'warn'
    },
			
		})
	}
};

export default config;