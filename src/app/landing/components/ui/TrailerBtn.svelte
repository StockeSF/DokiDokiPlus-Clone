<script>
  import { clickHandler } from '@landing/stores/trailer.svelte'

  let { trailerStatics, children } = $props()
</script>

<button onclick={clickHandler} class="trailerbtn" aria-label={trailerStatics.ariaBtn}>
  <picture class="trailerbtn__picture">
    <source srcset={trailerStatics.img.avif} type="image/avif" />
    <img
      src={trailerStatics.img.webp}
      class="trailerbtn__img"
      alt={trailerStatics.img.alt}
    />
  </picture>

  <div class="trailerbtn__play">
    {@render children()}
  </div>
</button>