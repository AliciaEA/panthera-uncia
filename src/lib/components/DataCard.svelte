<script>
  // DataCard: Animated number card
  // - Shows a number that counts up when the card enters the viewport
  // - Uses IntersectionObserver to trigger animation once
  // - Props: finalValue (target number), duration (animation ms), description (text)
  import { onMount } from "svelte";

    export let finalValue = 0;
    export let duration = 2000;
    export let description = "";

    let count = 0;
    let element;

    function animateCount() {
        let start = 0;
        const increment = finalValue / (duration / 16);

        function update() {
            start += increment;
            if (start < finalValue) {
                count = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                count = finalValue;
            }
        }
        update();
    }

  // Start animation when card is visible
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(element);
  });
</script>

<div class="card" bind:this={element}>
  <h2 class="number">{count}</h2>
  <p class="text">{description}</p>
</div>

<style>
  .card {
    background: rgb(189, 209, 223);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(4, 36, 44, 0.25);
    text-align: center;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  .number {
    font-size: 2rem;
    font-weight: bold;
    color: #222;
    margin: 0 0 0.5rem 0;
  }

  .text {
    font-size: 1rem;
    color: #555;
    margin: 0;
    line-height: 1.4;
  }
</style>

