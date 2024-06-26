// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/prismic',
    '@nuxtjs/device',
    'nuxt-delay-hydration'
  ],
  i18n: {
    detectBrowserLanguage: false,
    vueI18n: './i18n/i18n.config.ts'
  },
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT},
  css: [
    'vuetify/lib/styles/main.sass',
    'vuetify/dist/vuetify.min.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/scss/app.scss'
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  build: {
    transpile: ['vuetify', 'vue-sonner'],
  },
  imports: {
    dirs: [
      'composables',
      'composables/**',
      'types/*.d.ts'
    ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  },
  runtimeConfig: {
    // astrobin
    astrobinApiKey: '',
    astrobinApiSecret: '',
    // login/pwd API
    apiLogin: '',
    apiPwd: '',

    // Values exposed public side
    public: {
      apiPublicHost: 'https://api.astro-otter.space',
      apiVersion: 'v2',
      astrobinHost: 'https://www.astrobin.com',
      astrobinApiUrl: 'https://www.astrobin.com/api/v1/',
      mercurePublicUrl: process.env.NUXT_MERCURE_HOST,
      mercureTopic: process.env.NUXT_MERCURE_TOPIC,
      facebookAppId: process.env.NUXT_FACEBOOK_APP_ID
    }
  }
})
