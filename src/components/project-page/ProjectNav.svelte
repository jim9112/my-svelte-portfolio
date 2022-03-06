<script lang="ts">
	interface INav {
		id: number;
		name: string;
	}
	export let prev: INav;
	export let next: INav;
</script>

<div>
	<h2>Nav Element</h2>
	<a href={`/project/${prev.id.toString()}`}>Previous Project, {prev.name}</a>
	<a href={`/project/${next.id.toString()}`}>Next Project, {next.name}</a>
</div>
