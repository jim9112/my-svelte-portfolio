<script>
	import downArrows from '../../static/icons/down-arrows.svg';
</script>

<div class="flex flex-col gap-8">
	<img
		srcset="static/homepage/mobile/image-homepage-hero.jpg 311w, 
        static/homepage/tablet/image-homepage-hero.jpg 688w,
        static/homepage/desktop/image-homepage-hero.jpg 1110w"
		sizes="90vw"
		alt="hero"
	/>
	<h2 class="font-heading font-bold text-4xl">
		Hey, I’m James Hannan and I love building beautiful websites
	</h2>
	<button
		class="bg-primary-dark-blue text-secondary-very-light-grey w-[200px] flex items-center font-body text-xs"
		type="button"
	>
		<div class="bg-primary-greyish-blue h-12 w-12 flex px-4 py-[18px]">
			<img src={downArrows} alt="down arrows icon" />
		</div>
		<div class="text-center w-full">About Me</div>
	</button>
</div>
