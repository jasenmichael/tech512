// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  site: {
    url: 'https://tech512.com',
    name: 'TECH 512',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  ignore: ['tech512-old/**'],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'TECH 512',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/tech512-old/**'],
      },
    },
  },
})
