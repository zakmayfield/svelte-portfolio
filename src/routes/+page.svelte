<script lang="ts">
	import type { RecentWorkSummary } from '$lib/sanity';
	import { urlFor, navigate } from '$lib/utils';
	import Container from '../shared/components/Container.svelte';
	export let data: { recentWork: RecentWorkSummary[] };

	function handleNavigate(route: string) {
		navigate(`/experience/${route}`);
	}
</script>

<!-- hero -->
<div
	class="h-[80vh] mb-24 bg-gradient-to-b from-orange-600 to-white flex items-center relative overflow-hidden"
/>

<!-- intro -->
<section>
	<Container classes="max-w-3xl p-0">
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
<section class="my-24">
	<Container classes="max-w-3xl p-0">
		<h3 class="text-xl mb-6">Recent work</h3>
		<Container classes="max-w-3xl grid grid-cols-2 justify-items-center">
			{#if data.recentWork}
				{#each data.recentWork as x}
					<div
						role="button"
						on:click={() => handleNavigate(x.slug.current)}
						on:keypress={() => handleNavigate(x.slug.current)}
						tabindex="0"
						class="relative flex justify-center items-center cursor-pointer shadow-md rounded-lg overflow-hidden w-[300px]"
					>
						<img
							src={urlFor(x.image).width(300).height(150).url()}
							alt="Cover image for {x.company}"
							class="object-cover h-full object-center"
						/>
						<div
							class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 hover:bg-opacity-60"
						>
							<h4 class="text-white tracking-wide font-thin">
								{x.company}
							</h4>
						</div>
					</div>
				{/each}
			{/if}
		</Container>
	</Container>
</section>
