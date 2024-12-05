type AnimationTypes = 'logo' | 'char-back' | 'char-front' | 'bg' | 'buynow'
type BreakpointTypes = 'md' | 'lg' | 'xl' | '2xl' 

export class TranslateAnimation {
  elements: NodeListOf<HTMLElement>
  matchMedia: Record<BreakpointTypes, MediaQueryList | null>

  constructor(elements: NodeListOf<HTMLElement>) {
    this.elements = elements
    this.matchMedia = {
      "2xl": null,
      xl: null,
      lg: null,
      md: null
    }
  }

  private addInitStyles(entry: HTMLElement) {
    const dataStyle = entry.dataset.translateStyle as AnimationTypes

    entry.classList.add('translate')

    switch (dataStyle) {
      case 'logo': return entry.classList.add('translate--logo')
      case 'char-back': return entry.classList.add('translate--char-back')
      case 'char-front': return entry.classList.add('translate--char-front')
      case 'bg': return entry.classList.add('translate--bg')
      case 'buynow': return entry.classList.add('translate--buynow')
      default: console.log(`addStyles Error: No existe el tipo ${dataStyle}`)
    }
  }

  private createMatchMediaQuery(value: string | number) {
    return window.matchMedia(`(min-width: ${value}px)`)
  }

  private getMediaQuery(query: BreakpointTypes) {
    switch (query) {
      case '2xl': return this.matchMedia[query] = this.createMatchMediaQuery(1536)
      case 'xl': return this.matchMedia[query] = this.createMatchMediaQuery(1280)
      case 'lg': return this.matchMedia[query] = this.createMatchMediaQuery(1024)
      case 'md': return this.matchMedia[query] = this.createMatchMediaQuery(768)
      default: {
        console.log(`getMediaQuery Error: no existe la media query: ${query}`)
        return null
      }
    }
  }

  private getScrollValue(entry: HTMLElement) {
    let windowValue = window.scrollY == 0 ? 'unset' : `${window.scrollY}px`
    let currentMediaQuery = entry.dataset.translateMediaQuery as BreakpointTypes | undefined

    if (currentMediaQuery === undefined) return entry.style.setProperty('--_window-value', windowValue)

    if (this.matchMedia[currentMediaQuery] === null) this.getMediaQuery(currentMediaQuery)

    if (this.matchMedia[currentMediaQuery] !== null && !this.matchMedia[currentMediaQuery].matches) {
      windowValue = 'unset'
    }

    return entry.style.setProperty('--_window-value', windowValue)
  }

  public init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.elements.forEach(el => {
        this.addInitStyles(el)
        this.getScrollValue(el)
      })
    }, { once: true })

    window.addEventListener('scroll', () => {
      this.elements.forEach(el => {
        this.getScrollValue(el)
      })
    })
  }
}
