<script context="module">
	import client from '../utils/client';

	export const load = async ({ params }) => {
		const homeComponents = await client.getSingle('home');
		return {
			props: {
				homeComponents
			}
		};
	};
</script>

<script>
	import AboutMe from '../components/AboutMe.svelte';
	import IntroBanner from '../components/IntroBanner.svelte';
	import ContactMe from '../components/ContactMe.svelte';
	export let homeComponents;
	const heroImage = homeComponents?.data?.hero_image?.url;
	const headshot = homeComponents?.data?.headshot?.url;
</script>

<main class="px-8 lg:px-40">
	<IntroBanner {heroImage} />
	<AboutMe {headshot} />
	<ContactMe />
</main>
