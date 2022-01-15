<script lang="ts">
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	import Body1 from './global/Body1.svelte';

	interface IProject {
		mainImage: string;
		title: string;
		description: string;
	}

	// individual project object
	export let project: IProject;

	// click handler for view project button
	const clickHandler = () => {
		console.log('view post button click');
	};
</script>

<div>
	<img src={project.mainImage} alt={project.title} />
	<div class="border-y-2 border-secondary-light-grey mt-8 py-6 flex flex-col gap-6">
		<Heading2>{project.title}</Heading2>
		<Body1>{project.description}</Body1>
		<Button {clickHandler}>VIEW PROJECT</Button>
	</div>
</div>
