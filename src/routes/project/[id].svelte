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
	console.log($projects[id]);
	const project = $projects[id];
</script>

<div>
	<h1>Individual project page</h1>
	{project.title}
</div>
