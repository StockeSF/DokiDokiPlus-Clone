<script>
  import { trailer } from '@landing/stores/modal.svelte'

  let { trailerStatics, children } = $props()
</script>

<button onclick={trailer.clickHandler} class="trailerbtn animate" aria-label={trailerStatics.arias['aria-open-trailer']} data-intersection-observer="fadeUp">
  <picture class="trailerbtn__picture">
    <source srcset={`${trailerStatics.img.src}.avif`} type="image/avif" />
    <img
      src={`${trailerStatics.img.src}.webp`}
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