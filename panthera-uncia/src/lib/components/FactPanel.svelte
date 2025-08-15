<script>

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
            showEasterEgg = false;
        }
    }

    function prevFact() {
        if (showPrev) {
            currentFactIndex--;
           
        }
    }

    // When currentFact changes, mark it as viewed and update document title
    $: {
        if (currentFact && currentFact.id !== undefined) {
            viewedFacts.add(currentFact.id);
        }
        allFactsViewed = viewedFacts.size === facts.length && facts.length > 0;
    }

    // Easter egg logic
    import { onMount, onDestroy } from "svelte";
    let showEasterEgg = false;
    let easterEggTimer;

    function triggerEasterEgg() {
    if (Math.random() < 0.6) {
        showEasterEgg = true;
    } else {
        showEasterEgg = false;
    }
    }

    onMount(() => {
        triggerEasterEgg();
    });
    

    onDestroy(() => {
        if (easterEggTimer) clearTimeout(easterEggTimer);
    });
</script>

<svelte:head>
    <title>Panthera Uncia - Inicio</title>
</svelte:head>

<div class="fact-panel-container">
    <img src="src/lib/assets/paws.png" alt="panthera-uncia paws" class="paws-decoration" style="pointer-events: none; z-index: 0;"/>
    <div class="fact-content">
        <h3>{currentFact.title}</h3>
        <p>{currentFact.fact}</p>

        <!-- Message Easter egg *(60% chances)-->
        {#if showEasterEgg}
            <div class="easter-egg">
                <p>🐾 You found the Easter Egg! As stealthy as a snow leopard. 🐾</p>
            </div>
        {/if}

        <!-- Fact navigation controls: Prev, Next, Dots -->
        <div class="fact-navigation-controls">
            {#if showPrev}
                <button on:click={prevFact} class="nav-button" aria-label="Previous fact">&#8592;</button>
            {/if}
           
            <div class="progress-dots">
                {#each facts as fact, index (fact.id)}
                    <span
                        class="dot {currentFactIndex === index ? 'active' : ''}"
                    ></span>
                {/each}
            </div>

            {#if showNext}
                <button on:click={nextFact} class="nav-button" aria-label="Next fact">&#8594;</button>
            {/if}
        </div>
    </div>

    {#if allFactsViewed}
        <div class="interactive-button-wrapper">
            <a href="/meetup" class="interactive-button">
                <img src="src/lib/assets/planet.png" alt="Little planet" class="planet-icon" />
                Meet with Panthera Uncia!
            </a>
        </div>
    {/if}
</div>

<style>
    .fact-panel-container {
        position: relative;
        background-color: rgb(232, 236, 240); /* bg-gray-100 */
        padding: 2rem;
        border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 24px 48px -8px rgba(0,0,0,0.32), 0 12px 36px -8px rgba(0,0,0,0.28); /* shadow-xl even stronger */
        max-width: 48rem; /* max-w-2xl */
        margin: 4rem auto 0 auto; /* mt-16 mx-auto */
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .paws-decoration {
        position: absolute;
        bottom: 1rem; /* bottom-4 */
        left: 1rem; /* left-4 */
        width: 7.5rem; /* w-30, bigger paws */
        height: auto;
        opacity: 0.7;
    }
    .fact-content {
        margin-top: 7rem; /* mt-28 */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .easter-egg {
        position: absolute;
        top: 3.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fcd34d; /* bg-yellow-300 */
        color: #92400e; /* text-yellow-900 */
        padding: 10px 0;
        border-radius: 9999px; /* rounded-full */
        font-size: 0.875rem; /* text-sm */
        font-weight: 600; /* font-semibold */
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        z-index: 101;
        
    }
    .easter-egg p {
        margin: 0;
        padding: 0 1rem; /* px-4 */
        text-align: center;
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
        width: 100%;
    }

    .nav-button {
        padding: 0.5rem;
        border-radius: 9999px; /* rounded-full */
        background-color: #3e6d6d; /* bg-blue-500 */
        color: white;
        border: none;
        cursor: pointer;
        opacity: 1;
        transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }

   
   

    .progress-dots {
        display: flex;
        gap: 0.5rem; /* space-x-2 */
        justify-content: center;
        align-items: center;
    }

    .dot {
        width: 0.75rem; /* w-3 */
        height: 0.75rem; /* h-3 */
        border-radius: 9999px; /* rounded-full */
        background-color: #d1d5db; /* bg-gray-300 */
    }

    .dot.active {
        background-color: #506777; /* bg-blue-500 */
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
        background-color: rgb(121, 156, 134);
        border-radius: 9999px; /* rounded-full */
    box-shadow: 0 24px 48px -8px rgba(0,0,0,0.32), 0 12px 36px -8px rgba(0,0,0,0.28); /* shadow-lg even stronger */
        transition: background-color 0.15s ease-in-out, transform 0.15s ease-in-out;
    }

    .interactive-button:hover {
        background-color: #4c6656; /* hover:bg-green-700 */
        transform: scale(1.05); /* hover:scale-105 */
        text-decoration: none;
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
        20% { transform: translateX(-3px) translateY(2px) rotate(-4deg); }
        50% { transform: translateX(4px) translateY(-3px) rotate(5deg); }
        80% { transform: translateX(-3px) translateY(2px) rotate(-4deg); }
        100% { transform: translateX(0) translateY(0) rotate(0deg); }
    }

    @media (max-width: 600px) {
        .fact-panel-container {
            padding: 1rem;
            margin-top: 2rem;
            min-height: 520px;
        }
        .fact-content {
            margin-top: 4rem;
        }
        .paws-decoration {
            bottom: 0.5rem;
            left: 0.5rem;
            width: 5rem;
            z-index: 0;
        }
        .interactive-button-wrapper {
            margin-top: 3.5rem;
            z-index: 2;
            position: relative;
        }
    }
</style>
