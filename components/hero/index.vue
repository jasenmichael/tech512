<template>
  <div class="h-screen flex flex-col -mt-10">
    <div class="relative text-onBackgroundDark text-9xl font-black">
      <div class="block absolute w-full">
        <div class="relative">
          <img
            class="absolute w-screen h-screen object-cover"
            src="sample5.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-row items-center pt-10">
          <div class="relative flex flex-col h-screen pt-20 ml-6">
            <!-- tech -->
            <div class="hero-bg-text -mb-20">TECH</div>
            <!-- hero heading -->
            <div
              class="
                opacity-95
                shadow-inner
                drop-shadow
                text-primary-100 text-9xl
                z-10
              "
            >
              Blazing
              <span class="italic text-accent-600">FAST</span>
              <br />
              search optmized
              <br />
              web sites.
              <!-- hero sub-heading -->
              <div class="text-4xl ml-10 text-accent-600">
                We engage and drive traffic to meet your true potential.
              </div>
            </div>
            <!-- 512 -->
            <div class="hero-bg-text -mt-20">512</div>
          </div>
        </div>
        <!-- hero bottom nav -->
        <div
          class="
            flex
            justify-around
            absolute
            bg-transparent
            w-full
            h-24
            border-accent-200 border
            opacity-50
            items-center
            bottom-0
            mb-10
            text-4xl
            transition
            duration-1000
          "
          :class="scrollY ? 'hidden' : 'block'"
        >
          <div class="border-accent border-l">about</div>
          <div class="border-accent border-l">services</div>
          <div class="border-accent border-l">contact</div>
        </div>
      </div>
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

<style>
.hero-bg-text {
  /* font-size: 180%; */
  @apply text-transparent text-huge font-bold shadow-inner drop-shadow shadow opacity-95 bg-clip-text bg-gradient-to-tr from-secondaryDark to-primary;
}
</style>
