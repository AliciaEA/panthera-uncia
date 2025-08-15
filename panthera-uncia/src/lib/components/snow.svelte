<script>

  // Works like a snowrain.
  let isSpinning = false;
  let isSnowing = false;
  let snowflakes = [];
  const SNOW_DURATION = 11000; // ms
  const SPIN_DURATION = 1500; // ms
  const SNOWFLAKE_COUNT = 70;

  function handleClick() {
    if (!isSpinning && !isSnowing) {
      isSpinning = true;
      setTimeout(() => {
        isSpinning = false;
        isSnowing = true;
        createSnowflakes();
        setTimeout(() => {
          isSnowing = false;
          snowflakes = [];
        }, SNOW_DURATION);
      }, SPIN_DURATION);
    }
  }

  function createSnowflakes() {
    snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2
    }))
  }
</script>

<style>
.snow-trigger {
  position: fixed;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(circle at 60% 40%, #31036d 70%, #3f3058 100%);
  box-shadow: 0 2px 8px rgba(80,40,120,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: box-shadow 0.2s;
}
.snow-trigger:active {
  box-shadow: 0 4px 16px rgba(80,40,120,0.28);
}
.snow-trigger.spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
.snowflake {
  position: fixed;
  top: 0;
  pointer-events: none;
  color: #fff;
  opacity: 0.85;
  font-size: 16px;
  will-change: transform;
  z-index: 999;
  animation-name: fall;
}
@keyframes fall {
  0% { transform: translateY(-40px) scale(1); opacity: 0.7; }
  80% { opacity: 1; }
  100% { transform: translateY(100vh) scale(1.2); opacity: 0.2; }
}
</style>

<button
  type="button"
  class="snow-trigger {isSpinning ? 'spin' : ''}"
  aria-label="Activar nieve"
  on:click={handleClick}
  on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
>
  <span style="font-size: 2rem; line-height: 1;">❄️</span>
</button>
{#if isSnowing}
  {#each snowflakes as flake}
    <span
      class="snowflake"
      style="left: {flake.left}vw; font-size: {flake.size}px; animation-duration: {flake.duration}s; animation-delay: {flake.delay}s;"
      >❄️</span>
  {/each}
{/if}
