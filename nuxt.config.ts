import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    discordContactWebhookUrl: '',
    public: {
      baseUrl: '',
      i18n: {
        baseUrl: '',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700, 900],
    },
    families: [
      { name: 'Poppins', provider: 'google' },
      { name: 'Martel', provider: 'google' },
    ],
  },
  i18n: {
    defaultLocale: 'fr',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.ts',
      },
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr.ts',
      },
    ],
  },
})
