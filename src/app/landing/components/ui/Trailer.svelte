<script>
  import { onMount } from 'svelte'
  import { scale, fade } from 'svelte/transition'

  import { trailer } from '@landing/stores/trailer.svelte'

  let { trailerStatics, children } = $props()

  onMount(() => import('@justinribeiro/lite-youtube'))
</script>

{#if trailer.value}
  <div class="trailer">
    <button
      class="trailer__bg"
      onclick={trailer.clickHandler}
      transition:fade={{ duration: 150, delay: 150 }}
      aria-label={trailerStatics.arias['aria-close-trailer']}
    ></button>
  
    <div class="trailer__video" transition:scale={{ opacity: 0, start: 0.3, duration: 750 }}>
      <button
        class="dokibtn dokibtn--trailer dokibtn--trailer-close"
        onclick={trailer.clickHandler}
        aria-label={trailerStatics.arias['aria-close-trailer']}
      >
        {@render children()}
      </button>

      <lite-youtube
        class="video"
        videoid="soEwoP20Bw8"
        autoload="true"
      ></lite-youtube>
    </div>
  </div>
{/if}
