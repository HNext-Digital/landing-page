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
    discordContactWebhookUrl: import.meta.env.NUXT_DISCORD_CONTACT_WEBHOOK_URL || '',
    public: {
      baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL || '',
      i18n: {
        baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL || '',
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
