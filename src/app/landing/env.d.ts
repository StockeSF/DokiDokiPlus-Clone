import type { labels } from '@landing/i18n/config'

type I18N = typeof labels

type I18NPageContent = I18N['en']

//  Sections
export interface SectionLayout { id: string }
export interface IntroLayout { id: string[] }

export type IntroContent = I18NPageContent['intro']
export type TrailerContent = I18NPageContent['trailer']
export type StoreListContent = Pick<IntroContent, 'storeList'>
export type ReviewsContent = I18NPageContent['reviews']
export type BuyNowContent = I18NPageContent['buynow']
export type NewsletterContent = I18NPageContent['newsletter']
