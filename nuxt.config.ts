// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // App
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  // Global styles
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/variables.css',
    '~/assets/styles/global.scss',
    '~/assets/styles/typography.scss',
    '~/assets/styles/fonts.scss',
  ],

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  // Imports
  imports: {
    autoImport: false,
  },

  // Components
  components: false,

  // Content
  content: {
    highlight: {
      theme: {
        default: 'vitesse-dark',
      },
    },
  },
})
