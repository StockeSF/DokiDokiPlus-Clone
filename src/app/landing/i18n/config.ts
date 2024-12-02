import en from './en/lang.json'

export const languageList = {
  en: 'English'
}

export const labels = {
  en: {
    keys: Object.keys(en).slice(1),
    seo: en.seo,
    intro: en.intro,
    trailer: en.trailer,
    reviews: en.reviews,
    features: en.features,
    characters: en.characters,
    buynow: en['buy-now'],
    newsletter: en.newsletter
  }
}
