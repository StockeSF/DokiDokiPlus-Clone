export function createTabs(object: any, index: string | number) {
  let currentIndex = $state(index)
  let currentTab = $state(object[currentIndex])

  $effect(() => {
    currentTab = object[currentIndex]
  })

  const clickHandler = (index: number | string) => {
    if (index === currentIndex) return
    currentIndex = index
  }

  return {
    get index() { return currentIndex },
    get value() { return currentTab },
    clickHandler
  }
}