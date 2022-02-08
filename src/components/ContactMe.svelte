<script>
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	import { goto } from '$app/navigation';

	const onClick = () => {
		goto('/contact-me');
	};
</script>

<section
	class="mt-8 pt-28 pb-20 px-4 text-center items-center flex w-full flex-col gap-10 sm:flex-row"
>
	<div class="sm:w-[350px]">
		<Heading2>Interested in doing a project together?</Heading2>
	</div>
	<div class="hidden grow sm:block h-[1px] bg-secondary-light-grey" />
	<Button clickHandler={onClick}>CONTACT ME</Button>
</section>
