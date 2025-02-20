import { defineCollection, reference, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				// Add any custom frontmatter properties here if needed
				documents: z.array(z.string()).optional(),
			}),
		}),
		loader: docsLoader(),
	}),
};
