<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen w-full text-primary-greyish-blue bg-secondary-very-light-grey">
	<Nav />
	<slot />
	<Footer />
</div>
