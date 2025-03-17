import en from './locales/en.json'
import fr from './locales/fr.json'

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
