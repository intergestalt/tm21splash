<script>
  import Logo from './Logo.svelte'
  
  export let headerClicked, onClick

  $: text = headerClicked ? "for refusal" : "transmediale"

</script>

<h1>
  <span on:click={onClick} class:clicked={headerClicked}>
    {text}
  </span>
  {#if !headerClicked}
    <Logo />
  {/if}
</h1>

<style>
  h1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14vw;
    user-select: none;
    z-index: 1;
    position: relative;
  }

  span:not(.clicked) {
    cursor: pointer;
  }
</style>