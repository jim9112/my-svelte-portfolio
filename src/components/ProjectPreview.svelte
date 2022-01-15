<script lang="ts">
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	import Body1 from './global/Body1.svelte';
	import { goto } from '$app/navigation';

	interface IProject {
		mainImage: string;
		title: string;
		description: string;
	}

	// individual project object
	export let project: IProject;

	export let index: number;

	// click handler for view project button
	const clickHandler = () => {
		goto(`/project/${index}`);
	};
	const styles = {
		even: 'sm:flex-row',
		odd: 'sm:flex-row-reverse'
	};
</script>

<div class={`flex flex-col sm:gap-16 ${index % 2 === 0 ? styles.even : styles.odd}`}>
	<img
		class="sm:object-cover sm:w-[339px] sm:h-[319px"
		src={project.mainImage}
		alt={project.title}
	/>
	<div class="border-y-2 border-secondary-light-grey mt-8 py-6 flex flex-col gap-6 sm:mt-0">
		<Heading2>{project.title}</Heading2>
		<Body1>{project.description}</Body1>
		<Button {clickHandler}>VIEW PROJECT</Button>
	</div>
</div>
