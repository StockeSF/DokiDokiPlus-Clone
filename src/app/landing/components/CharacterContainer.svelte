<script lang="ts">
  import type { CharactersContent } from '@landing/env'

  import { createTabs } from '@landing/stores/tabs.svelte'

  import CharactersOptions from '@landing/components/ui/CharacterOptions.svelte'
  import CharactersTab from '@landing/components/ui/CharacterTab.svelte'

  let { statics }: { statics: CharactersContent } = $props()

  const characterTabs = createTabs(statics.characterList, 'sayori')
</script>

<CharactersTab
  store={characterTabs}
  statics={[statics.title, statics.subtitle]}
/>

<CharactersOptions
  store={characterTabs}
  statics={statics.characterList}
/>
