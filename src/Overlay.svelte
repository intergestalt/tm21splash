<script>

  import { generatePoints} from './helpers.js'

  export let scrollTop, scrollTopMax, width, height, inverted

  let slowness, pos, posMax, points, pointsString

  $: {
    //slowness = 30 * (400 / (width + height))
    //pos = scrollTop / slowness
    
    pos = (scrollTop / scrollTopMax) * 1 * (width + height)

    //console.log(pos, posMax)

    points = generatePoints(width, height, pos)

    pointsString = points.map(coords => coords.join(",")).join(" ")
  }

</script>

<div class:negative="{inverted}">
  <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <filter id="blur">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <mask id="polygon">
        <rect width="100%" height="100%" fill="white" />
        <polygon filter="url(#blur)" points={pointsString} fill="black"/>
      </mask>
    </defs>
    <rect class="shape-negative" x="0" y="0" width="100" height="100" mask="url(#polygon)"  ></rect>
  </svg>
</div>

<style>
  div {
    position: fixed;
    z-index:2;
    pointer-events: none;
    /*filter: blur(4vmin);
    will-change: filter;*/
    mix-blend-mode: screen;
    fill: var(--color-mint);
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }
  
</style>