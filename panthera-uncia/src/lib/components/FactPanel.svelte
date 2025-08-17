<script>
    import pawsImg from "$lib/assets/paws.png";
    import planetImg from "$lib/assets/planet.png";
     import { base } from '$app/paths';

    let { facts } = $props();

    let currentFactIndex = $state(0);
    let viewedFacts = $state([]);

    let currentFact = $derived(facts.length === 0 ? null : facts[currentFactIndex]);

    let allFactsViewed = $derived(viewedFacts.length === facts.length && facts.length > 0);
    let showPrev = $derived(currentFactIndex > 0);
    let showNext = $derived(currentFactIndex < facts.length - 1);

    function nextFact() {
        if (showNext) {
            currentFactIndex++;
            // El easter egg solo aparece en el primer fact, nunca más
            showEasterEgg = false;
        }
    }

    function prevFact() {
        if (showPrev) {
            currentFactIndex--;
            // El easter egg solo aparece en el primer fact, nunca más
            showEasterEgg = false;
        }
    }

    $effect(() => {
        if (currentFact && currentFact.id !== undefined) {
            if (!viewedFacts.includes(currentFact.id)) {
                viewedFacts = [...viewedFacts, currentFact.id];
            }
            document.title = `Fact: ${currentFact.title}`;
        }
    });

    import { onMount, onDestroy } from "svelte";
    let showEasterEgg = $state(false);
    let easterEggTimer;

    function triggerEasterEgg() {
        // Solo se llama al inicio, para el primer fact
        if (Math.random() < 0.6) {
            showEasterEgg = true;
        } else {
            showEasterEgg = false;
        }
    }

    onMount(() => {
        // Solo mostrar el easter egg en el primer fact
        if (currentFactIndex === 0) {
            triggerEasterEgg();
        }
    });

    onDestroy(() => {
        if (easterEggTimer) clearTimeout(easterEggTimer);
    });
</script>

<svelte:head>
    <title>Panthera Uncia - Inicio</title>
</svelte:head>

<div class="fact-panel-container">
    <img
        src={pawsImg}
        alt="panthera-uncia paws"
        class="paws-decoration"
        style="pointer-events: none; z-index: 0;"
    />
    <div class="fact-content">
        <h3>{currentFact?.title}</h3>
        <p>{currentFact.fact}</p>

        <!-- Message Easter egg *(60% chances)-->
        {#if showEasterEgg}
            <div class="easter-egg">
                <p>
                    🐾 You found the Easter Egg! As stealthy as a snow leopard.
                    🐾
                </p>
            </div>
        {/if}

        <!-- Fact navigation controls: Prev, Next, Dots -->
        <div class="fact-navigation-controls">
            {#if showPrev}
                <button
                    onclick={prevFact}
                    class="nav-button"
                    aria-label="Previous fact">&#8592;</button>
            {/if}

            <div class="progress-dots">
                {#each facts as fact, index (fact.id)}
                    <span
                        class="dot {currentFactIndex === index ? 'active' : ''}"
                    ></span>
                {/each}
            </div>

            {#if showNext}
                <button
                    onclick={nextFact}
                    class="nav-button"
                    aria-label="Next fact">&#8594;</button>
            {/if}
        </div>
    </div>

    {#if allFactsViewed}
        <div class="interactive-button-wrapper" style="overflow:visible;">
            <a href={base + "/meetup"} class="interactive-button" style="overflow:visible;">
                <img src={planetImg} alt="Little planet" class="planet-icon" style="display:inline-block;" />
                Meet with Panthera Uncia!
            </a>
        </div>
    {/if}
</div>

<style>
    .fact-panel-container {
        position: relative;
        background-color: rgb(232, 236, 240); 
        padding: 2rem;
        border-radius: 0.5rem; 
        box-shadow:
            0 24px 48px -8px rgba(0, 0, 0, 0.32),
            0 12px 36px -8px rgba(0, 0, 0, 0.28);
        max-width: 48rem; 
        margin: 4rem auto 0 auto; 
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .paws-decoration {
        position: absolute;
        bottom: 1rem; 
        left: 1rem; 
        width: 7.5rem; 
        height: auto;
        opacity: 0.7;
    }
    .fact-content {
        margin-top: 7rem; 
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .fact-content h3 {
        font-size: 1.5rem; 
        font-weight: bold;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .fact-content p {
        font-size: 1.125rem; 
        color: #374151; 
        line-height: 1.625; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .easter-egg {
        position: absolute;
        top: 3.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fcd34d; 
        color: #92400e; 
        padding: 10px 0;
        border-radius: 9999px; 
        font-size: 0.875rem;
        font-weight: 600; 
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06); 
        animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        z-index: 101;
    }
    .easter-egg p {
        margin: 0;
        padding: 0 1rem; 
        text-align: center;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .fact-navigation-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem; 
        gap: 1rem; 
        width: 100%;
    }

    .nav-button {
        padding: 0.5rem;
        border-radius: 9999px; 
        background-color: #3e6d6d; 
        color: white;
        border: none;
        cursor: pointer;
        opacity: 1;
        transition:
            background-color 0.15s ease-in-out,
            opacity 0.15s ease-in-out;
    }

    .progress-dots {
        display: flex;
        gap: 0.5rem; 
        justify-content: center;
        align-items: center;
    }

    .dot {
        width: 0.75rem; 
        height: 0.75rem; 
        border-radius: 9999px; 
        background-color: #d1d5db; 
    }

    .dot.active {
        background-color: #506777;
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
        padding: 0.75rem 2rem; 
        font-weight: bold;
        color: white;
        background-color: rgb(121, 156, 134);
        border-radius: 9999px; 
        box-shadow:
            0 24px 48px -8px rgba(0, 0, 0, 0.32),
            0 12px 36px -8px rgba(0, 0, 0, 0.28); 
        transition:
            background-color 0.15s ease-in-out,
            transform 0.15s ease-in-out;
    }

    .interactive-button:hover {
        background-color: #4c6656; 
        transform: scale(1.05); /* hover:scale-105 */
        text-decoration: none;
    }

    .planet-icon {
        
        width: 2.5rem; 
        height: 2.5rem; 
        margin-right: 0.7rem;
        animation: vibrate 1.5s infinite;
        vertical-align: middle;
        position: static;
    }

    @keyframes vibrate {
        0% {
            transform: translateX(0) translateY(0) rotate(0deg);
        }
        20% {
            transform: translateX(-3px) translateY(2px) rotate(-4deg);
        }
        50% {
            transform: translateX(4px) translateY(-3px) rotate(5deg);
        }
        80% {
            transform: translateX(-3px) translateY(2px) rotate(-4deg);
        }
        100% {
            transform: translateX(0) translateY(0) rotate(0deg);
        }
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
