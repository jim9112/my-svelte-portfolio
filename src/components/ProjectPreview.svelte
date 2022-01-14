<script lang="ts">
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	export let project;
	const clickHandler = () => {
		console.log('view post button click');
	};
</script>

<div>
	<img src={project.mainImage} alt={project.title} />
	<div class="border-y-2 border-secondary-light-grey mt-8 py-6 flex flex-col gap-6">
		<Heading2>{project.title}</Heading2>
		<p class="font-body text-sm">{project.description}</p>
		<Button {clickHandler}>VIEW PROJECT</Button>
	</div>
</div>
