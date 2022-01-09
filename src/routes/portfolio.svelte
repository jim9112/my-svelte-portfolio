<script lang="ts">
	import ProjectPreview from '../components/ProjectPreview.svelte';
	import { projects } from '../stores/projects';
	console.log($projects);
</script>

<div class="px-8">
	{#each $projects as project}
		<ProjectPreview {project} />
	{/each}
</div>
