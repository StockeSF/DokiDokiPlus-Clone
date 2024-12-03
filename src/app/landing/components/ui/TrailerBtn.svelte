<script>
  import { trailer } from '@landing/stores/trailer.svelte'

  let { trailerStatics, children } = $props()
</script>

<button onclick={trailer.clickHandler} class="trailerbtn" aria-label={trailerStatics.arias['aria-open-trailer']}>
  <picture class="trailerbtn__picture">
    <source srcset={`${trailerStatics.img.src}.avif`} type="image/avif" />
    <img
      src={`${trailerStatics.img.webp}.webp`}
      class="trailerbtn__img"
      decoding="async"
      loading="lazy"
      alt={trailerStatics.img.alt}
    />
  </picture>

  <div class="dokibtn dokibtn--trailer">
    {@render children()}
  </div>
</button>