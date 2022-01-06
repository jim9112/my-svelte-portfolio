<script>
	export let clickHandler;
</script>

<button
	type="button"
	class="w-fit py-4 px-8 border-[1px] border-primary-greyish-blue text-xs font-body"
	on:click={clickHandler}
>
	<slot />
</button>
