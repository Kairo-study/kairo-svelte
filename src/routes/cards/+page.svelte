<script lang="ts">
  import { onMount } from 'svelte';
  import { getCards } from '$lib/api';
  import type { card } from '$lib/types';
  import Card from '$lib/components/Card.svelte'

  let cards: card[] = [];

  let index: number = 0;

  onMount(async () => {
    cards = await getCards();
    console.log("Cards loaded:", cards);
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  function next() {
    if (index < cards.length - 1) {
      index += 1;
    }
  }

  async function movecard(id: number, stack: string) {
    const response = await fetch('http://localhost:8000/move', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, stack })
    });
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      console.log("Moved card to know stack")
      movecard(cards[index].id, "know")
      next();
    }
    if (e.key === 'ArrowLeft') {
      console.log("Moved card to forgot stack")
      movecard(cards[index].id, "forgot")
      next();
    }
  }
</script>

{#if cards.length > 0}
  <div class="card-list">
    <Card card={cards[index]} />
  </div>
{:else}
  <p>Loading cards...</p>
{/if}

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>

