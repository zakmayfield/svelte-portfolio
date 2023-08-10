<script>
	import { IconExternalLink } from '@tabler/icons-svelte';
	import { urlFor } from '$lib/utils';
	import Container from '../../../shared/components/Container.svelte';

	export let data;
	const exp = data.experience;
</script>

<Container classes="max-w-3xl">
	{#if exp}
		<div class="flex items-center gap-6">
			<h1 class="font-semibold text-lg">{exp.company}</h1>
			<a rel="external" target="_blank" href={exp.url}>
				<IconExternalLink size={24} />
			</a>
		</div>
		<h2 class="mb-6 font-light">{exp.workTitle}</h2>

		<div class="grid grid-cols-3 gap-6 mb-6">
			<img
				src={urlFor(exp.image).width(500).height(300).url()}
				alt="Cover image for {exp.company}"
				class="col-span-2 rounded-md"
			/>

			<div class="col-span-1">
				<h3 class="text-lg font-semibold mb-2">Stack</h3>
				<ul class=" flex flex-col gap-2 font-light">
					{#each exp.tags as tag}
						<li class="border-2 border-slate-300 bg-slate-100 rounded-md p-2">{tag}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="mb-6">
			<h4 class="mb-3 font-semibold">Description</h4>
			<p class="tracking-wide">{exp.description}</p>
		</div>

		<div>
			<h4 class="mb-3 font-semibold">Challenges</h4>
			<p class="tracking-wide">{exp.challenges}</p>
		</div>
	{/if}
</Container>
