<script lang="ts">
	export let project;
</script>

<div>
	<img src={project.mainImage} alt={project.title} />
	<h1>{project.title}</h1>
	<p>{project.description}</p>
</div>
