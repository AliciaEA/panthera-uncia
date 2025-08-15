<script>
    let snowPileClicked = false;
    let dialogueIndex = 0;
    let dialogues = [
        "¡Uh! ¿Qué es eso de ahí?",
        "¿Qué será eso?",
        "¿Por qué tiene otro color?",
    ];
    let cubDialogue = dialogues[dialogueIndex];

    function revealCub() {
        if (!snowPileClicked) {
            snowPileClicked = true;
            let next = 1;
            const interval = setInterval(() => {
                if (next < dialogues.length) {
                    cubDialogue = dialogues[next];
                    next++;
                } else {
                    clearInterval(interval);
                }
            }, 1800);
        }
    }
</script>

<section class="interactive-section">
    
    <div class="scene-wrapper">
        <img
            src="src/lib/assets/found-panth.png"
            alt="Panthera cub"
            class="panthera-cub"
            style="bottom: 120px; left: 50%; transform: translateX(-50%); position: absolute; z-index: 3;"
        />
        {#if !snowPileClicked}
            <div class="cub-dialogue">
                <p>{cubDialogue}</p>
            </div>
        {/if}
        <button
            type="button"
            class="snow-pile-btn"
            on:click={revealCub}
            aria-label="Descubrir panterita"
        >
            <img
                src="src/lib/assets/snow-pile.png"
                alt="Snow pile"
                class="snow-pile"
            />
        </button>

        {#if snowPileClicked}
            <img
                src="/images/panthera-cub.png"
                alt="Panthera cub"
                class="panthera-cub"
                style="position: absolute; bottom: 80px; left: 60%; transform: translateX(-50%); z-index: 4;"
            />
        {/if}
    </div>
    <div class="back-button-wrapper">
        <a href="/" class="back-button"> Back to Facts</a>
    </div>
</section>

<style>
    .interactive-section {
        min-height: 100vh;
    background: url("src/lib/assets/interactive-snow-floor.svg") center center / cover no-repeat;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        position: relative;
        overflow: hidden;
        z-index: -1;
    }
    .scene-wrapper {
        position: relative;
        width: 100vw;
        max-width: 500px;
        height: 350px;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: none;
    }
    
    .cub-dialogue {
        background-color: rgba(255, 255, 255, 0.95);
        color: #333;
        padding: 0.7rem 1.2rem;
        border-radius: 1.5rem;
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
        font-weight: 500;
        font-size: 1rem;
        z-index: 100;
        max-width: 90vw;
        text-align: center;
    }
    .panthera-cub {
        width: 90px;
        height: auto;
        z-index: 3;
        position: absolute;
    }
    .snow-pile {
        width: 70px;
        height: auto;
        z-index: 2;
        position: absolute;
    }
    .snow-pile-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}
    .back-button-wrapper {
        margin-top: 2rem;
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
