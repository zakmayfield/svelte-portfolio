<script lang="ts">
	import type { RecentWorkSummary } from '$lib/sanity';
	import Container from '../shared/components/Container.svelte';
	export let data: { recentWork: RecentWorkSummary[] };

	function handleClick(x: RecentWorkSummary) {
		console.log(x);
	}
</script>

<!-- hero -->
<div
	class="h-[80vh] bg-gradient-to-b from-orange-600 to-white flex items-center relative overflow-hidden"
/>

<!-- intro -->
<section>
	<Container classes="max-w-2xl p-0">
		<h3 class="text-xl mb-6">Thanks for stopping by</h3>

		<Container classes="max-w-xl p-0 flex flex-col gap-6">
			<p>
				My name is Zachary, I am a US/Canada based front end TypeScript developer, with a knowledge
				of Node.js backend architecture. I love building with the latest tech and Im constantly
				learning.
			</p>
			<p>
				I have worked on projects with tech such as TypeScript, React (Next.js/Remix), Express, and
				CSS-in-JS libraries. Im familiar with RESTful & GraphQL server architecture & I prefer
				working with relational databases like Postgres, I enjoy working with ORMs like Prisma to
				help ease the pain of SQL.
			</p>
		</Container>
	</Container>
</section>

<!-- recent projects -->
<section>
	{#if data.recentWork}
		{#each data.recentWork as x}
			<div
				role="button"
				on:click={() => handleClick(x)}
				on:keypress={() => handleClick(x)}
				tabindex="0"
			>
				{x.company}
			</div>
		{/each}
	{/if}
</section>
