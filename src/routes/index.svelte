<script>
	import AboutMe from '../components/AboutMe.svelte';
	import IntroBanner from '../components/IntroBanner.svelte';
	import ContactMe from '../components/ContactMe.svelte';
	import { projects } from '../stores/projects';
</script>

<main class="px-8 lg:px-40">
	<IntroBanner />
	<AboutMe />
	<ContactMe />
</main>
