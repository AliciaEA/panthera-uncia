<script>
    import ZooBanner from "$lib/components/ZooBanner.svelte";
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";

    // Attribution from Vecteezy
    const attribution = {
        mountains: {
            url: "https://www.vecteezy.com/free-vector/abstract",
        },
        panthera: {
            url: "https://www.vecteezy.com/free-vector/mascot",
        },
    };

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<!-- Requirement: Add The ZooBanner component -->
<ZooBanner />
<div style="height: 65px;"></div>

<!-- My Main content area I Guess -->
<main class="flex-grow">
    {@render children()}
</main>

<!-- Footer (have to make it prettier) -->
<footer class="site-footer">
    
    <div class="footer-content">
        <p>
            Mountain vector <a
                href={attribution.mountains.url}
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: underline; color: #90cdf4;"
                >on Vecteezy</a
            ><br />
            Panthera Uncia vector
            <a
                href={attribution.panthera.url}
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: underline; color: #90cdf4;"
                >on Vecteezy</a
            > .
        </p>
        <p class="mt-2">
            © {new Date().getFullYear()} Panthera-Uncia. Todos los derechos reservados.
        </p>
    </div>
</footer>

<style>
    .site-footer {
        position: relative;
        width: 100%;
        min-height: 180px;
        background: #000000;
        color: #bbb;
        overflow: hidden;
        padding-top: 0;
        margin-top: 0;
    }
    
    .footer-content {
        position: relative;
        z-index: 0;
        padding: 2.5rem 1rem 1.5rem 1rem;
        text-align: center;
        font-size: 0.95rem;
    }
    .footer-content a {
        color: #90cdf4;
        text-decoration: underline;
    }
    .footer-content .mt-2 {
        margin-top: 1rem;
        font-size: 0.85rem;
    }
    @media (max-width: 600px) {
        
        .footer-content {
            padding: 1.5rem 0.5rem 1rem 0.5rem;
            font-size: 0.85rem;
        }
    }
</style>
