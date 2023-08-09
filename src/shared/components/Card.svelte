<script lang="ts">
	import { navigate } from '$lib/utils';
	import type { Experience } from '$lib/sanity';
	export let exp: Experience;

	function handleNavigate() {
		navigate(`/experience/${exp.slug.current}`);
	}
</script>

<div
	on:click={handleNavigate}
	on:keypress={handleNavigate}
	tabindex="0"
	role="link"
	class="cursor-pointer"
>
	<h2>{exp.company}</h2>

	<p>{exp.workTitle}</p>
	<ul class="flex gap-6">
		{#each exp.tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>

	<h3>Description</h3>
	<p>{exp.description}</p>

	<h3>Challenges</h3>
	<p>{exp.challenges}</p>
</div>
