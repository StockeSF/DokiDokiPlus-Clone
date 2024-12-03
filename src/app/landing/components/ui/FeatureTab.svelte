<script lang="ts">
  import type { FeatureTabProps } from '@landing/env'

  import { scale } from 'svelte/transition'

  let { store, children }: FeatureTabProps = $props()
</script>

{#key store.index}
  <div
    transition:scale={{ start: 0.3, duration: 750, opacity: 0 }}
    class="feature-card feature-card--pc"
  >
    <header class="feature-card__header feature-card__header--pc">
      {@render children()}
    </header>

    <picture>
      <source srcset={`${store.value.img.src}.avif`} type="image/avif" />
      <img
        src={`${store.value.img.src}.webp`}
        decoding="async"
        loading="lazy"
        class="feature-card__img"
        alt=""
      />
    </picture>
  </div>
{/key}

{#key store.index}
  <article
    transition:scale={{ start: 0.3, duration: 750, opacity: 0, delay: 150 }}
    class="feature-card feature-card--pc-box"
  >
    <header class="feature-card__header feature-card__header--pc-box">
      <img
        src={`${store.value.icon.src}-white.webp`}
        width="20"
        height="20"
        decoding="async"
        loading="lazy"
        class="aspect-square"
        alt=""
      />

      <span class="feature-card__title feature-card__title--pc-box">
        {store.value.title}
      </span>
    </header>

    <p class="feature-card__text feature-card__text--pc-box">
      {store.value.description}
    </p>
  </article>
{/key}
