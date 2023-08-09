import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { goto } from '$app/navigation';

export function merge(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function navigate(route: string) {
	goto(route);
}
