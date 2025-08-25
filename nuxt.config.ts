// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    'radix-vue/nuxt',
  ],
  components: [{ path: '~/components', pathPrefix: false }],
  pinia: {
    storesDirs: ['./app/stores'],
  },
  i18n: {
    defaultLocale: 'ru',
    locales: [{ code: 'ru', language: 'ru-RU', file: 'ru.json' }],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
});
