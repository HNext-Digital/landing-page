import en from './i18n/locales/en.json'
import fr from './i18n/locales/fr.json'

export default defineI18nConfig(() => {
  return {
    legacy: false,
    availableLocales: ['en', 'fr'],
    locale: 'fr',
    messages: {
      en,
      fr,
    },
  }
})
