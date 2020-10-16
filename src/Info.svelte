<script>
  export let scrollTop, scrollTopMax, moverHeight, width, height
</script>

<div>
  AR={width/height}, {width}x{height}<br />
  {scrollTop/scrollTopMax} = {scrollTop}/{scrollTopMax}<br />
  {moverHeight}
</div>

<style>
  div {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,0.8);
    color: blue;
    text-align: right;
  }
</style>