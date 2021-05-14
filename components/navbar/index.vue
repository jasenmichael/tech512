<template>
  <div
    class="transition duration-500 ease-in-out z-50"
    :class="scrollY ? 'opacity-100 bg-black' : 'opacity-0 bg-transparent'"
  >
    <!-- empty bar -->
    <div
      class="
        text-transparent
        bg-transparent
        z-30
        h-10
        shadow
        bg-clip-content bg-gradient-to-r
        from-secondary
        via-secondary
        to-primary
      "
      :class="scrollY ? 'opacity-50' : 'opacity-0'"
    ></div>
    <!-- brand logo link -->
    <div
      class="
        bg-primary
        w-auto
        absolute
        border border-primary
        h-10
        flex
        items-center
        left-10
        px-6
        -mt-6
        shawow-lg
        text-accent-400
        font-black
        text-2xl
        font-accent
        rounded-sm
      "
    >
      TECH 512
    </div>
    <!-- floating hamburger -->
    <div
      class="
        z-50
        bg-accent-600
        text-onAccent
        w-12
        h-12
        text-center
        absolute
        border border-secondary
        flex flex-col
        items-center
        right-10
        -mt-6
        shawow-lg
        rounded-full
        font-black
        text-xl
      "
    >
      <span class="leading-none text-2xl font-black -mt-1">_</span>
      <span class="leading-none text-2xl font-black -mt-4">_</span>
      <span class="leading-none text-2xl font-black -mt-4">_</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      scrollY: 0,
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      // console.log(event)
      if (process.client) {
        this.scrollY = window.pageYOffset
      }
    },
  },
}
</script>
