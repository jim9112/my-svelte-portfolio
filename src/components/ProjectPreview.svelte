<script lang="ts">
	import Button from './global/Button.svelte';
	import Heading2 from './global/Heading2.svelte';
	import Body1 from './global/Body1.svelte';
	import { goto } from '$app/navigation';

	interface IProject {
		data: {
			featured_image: {
				url: string;
			};
			project_name: {
				text: string;
			}[];
			project_description: {
				text: string;
			}[];
		};
	}

	// individual project object
	export let project: IProject;

	export let index: number;
	// click handler for view project button
	const clickHandler = () => {
		goto(`/project/${index}`);
	};

	// dynamic styling
	const styles = {
		even: 'sm:flex-row lg:pr-36',
		odd: 'sm:flex-row-reverse lg:pl-36'
	};
</script>

<div
	class={`flex flex-col sm:gap-8 lg:gap-[125px] ${
		index % 2 === 0 ? styles.even : styles.odd
	} lg:max-w-7xl `}
>
	<img
		class="sm:object-cover sm:w-[339px] sm:h-[319px"
		src={project.data.featured_image.url}
		alt={project.data.project_name[0].text}
	/>
	<div class="border-y-2 border-secondary-light-grey mt-8 py-6 flex flex-col gap-6 sm:mt-0">
		<Heading2>{project.data.project_name[0].text}</Heading2>
		<Body1>{project.data.project_description[0].text}</Body1>
		<Button {clickHandler}>VIEW PROJECT</Button>
	</div>
</div>
