import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700, 900],
      styles: ['normal', 'italic'],
      subsets: [
        'latin-ext',
        'latin',
      ],
    },
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
  },
})
