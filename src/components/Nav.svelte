<script>
	import MenuModal from './MenuModal.svelte';
	import hamburgerIcon from '../../static/icons/hamburger.svg';
	import closeIcon from '../../static/icons/close.svg';
	import myLogo from '../../static/my-logo.png';
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
		<a href="/"><img class="h-14" src={myLogo} alt="Site Logo"></a>
	</div>
	<nav class="sm:flex gap-x-10 hidden">
		<a class="hover:text-primary-cyan" href="/">HOME</a>
		<a class="hover:text-primary-cyan" href="/portfolio">PORTFOLIO</a>
		<a class="hover:text-primary-cyan" href="/contact-me">CONTACT ME</a>
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
