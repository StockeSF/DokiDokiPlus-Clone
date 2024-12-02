<script>
  import { onMount } from 'svelte'

  import { isActive } from '@landing/stores/trailer.svelte'

  onMount(() => import('@justinribeiro/lite-youtube'))
</script>

{#if isActive}
  <div></div>
  <lite-youtube videoid="soEwoP20Bw8"></lite-youtube>
{/if}