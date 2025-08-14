<script>
	import ZooBanner from '$lib/components/ZooBanner.svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

    // Attribution from Vecteezy
    const attribution = {
            mountains: {
                url: 'https://www.vecteezy.com/free-vector/abstract'
            },
            panthera: {
                url: 'https://www.vecteezy.com/free-vector/mascot'
            }
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
<footer class="bg-gray-900 text-gray-400 text-center py-4 text-xs">
    <p>
        Mountain vector <a href={attribution.mountains.url} target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #90cdf4;">on Vecteezy</a><br>

        Panthera Uncia vector <a href={attribution.panthera.url} target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #90cdf4;">on Vecteezy</a> .
    </p>
    <p class="mt-2">
        © {new Date().getFullYear()} Panthera-Uncia. Todos los derechos reservados.
    </p>
</footer>

<style >

    html, body {
        height: 100%;
        margin: 0;
    }
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh; 
    }
</style>
