<script lang="ts">
	import LinkText from './global/LinkText.svelte';
	import Heading2 from '../components/global/Heading2.svelte';
	import Body1 from './global/Body1.svelte';
	export let headshot: string;
</script>

<section class="pt-24 flex flex-col sm:flex-row sm:gap-16">
	<div id="aboutMe" class="sm:min-w-max">
		<img class="sm:object-cover sm:w-[281px] sm:h-[600px]" src={headshot} alt="James Hannan" />
	</div>
	<div
		class="flex flex-col gap-8 border-y-2 border-secondary-light-grey mt-8 sm:mt-0 py-8 sm:pt-12"
	>
		<Heading2>About Me</Heading2>
		<Body1>
			I’m a front-end developer based in Wilton, NH. I mostly use React, but I can adapt to whatever
			tools are required. I have experience working in HTML, CSS, JavaScript, TypeScript, WordPress,
			and PHP. When I’m not coding, you’ll find me cycling, hiking or skiing. I’d love you to check
			out my work.
		</Body1>
		<a href="/portfolio"><LinkText>GO TO PORTFOLIO</LinkText></a>
	</div>
</section>
