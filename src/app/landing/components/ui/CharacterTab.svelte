<script lang="ts">
  import type { CharacterTabProps } from '@landing/env'

  import { fade, fly } from 'svelte/transition'

  let { store, statics }: CharacterTabProps = $props()
</script>

<article class={`characters__tab characters__tab--${store.index}`}>
  <div class="characters__wrapper">
    <header class="characters__header">
      <h2 class="characters__title">{statics[0]}</h2>
      <p class="characters__subtitle">{statics[1]}</p>
    </header>

    <aside class="characters__content">
      {#key store.index}
        <p in:fade={{ duration: 350 }} class="characters__introduction">
          {store.value.introduction}:
        </p>
      {/key}

      {#key store.index}
        <div in:fly={{ duration: 500, x: '3rem', opacity: 0 }} class="characters__box">
          <h3 class="characters__name">{store.index}</h3>

          <p class="characters__text">{store.value.body}</p>
        </div>
      {/key}
    </aside>

    <aside class="characters__preview">
      {#key store.index}
        <picture in:fly={{ duration: 350, delay: 150, x: '3rem', opacity: 0 }} class="characters__tab-image-picture">
          <source srcset={`${store.value.img.normal.src}.avif`} type="image/avif" />
          <img
            src={`${store.value.img.normal.src}.webp`}
            class="characters__tab-image"
            loading="lazy"
            alt=""
          />
        </picture>
      {/key}
    </aside>
  </div>
</article>