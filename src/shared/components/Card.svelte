<script lang="ts">
	import { navigate, urlFor } from '$lib/utils';
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
	<img
		class=""
		src={urlFor(exp.image).width(500).height(300).url()}
		alt="Cover image for {exp.company}"
	/>
	<h2>{exp.company}</h2>

	<p>{exp.workTitle}</p>
	<ul class="flex gap-6">
		{#each exp.tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>
</div>
