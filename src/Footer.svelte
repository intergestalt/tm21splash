<script>
  import FooterEN from './content/FooterEN.svelte'
  import FooterDE from './content/FooterDE.svelte'

  export let language

</script>

<style>
  footer {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    padding: 2.5em 10vw;
  }
  @media (max-width: 500px) {
    footer {
      font-size: 14px;
      line-height: 19px;
    }
  }
  :global(footer p) {
    margin-bottom: 1.5em;
  }
  :global(.links1 a:not(:first-child)),
  :global(.links2 a:not(:first-child)) {
    margin-left: 1ex;
  }
  :global(.links2) {
    padding-top: 1.5em;
  }
</style>

<footer>

  {#if language === "en"}
    <FooterEN />
  {:else}
    <FooterDE />
  {/if}

</footer>
