<script>
	import { onMount } from 'svelte';

	import GlobalStyle from './GlobalStyle.svelte' // import global styles
	import Pointer from './Pointer.svelte'
	import Info from './Info.svelte'
	import Overlay from './Overlay.svelte'
	import Header from './Header.svelte'
	import Language from './Language.svelte'
	import Arrow from './Arrow.svelte'
	import TextEN from './TextEN.svelte'
	import TextDE from './TextDE.svelte'
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

	let width = window.innerWidth
	let height = window.innerHeight

	const onScroll = e => {
		scrollTop = e.target.scrollTop
		const scrollRel = scrollTop/scrollTopMax
		moverOffset = -scrollRel * (moverHeight-height)
	}
	const onClick = () => {
		headerClicked = true
		toggleHovering(false)
		setTimeout(updateDimensions, 1)
	}
	const setLanguage = l => language = l
	const toggleHovering = toggle => hovering = toggle

	const updateDimensions = function() {
		scrollTopMax = main.scrollHeight - main.offsetHeight
		mainHeight = main.offsetHeight
		moverHeight = mover.offsetHeight
		width = window.innerWidth
		height = window.innerHeight
	}

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

<main bind:this={main} on:scroll={ onScroll }>
	<Pointer isPointer={hovering}/>
	{#if false}
		<Info {scrollTop} {scrollTopMax} {moverHeight} />
	{/if}
	{#if headerClicked}
		<Language visible={scrollTop < scrollVisibleLimit} {setLanguage} {language} />
		<Arrow visible={scrollTop < scrollVisibleLimit} />
		<Overlay {scrollTop} {scrollTopMax} {width} {height} inverted />
		<div class="mover" bind:this={mover} style="top: {moverOffset}px">
			<div style="height: {height}px;">
				<Header {onClick} {headerClicked}/>
			</div>
			<h2>
				transmediale
				<br />
				2021–22
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
			<Footer />
		</div>
		<div class="spacer" style="height: {height*scrollSlownessFactor}px"></div>
	{:else}
	<Header {onClick} {headerClicked} {toggleHovering}/>
	{/if}
</main>

<style>
	main {
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		/*font-size: 14vw;*/
	}

	h2 {
		text-align: center;
		font-weight: bold;
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
			/*padding: 0 20px;*/
		}
	}
</style>