<template>
  <div
    class="transition duration-500 ease-in-out z-50"
    :class="scrollY ? 'opacity-100 bg-black' : 'opacity-0 bg-transparent'"
  >
    <!-- empty bar -->
    <div
      class="bg-secondary z-30 h-10 shadow"
      :class="scrollY ? 'opacity-50' : 'opacity-0'"
    >
      yo
    </div>
    <!-- brand logo link -->
    <div
      class="
        bg-accent-600
        w-auto
        absolute
        border border-primary
        h-10
        flex
        items-center
        left-10
        px-4
        -mt-6
        shawow-lg
        text-onPrimary
        font-black
        text-xl
        rounded-1xl
      "
    >
      TECH 512
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
