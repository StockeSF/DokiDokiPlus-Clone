import type { labels } from '@landing/i18n/config'
import type { createTabs } from '@landing/stores/tabs.svelte'

type I18N = typeof labels

type I18NPageContent = I18N['en']

//  Sections
export interface SectionLayout<T> { id: string, statics: T }
export interface IntroLayout<T> { id: string[], statics: T }

export type IntroContent = I18NPageContent['intro']
export type TrailerContent = I18NPageContent['trailer']
export type StoreListContent = Pick<IntroContent, 'storeList'>
export type ReviewsContent = I18NPageContent['reviews']
export type FeaturesContent = I18NPageContent['features']
export type CharactersContent = I18NPageContent['characters']
export type BuyNowContent = I18NPageContent['buynow']
export type NewsletterContent = I18NPageContent['newsletter']

//  CharacterSection types
type CharacterObject = CharactersContent['characterList']

interface StoreInterface {
  store: ReturnType<typeof createTabs>,
}

export interface CharacterOptionsProps extends StoreInterface {
  statics: CharacterObject
}

export interface CharacterTabProps extends StoreInterface {
  statics: string[]
}

//  FeaturesSection types
export type FeaturesStatic = Pick<SectionLayout<FeaturesContent>, 'statics'>
type FeatureObject = FeaturesStatic['statics']['featureList']

export interface FeatureContainerProps extends FeaturesStatic {
  children: any
}

export interface FeatureOptionsProps extends StoreInterface {
  statics: FeatureObject
}

export interface FeatureTabProps extends StoreInterface {
  children: any
}
