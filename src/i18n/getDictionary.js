import en from './dictionaries/en';
import ru from './dictionaries/ru';

import { defaultLocale, isLocale } from './config';

const dictionaries = {
  en, ru,
}

export function getDictionary(locale) {
  if (!isLocale(locale)) {
    return dictionaries[defaultLocale];
  }

  return dictionaries[locale];
}