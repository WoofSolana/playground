<template>

    <div>
        <nav class="navbar  p-4 top-0 transform z-40 w-full bg-black">
        <div class="navbar lg:px-8 flex justify-around w-full mx-auto">
            <div class="grid grid-cols-2 grow-0 items-center">
                <img className="py-1" src="~/assets/svg/woof-logo-solana-gradient-final.svg" alt="" width="50" height="50" />
                <img className="pt-5 text-white" src="~/assets/svg/woof.svg" alt="WOOF" width="85" height="20" />
            </div>
                <transition 
                    enter-active-class="transition-opacity ease-linear duration-200"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-linear duration-200"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                >
            <div>
            <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false"  class="z-50"/>
            <Hamburger @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
            </div>
                </transition>
        </div>
    </nav>
<!--     <div class="h-24 lg:h-0"></div> -->
        <nuxt />
        <Footer />
    </div>
</template>

<script>

export default {
  layout: "empty",
  data () {
    return {
    showMobileMenu: false
    }
}
};
</script>

<style scoped>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

