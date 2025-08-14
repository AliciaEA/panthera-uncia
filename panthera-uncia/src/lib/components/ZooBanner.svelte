<a href="https://zoo.hackclub.com" target="_blank" rel="noopener noreferrer">
    <div id="zoo_linkBanner">
        <h1>CHECK OUT MORE AT THE ZOO <span class="material-symbols-outlined bannerIcon">pets</span> </h1>
    </div>
</a>

<style>
    /* Your provided CSS styles for the banner */
    .bannerIcon {
        vertical-align: -0.07em;
        font-size: 24px !important;
    }
    @font-face {
        font-family: 'Phantom Sans';
        src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff')
            format('woff'),
            url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2')
            format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    #zoo_linkBanner {
        background-color: #434783;
        padding: 10px;
        text-align: center;
        vertical-align: center;
        position: fixed; /* Esto hace que se quede arriba al hacer scroll */
        left: 0;
        right: 0;
        top: 0;
        height: 65px; /* Asegura un alto fijo para el banner */
        z-index: 1000; /* Asegura que esté por encima de otros elementos */
        font-size: 15px;
        transition: box-shadow 0.3s ease-in-out;
        font-family: 'Phantom Sans', sans-serif; /* Usamos comillas por el espacio */
        text-decoration: none;
        color: white;
        display: flex; /* Para centrar el h1 verticalmente si lo deseas */
        align-items: center; /* Centra verticalmente */
        justify-content: center; /* Centra horizontalmente el contenido */
    }
    #zoo_linkBanner:hover {
        cursor: pointer;
        box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.551);
    }
</style>