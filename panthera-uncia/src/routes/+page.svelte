<script>
    import FactPanel from "$lib/components/FactPanel.svelte";
    import factsData from "$lib/data/facts.json";
    import pantheraImg from "$lib/assets/main-panthuncia.png";
</script>

<section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-flex">
        <div class="hero-content">
            <h1>Panthera Uncia</h1>
            <p>The ghost of the mountains on the edge of survival</p>
        </div>
        <div class="hero-image-wrapper">
            <img src={pantheraImg} alt="Panthera Uncia" />
        </div>
    </div>
</section>

<style>
    .hero-flex {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        width: 100%;
        min-height: 350px;
        background-image: url("src/lib/assets/mountain-back.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 2rem;
        box-sizing: border-box;
    }
    .hero-content {
        flex: 0 0 320px;
        max-width: 320px;
        padding-right: 1rem;
        color: #1f2937;
        z-index: 1;
    }
    .hero-content h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    .hero-content p {
        font-size: 1.1rem;
        background: rgba(255,255,255,0.7);
        padding: 1em 1.5em;
        border-radius: 0.5em;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        display: inline-block;
        margin-top: 0.5em;
    }
    .hero-image-wrapper {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1;
        min-height: 350px;
        height: 100%;
    }
    .hero-image-wrapper img {
        width: clamp(260px, 40vw, 520px);
        height: auto;
        z-index: 1;
        margin-bottom: 0;
        margin-right: 0;
        box-shadow: none;
        align-self: flex-end;
        transition: width 0.3s ease;
    }
    @media (max-width: 768px) {
        .hero-flex {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
            min-height: 300px;
        }
        .hero-content {
            flex: 0 0 auto;
            max-width: 340px;
            width: 100%;
            margin: 2rem auto 2rem auto;
            padding-right: 0;
            padding-bottom: 1rem;
            text-align: center;
        }
        .hero-content h1 {
            font-size: 1.2rem;
        }
        .hero-content p {
            font-size: 0.95rem;
            background: rgba(255,255,255,0.8);
            padding: 0.5em 1em;
            border-radius: 0.5em;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            display: inline-block;
            margin-top: 0.5em;
        }
        .hero-image-wrapper {
            width: 100%;
            min-height: 120px;
            justify-content: center;
            align-items: flex-end;
        }
        .hero-image-wrapper img {
            width: clamp(140px, 70vw, 400px);
            max-width: 90vw;
            margin: 0;
        }
    }
</style>
