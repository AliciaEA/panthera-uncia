<script>
    import Snow from "$lib/components/snow.svelte";

    import snowPileImg from "$lib/assets/snow-pile.png";
    import foundPantherImg from "$lib/assets/found-panth.png";
    import confusedPantherImg from "$lib/assets/confused-panth.png";
    import fightLeopardImg from "$lib/assets/fight-leopard.png";
   import pineImg from "$lib/assets/pine-footer.png";

    let snowPileClicked = $state(false);
    let dialogueClickedIndex = 0;
    let dialogueNotClickedIndex = 0;

    // Dialogues
    let dialoguesClicked = [
        "Oh, you found it!, Try to pet it!",
        "It seems to like you!",
        "Look, it's purring!",
        "What a cute little creature!",
        "I think it wants to play!",
    ];
    let dialoguesNotClicked = [
        "Uh, what is that?",
        "What could that be?",
        "Why is it a different color?",
        "Do you see the snow pile?",
        "It looks like something is hidden!",
        "Are you up for discovering it?",
    ];

    let cubDialogue = $state(dialoguesNotClicked[0]);

    // Svelte 5 $effect rune: update document title when cubDialogue changes
    $effect(() => {
        document.title = `Panthera Uncia: ${cubDialogue}`;
    });

    let showStars = $state(false);

    function revealCub() {
        if (!snowPileClicked) {
            snowPileClicked = true;
            cubDialogue = dialoguesClicked[0];
        }
    }

    function foundPantherClick() {
        if (snowPileClicked) {
            if (dialogueClickedIndex < dialoguesClicked.length - 1) {
                dialogueClickedIndex++;
            } else {
                dialogueClickedIndex = 0;
            }
            cubDialogue = dialoguesClicked[dialogueClickedIndex];
            showStars = true;
            setTimeout(() => (showStars = false), 900);
        }
    }

    // Interactive > if you dont click the snow, dialogue changes
    function handleSectionClick(event) {
        if (!snowPileClicked && !event.target.closest(".snow-pile-btn")) {
            if (dialogueNotClickedIndex < dialoguesNotClicked.length - 1) {
                dialogueNotClickedIndex++;
            } else {
                dialogueNotClickedIndex = 0;
            }
            cubDialogue = dialoguesNotClicked[dialogueNotClickedIndex];
        }
    }
</script>

<Snow />
<section class="meetup">
    <div
        class="interactive-section"
        role="button"
        tabindex="0"
    onclick={handleSectionClick}
        onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSectionClick(e);
        }}
    >
        <div class="scene-wrapper">
            <img
                src={confusedPantherImg}
                alt="Panthera cub"
                class="panthera-cub"
            />
            <!-- Interactive functionality, Dialogue that changes with a click -->
            <div class="cub-dialogue">
                <p>{cubDialogue}</p>
            </div>
            <button
                type="button"
                class="snow-pile-btn"
                onclick={revealCub}
                aria-label="Descubrir panterita"
            >
                <img src={snowPileImg} alt="Snow pile" class="snow-pile" />
            </button>

            {#if snowPileClicked}
                <div
                    style="position: absolute; bottom: 80px; left: 60%; transform: translateX(-50%); z-index: 4;"
                >
                    <button
                        type="button"
                        class="found-panther-btn"
                        onclick={foundPantherClick}
                        aria-label="Interact with panther cub"
                        style="background:none;border:none;padding:0;position:relative;cursor:pointer;"
                    >
                        <img
                            src={foundPantherImg}
                            alt="Panthera cub"
                            id="found-panther"
                            style="pointer-events:auto;"
                        />

                        <!-- Interactive Effect: Shows stars when petting Panthuncia -->
                        {#if showStars}
                            <span
                                class="star-effect"
                                style="position:absolute;top:-50px;right:-50px;font-size:2rem;"
                                >✨</span
                            >
                            <span
                                class="star-effect"
                                style="position:absolute;top:-50px;right:-150px;font-size:1.5rem;"
                                >✨</span
                            >
                        {/if}
                    </button>
                </div>
            {/if}
        </div>
        <div class="back-arrow-wrapper">
            <a href="/" class="back-arrow" aria-label="Return to main page">
                <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="27"
                        cy="27"
                        r="25"
                        stroke="#7C3AED"
                        stroke-width="3"
                        fill="#fff"
                    />
                    <path
                        d="M34 27H20"
                        stroke="#7C3AED"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M26 21L20 27L26 33"
                        stroke="#7C3AED"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- Attention Grabber -->
<section class="attention-grabber" style="position: relative;">
    <div class="attention-grabber-content">
        <h3 class="attention-mini">Join the Fight</h3>
        <h2 class="attention-title">Saving the Snow Leopard</h2>
        <p class="attention-paragraph">
            The snow leopard, a true ghost of the mountains. Yet, this very
            elusiveness now masks a desperate struggle for survival. Their
            unique adaptations, honed over millennia, are no match for the rapid
            changes inflicted by human activity. If we do not act, their silent
            prowl may become just a whisper in the winds, a memory of what once
            was. Let's ensure their enduring legacy, not their tragic loss.
        </p>
        <div class="attention-img-wrapper">
            <img
                src={fightLeopardImg}
                alt="Join the Fight"
                class="attention-img"
            />
        </div>
    </div>
    <img src={pineImg} alt="Pine Background" class="pine-bg" />
</section>

<style>
    .found-panther-btn {
        background: none;
        border: none;
        padding: 0;
        position: relative;
        cursor: pointer;
        display: inline-block;
    }
    .star-effect {
        animation: ping-once 0.9s cubic-bezier(0, 0, 0.2, 1) forwards;
        pointer-events: none;
    }
    @keyframes ping-once {
        0% {
            transform: scale(0.2);
            opacity: 0;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }
    .interactive-section {
        min-height: 100vh;
        background: url("/src/lib/assets/interactive-snow-floor.svg") center center / cover
            no-repeat;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        position: relative;
        overflow: hidden;
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

        max-width: 90vw;
        text-align: center;
    }
    .cub-dialogue p {
        margin: 0;
        padding: 0.7rem 1.2rem;
    }
    .panthera-cub {
        width: 90px;
        height: auto;
        z-index: 3;
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
    }
    .snow-pile {
        width: 250px;
        height: auto;
        z-index: 2;
        position: absolute;
        right: 20px;
        bottom: -20px;
    }
    .snow-pile-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    #found-panther {
        width: 90px;
        height: auto;
        z-index: 3;
        position: absolute;
        bottom: -20px;
        left: 100px;
        transform: translateX(-50%);
    }
    .back-arrow-wrapper {
        position: absolute;
        top: 44px;
        left: 18px;
        z-index: 100;
    }
    .back-arrow {
        display: inline-block;
        transition: transform 0.15s;
        width: 54px;
        height: 54px;
    }
    .back-arrow:hover {
        transform: scale(1.15);
    }

    /* Attention Grabber Section */
    .attention-grabber {
        width: 100vw;
        background: linear-gradient(180deg, #f8fafc 0%, #e3e6f3 100%);
        padding: 8rem 2rem 17rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    .attention-grabber-content {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }
    .attention-mini {
        font-size: 1.1rem;
        color: #7e57c2;
        font-weight: 600;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .attention-title {
        font-size: 2.2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #1f2937;
        line-height: 1.2;
        word-break: break-word;
    }
    .attention-paragraph {
        font-size: 1.05rem;
        color: #374151;
        margin-bottom: 2rem;
        padding: 0.7rem 0;
        line-height: 1.6;
        word-break: break-word;
        max-width: 100%;
        box-sizing: border-box;
    }
    .attention-img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        margin-top: 1.5rem;
    }
    .attention-img {
        width: 100%;

        height: auto;
        margin: 0 auto;
        display: block;
    }

    @media (max-width: 600px) {
        .attention-grabber {
            padding: 9rem 1rem 11rem 1rem;
        }
        .attention-grabber-content {
            max-width: 98vw;
            padding: 0 0.5rem;
        }
        .attention-title {
            font-size: 2rem;
        }
        .attention-paragraph {
            font-size: 0.98rem;
            padding: 0.9rem 0.2rem;
            max-width: 98vw;
        }
        .attention-img {
            max-width: 100%;
        }
    }
    /* Pinos */
    .pine-bg {
        position: absolute;
        left: 0;
        bottom: -1%;
        width: 100vw;
        min-width: 100vw;
        max-width: 100vw;
        object-fit: cover;
        z-index: 10;
        pointer-events: none;
    }
</style>
