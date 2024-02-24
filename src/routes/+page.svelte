<script lang="ts">
    import { scale } from "svelte/transition";
    import { onMount } from "svelte";
    import { microphone } from "$lib/microphone";
    import { currentMicVolume, gameStarted } from "$lib/stores";

    import Config from "$lib/components/Config.svelte";
    import Game from "$lib/components/Game.svelte";

    let formData: { censor: boolean; micSensitivity: number } = {
        censor: false,
        micSensitivity: 20,
    };

    onMount(() => {
        microphone.init();
        window.setInterval(async () => {
            currentMicVolume.set(await microphone.getCurrentVolume());
        }, 16);
    });
</script>

{#key $gameStarted}
    <div
        class="container"
        in:scale={{ delay: 300, duration: 200, start: 0.992, opacity: 0 }}
        out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
    >
        {#if $gameStarted}
            <Game data={formData} />
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
            <button on:click={() => gameStarted.set(true)}>Play</button>
        {/if}
    </div>
{/key}

<style>
    .links a {
        margin: 0 10px 0 0;
    }
</style>
