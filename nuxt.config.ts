// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },

  typescript: {
    strict: true
  },

  vite: {
    css: {
      // 전역으로 사용할 변수가 있는 경우
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  css: [
    '@/assets/scss/_global.scss',
    '@/assets/scss/_typography.scss'
  ],

  modules: ['@pinia/nuxt'],

  components: [
      { path: '~/components/module/' }
  ],

  nitro: {
    routeRules: {
      "/tessa-service-v2/**": {
        proxy: `${process.env.VITE_TESSA_AUTH_CENTER_HOST}/tessa-service-v2/**`,
      },
    },
  }
})
