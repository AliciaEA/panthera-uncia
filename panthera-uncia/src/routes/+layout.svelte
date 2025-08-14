<script>
	import ZooBanner from '$lib/components/ZooBanner.svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ZooBanner />
<div style="height: 65px;"></div>

<main class="flex-grow">
    {@render children()} 
</main>

<footer class="bg-gray-900 text-gray-400 text-center py-4 text-xs">
    <p>
        Mountain vector by <a href="https://es.vecteezy.com/vectores-gratis/mountain" target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-300">NombreDelAutor1</a> on <a href="https://www.vecteezy.com" target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-300">Vecteezy</a>.
    </p>
    <p class="mt-2">
        © {new Date().getFullYear()} Tu Nombre/Proyecto. Todos los derechos reservados.
    </p>
</footer>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html, body {
        height: 100%;
        margin: 0;
    }
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Ensure body takes full viewport height for flex-grow to work */
    }
</style>

{@render children?.()}
