<template>
<div class="py-8">
    <transition>
            <div class="mobilemen absolute z-50 w-full lg:w-1/4 right-0 top-0 h-screen flex flex-col bg-black text-white  font-main overflow-hidden">
            <div class="overflow-y-auto max-w-7xl mx-auto h-full">
                <ul class="flex flex-col items-center justify-center h-screen text-2xl transform uppercase font-bold gap-6 md:gap-8 lg:gap-8 p-4 py-8">
                    <a href="https://woofsolana.io" class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"><li class="transform uppercase">HOME</li></a>
                    <a href="https://swap.woofsolana.io" class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"><li class="transform uppercase">SWAP</li></a>
                    <a href="https://dex.woofsolana.io" class="text-white text-3xl hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-1"><li class="transform uppercase">DEX</li></a>
                </ul>
                <div class="buy-woof-button-wrapper flex justify-center items-center text-white"></div>
                <Purplecircle />
                <div @click="closeMobileMenu" class="absolute  top-6 right-6 lg:right-20 transform z-50 cursor-pointer  p-4 hover:scale-110	transition-all ">
                    <img src="~assets/svg/closemenu.svg" alt="closemenu" class="closemenu w-14">
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
                this.$emit('closeMobileMenu')
            }
        }

    }
</script>

<style scoped>
 .fixed-position {
    position: fixed;
 }
    .font-main {
        font-family: 'Inter', sans-serif;
    }
    .hamburger-button {
        padding: 2rem;
    }
.mobilemen {
    background: #16171A;
}
.overflow__hidden {
    overflow: hidden;
}
 .buy-woof-button {
        background-image: url('~assets/images/buy-woof-button.png');
        height: 42px;
        width: 160px;
    }
    .launch-dex-button {
        background: linear-gradient(180deg, #1F9DB9 -0.71%, #2DB8D7 50.36%, #146F83 100%);
    }
    .nft-market-button {
        background: linear-gradient(180deg, #BE19DD 0%, #DC1FFF 51.04%, #9E16B7 100%);
    }
</style>