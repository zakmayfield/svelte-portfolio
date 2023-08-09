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
</div>
