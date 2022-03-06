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
	import ProjectSummary from '../../components/project-page/ProjectSummary.svelte';
	import ProjectBackground from '../../components/project-page/ProjectBackground.svelte';
	import ContactMe from '../../components/ContactMe.svelte';
	import ProjectNav from '../../components/project-page/ProjectNav.svelte';
	import { afterUpdate } from 'svelte';
	export let id: string;
	export let projects;
	// get project for current page
	let project = projects[id];
	// console.log(project);
	let idInt = parseInt(id);

	const updatVariables = () => {
		project = projects[id];
		idInt = parseInt(id);

		if (idInt === 0) {
			prev.id = projects.length - 1;
			prev.name = projects[projects.length - 1]?.data?.project_name[0]?.text;
		} else {
			prev.id = idInt - 1;
			prev.name = projects[idInt - 1]?.data?.project_name[0]?.text;
		}
		if (idInt + 1 > projects.length - 1) {
			next.id = 0;
			next.name = projects[0]?.data?.project_name[0]?.text;
		} else {
			next.id = idInt + 1;
			next.name = projects[idInt + 1]?.data?.project_name[0]?.text;
		}
	};

	let prev = { id: 0, name: '' };
	let next = { id: 0, name: '' };

	updatVariables();

	afterUpdate(() => {
		updatVariables();
	});
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
			<ProjectBackground
				projectBackground={project.data.project_background}
				staticPreviews={project.data.static_previews}
			/>
		</div>
	{/if}
	<ProjectNav {prev} {next} />
	<ContactMe />
</section>
