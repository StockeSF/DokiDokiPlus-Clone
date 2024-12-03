export function createTrailerStore () {
  let isActive = $state(false)
  
  const clickHandler = () => {
    isActive = !isActive
  }

  return {
    get value() { return isActive },
    clickHandler
  }
}

export const trailer = createTrailerStore()
