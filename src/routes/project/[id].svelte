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
		<div class="py-28">
			<div class="border-y-2 border-secondary-light-grey py-6 w-[350px]">
				<Heading2>{project.data.project_name[0].text}</Heading2>
				<Body2>{project.data.project_description[0].text}</Body2>
				<div class="flex gap-2 pt-5">
					<a href={project.data.live_site_link.url} target="blank"
						><LinkText>VISIT WEBSITE</LinkText></a
					>
					<a href={project.data.github_repo_link.url} target="blank"
						><LinkText>VISIT REPO</LinkText></a
					>
				</div>
			</div>
		</div>
	{/if}
</section>
