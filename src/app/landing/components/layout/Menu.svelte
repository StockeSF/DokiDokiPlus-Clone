<script>
  import { menu } from '@landing/stores/modal.svelte'

  import { fade, scale } from 'svelte/transition'

  let { keys, statics, children } = $props()
</script>

<button onclick={menu.clickHandler} class="dokibtn dokibtn--header-menu header-link header-link--home">
  {@render children()}
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
          {#each keys as key}
            <li class="doki-box__item">
              <a href={`#${key}`} onclick={menu.clickHandler} class="doki-box__btn ">
                <span class="doki-box__text">{key}</span>
              </a>
            </li>
          {/each}
        </ul>        
      </nav>
    </div>
  </div>
{/if}
