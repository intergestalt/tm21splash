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
    display: flex;
    justify-content: center;
  }
  .footer-content {
    max-width: 1000px;
  }
  @media (max-width: 500px) {
    footer {
      font-size: 14px;
      line-height: 19px;
      padding: 2.5em 20px;
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
  <div class="footer-content">
    {#if language === "en"}
      <FooterEN />
    {:else}
      <FooterDE />
    {/if}
  </div>
</footer>
