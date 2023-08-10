import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';

import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Please include projet ID and dataset.');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2023-08-04',
	useCdn: false
});

export interface Experience {
	_type: 'experience';
	_id: string;
	slug: Slug;
	company: string;
	workTitle: string;
	tags: string;
	description: string;
	challenges: string;
	image: ImageAsset;
	url: string;
}

export type RecentWorkSumary = Omit<
	Experience,
	'workTitle' | 'tags' | 'description' | 'challenges' | 'url'
>;
