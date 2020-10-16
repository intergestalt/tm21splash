<script>
  export let href, text, newtab

  $: target = newtab ? "target=\"blank\"" : null

</script>

<a href="{href}" {target} title={text}>{text}</a>

<style>
  a {
    pointer-events: all;
  }
</style>