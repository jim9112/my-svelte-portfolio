<!-- load params from dynamic route -->
<script context="module">
	import client from '../../utils/client';

	export const load = async ({ params }) => {
		const id = params.id;
		const projects = await client.getAllByType('project');
		return {
			props: {
				id,
				projects
			}
		};
	};
</script>

<script lang="ts">
	import Heading2 from '../../components/global/Heading2.svelte';
	import Body2 from '../../components/global/Body2.svelte';
	import Button from '../../components/global/Button.svelte';
	import { goto } from '$app/navigation';
	export let id: string;
	export let projects;

	let project = projects[id];

	// delete after page is built
	// get project to display from global state

	const clickHandler = () => {
		// goto(project.data.live_site_link.url);
		console.log('click');
	};
</script>

<section class="px-8">
	{#if project}
		<img src={project.data.featured_image.url} alt="" />
		<div class="border-y-2 border-secondary-light-grey py-6">
			<Heading2>{project.data.project_name[0].text}</Heading2>
			<Body2>{project.data.project_description[0].text}</Body2>
			<a href={project.data.live_site_link.url} target="blank"
				><Button {clickHandler}>Visit Website</Button></a
			>
		</div>
	{/if}
</section>
