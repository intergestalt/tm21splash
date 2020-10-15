<script>
  export let onScroll, scrollTopMax, mainHeight
</script>

<div class="outer" on:scroll={ onScroll }>
  <div class="inner" style="height: {mainHeight*5}px">
  </div>
</div>

<style>
  .outer {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 5;
    background-color: #fff7;
    top:0;
    left:0;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .inner {
  }
</style>