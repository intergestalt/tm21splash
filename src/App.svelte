<script>
	import { onMount } from 'svelte';

	import { hover } from './stores.js';

	import GlobalStyle from './GlobalStyle.svelte' // import global styles
	import Pointer from './Pointer.svelte'
	import Info from './Info.svelte'
	import Overlay from './Overlay.svelte'
	import OverlayGradient from './OverlayGradient.svelte'
	import Header from './Header.svelte'
	import Language from './Language.svelte'
	import Arrow from './Arrow.svelte'
	import TextEN from './content/TextEN.svelte'
	import TextDE from './content/TextDE.svelte'
	import Footer from './Footer.svelte'

	const scrollVisibleLimit = 20
	const scrollSlownessFactor = 16

	let main, mover = null
	let scrollTop = 0
	let scrollTopMax = 0
	let moverHeight = 0
	let mainHeight = 0
	let moverOffset = 0
	let headerClicked = false
	let language = "en"
	let hovering = false

	const unsubscribe = hover.subscribe(value => {
		hovering = value;
	});

	let width = window.innerWidth
	let height = window.innerHeight

	const onScroll = () => {
		scrollTop = main.scrollTop
		const scrollRel = scrollTop/scrollTopMax
		moverOffset = -scrollRel * (moverHeight-height)
	}
	const onClick = () => {
		headerClicked = true
		toggleHovering(false)
		setTimeout(updateDimensions, 1)
	}
	const setLanguage = l => {
		language = l
		setTimeout(updateDimensions, 1)
	}
	const toggleHovering = toggle => hovering = toggle

	const updateDimensions = function() {
		scrollTopMax = main.scrollHeight - main.offsetHeight
		mainHeight = main.offsetHeight
		moverHeight = mover.offsetHeight
		width = window.innerWidth
		height = window.innerHeight
		onScroll()
	}

	//onMount(() => {
	//		onClick()
	//})

	/*onMount(() => {

		(function loop() {
			requestAnimationFrame(loop);
			if (main.scrollTop !== scrollTop) scrollTop = main.scrollTop

		}());

		return () => {
			cancelAnimationFrame(frame);
		};
	});
	*/

</script>

<svelte:window on:resize={updateDimensions}/>

<main bind:this={main} on:scroll={ onScroll } class:headerClicked={headerClicked}>
	<Pointer isPointer={hovering} {width} {height} />
	{#if 0}
		<Info {scrollTop} {scrollTopMax} {moverHeight} {width} {height}/>
	{/if}
		<div class="headerOverlay" style="display: { headerClicked ? "none" : "block"}">
			<Header {onClick} headerClicked={false} {toggleHovering}/>
		</div>
		<Language visible={scrollTop < scrollVisibleLimit} {setLanguage} {language} />
		<Arrow visible={scrollTop < scrollVisibleLimit} />
		<OverlayGradient {scrollTop} {scrollTopMax} {width} {height} inverted />
		<div class="mover" bind:this={mover} style="top: {moverOffset}px">
			<div style="height: {height}px;">
				<Header headerClicked={true}/>
			</div>
			<h2>
				transmediale
				<br />
				2021–22
				<br />
				<br />
				for refusal
			</h2>
			<section>
				{#if language === "en"}
					<TextEN />
				{:else}
					<TextDE />
				{/if}
			</section>
			<Footer {language} />
		</div>
		<div class="spacer" style="height: {height*scrollSlownessFactor}px"></div>
</main>

<style>
	main {
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		/*font-size: 14vw;*/
		isolation: isolate;
	}

	main:not(.headerClicked) {
		overflow: hidden;
	}

	.headerOverlay {
		width: 100%;
		height: 100%;
		position: fixed;
		left:0;
		top:0;
		background-color: var(--color-min);
		z-index: 1000;
	}
	section {
		padding: 0 10vw;
	}

	.mover {
		will-change: transform;
		position: fixed;
		pointer-events: none;
	}

	@media (max-width: 500px) {
		section {
			padding: 0 20px;
		}
	}
</style>