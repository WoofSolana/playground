<template>
        <div class="hamburger-button-wrap transform z-50 cursor-pointer">
            <a @click="showMobileMenu" class="cursor-pointer" >
                <img src="~assets/svg/woof-hamburger.svg" alt="" class="hamburger w-10 h-10 hover:scale-110	transition-all">
            </a>
        </div>
</template>






<script>
    export default {
        methods: {
            showMobileMenu () {
                this.$emit('showMobileMenu')
            }
        }
    }
</script>

<style scoped>
    .hamburger-button {
        padding: 2rem;
    }
</style>