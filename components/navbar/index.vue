<template>
  <div class="bg-black">
    <!-- empty bar -->
    <div
      class="
        bg-secondary
        text-primary
        z-30
        h-10
        shadow
        transition
        duration-500
        ease-in-out
      "
      :class="scrollY ? 'opacity-50' : 'opacity-0'"
    ></div>
    <!-- brand logo link -->
    <div
      class="
        bg-secondaryDark
        opacity-980
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
        rounded-2xl
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
