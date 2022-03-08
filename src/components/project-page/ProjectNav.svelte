<script lang="ts">
	import arrowLeft from '/icons/arrow-left.svg';
	import arrowRight from '/icons/arrow-right.svg';
	interface INav {
		id: number;
		name: string;
	}
	export let prev: INav;
	export let next: INav;
</script>

<nav class="grid grid-cols-2 border-y-2 border-secondary-light-grey divide-x-2">
	<div class="py-8">
		<a href={`/project/${prev.id.toString()}`}>
			<div class="flex gap-8">
				<div class="grid place-items-center">
					<img src={arrowLeft} alt="left arrow" />
				</div>
				<div class="flex flex-col hover:text-primary-cyan">
					<span class="text-4xl">{prev.name}</span>
					<span>Previous Project</span>
				</div>
			</div>
		</a>
	</div>
	<div class="py-8">
		<a href={`/project/${next.id.toString()}`}>
			<div class="flex justify-end gap-8">
				<div class="flex flex-col text-right hover:text-primary-cyan">
					<span class="text-4xl">{next.name}</span>
					<span>Next Project</span>
				</div>
				<div class="grid place-items-center">
					<img src={arrowRight} alt="right arrow" />
				</div>
			</div>
		</a>
	</div>
</nav>
