<script lang="ts">
    import { currentMicVolume } from "$lib/stores";
    export let configurable = false;
    export let micSensitivity: number;
</script>

<div class="mic-indicator">
    {#if $currentMicVolume < micSensitivity}
        <div class="value" style="width: {$currentMicVolume}%;"></div>
    {:else}
        <div
            class="value"
            style="width: {$currentMicVolume}%; background-color: orange;"
        ></div>
    {/if}
    {#if configurable}
        <input type="range" bind:value={micSensitivity} />
    {:else}
        <input type="range" bind:value={micSensitivity} disabled={true} />
    {/if}
</div>

<style>
    .mic-indicator {
        width: 400px;
        max-width: 100%;
        position: relative;
        height: 30px;
        background-color: #0cb30010;
        margin-top: 20px;
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
</style>
