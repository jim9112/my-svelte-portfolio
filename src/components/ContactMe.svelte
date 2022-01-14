<script>
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	import { goto } from '$app/navigation';

	const onClick = () => {
		goto('/contact-me');
	};
</script>

<section class="mt-8 pt-28 pb-20 px-4 text-center flex flex-col place-items-center gap-10">
	<Heading2>Interested in doing a project together?</Heading2>
	<Button clickHandler={onClick}>CONTACT ME</Button>
</section>
