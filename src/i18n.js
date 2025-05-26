import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to TopNewsKL",
      explore: "Explore Headlines",
      loading: "Loading latest news...",
      latestHeadlines: "Latest Headlines",
      languageLabel: "Language:",
    },
  },
  ml: {
    translation: {
      welcome: "ടോപ്പ് ന്യൂസ് KL-ലേക്ക് സ്വാഗതം",
      explore: "ഹെഡ്ലൈനുകൾ കാണുക",
      loading: "വാർത്തകൾ ലോഡ് ചെയ്യുന്നു...",
      latestHeadlines: "പുതിയ ഹെഡ്ലൈനുകൾ",
      languageLabel: "ഭാഷ:",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
