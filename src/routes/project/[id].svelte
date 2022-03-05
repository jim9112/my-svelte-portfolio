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
	import LinkText from '../../components/project-page/LinkText.svelte';
	import { dataset_dev } from 'svelte/internal';
	export let id: string;
	export let projects;

	let project = projects[id];
	console.log(project);

	// delete after page is built
	// get project to display from global state

	const clickHandler = () => {
		// goto(project.data.live_site_link.url);
		console.log('click');
	};
</script>

<section class="px-40">
	{#if project}
		<div class="h-[500px] w-full relative">
			<img
				class="w-full h-full object-top object-cover"
				src={project.data.featured_image.url}
				alt=""
			/>
		</div>
		<div class="py-28 flex gap-10">
			<div class="border-y-2 border-secondary-light-grey py-6 min-w-[400px]">
				<Heading2>{project?.data?.project_name[0]?.text}</Heading2>
				<Body2>{project?.data?.project_description[0]?.text}</Body2>
				<div class="flex gap-2 py-5">
					{#if project.data.live_site_link.url}
						<a href={project.data.live_site_link.url} target="blank"
							><LinkText>VISIT WEBSITE</LinkText></a
						>
					{/if}
					{#if project.data.github_repo_link}
						<a href={project.data.github_repo_link.url} target="blank"
							><LinkText>VISIT REPO</LinkText></a
						>
					{/if}
				</div>
			</div>
			<div>
				{#if project.data.project_background}
					<Heading2>Project Background</Heading2>
					<Body2>{project.data.project_background}</Body2>
				{/if}
			</div>
		</div>
	{/if}
</section>
