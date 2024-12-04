type AnimationTypes = 'logo' | 'char-back' | 'char-front' | 'bg' | 'buynow'

export class TranslateAnimation {
  elements: NodeListOf<HTMLElement>
  
  constructor(elements: NodeListOf<HTMLElement>) {
    this.elements = elements
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

  private getScrollValue(entry: HTMLElement) {
    let windowValue = window.scrollY == 0 ? 'unset' : `${window.scrollY}px`
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