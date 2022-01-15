<!-- load params from dynamic route -->
<script context="module">
	export const load = ({ params }) => {
		const id = params.id;
		return {
			props: {
				id
			}
		};
	};
</script>

<script lang="ts">
	import { projects } from '../../stores/projects';
	export let id: string;

	// delete after page is built
	console.log($projects[id]);

	// get project to display from global state
	const project = $projects[id];
</script>

<div>
	<h1>Individual project page</h1>
	{project.title}
</div>
