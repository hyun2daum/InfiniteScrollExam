import { writable } from 'svelte/store';

export const items = writable([]);
export const loading = writable(false);
export const page = writable(1);
