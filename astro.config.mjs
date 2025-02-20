// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
	],
});
