// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ottowa.netlify.app',
	integrations: [
		starlight({
			title: 'FUCK the O.B.A.',
			sidebar: [
				{
					label: 'Court Documents',
					autogenerate: { directory: 'reference' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				}
			],
		}),
		sitemap(),
	],
});
