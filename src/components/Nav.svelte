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
	<ul class="sm:flex gap-x-10 hidden">
		<li>HOME</li>
		<li>PORTFOLIO</li>
		<li>CONTACT ME</li>
	</ul>
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
