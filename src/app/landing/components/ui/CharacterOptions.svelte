<script lang="ts">
  import type { CharacterOptionsProps } from '@landing/env'

  let { store, statics }: CharacterOptionsProps = $props()
</script>

<ul class="characters__options">
  {#each Object.entries(statics) as [ key, char ]}
    <li
      class="characters__item"
      class:characters__item--active={store.index === key}
    >
      <button
        onclick={() => store.clickHandler(key)}
        class="characters__button"
        class:characters__button--active={store.index === key}
      >
        <img
          src={`${char.img.chibi.src}.webp`}
          decoding="async"
          loading="lazy"
          width="75"
          height="130"
          alt={char.img.chibi.alt}
        />
      </button>
    </li>
  {/each}
</ul>