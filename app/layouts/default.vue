<script setup lang="ts">
const { scrolled, reduceMotion, scrollTop } = usePageScroll()

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'TECH 512',
  'url': 'https://tech512.com',
  'logo': 'https://tech512.com/logo1.png',
  'foundingDate': '2007',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Elgin',
    'addressRegion': 'TX',
    'addressCountry': 'US',
  },
  // 'telephone': '+15129067113',
}

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organization),
    },
  ],
})
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-background-900 text-onBackgroundDark"
    :class="reduceMotion ? 'motion-off' : ''"
  >
    <SiteNav />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
    <button
      type="button"
      aria-label="Back to top"
      class="bg-primary transform transition-all duration-500 ease-linear text-white rounded-full ring-2 ring-secondaryLight ring-inset font-mono fixed h-12 w-12 text-5xl flex items-center justify-center leading-none bottom-8 md:bottom-16 right-8 md:right-16 z-50"
      :class="scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'"
      @click="scrollTop"
    >
      <span class="translate-y-2">^</span>
    </button>
  </div>
</template>
