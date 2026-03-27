import zh from './zh';
import en from './en';
import type { Translations } from './types';

export type { Translations } from './types';

// Translation registry
const translations: Record<string, Translations> = {
  zh,
  en,
};

/**
 * Get translations for a specific locale
 * @param locale - The locale code (e.g., 'zh', 'en')
 * @returns The translations object for the locale
 */
export function getTranslations(locale: string): Translations {
  // Default to Chinese if locale not found
  return translations[locale] || translations.zh;
}

/**
 * Get all available locales
 */
export function getLocales(): string[] {
  return Object.keys(translations);
}

/**
 * Check if a locale is supported
 */
export function isLocaleSupported(locale: string): boolean {
  return locale in translations;
}

// Export translations directly for convenience
export { zh, en };
