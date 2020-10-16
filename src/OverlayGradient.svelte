<script>

  import { generatePoints} from './helpers.js'

  export let scrollTop, scrollTopMax, width, height
  export const inverted = true

  let styleString = ""

  const gradients = {
    mint0 : "rgba(0, 255, 148, 0)",
    mint1 : "rgba(0, 255, 148, 1)",
  }

  const blur_radius = "5vmin"

  const straightOffset = 6
  const straightBlur = 10

  const queerOffset = Math.tan(width/height) * 8
  const queerBlur = 10

  const gradient_step_1a = 100 - queerOffset + "%"
  const gradient_step_2a = 100 - queerOffset + queerBlur + "%"
  const gradient_step_1b = 100 - straightOffset + "%"
  const gradient_step_2b = 100 - straightOffset + straightBlur + "%"

  let slowness, pos, posMax, points, pointsString

  $: {
    pos = (scrollTop/scrollTopMax) * 180

    styleString = `
    background: linear-gradient(${   30 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${  -30 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${  150 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${ -150 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${  180 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${    0 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${   90 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${  -90 + Math.floor(pos)}deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} );      
      `
  }

</script>

<div style={styleString}>
</div>

<style>
  div {
    position: fixed;
    z-index:2;
    pointer-events: none;
    /*filter: blur(4vmin);
    will-change: filter;*/
    mix-blend-mode: screen;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    fill: var(--color-mint);
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }  
</style>
