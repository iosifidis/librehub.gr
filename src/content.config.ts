import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const softwareCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    alternative_to: z.array(z.string()),
    categories: z.array(z.string()),
    website: z.string().url(),
    logo: z.string(),
    license: z.string(),
    description: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  software: softwareCollection,
};
