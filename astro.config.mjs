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
					items: [
						{ label: 'Federal Lawsuit', slug: 'reference/federal-lawsuit' },
						{ label: 'Supporting Exhibits', slug: 'reference/exhibits' },
						{ label: 'Emergency Motions', slug: 'reference/emergency-motions' },
						{ label: 'State Proceedings', slug: 'reference/state-proceedings' }
					]
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Case Summaries', slug: 'guides/case-summaries' },
						{ label: 'Document Navigation', slug: 'guides/document-navigation' },
						{ label: 'Understanding Exhibits', slug: 'guides/understanding-exhibits' },
						{ label: 'Legal Templates', slug: 'guides/filing-templates' }
					]
				}
			],
		}),
	],
});
