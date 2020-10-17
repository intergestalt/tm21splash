
<script>
  import { onMount } from 'svelte';

  export let isPointer // cursor: pointer

  const cursors = {
    default: "build/cursor.png",
    pointer: "build/pointer.png"
  }

  let imgRef = null

  let mouseX = 0
  let mouseY = 0

  let lastX = 0
  let lastY = 0

  let frame = null
  let active = false
  let blocked = false

  let queueX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let queueY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  $: src = isPointer ? cursors.pointer : cursors.default

  const onTouchStart = event => {
    blocked = true
  }

  const onMouseMove = event => {
    if (blocked) return
    //console.log(event)
    //setMouseX(event.clientX)
    //setMouseY(event.clientY)
    mouseX = event.clientX
    mouseY = event.clientY

    if (!active) {
      active = true
      activate()
    }

    //console.log(mouseX)
    //console.log(imgRef.current.style.left)
    //const time = Date.now();
    //setTimeout(()=>{
    //  imgRef.current.style.left = event.clientX + 15 * Math.sin(event.clientX / 35) + "px"
    //  imgRef.current.style.top =  event.clientY + 15 * Math.sin(event.clientY / 50) + "px"
    //}, 400)
  }

  const activate = () => {

    (function loop() {
      frame = requestAnimationFrame(loop);

      queueX.push(mouseX)
      queueY.push(mouseY)
      const x = queueX.shift()
      const y = queueY.shift()

      // imgRef.current.style.left = x + 15 * Math.sin(x / 35) + "px"
      // imgRef.current.style.top = y + 15 * Math.sin(y / 50) + "px"

      const newX = (x + lastX) / 2
      const newY = (y + lastY) / 2

      imgRef.style.left = newX + "px"
      imgRef.style.top = newY + "px"

      lastX = newX
      lastY = newY
      
    })()
  }

</script>

<svelte:window on:mousemove={onMouseMove} on:touchstart={onTouchStart}/>

<img class:active={!blocked && active} alt="pointer" bind:this={imgRef} src={src} />

<style>
  img {
    position: fixed;
    width: 20px;
    height: 20px;
    z-index: 20000;
    pointer-events: none;
  }

  img:not(.active) {
    /*display: none;*/
    z-index: -10;
    display:none;
  }

  :global(*, *:hover) {
      cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAH0lEQVR42mNkoBAwjhowasCoAaMGjBowasCoAcPNAACOMAAhOO/A7wAAAABJRU5ErkJggg==), crosshair !important;
      /*cursor: crosshair;*/
  }
</style>
