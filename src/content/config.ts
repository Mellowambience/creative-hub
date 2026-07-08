import { defineCollection, z } from 'astro:content';

// ── Project schema (Deliverable 3) ─────────────────────────────────────────
// Single source of truth for every project card, page, and the constellation.
// Add a new .md file in src/content/projects/ to publish a project — no code.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['game', 'ai-agent', 'creative-tool', 'portfolio', 'experiment']),
    status: z.enum(['live', 'prototype', 'concept', 'archived']),
    shortDescription: z.string(),
    longDescription: z.string().optional(),
    techStack: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    screenshots: z.array(z.string()).default([]), // paths under src/assets or absolute URLs
    trailer: z.string().optional(),               // video/GIF url (YouTube, CDN)
    role: z.string(),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
    maturity: z.enum(['shippable', 'playable', 'rough', 'idea']).default('rough'),
    whatILearned: z.string().optional(),
    nextSteps: z.string().optional(),
    featured: z.boolean().default(false),
    hiringRelevance: z.enum(['high', 'medium', 'low']).default('medium'),
    glyph: z.string().default('◈'),
  }),
});

export const collections = { projects };
