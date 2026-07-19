import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const softwareCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string().min(1),
    alternative_to: z.array(z.string().min(1)),
    categories: z.array(z.string().min(1)),
    website: z.string().url(),
    logo: z.string().refine(
      (s) => s.startsWith('/') || s.startsWith('http'),
      { message: 'Logo must be an absolute path (/) or a full URL (http)' }
    ),
    license: z.string().min(1),
    description: z.string().min(1),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  software: softwareCollection,
};
