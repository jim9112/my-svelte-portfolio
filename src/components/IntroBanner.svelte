<script>
	import Heading2 from './global/Heading2.svelte';
	import downArrows from '/icons/down-arrows.svg';
</script>

<section class="flex flex-col gap-8">
	<img
		srcset="/homepage/mobile/image-homepage-hero.jpg 311w, 
        /homepage/tablet/image-homepage-hero.jpg 688w,
        /homepage/desktop/image-homepage-hero.jpg 1110w"
		sizes="90vw"
		alt="hero"
	/>
	<Heading2>Hey, I’m James Hannan and I love building beautiful websites</Heading2>
	<a
		href="#aboutMe"
		class="bg-primary-dark-blue text-secondary-very-light-grey w-[200px] flex items-center font-body text-xs"
	>
		<div class="bg-primary-greyish-blue h-12 w-12 flex px-4 py-[18px]">
			<img src={downArrows} alt="down arrows icon" />
		</div>
		<div class="text-center w-full">About Me</div>
	</a>
</section>
