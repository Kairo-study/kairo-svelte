import type { cards } from '$lib/types';

export async function getCards() {
	const res = await fetch('http://localhost:8000/cards');
	const cards: card[] = await res.json();
    return cards;
}

