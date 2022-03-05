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
	import ProjectSummary from '../../components/project-page/ProjectSummary.svelte';
	export let id: string;
	export let projects;

	// get project for current page
	let project = projects[id];
	// console.log(project);
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
			<ProjectSummary
				projectDescription={project?.data?.project_description[0]?.text}
				projectName={project?.data?.project_name[0]?.text}
				liveSiteLink={project?.data?.live_site_link?.url}
				githubRepoLink={project?.data?.github_repo_link?.url}
				technologiesUsed={project.data?.technologies_used}
			/>
			<div>
				{#if project.data.project_background}
					<Heading2>Project Background</Heading2>
					<Body2>{project.data.project_background}</Body2>
				{/if}
			</div>
		</div>
	{/if}
</section>
