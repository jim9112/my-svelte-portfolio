<script lang="ts">
	import LinkText from '../global/LinkText.svelte';
	import Heading2 from '../global/Heading2.svelte';
	import Body2 from '../global/Body2.svelte';
	import { afterUpdate } from 'svelte';

	export let liveSiteLink: string;
	export let githubRepoLink: string;
	export let projectName: string;
	export let projectDescription: string;
	export let technologiesUsed: { technology: string }[];

	let techList: string;

	const updateTechlist = () => {
		if (technologiesUsed) {
			techList = technologiesUsed.map((tech) => tech.technology).join(' / ');
		}
	};

	updateTechlist();

	afterUpdate(() => updateTechlist());
</script>

<div
	class="flex flex-col gap-5 border-y-2 border-secondary-light-grey py-6 min-w-full lg:min-w-[400px] h-fit"
>
	<Heading2>{projectName}</Heading2>
	<Body2>{projectDescription}</Body2>
	{#if techList}
		<p class="text-primary-cyan text-base font-bold">{techList}</p>
	{/if}
	<div class="flex gap-2 py-5">
		{#if liveSiteLink}
			<a href={liveSiteLink} target="blank"><LinkText>VISIT WEBSITE</LinkText></a>
		{/if}
		{#if githubRepoLink}
			<a href={githubRepoLink} target="blank"><LinkText>VISIT REPO</LinkText></a>
		{/if}
	</div>
</div>
