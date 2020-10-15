<script>
	import { onMount } from 'svelte';

	import Info from './Info.svelte'
	import Overlay from './Overlay.svelte'
	import Header from './Header.svelte'
	import Language from './Language.svelte'
	import Arrow from './Arrow.svelte'
	import TextEN from './TextEN.svelte'
	import TextDE from './TextDE.svelte'
	import Footer from './Footer.svelte'

	const scrollVisibleLimit = 20

	let main
	let scrollTop = 0
	let scrollTopMax = 0
	let headerClicked = false
	let language = "en"

	let width = window.innerWidth
	let height = window.innerHeight

	const onScroll = e => {
		scrollTop = e.target.scrollTop
	}
	const onClick = () => {
		headerClicked = true
		setTimeout(updateDimensions, 30)
	}
	const setLanguage = l => language = l

	const updateDimensions = function() {
		scrollTopMax = main.scrollHeight - main.offsetHeight
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

<main bind:this={main} on:scroll={ onScroll } >
	<Info {scrollTop} {scrollTopMax} />
	<Header {onClick} {headerClicked} />
	{#if headerClicked}
		<Language visible={scrollTop < scrollVisibleLimit} {setLanguage} {language} />
		<Arrow visible={scrollTop < scrollVisibleLimit} />
		<Overlay {scrollTop} {scrollTopMax} {width} {height} inverted />
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

	@media (max-width: 500px) {
		section {
			/*padding: 0 20px;*/
		}
	}
</style>