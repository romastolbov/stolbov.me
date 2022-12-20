// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Global styles
    css: [
        '~/assets/styles/normalize.css',
        '~/assets/styles/variables.css',
        '~/assets/styles/global.scss',
        '~/assets/styles/fonts.scss',
    ],

    // Modules
    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],

    // Experimental
    experimental: {
        payloadExtraction: false,
    }
})
