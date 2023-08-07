<script>
	export let data;
	const exp = data.experience;
</script>

{#if exp}
	<h1>{exp.company}</h1>
	<h2>{exp.workTitle}</h2>

	{#each exp.tags as tag}
		<li>{tag}</li>
	{/each}

	<p>{exp.description}</p>
	<p>{exp.challenges}</p>
{/if}
