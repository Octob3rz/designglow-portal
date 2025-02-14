
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import trTranslations from './translations/tr.json';
import arTranslations from './translations/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations },
      ar: { translation: arTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
