<script context="module">
	import client from '../utils/client';

	export const load = async () => {
		const projects = await client.getAllByType('project');
		return {
			props: {
				projects
			}
		};
	};
</script>

<script lang="ts">
	import ProjectPreview from '../components/ProjectPreview.svelte';
	import ContactMe from '../components/ContactMe.svelte';
	export let projects;
</script>

<main>
	<div class="px-8 flex flex-col gap-16 items-center">
		{#each projects as project, i}
			<ProjectPreview {project} index={i} />
		{/each}
	</div>

	<ContactMe />
</main>
