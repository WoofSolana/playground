<template>
  <div class="py-8">
    <transition>
      <div
        class="mobilemen absolute z-50 w-full lg:w-1/4 right-0 top-0 h-screen flex flex-col bg-black text-white font-main overflow-hidden"
      >
        <div class="overflow-y-auto max-w-7xl mx-auto h-full">
          <ul
            class="flex flex-col items-center justify-center h-screen text-2xl transform uppercase font-bold gap-6 md:gap-8 lg:gap-8 p-4 py-8"
          >
            <a
              href="https://woofsolana.io"
              class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"
              ><li class="transform uppercase">HOME</li></a
            >
            <a
              href="https://swap.woofsolana.io"
              class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"
              ><li class="transform uppercase">SWAP</li></a
            >
            <a
              href="https://dex.woofsolana.io"
              class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"
              ><li class="transform uppercase">DEX</li></a
            >
            <a
              href="https://woofers.woofsolana.io"
              class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"
              ><li class="transform uppercase">WOOFERS</li></a
            >
            <a
              href="https://playground.woofsolana.io"
              class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"
              ><li class="transform uppercase">PLAYGROUND</li></a
            >
          </ul>
          <div
            class="buy-woof-button-wrapper flex justify-center items-center text-white"
          ></div>
          <Purplecircle />
          <div
            @click="closeMobileMenu"
            class="absolute top-6 right-6 lg:right-20 transform z-50 cursor-pointer p-4 hover:scale-110 transition-all"
          >
            <img
              src="~assets/svg/closemenu.svg"
              alt="closemenu"
              class="closemenu w-14"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    closeMobileMenu() {
      this.$emit("closeMobileMenu");
    },
  },
};
</script>

<style scoped>
.fixed-position {
  position: fixed;
}
.font-main {
  font-family: "Inter", sans-serif;
}
.hamburger-button {
  padding: 2rem;
}
.mobilemen {
  background: #16171a;
}
.overflow__hidden {
  overflow: hidden;
}

.launch-dex-button {
  background: linear-gradient(
    180deg,
    #1f9db9 -0.71%,
    #2db8d7 50.36%,
    #146f83 100%
  );
}
.nft-market-button {
  background: linear-gradient(180deg, #be19dd 0%, #dc1fff 51.04%, #9e16b7 100%);
}
</style>
