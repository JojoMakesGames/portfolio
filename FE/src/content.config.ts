import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		problem: z.string().optional(),
		approach: z.string().optional(),
		outcome: z.string().optional(),
		metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
		img: z.string().optional(),
		img_alt: z.string().optional(),
		featured: z.boolean().default(false),
	}),
});

const games = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		engine: z.string().optional(),
		jamNumber: z.number().optional(),
		jamTheme: z.string().optional(),
		playUrl: z.string().url().optional(),
		sourceUrl: z.string().url().optional(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { work, games, writing };
