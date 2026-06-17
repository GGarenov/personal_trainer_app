import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.string(),
    category: z.enum(["Training", "Nutrition", "Mindset", "Transformations"]),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
