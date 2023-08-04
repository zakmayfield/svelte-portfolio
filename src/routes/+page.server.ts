import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
	const data = await client.fetch(`*[_type == "pet"]`);

	if (!data) {
		throw error(404);
	}

	return {
		pets: data
	};
}
