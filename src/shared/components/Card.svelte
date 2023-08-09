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
	class="cursor-pointer rounded-md p-2 shadow-md"
>
	<img
		class=""
		src={urlFor(exp.image).width(500).height(300).url()}
		alt="Cover image for {exp.company}"
	/>

	<h2 class="mt-2 font-semibold">{exp.company}</h2>
	<p class="text-sm mt-2 mb-6">{exp.workTitle}</p>

	<ul class="flex flex-wrap gap-2 gap-y-1 text-xs">
		{#each exp.tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>
</div>
