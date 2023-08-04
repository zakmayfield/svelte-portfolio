<script>
	export let data;
</script>

<h1>Welcome</h1>

{#if data.pets && data.pets.length}
	{#each data.pets as { name }}
		<li>{name}</li>
	{/each}
{/if}
