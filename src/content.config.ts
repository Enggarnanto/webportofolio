import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    category: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.string().default('Selesai'),
    role: z.string().default('Content Strategy & Production'),
    accent: z.enum(['lime', 'orange', 'violet', 'blue']).default('lime'),
    cover: z.string().optional(),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    galleryFolder: z.string().optional(),
    galleryCount: z.number().int().nonnegative().default(0),
    galleryAlt: z.string().optional(),
    videos: z.array(z.object({
      video: z.string(),
      poster: z.string().optional(),
      title: z.string(),
    })).default([]),
    ads: z.array(z.object({
      image: z.string(),
      alt: z.string(),
      title: z.string(),
      platform: z.string().optional(),
      caption: z.string().optional(),
      url: z.url().optional(),
    })).default([]),
    demo: z.url().optional(),
    github: z.url().optional(),
  }),
});

export const collections = { projects };
