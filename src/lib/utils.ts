import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { goto } from '$app/navigation';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from '$lib/sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export function merge(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function navigate(route: string) {
	goto(route);
}
