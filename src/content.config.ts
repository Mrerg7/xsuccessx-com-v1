import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const creatorGenres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/creator-genres' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    edge: z.string(),
    rank: z.number(),
  }),
});

const proTips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pro-tips' }),
  schema: z.object({
    title: z.string(),
    rank: z.number(),
  }),
});

const platformFeatures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/platform-features' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    rank: z.number(),
  }),
});

export const collections = {
  'creator-genres': creatorGenres,
  'pro-tips': proTips,
  'platform-features': platformFeatures,
};
