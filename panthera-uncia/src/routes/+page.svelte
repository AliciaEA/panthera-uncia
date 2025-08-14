<script>
    import FactPanel from "$lib/components/FactPanel.svelte";
    import factsData from "$lib/data/facts.json";
    import pantheraImg from "$lib/assets/main-panthuncia.png";
    import vulnerablePant from "$lib/assets/vulnerable-panthuncia.png";
    import DataCard from "$lib/components/DataCard.svelte";
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

<section class="data-section">
    <div class="data-image-wrapper">
        <img src={vulnerablePant} alt="Vulnerable Panthera Uncia" class="data-image"/>
        <span class="vulnerable-tag">Vulnerable</span>
    </div>
    <div class="stats-container">
        <DataCard finalValue={4000} description="Snow leopards remaining in the wild" />
        <DataCard finalValue={36} description="Transboundary protected areas." />
        <DataCard finalValue={15} description="Meters in a single leap." />
        <DataCard finalValue={12} description="Countries in their range." />
        
    </div>
</section>

<style>
    /* CSS Section 1 - hero section */
    .hero-section {
        width: 100vw;
        max-width: 100vw;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    .hero-flex {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        width: 100%;
        max-width: 100vw;
        min-height: 350px;
        background-image: url("src/lib/assets/mountain-back.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 2rem;
        box-sizing: border-box;
        position: relative;
        overflow-x: hidden;
    }
    .hero-content {
        flex: 0 0 320px;
        max-width: 100vw;
        width: 100%;
        padding-right: 1rem;
        color: #1f2937;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 350px;
        margin: auto 0;
        text-align: center;
        box-sizing: border-box;
    }
    .hero-content h1 {
        font-size: 2.5rem;
        margin: 1rem, 1.5rem;
    }
    .hero-content p {
        font-size: 1.05rem;
        background: rgba(215, 225, 230, 0.7);
        padding: 1em 1.5em;
        border-radius: 0.5em;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        display: inline-block;
        margin: 0.5rem 1.5rem;
    }
    .hero-image-wrapper {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        z-index: 1;
        min-height: 350px;
        height: 100%;
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
    }
    .hero-image-wrapper img {
        width: clamp(300px, 52vw, 650px);
        height: auto;
        z-index: 1;
        margin-bottom: -3rem;
        margin-right: 0;
        box-shadow: none;
        align-self: flex-end;
        transition: width 0.3s ease;
    }
    
   
    
    @media (max-width: 768px) {
        .hero-flex {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.5rem;
            min-height: 300px;
            width: 100vw;
            max-width: 100vw;
            box-sizing: border-box;
        }
        .hero-content {
            flex: 0 0 auto;
            max-width: 100vw;
            width: 100%;
            margin: 1rem 0 1rem 0;
            padding-right: 0;
            padding-bottom: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 220px;
            box-sizing: border-box;
        }
        .hero-content h1 {
            font-size: 2rem;
        }
        .hero-content p {
            font-size: 1.2rem;
            background: rgba(255, 255, 255, 0.8);
            padding: 0.5em 1em;
            border-radius: 0.5em;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
            margin: 0 0 -4rem 0;
        }
    }
    @media (max-width: 1024px) {
        .hero-content h1 {
            font-size: 2.5rem;
        }
        .hero-content p {
            font-size: 1.05rem;
        }
    }

    /* CSS Section 2 - data section */
    
    .vulnerable-tag {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: #fcd34d;
        color: #92400e;
        padding: 0.4em 1em;
        border-radius: 9999px;
        font-weight: bold;
        font-size: 1.1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        animation: vibrate 1.2s infinite;
        width: auto;
        min-width: unset;
        max-width: max-content;
        display: inline-block;
        white-space: nowrap;
    }
    @keyframes vibrate {
        0% { transform: translateY(-50%) translateX(0) rotate(0deg); }
        20% { transform: translateY(-50%) translateX(-2px) rotate(-2deg); }
        40% { transform: translateY(-50%) translateX(2px) rotate(2deg); }
        60% { transform: translateY(-50%) translateX(-2px) rotate(-2deg); }
        80% { transform: translateY(-50%) translateX(2px) rotate(2deg); }
        100% { transform: translateY(-50%) translateX(0) rotate(0deg); }
    }
    .stats-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        padding: 2rem;
    }
    .data-section {
        background-color: #d0dce7;
        color: white;
        padding: 8rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .data-image-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .data-image {
        width: 16rem;
        height: auto;
        border-radius: 0.5rem;
        

    }

    .vulnerable-tag {
        position: absolute;
        top: -1rem;
        right: 1rem;
        background-color: #6d423b;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: bold;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transform: rotate(6deg);
    }

    

    @media (min-width: 768px) {
        .data-section {
            flex-direction: row;
            gap: 3rem;
        }
        .data-image-wrapper {
            width: 33.333333%;
        }
        .data-image {
            width: 20rem;
        }
        .vulnerable-tag {
            top: -1.5rem;
            right: 6rem;
        }
        .stats-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
        padding: 1.5rem;
        }
    }
</style>
