import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export type TranslationSchema = {
  add_action: string;
  input_placeholder: string;
  info_hover: string;
  info_1: string;
  info_2: string;
  info_3: string;
  info_4: string;
  info_5: string;
  info_6: string;
  recycle_hover: string;
  reset_hover: string;
  reset_message: string;
  modal_confirm: string;
  modal_deny: string;
  completion_done: string;
  completion_empty: string;
};

export type ResourcesStrct = {
  [lang: string]: {
    translation: TranslationSchema;
  };
};

const resources: ResourcesStrct = {
  en: {
    translation: {
      add_action: 'Add',
      input_placeholder: 'New todo...',
      info_hover: 'Info',
      info_1: 'Your todos will be reset in 24 hours.',
      info_2: 'Try to complete all of them in time!',
      info_3: 'To remove todo swipe in to the right',
      info_4: 'or click twice on the checkbox.',
      info_5: 'Use recycle to remove all complete todos.',
      info_6: 'You can turn off/on timer by clicking on it',
      recycle_hover: 'Recycle Progress',
      reset_hover: 'Reset Progress',
      reset_message: 'Reset all of your progress?',
      modal_confirm: 'Yes',
      modal_deny: 'No',
      completion_done: 'Take a break or add new todos!',
      completion_empty: 'Add some todos',
    },
  },
  ru: {
    translation: {
      add_action: 'Добавь',
      input_placeholder: 'Новая заметка...',
      info_hover: 'Инфо',
      info_1: 'Твой список будет сброшен через 24 часа.',
      info_2: 'Попробуй выполнить все вовремя!',
      info_3: 'Чтобы удалить заметку смахни ее вправо',
      info_4: 'или щелкни дважды на галочку.',
      info_5: 'Используй утилизацию для очистки выполненных заметок.',
      info_6: 'Ты можешь вкл/выкл таймер нажав на него',
      recycle_hover: 'Утилизировать',
      reset_hover: 'Сбросить',
      reset_message: 'Сбросить весь список?',
      modal_confirm: 'Да',
      modal_deny: 'Нет',
      completion_done: 'Передохни или добавь новых заметок!',
      completion_empty: 'Список пуст, добавь что-нибудь',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
