<script>
	export let toggleModal;
	const handleClick = (e) => {
		if (e.target.id === 'modalOuter' || e.target.tagName === 'A') {
			toggleModal();
		}
	};
</script>

<div
	id="modalOuter"
	class="absolute top-0 left-0 w-full min-h-screen flex justify-end pt-20 pr-8"
	on:click={handleClick}
>
	<div class="bg-primary-greyish-blue text-secondary-very-light-grey w-fit h-fit px-16 py-10 z-10">
		<ul class="font-body text-xs text-center flex flex-col gap-8">
			<li><a href="/">HOME</a></li>
			<li><a href="/portfolio">PORTFOLIO</a></li>
			<li><a href="/contact-me">CONTACT ME</a></li>
		</ul>
	</div>
</div>
