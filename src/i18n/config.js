export const locales = ['en', 'ru'];

export const defaultLocale = 'ru';

export function isLocale(value) {
  return locales.includes(value);
}
