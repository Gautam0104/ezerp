import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import porTranslation from "./locales/por/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    por: { translation: porTranslation }
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false // React already escapes
  }
});

export default i18n;
