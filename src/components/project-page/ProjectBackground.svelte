<script lang="ts">
	import Heading2 from '../global/Heading2.svelte';
	import Body2 from '../global/Body2.svelte';

	export let projectBackground: string;
	export let staticPreviews: { static_preview_image: { url: string } }[];

	// console.log(staticPreviews);
</script>

<div class="flex flex-col gap-5">
	{#if projectBackground}
		<Heading2>Project Background</Heading2>
		<Body2>{projectBackground}</Body2>
	{/if}
	{#if staticPreviews.length > 0}
		<Heading2>Static Previews</Heading2>
		{#each staticPreviews as preview}
			<img src={preview.static_preview_image.url} alt="static preview" />
		{/each}
	{/if}
</div>
