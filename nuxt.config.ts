import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      styles: ['normal', 'italic'],
      subsets: [
        'latin-ext',
        'latin',
      ],
    },
    families: [
      { name: 'Raleway', provider: 'google' },
    ],
  },
})
