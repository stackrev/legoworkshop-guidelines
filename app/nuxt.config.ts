import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  target: 'static', // This will make us full static, without api calls asyncData and fetch.
  ssr: false
})
