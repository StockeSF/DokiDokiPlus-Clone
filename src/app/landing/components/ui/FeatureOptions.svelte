<script lang="ts">
  import type { FeatureOptionsProps } from '@landing/env'

  let { store, statics }: FeatureOptionsProps = $props()
</script>

<ul class="doki-box doki-box--features">
  {#each Object.entries(statics) as [ key, feat ]}
    <li
      class="doki-box__item"
      class:doki-box__item--active={store.index === key}
    >
      <button
        onclick={() => store.clickHandler(key)}
        class="doki-box__btn doki-box__btn--features"
      >
        <img
          src={`/assets/others/${key}-icon-white.webp`}
          width="30"
          height="30"
          fetchpriority="low"
          decoding="async"
          loading="lazy"
          class="doki-box__img doki-box__img--white"
          alt=""
        />
        <img
          src={`/assets/others/${key}-icon.webp`}
          width="30"
          height="30"
          fetchpriority="low"
          decoding="async"
          loading="lazy"
          class="doki-box__img"
          alt=""
        />

        <span class="doki-box__text doki-box__text--features">
          {feat.title}
        </span>
      </button>
    </li>
  {/each}
</ul>