<script>
  import { hover } from './stores.js';

  export let href, text, newtab

  const toggleHovering = toggle => hover.update(()=>toggle);

  $: target = newtab ? "target=\"blank\"" : null

</script>

<a href="{href}" {target} title={text} on:mouseenter={()=>toggleHovering(true)} on:mouseleave={()=>toggleHovering(false)} >{text}</a>

<style>
  a {
    pointer-events: all;
  }
</style>