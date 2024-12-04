const isDesktop = window.matchMedia('(min-width:1024px)')

class AppClock extends HTMLElement {
  timeContent: HTMLTimeElement

  constructor () {
    super()
    let style = document.createElement('style')
    let shadow = this.attachShadow({ mode: 'open' })
    this.timeContent = document.createElement('time')

    style.innerHTML = `
      :host > time {
        font-family: var(--riffic);
        color: var(--doki-purple);
        font-size: clamp(1.25rem, 1.25vw + .25rem, 1.5rem);
      }
    `

    shadow.append(style)
    shadow.appendChild(this.timeContent)
  }

  public getDate() {
    let date = new Date()

    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    return { hour, minutes, seconds }
  }

  public getPeriod(hour: number) {
    if (hour >= 12) return 'PM'
    return 'AM'
  }

  public convertTo12(hour: number) {
    if (hour === 0) return 12
    if (hour > 12) return hour - 12
    return hour
  }

  private setTime() {
    let date = this.getDate()
    let AMPM = this.getPeriod(date.hour)
    let type = this.getAttribute('type') ?? '24'

    let convertedHour = type === '12' 
      ? this.convertTo12(date.hour).toString().padStart(2, '0')
      : date.hour.toString().padStart(2, '0')

    let convertedMinutes = date.minutes.toString().padStart(2, '0')

    this.timeContent.innerText = `${convertedHour}:${convertedMinutes} ${AMPM}`
  }

  private setIntervals(firstTime?: boolean) {
    const seconds = 60000

    if (firstTime) {
      let currentDate = this.getDate()
      let secondsLeft = seconds - currentDate.seconds * 1000

      return setTimeout(() => {
        this.setTime()
        this.setIntervals()
      }, secondsLeft)
    }

    return setInterval(() => this.setTime(), seconds)
  }

  connectedCallback() {
    this.setTime()
    this.setIntervals(true)
  }
}

isDesktop.addEventListener('change', (e) => {
  //  define web-component if device is desktop
  if (e.matches && !customElements.get('app-clock')) (
    window.customElements.define('app-clock', AppClock)
  )
  return
})

if (isDesktop.matches) window.customElements.define('app-clock', AppClock)