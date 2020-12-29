import { TFunction } from 'i18next';
import {
  Namespace,
  useTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
} from 'react-i18next';
import { TranslationSchema } from '../i18n';

// doesn't support nested keys

export interface TypedTranslationResponse extends UseTranslationResponse<any> {
  t: (key: keyof TranslationSchema) => TFunction;
  0: (key: keyof TranslationSchema) => TFunction;
}

const useTypedTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions
): TypedTranslationResponse => useTranslation(ns, options);

export default useTypedTranslation;
