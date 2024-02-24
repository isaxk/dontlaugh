<script lang="ts">
    import Config from "$lib/components/Config.svelte";
    import Game from "$lib/components/Game.svelte";

    let gameStarted: boolean = false;
    let formData: { censor: boolean; micSensitivity: number } = {
        censor: false,
        micSensitivity: 20,
    };
</script>

<div class="container">
    {#if gameStarted}
        <Game />
    {:else}
        <h1>Don't laugh!</h1>
        <div class="links">
            <a href="https://www.isaxk.com">by isaxk</a>
            <a href="https://github.com/isaxk/dontlaugh"
                >View project on GitHub</a
            >
            <a href="#">Submit a clip</a>
        </div>
        <Config bind:data={formData} />
        <button on:click={() => (gameStarted = true)}>Play</button>
    {/if}
</div>

<style>
    .links a {
        margin: 0 10px 0 0;
    }
</style>
