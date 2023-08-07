<script>
	export let data;
</script>

<h1>Experience</h1>

{#if data.allExperience.length}
	{#each data.allExperience as { company, slug }}
		<li><a href={`/experience/${slug.current}`}>{company}</a></li>
	{/each}
{/if}
