import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.string().default('Selesai'),
    accent: z.enum(['lime', 'orange', 'violet', 'blue']).default('lime'),
    demo: z.url().optional(),
    github: z.url().optional(),
  }),
});

export const collections = { projects };
