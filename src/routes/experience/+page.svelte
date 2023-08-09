<script lang="ts">
	import Card from '../../shared/components/Card.svelte';
	import Container from '../../shared/components/Container.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Container classes="max-w-3xl">
	<h1>Experience</h1>

	{#if data.experience.length}
		{#each data.experience as exp}
			<Card {exp} />
		{/each}
	{/if}
</Container>
