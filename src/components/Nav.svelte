<script>
	import MenuModal from './MenuModal.svelte';
	import hamburgerIcon from '/icons/hamburger.svg';
	import closeIcon from '/icons/close.svg';
	let modalopen = false;
	const toggleModal = () => {
		modalopen = !modalopen;
	};
</script>

<header class="flex px-8 py-8 justify-between items-center relative">
	{#if modalopen}
		<MenuModal {toggleModal} />
	{/if}
	<div>
		<h1 class="font-heading font-bold text-4xl">JH</h1>
	</div>
	<nav class="sm:flex gap-x-10 hidden">
		<a href="/">HOME</a>
		<a href="/portfolio">PORTFOLIO</a>
		<a href="/contact-me">CONTACT ME</a>
	</nav>
	{#if !modalopen}
		<div class="sm:hidden">
			<img on:click={toggleModal} class="cursor-pointer" src={hamburgerIcon} alt="hamburger icon" />
		</div>
	{:else}
		<div>
			<img src={closeIcon} alt="close icon" />
		</div>
	{/if}
</header>
