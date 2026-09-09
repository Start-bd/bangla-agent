import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/use-cases" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(), // e.g. "e-commerce", "restaurant", "retail"
    channel: z.string(), // e.g. "WhatsApp", "Messenger", "SMS"
    publishDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    website: z.string().url(),
    pricing: z.string(), // e.g. "Free", "Freemium", "Paid"
    publishDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides, "use-cases": useCases, tools };
