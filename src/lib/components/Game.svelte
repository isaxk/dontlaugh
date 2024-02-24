<script lang="ts">
    import VideoPlayer from "./VideoPlayer.svelte";
    import MicIndicator from "./MicIndicator.svelte";
    import { microphone } from "$lib/microphone";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { currentMicVolume, gameStarted } from "$lib/stores";

    export let data: any;

    let mounted = false;
    let gameOver = false;

    if (data.micSensitivity < 2) {
        data.micSenitivity = 2.5;
    }

    onMount(() => (mounted = true));

    $: if ($currentMicVolume > data.micSensitivity && mounted) gameOver = true;
</script>

{#key gameOver}
    <div
        class="game"
        out:fade={{ duration: 300 }}
        in:fade={{ delay: 300, duration: 100 }}
    >
        {#if gameOver}
            <div class="end">
                <h2>You laughed!</h2>

                <button class="primary" on:click={() => gameStarted.set(false)}
                    >Main Menu</button
                >
            </div>
        {:else}
            <VideoPlayer src="/clip1.mp4" />

            <MicIndicator micSensitivity={data.micSensitivity} />
        {/if}
    </div>
{/key}

<style>
    .game {
        display: grid;
        justify-items: center;
    }
    .end button {
        display: inline-block;
    }
    .end {
        width: 100%;
        text-align: center;
    }
</style>
