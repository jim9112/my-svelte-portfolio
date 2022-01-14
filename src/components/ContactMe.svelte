<script>
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';

	const onClick = () => {
		goto('/contact-me');
	};
</script>

<section class="mt-8 pt-28 pb-20 px-4 text-center flex flex-col place-items-center gap-10">
	<h1 class="font-heading font-bold text-4xl">Interested in doing a project together?</h1>
	<Button clickHandler={onClick}>CONTACT ME</Button>
</section>
