import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with "_" (like _how-to-write-a-post.md) are not published.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
