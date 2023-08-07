<script>
	export let data;
</script>

<h1>Welcome</h1>

{#if data.experience.length}
	{#each data.experience as { company, slug }}
		<li><a href={`/project/${slug.current}`}>{company}</a></li>
	{/each}
{/if}
