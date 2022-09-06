import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  target: 'static',
  ssr: false,
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.css'],
  build: {
    transpile: ['vuetify']
  },
  plugins: ['~/plugins/vuetify.ts'],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  router: {
    base: '/legoworkshop-guidelines'
  },
  publicRuntimeConfig: {
    BASE_URL: '/legoworkshop-guidelines',
  },
  app: {
    baseURL: '/legoworkshop-guidelines',
  }
})
