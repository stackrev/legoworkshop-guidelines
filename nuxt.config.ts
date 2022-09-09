import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  generate: {
    nojekyll: true
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '~/favicon.ico' }
    ]
  },
  typescript: {
    typeCheck: true
  },
  target: 'static',
  ssr: false,
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxt/image-edge'
  ],
  plugins: ['~/plugins/vuetify.ts'],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  router: {
    base: '/legoworkshop-guidelines'
  },
  app: {
    baseURL: '/legoworkshop-guidelines'
  }

})
