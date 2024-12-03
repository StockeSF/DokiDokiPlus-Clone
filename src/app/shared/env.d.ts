import type { labels } from '@shared/i18n/config'

type I18N = typeof labels

type I18NPageContent = I18N['en']

export type FooterContent = I18NPageContent['footer']

