// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/common.css',
    '~/assets/css/reset.css'
  ],
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
