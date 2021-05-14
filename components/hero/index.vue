<template>
  <div class="h-screen flex flex-col">
    <div class="relative text-onBackgroundDark text-9xl font-black">
      <div class="block absolute w-full">
        <div class="relative">
          <img
            class="absolute w-screen h-screen object-cover"
            src="sample5.jpg"
            alt=""
          />
        </div>
        <div>
          <div class="relative flex flex-col h-screen my-auto pt-40">
            <div class="hero-bg-text -mb-11">TECH</div>
            <div
              class="
                ml-10
                opacity-90
                shadow-inner
                drop-shadow
                text-primary-200 text-9xl
                z-10
              "
            >
              Blazing
              <span class="italic text-accent-700 opacity-95">FAST</span>
              <br />
              search optmized
              <br />
              web sites.
            </div>
            <div></div>
            <div class="hero-bg-text -mt-12">512</div>
            <div class="text-3xl ml-10">
              We engage and drive traffic to meet your true potential.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero-bg-text {
  @apply text-transparent font-bold shadow-inner drop-shadow shadow opacity-95 bg-clip-text bg-gradient-to-tr from-secondaryDark to-primary;
}
</style>
