<script lang="ts">
  import homeicon from '$lib/assets/home.webp?enhanced';
  import cardsicon from '$lib/assets/cards.webp?enhanced';
</script>

<div class="bg-white flex flex-col fixed min-h-full max-w-20 top-0 left-0 overflow-x-hidden">
    <a href="http://localhost:5173/"><enhanced:img src={homeicon} alt="Home" /></a>
    <a href="http://localhost:5173/cards"><enhanced:img src={cardsicon} alt="Cards" /></a>
</div>

<style>
a {
  background-color: #ffffff;
  color: #000000;
  padding: 10px;
}
</style>
