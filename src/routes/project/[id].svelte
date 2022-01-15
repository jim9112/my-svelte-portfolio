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
	export let id: string;
</script>

<div>
	<h1>Individual project page</h1>
	{id}
</div>
