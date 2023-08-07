import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	const data = await client.fetch(
		`
    *[_type == 'experience' && slug.current == $slug][0]{
      _id,
      slug,
      company,
      workTitle,
      tags,
      description,
        challenges,
        image
      }
    `,
		{ slug }
	);

	if (!data) {
		throw error(404);
	}

	return {
		experience: data
	};
}
