<script>
    import ZooBanner from "$lib/components/ZooBanner.svelte";
    import "../app.css";
   
    import Snow from "$lib/components/snow.svelte";
    import github from "$lib/assets/github-logo.png";
    import theZooLogo from "$lib/assets/the-zoo-logo.png";
    import hackclubLogo from "$lib/assets/hackclub-footer.png";

    let { children } = $props();
</script>

<!-- Requirement svelte:head -->
<svelte:head>
    <link rel="icon" href="/panthera-uncia/favicon.svg"  />
</svelte:head>

<!-- Requirement: Add The ZooBanner component -->
<ZooBanner />
<div style="height: 65px;"></div>


<main class="flex-grow">
    {@render children()}
</main>

<!-- Footer -->
<footer class="site-footer">
    <div class="footer-columns">
        <div class="footer-col footer-brand">
            <div class="footer-icons">
                <!-- HackClub & The Zoo -->
                <a href="https://zoo.hackclub.com/" title="The Zoo">
                    <img
                        src={theZooLogo}
                        alt="The Zoo"
                        class="footer-icon"
                    />
                </a>
                <a
                    href="https://hackclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Hackclub"
                >
                    <img
                        src={hackclubLogo}
                        alt="Hackclub"
                        class="footer-icon"
                    />
                </a>
            </div>
        </div>
        
        <!-- CREDITS to VECTEEZY (love ya vecteezy) -->
        <div class="footer-col footer-links">
            <div class="footer-section-title">Vectors & Credits</div>
            <div class="footer-credits-grid">
                <ul>
                    <li>
                        Mountain: <a
                            href="https://www.vecteezy.com/free-vector/abstract"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Panthera Uncia: <a
                            href="https://www.vecteezy.com/free-vector/mascot"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Paws: <a
                            href="https://www.vecteezy.com/free-vector/paw"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Snow Leopard: <a
                            href="https://www.vecteezy.com/free-png/snow-leopard"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Baby Panthera Uncia: <a
                            href="https://www.vecteezy.com/free-png/snow"
                        >
                            Vecteezy</a
                        >
                    </li>
                    <li>
                        Snow Leopard Confused: <a
                            href="https://www.vecteezy.com/free-png/snow-leopard"
                            >Vecteezy</a
                        >
                    </li>
                    <li>
                        Snow Pile: <a href="https://www.vecteezy.com/free-png/snow-pile">Vecteezy</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        Chibi Panthera Uncia: <a
                            href="https://www.vecteezy.com/png/35632094-ai-generated-snow-leopard-dressed-in-a-cozy-long-sleeved-sweater-decorated-with-stars"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Pine Trees Silhouette: <a
                            href="https://www.vecteezy.com/free-png/pine-trees-silhouette"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Earth: <a
                            href="https://www.vecteezy.com/free-png/earth"
                            target="_blank">Vecteezy</a
                        >
                    </li>
                    <li>
                        Found Panthera Uncia: <a
                            href="https://www.vecteezy.com/free-png/snow-leopard"
                            >Vecteezy</a
                        >
                    </li>
                    <li>
                        Interactive Mountain: <a href="https://www.vecteezy.com/free-vector/snow"
                            >Vecteezy</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <!-- Me, myself and I -->
        <div class="footer-col footer-contact">
            <div class="footer-section-title">Contact</div>

            <div class="footer-contact-info">
                <a
                    href="https://github.com/AliciaEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    id="github-icon"
                >
                    <img
                        src={github}
                        alt="GitHub"
                        class="footer-icon"
                    />
                </a>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        © {new Date().getFullYear()} Panthera-Uncia. Todos los derechos reservados.
    </div>
</footer>

<style>
    .site-footer {
        position: relative;
        width: 100%;
        background: #000;
        color: #e0e0e0;
        overflow: hidden;
        padding: 0;
        margin-top: 0;
        font-size: 0.89rem;
        border-top: 2px solid #222;
    }
    .footer-credits-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        width: 100%;
    }
    .footer-credits-grid ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        font-size: 0.87rem;
    }
    .footer-credits-grid li {
        margin-bottom: 0.45rem;
        line-height: 1.3;
    }
    .footer-columns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        gap: 2vw;
        padding: 14vw 4vw 8vw 4vw;
        flex-wrap: wrap;
    }
    @media (max-width: 900px) {
        .footer-columns {
            flex-direction: column;
            gap: 4vw;
            padding: 7vw 2vw 2vw 2vw;
        }
        .footer-col {
            min-width: 0;
            width: 100%;
            margin-bottom: 4vw;
        }
        .footer-brand {
            align-items: center;
            margin-bottom: 2vw;
        }
        .footer-credits-grid {
            grid-template-columns: 1fr;
            gap: 2vw;
        }
        .footer-section-title {
            text-align: center;
        }
    }
    .footer-col {
        flex: 1 1 220px;
        min-width: 180px;
        margin-bottom: 1.5vw;
    }
    .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.7rem;
    }
    .footer-icons {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        margin-bottom: 0.5rem;
    }
    .footer-icon {
        width: 150px;
        object-fit: contain;
        filter: drop-shadow(0 2px 6px #222a);

        padding: 4px;
        transition: box-shadow 0.2s;
    }

    #github-icon {
        background-color: #fff;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        box-shadow: 0 2px 8px #2222;
        transition: background-color 0.2s;
    }
    #github-icon img {
        width: 48px;
        height: 48px;
        object-fit: contain;
    }

    .footer-links ul {
        list-style: none;
        color: rgb(194, 203, 216);
        padding: 0;
        margin: 0.5rem 0 0 0;
    }
    .footer-links li {
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
    }
    .footer-section-title {
        font-weight: bold;
        color: #455880;
        margin-bottom: 0.5rem;
        font-size: 1.05rem;
    }

    .footer-links a,
    .footer-contact a {
        color: #7a8891;
        text-decoration: underline;
        transition: color 0.2s;
    }

    .footer-links a:hover,
    .footer-contact a:hover {
        color: #fff;
    }
    .footer-bottom {
        text-align: center;
        font-size: 0.92rem;
        color: #888;
        padding: 1vw 0 1vw 0;
        border-top: 1px solid #222;
        background: #000000;
    }
    @media (max-width: 900px) {
        .footer-columns {
            flex-direction: column;
            gap: 2vw;
            padding: 14vw 2vw 2vw 2vw;
        }
        .footer-col {
            margin-bottom: 2vw;
        }
    }
</style>
