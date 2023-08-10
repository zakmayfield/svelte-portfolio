import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
	const recentWork = await client.fetch(`
		*[_type == 'experience'][0...2]{
			_id,
			slug,
			company,
			image
		}
	`);

	if (!recentWork) {
		throw error(404);
	}

	return {
		recentWork
	};
}
