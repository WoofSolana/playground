<template>
    <body>
        <div class="app container">
            <div class="max-w-xl mx-auto">
                <div class="h-40 lg:h-60"></div>
                <article class="nuxt-content h-screen text-white">
                    <p class="text-xs">Article last updated: {{ formatDate(article.updatedAt) }}</p>
                    <h1 class="text-2xl">{{ article.title }}</h1>
                    <p class="text-base font-light">{{ article.description }}</p>
                    <img :src="article.img" :alt="article.alt" />
                    <nuxt-content :document="article" />
                </article>
            </div>
        </div>
    </body>
</template>



<script>
    export default {

    methods: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        },
            async asyncData({ $content, params }) {
                const article = await $content('articles', params.slug).fetch()
                return { article }
            }
    }
</script>



<style scoped>
body {
    background: rgb(17,4,44);
    background: linear-gradient(180deg, rgba(17,4,44,1) 0%, rgba(63,16,64,1) 100%);
    height: 100%;
    font-family: 'Libre Franklin', sans-serif;
}

.app {
    max-width: 100%;
    overflow: hidden;
}

.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content p {
    margin-bottom: 20px;
}

</style>