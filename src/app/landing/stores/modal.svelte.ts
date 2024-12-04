export function createModal () {
  let isActive = $state(false)
  
  const clickHandler = () => {
    isActive = !isActive
  }

  return {
    get value() { return isActive },
    clickHandler
  }
}

export const trailer = createModal()

export const menu = createModal()
