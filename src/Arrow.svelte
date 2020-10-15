<script>
  export let visible
</script>

<svg class:visible={visible} width="37" height="21" viewBox="0 0 37 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M36.1776 1L18.4999 18.6777L0.822266 1" stroke="#FF3A52" stroke-width="2"/>
</svg>

<style>
  svg {
    position: fixed;
    bottom: 30px;
    opacity: 1;
    transition: opacity 0.3s;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    pointer-events: none;
  }
  svg:not(.visible) {
    opacity: 0;
  }
  @media (max-width: 500px) {
    svg {
      bottom: 15px;
    }
  }
</style>