import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

function loadNamespaces(language) {
  const context = require.context("../locales", true, /\.json$/);
  const namespaces = {};

  context.keys().forEach((key) => {
    const langMatch = key.match(/\/(\w+)\/(.+)\.json$/);
    if (langMatch) {
      const [_, lang, ns] = langMatch;
      if (lang === language) {
        namespaces[ns] = context(key);
      }
    }
  });

  return namespaces;
}

const resources = {};

const languages = ["en", "pt", "es"];

for (const language of languages) {
  resources[language] = loadNamespaces(language);
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "en",
    ns: ["common"],
    detection: {
      order: ["navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
