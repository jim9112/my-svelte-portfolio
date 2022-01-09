<script>
	import me from '/me.jpg';
	import Button from '../components/Button.svelte';
	import { goto } from '$app/navigation';

	const onClick = () => {
		goto('/portfolio');
	};
</script>

<section class="pt-24">
	<div id="aboutMe">
		<img src={me} alt="James Hannan" />
	</div>
	<div class="flex flex-col gap-8 border-t-2 border-secondary-light-grey mt-8 pt-8">
		<h1 class="font-heading font-bold text-4xl text-primary-greyish-blue">About Me</h1>
		<p class="font-body text-base">
			I’m a junior front-end developer looking for a new role in an exciting company. I mostly use
			React, but I can adapt to whatever tools are required. I’m based in Wilton, NH, but I’m happy
			working remotely and have experience in remote teams. When I’m not coding, you’ll find me
			cycling, hiking or skiing. I’d love you to check out my work.
		</p>
		<Button clickHandler={onClick}>GO TO PORTFOLIO</Button>
	</div>
</section>
