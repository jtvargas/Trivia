import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enTranslation } from './Locales';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
