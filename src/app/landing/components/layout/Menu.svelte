<script>
  import { menu } from '@landing/stores/modal.svelte'

  import { fade, scale } from 'svelte/transition'

  import Burger from '@/assets/svelte-icons/Burger.svelte'
  import XIcon from '@/assets/svelte-icons/XIcon.svelte'

  let { keys, statics } = $props()
</script>

<button onclick={menu.clickHandler} class="dokibtn dokibtn--header-menu header-link header-link--home">
  {#if !menu.value}
    <div in:fade={{ duration: 300 }} class="dokibtn__icon-menu">
      <Burger size={36} />
    </div>
  {:else}
    <div in:fade={{ duration: 300 }} class="dokibtn__icon-menu">
      <XIcon size={36} />
    </div>
  {/if}
</button>

{#if menu.value}
  <div class="menu">
    <button
      transition:fade={{ duration: 300 }}
      onclick={menu.clickHandler}
      class="menu__bg"
      aria-label="sd"
    >
    </button>
  
    <div
      class="doki-box doki-box--menuLanding"
      transition:scale={{ start: .5, opacity: 0, duration: 300 }}
    >
      <nav>
        <ul>
          {#each keys as key, i}
            <li class="doki-box__item">
              <a href={`#${key}`} onclick={menu.clickHandler} class="doki-box__btn doki-box__btn--menuLanding">
                <span class="doki-box__text">{statics[i]}</span>
              </a>
            </li>
          {/each}
        </ul>        
      </nav>
    </div>
  </div>
{/if}
