<!-- load params from dynamic route -->
<script context="module">
	export const load = ({ params }) => {
		const id = params.id;
		return {
			props: {
				id
			}
		};
	};
</script>

<script lang="ts">
	import { projects } from '../../stores/projects';
	import Heading2 from '../../components/global/Heading2.svelte';
	import Body2 from '../../components/global/Body2.svelte';
	export let id: string;

	// delete after page is built
	console.log($projects[id]);
	// get project to display from global state
	const project = $projects[id];
</script>

<section class="px-8">
	{#if project.data}
		<img src={project.data.featured_image.url} alt="" />
		<div class="border-y-2 border-secondary-light-grey py-6">
			<Heading2>{project.data.project_name[0].text}</Heading2>
			<Body2>{project.data.project_description[0].text}</Body2>
		</div>
	{/if}
</section>
