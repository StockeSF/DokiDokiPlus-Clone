<script lang="ts">
  import type { FeatureContainerProps } from '@landing/env'

  import { createTabs } from '@landing/stores/tabs.svelte'

  import FeatureTab from '@landing/components/ui/FeatureTab.svelte'
  import FeatureOptions from '@landing/components/ui/FeatureOptions.svelte'

  let { statics, children }: FeatureContainerProps = $props()

  const featuresTabs = createTabs(statics.featureList, 'ddlc')
</script>

<article class="features__desktop">
  <FeatureTab store={featuresTabs}>
    {@render children()}
  </FeatureTab>

  <FeatureOptions store={featuresTabs} statics={statics.featureList} />
</article>