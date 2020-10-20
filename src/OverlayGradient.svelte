<script>
  export let scrollTop, scrollTopMax, width, height
  export const inverted = true

  let styleString = ""

  const wobble = a => Math.sin(2*(a/180) * Math.PI)

  const gradients = {
    mint0 : "rgba(0, 255, 148, 0)",
    mint1 : "rgba(0, 255, 148, 1)",
  }


  const straightOffset = 7
  const straightBlur = 15

  const queerOffset = 20
  const queerBlur = 15

  const gradient_step_1a = 100 - queerOffset + "%"
  const gradient_step_2a = 100 - queerOffset + queerBlur + "%"
  const gradient_step_1b = 100 - straightOffset + "%"
  const gradient_step_2b = 100 - straightOffset + straightBlur + "%"

  let slowness, pos, posMax, points, pointsString

  $: {
    const pos = (scrollTop/scrollTopMax) * 180

    const queerAngle = width > height ? 30 : 60

    const posArray = []
    for (let i=0; i<8; i++) {
      posArray.push( 
        i * 10 * wobble(pos) + pos
      )
    }
    //console.log(Math.floor(pos), Math.round(10*wobble(pos)), posArray.map(p=>Math.floor(p)))

    styleString = `
    background: linear-gradient(${       queerAngle + Math.floor(posArray[0])}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${      -queerAngle + Math.floor(posArray[1])}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${  180 -queerAngle + Math.floor(posArray[2])}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${ -180 +queerAngle + Math.floor(posArray[3])}deg,  ${gradients.mint0} ${gradient_step_1a}, ${gradients.mint1} ${gradient_step_2a} ),
                linear-gradient(${  180                                      }deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${    0                                      }deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${   90                                      }deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} ),
                linear-gradient(${  -90                                      }deg,  ${gradients.mint0} ${gradient_step_1b}, ${gradients.mint1} ${gradient_step_2b} );
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
