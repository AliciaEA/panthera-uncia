<script>
    // Remove unused animation imports if not used in markup
    // import { cubicOut } from "svelte/easing";
    // import { fly } from "svelte/animate";
    // import { slide } from "svelte/animate";

    export let facts = [];

    let currentFactIndex = 0;
    let viewedFacts = new Set();

    $: currentFact = facts.length === 0 ? null : facts[currentFactIndex];

    // if all facts have been viewed
    $: allFactsViewed = viewedFacts.size === facts.length && facts.length > 0;
    // true if there is a previous fact to show
    $: showPrev = currentFactIndex > 0;
    // true if there is a next fact to show
    $: showNext = currentFactIndex < facts.length - 1;

    // Move to the next/prev fact and Adds the fact to the set of viewed facts.

    function nextFact() {
        if (showNext) {
            currentFactIndex++;
        }
    }

    function prevFact() {
        if (showPrev) {
            currentFactIndex--;
        }
    }

    // When currentFact changes, mark it as viewed and update document title
    $: if (currentFact && currentFact.id !== undefined) {
        viewedFacts.add(currentFact.id);
        document.title = currentFact.title
            ? `Fact: ${currentFact.title}`
            : "Panthera Uncia";
    }

    // Easter egg logic
    import { onMount, onDestroy } from "svelte";
    // Boolean: true if the easter egg should be shown
    let showEasterEgg = false;
    // Timer reference for easter egg display
    let easterEggTimer;

    /**
     * Randomly triggers the easter egg with a 5% chance when the component mounts.
     * The easter egg is shown for 2 seconds, then hidden.
     */
    function triggerEasterEgg() {
        if (Math.random() < 0.05) {
            showEasterEgg = true;
            easterEggTimer = setTimeout(() => {
                showEasterEgg = false;
            }, 2000);
        } else {
            showEasterEgg = false;
        }
    }

    // Run the easter egg trigger when the component mounts
    onMount(() => {
        triggerEasterEgg();
    });

    // Clean up the timer if the component is destroyed
    onDestroy(() => {
        if (easterEggTimer) clearTimeout(easterEggTimer);
    });
</script>

<svelte:head>
    <title>Panthera Uncia - Inicio</title>
</svelte:head>

<div class="fact-panel-container">
    <img src="src/lib/assets/paws.png" alt="panthera-uncia paws" class="paws-decoration"/>
    <div class="fact-content">
        <h3>{currentFact.title}</h3>
        <p>{currentFact.description}</p>

        {#if showEasterEgg}
            <div class="easter-egg">
                <p>🐾 You've discovered a hidden message! 🐾</p>
            </div>
        {/if}

        <!-- Fact navigation controls: Prev, Next, Dots -->
        <div class="fact-navigation-controls">
            {#if showPrev}
                <button on:click={prevFact} class="nav-button">Previous</button>
            {/if}
           
            <div class="progress-dots">
                {#each facts as fact, index (fact.id)}
                    <span
                        class="dot {currentFactIndex === index ? 'active' : ''}"
                    ></span>
                {/each}
            </div>

            {#if showNext}
                <button on:click={nextFact} class="nav-button">Next</button>
            {/if}
        </div>
    </div>

    {#if allFactsViewed}
        <div transition:slide="{{ axis: 'y', duration: 800, easing: cubicOut }}" class="interactive-button-wrapper">
            <a href="" class="interactive-button">
                <img src="src/lib/assets/planet.png" alt="Little planet" class="planet-icon" />
                Meet with Panthera Uncia!
            </a>


        </div>
    {/if}
</div>

<style>
    .fact-panel-container {
        position: relative;
        background-color: #f3f4f6; /* bg-gray-100 */
        padding: 2rem;
        border-radius: 0.5rem; /* rounded-lg */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
        max-width: 48rem; /* max-w-2xl */
        margin: 4rem auto 0 auto; /* mt-16 mx-auto */
        z-index: 10;
    }

    .paws-decoration {
        position: absolute;
        bottom: 1rem; /* bottom-4 */
        left: 1rem; /* left-4 */
        width: 5rem; /* w-20 */
        height: auto;
        opacity: 0.7;
    }
    .fact-content {
        margin-top: 7rem; /* mt-28 */
        text-align: center;
    }

    .fact-content h3 {
        font-size: 1.5rem; /* text-2xl */
        font-weight: bold;
        color: #1f2937; /* text-gray-800 */
        margin-bottom: 1rem;
    }

    .fact-content p {
        font-size: 1.125rem; /* text-lg */
        color: #374151; /* text-gray-700 */
        line-height: 1.625; /* leading-relaxed */
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .easter-egg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fcd34d; /* bg-yellow-300 */
        color: #92400e; /* text-yellow-900 */
        padding: 0.25rem 0.75rem;
        border-radius: 9999px; /* rounded-full */
        font-size: 0.875rem; /* text-sm */
        font-weight: 600; /* font-semibold */
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .5; }
    }

    .fact-navigation-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem; /* mt-6 */
        gap: 1rem; /* space-x-4 */
    }

    .nav-button {
        padding: 0.5rem;
        border-radius: 9999px; /* rounded-full */
        background-color: #3b82f6; /* bg-blue-500 */
        color: white;
        border: none;
        cursor: pointer;
        opacity: 1;
        transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }

    .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-button:hover:not(:disabled) {
        background-color: #2563eb; /* hover:bg-blue-600 */
    }

    .progress-dots {
        display: flex;
        gap: 0.5rem; /* space-x-2 */
    }

    .dot {
        width: 0.75rem; /* w-3 */
        height: 0.75rem; /* h-3 */
        border-radius: 9999px; /* rounded-full */
        background-color: #d1d5db; /* bg-gray-300 */
    }

    .dot.active {
        background-color: #3b82f6; /* bg-blue-500 */
    }

    .interactive-button-wrapper {
        margin-top: 2rem; /* mt-8 */
        text-align: center;
    }

    .interactive-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 2rem; /* px-8 py-3 */
        font-weight: bold;
        color: white;
        background-color: #22c55e; /* bg-green-600 */
        border-radius: 9999px; /* rounded-full */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
        transition: background-color 0.15s ease-in-out, transform 0.15s ease-in-out;
    }

    .interactive-button:hover {
        background-color: #16a34a; /* hover:bg-green-700 */
        transform: scale(1.05); /* hover:scale-105 */
    }

    .planet-icon {
        position: absolute;
        left: -1.5rem; /* -left-6 */
        width: 2.5rem; /* w-10 */
        height: 2.5rem; /* h-10 */
        animation: vibrate 1.5s infinite; /* animate-pulse-slow custom animation */
    }

    @keyframes vibrate {
        0% { transform: translateX(0) translateY(0) rotate(0deg); }
        25% { transform: translateX(-1px) translateY(1px) rotate(-1deg); }
        50% { transform: translateX(1px) translateY(-1px) rotate(1deg); }
        75% { transform: translateX(-1px) translateY(1px) rotate(-1deg); }
        100% { transform: translateX(0) translateY(0) rotate(0deg); }
    }
</style>
