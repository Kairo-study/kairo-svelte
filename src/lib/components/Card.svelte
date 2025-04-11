<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  export let card: card;
  let flipped = false;

  function flip() {
    flipped = !flipped;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ') {
      flip();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="card"
in:fly={{ x: 200, opacity: 0, duration: 300 }}
out:fly={{ x: -200, opacity: 0, duration: 300 }}
role="button"
tabindex="0"
on:click={flip}
on:keydown={handleKeydown}>
  <div class="card-inner {flipped ? 'flipped' : ''}">
    <div class="face front">
      <h2 class="question">{card.question}</h2>
    </div>
    <div class="face back">
      <h2 class="answer">{card.answer}</h2>
    </div>
  </div>
</div>

<style>
  .card {
    perspective: 1000px;
    position: absolute;
    width: 500px;
    height: 320px;
    cursor: pointer;
    transform-style: preserve-3d;
  }
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.3s;
    transform-style: preserve-3d;
  }
  .card-inner.flipped {
    transform: rotateX(180deg);
  }
  .face {
    position: absolute;
    backface-visibility: hidden;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    width: 500px;
    height: 320px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .front {
    backface-visibility: hidden;
  }
  .back {
    backface-visibility: hidden;
    transform: rotateX(180deg);
  }
  .question {
    text-align: center;
    font-size: 40px;
  }
  .answer {
    text-align: center;
    font-size: 20px;
  }
</style>

