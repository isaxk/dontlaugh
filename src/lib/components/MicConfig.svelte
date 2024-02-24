<script lang="ts">
    import { microphone } from "$lib/microphone";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let micSensitivity: number = 10;

    let currentMicVolume: number = 0;

    onMount(async () => {
        await microphone.init();
        window.setInterval(
            async () =>
                (currentMicVolume = await microphone.getCurrentVolume()),
        ),
            10;
    });
</script>

<p><strong>Laugh Sensitivity</strong></p>
<p class="info">
    Place the red slider so the bar only glows orange when you laugh. Accurately
    positioning this slider will improve the quality of the game.
</p>

<div class="mic-indicator">
    {#if currentMicVolume < micSensitivity}
        <div class="value" style="width: {currentMicVolume}%;"></div>
    {:else}
        <div
            class="value"
            style="width: {currentMicVolume}%; background-color: orange;"
        ></div>
    {/if}
    <input type="range" bind:value={micSensitivity} />
</div>

<style>
    .mic-indicator {
        width: 400px;
        position: relative;
        height: 30px;
        background-color: #0cb30010;
        margin-top: 10px;
    }
    .value {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: green;
        height: 28px;
        max-width: 400px;
    }
    .warning .value {
        background-color: orange;
    }
    .warning.mic-indicator {
        background-color: #fca40a30;
    }
    input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }
    input::-webkit-slider-thumb {
        background-color: red;
        width: 10px;
        border: 5px solid transparent;
        box-sizing: border-box;
        border-radius: 0px;
        height: 28px;
    }
    input::-webkit-slider-runnable-track {
        background-color: transparent;
        color: transparent;
    }
    .info {
        font-size: 16px;
    }
    p {
        margin-bottom: 5px;
    }
</style>
