<script lang="ts">
	import Heading2 from './global/Heading2.svelte';
	import downArrows from '../../static/icons/down-arrows.svg';
	export let heroImage: string;
</script>

<section class="flex flex-col gap-8 relative">
	<img src={heroImage} alt="hero" />
	<div
		class="flex flex-col gap-8 sm:absolute sm:bottom-0 sm:left-0 sm:bg-white sm:w-[518px] sm:pt-14 sm:pr-14"
	>
		<Heading2>Hey, I’m Jimmy Hannan and I love building beautiful websites</Heading2>
		<a
			href="#aboutMe"
			class="bg-primary-dark-blue text-secondary-very-light-grey w-[200px] flex items-center font-body text-xs"
		>
			<div class="bg-primary-greyish-blue h-12 w-12 flex px-4 py-[18px]">
				<img src={downArrows} alt="down arrows icon" />
			</div>
			<div class="text-center w-full">About Me</div>
		</a>
	</div>
</section>
