<script lang="ts">
	import LinkText from './LinkText.svelte';
	import Heading2 from '../global/Heading2.svelte';
	import Body2 from '../global/Body2.svelte';

	export let liveSiteLink: string;
	export let githubRepoLink: string;
	export let projectName: string;
	export let projectDescription: string;
	export let technologiesUsed: [];
</script>

<div class="border-y-2 border-secondary-light-grey py-6 min-w-[400px]">
	<Heading2>{projectName}</Heading2>
	<Body2>{projectDescription}</Body2>
	<div class="flex gap-2 py-5">
		{#if liveSiteLink}
			<a href={liveSiteLink} target="blank"><LinkText>VISIT WEBSITE</LinkText></a>
		{/if}
		{#if githubRepoLink}
			<a href={githubRepoLink} target="blank"><LinkText>VISIT REPO</LinkText></a>
		{/if}
	</div>
</div>
