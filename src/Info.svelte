<script>
  export let scrollTop, scrollTopMax
</script>

<div>
  {scrollTop}<br />
  {scrollTopMax}
</div>

<style>
  div {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,0.8);
    color: blue;
  }
</style>