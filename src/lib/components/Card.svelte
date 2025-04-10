<script lang="ts">
  import { onMount } from 'svelte';
  export let card: card;
  let showAnswer = false;

  function show() {
    showAnswer = !showAnswer;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ') {
      show();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="card"
role="button"
tabindex="0"
on:click={show}
on:keydown={handleKeydown}>
  <h2 class="question">{showAnswer ? card.answer : card.question}</h2>
</div>

<style>
  .card {
    border: 1px solid #dddddd;
    width: 500px;
    height: 320px;
    padding: auto;
    margin: 5px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .question {
    text-align: center;
    font-size: 40px;
  }
</style>

