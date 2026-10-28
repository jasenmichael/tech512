import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['articles/**'],
      },
      schema: z.object({
        seoTitle: z.string().optional(),
        sitemap: defineSitemapSchema(),
      }),
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/**',
      schema: z.object({
        date: z.string(),
        description: z.string(),
        sitemap: defineSitemapSchema(),
      }),
    }),
  },
})
