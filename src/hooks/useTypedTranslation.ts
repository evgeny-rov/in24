import { useTranslation } from 'react-i18next';
import { TranslationSchema } from '../i18n';

// doesn't support nested keys

const useTypedT = () => {
  const { t } = useTranslation();
  return (key: keyof TranslationSchema) => t(key);
};

export default useTypedT;
