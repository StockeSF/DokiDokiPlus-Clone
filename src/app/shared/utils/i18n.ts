type LanguageKeys = keyof typeof languageList
type DefaultLang = typeof defaultLang 

export const languageList = {
  en: 'English'
}

const defaultLang = 'en'

export const langSelector = <T>(
  { currentLocale, labels }: { currentLocale: string, labels: Record<LanguageKeys, T> }
) => {
  return labels[currentLocale as LanguageKeys] || labels[defaultLang]
}
