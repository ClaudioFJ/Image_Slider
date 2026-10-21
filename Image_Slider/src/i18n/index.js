import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

// Idiomas suportados pelo seletor do cabeçalho.
export const supportedLanguages = [
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
];

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
};

// Chave usada para guardar a escolha do usuário no localStorage.
export const LANGUAGE_STORAGE_KEY = 'wild-stories-lang';

// Normaliza códigos como "pt-BR" ou "en_US" para apenas o idioma base.
export const toBaseLanguage = (code) => String(code).split(/[-_]/)[0].toLowerCase();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: supportedLanguages.map((language) => language.code),
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      // "?lng=en" na URL tem prioridade, depois a escolha salva, depois o navegador.
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      convertDetectedLanguage: toBaseLanguage,
    },
    react: { useSuspense: false },
  });

// Mantém o documento em sincronia com o idioma ativo (lang e título da aba).
function syncDocument(language) {
  const base = toBaseLanguage(language);
  document.documentElement.lang = base;
  document.title = i18n.t('meta.title');
}

syncDocument(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', syncDocument);

export default i18n;
