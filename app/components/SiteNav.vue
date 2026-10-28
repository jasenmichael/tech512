<script setup lang="ts">
const route = useRoute()
const { loaded, scrolled, menuOpen, scrollToId } = usePageScroll()
const isHome = computed(() => route.path === '/')
const barOn = computed(() => !isHome.value || scrolled.value)
const heroNavOn = computed(() => isHome.value && loaded.value && !scrolled.value)

const links = [
  { id: 'intro', label: 'about' },
  { id: 'services', label: 'services' },
  { id: 'contact', label: 'contact' },
]

const menuLinks = [
  { to: '/about', label: 'About' },
  { to: '/websites', label: 'Websites' },
  { to: '/custom-software', label: 'Custom software' },
  { to: '/articles', label: 'Articles' },
  { to: '/contact', label: 'Contact' },
]

watch(barOn, (on) => {
  if (!on)
    menuOpen.value = false
})

watch(() => route.path, () => {
  menuOpen.value = false
})

function onHeroClick(event: MouseEvent, id: string) {
  if (!isHome.value)
    return
  event.preventDefault()
  scrollToId(id)
}
</script>

<template>
  <header class="sticky top-0 z-50">
    <div
      class="relative transition-all duration-700 ease-out"
      :class="barOn ? 'opacity-100 bg-black' : 'opacity-0 bg-transparent pointer-events-none'"
    >
      <div
        class="text-transparent z-30 h-10 shadow bg-clip-content bg-gradient-to-r from-secondary via-secondary to-primary"
        :class="barOn ? 'opacity-50' : 'opacity-0'"
      />
      <NuxtLink
        to="/"
        class="w-auto absolute h-10 flex items-center left-10 -mt-2 font-black text-2xl"
        aria-label="TECH 512 home"
      >
        <img src="/logo1.png" class="h-20 w-auto rounded-md" alt="TECH 512">
      </NuxtLink>
      <div
        class="z-50 absolute right-10 -mt-6"
        :class="barOn ? 'pointer-events-auto' : 'pointer-events-none'"
      >
        <button
          type="button"
          class="bg-accent-600 text-onAccent w-12 h-12 text-center border border-secondary flex flex-col items-center rounded-full font-black text-xl"
          :aria-expanded="barOn ? menuOpen : undefined"
          :aria-label="barOn ? 'Menu' : undefined"
          :aria-hidden="barOn ? undefined : true"
          :tabindex="barOn ? 0 : -1"
          @click="barOn && (menuOpen = !menuOpen)"
        >
          <span class="leading-none text-2xl font-black -mt-1">_</span>
          <span class="leading-none text-2xl font-black -mt-4">_</span>
          <span class="leading-none text-2xl font-black -mt-4">_</span>
        </button>
        <nav
          v-if="barOn && menuOpen"
          class="absolute right-0 top-14 min-w-56 bg-primary text-onPrimary border border-accent-800 py-2"
          aria-label="Menu"
        >
          <NuxtLink
            v-for="item in menuLinks"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-3 hover:text-secondary"
          >{{ item.label }}</NuxtLink>
        </nav>
      </div>
    </div>

    <div
      v-if="isHome"
      class="overflow-x-hidden absolute bg-transparent w-full items-center top-0 text-4xl transition-all ease-in-out duration-700 z-40"
      :class="scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <hr
        class="mt-2 border-accent-600 transform transition-all duration-1000"
        :class="heroNavOn ? '-translate-x-0' : '-translate-x-full'"
      >
      <nav
        class="flex w-full items-center justify-around transition-all duration-1000 ease-linear"
        :class="heroNavOn ? 'opacity-100' : 'opacity-0'"
        :aria-hidden="heroNavOn ? undefined : true"
        aria-label="Home"
      >
        <a
          v-for="link in links"
          :key="link.id"
          class="hero-nav"
          :href="`/#${link.id}`"
          @click="onHeroClick($event, link.id)"
        >{{ link.label }}</a>
      </nav>
      <hr
        class="border-accent-600 transform transition-all duration-1000"
        :class="heroNavOn ? 'translate-x-0' : 'translate-x-[200%]'"
      >
    </div>
  </header>
</template>
