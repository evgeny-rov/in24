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
  confirm: string;
  deny: string;
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
      confirm: 'Yes',
      deny: 'No',
      completion_done: 'Yay! You deserve a cup of ☕',
      completion_empty: 'Add some todos',
    },
  },
  ru: {
    translation: {
      add_action: 'Добавить',
      input_placeholder: 'Новая запись...',
      info_hover: 'Инфо',
      info_1: 'Список будет сброшен через 24 часа.',
      info_2: 'Попробуй выполнить всё вовремя!',
      info_3: 'Чтобы удалить запись смахни ее вправо',
      info_4: 'или щелкни дважды на галочку.',
      info_5: 'Утилизация очищает все выполненные записи.',
      info_6: 'Ты можешь вкл/выкл таймер нажав на него.',
      recycle_hover: 'Утилизировать',
      reset_hover: 'Сбросить',
      reset_message: 'Сбросить весь список?',
      confirm: 'Да',
      deny: 'Нет',
      completion_done: 'Ура! ты заслужил чашечку ☕',
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
