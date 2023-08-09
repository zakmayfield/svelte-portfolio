import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
	const experience = await client.fetch(`
		*[_type == 'experience']{
			_id,
			slug,
			company,
			workTitle,
			tags,
			description,
			challenges,
			image
		}
	`);

	if (!experience) {
		throw error(404);
	}

	return {
		experience
	};
}
