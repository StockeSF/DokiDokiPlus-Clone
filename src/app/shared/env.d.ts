import type { labels } from '@shared/i18n/config'

type I18N = typeof labels

type I18NPageContent = I18N['en']

export type HeaderContent = I18NPageContent['header']
export type FooterContent = I18NPageContent['footer']

export interface StaticsLayout<T> { statics: T }

export interface HeaderLayout<T> extends StaticsLayout<T> {
  isLanding?: boolean
}
