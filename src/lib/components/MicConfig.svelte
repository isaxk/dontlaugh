<script lang="ts">
    import { microphone } from "$lib/microphone";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import MicIndicator from "./MicIndicator.svelte";

    export let micSensitivity: number = 10;
</script>

<h4>Laugh Sensitivity</h4>
<p class="info">
    Place the red slider so the bar only glows orange when you laugh. Accurately
    positioning this slider will improve the quality of the game.
</p>

<MicIndicator bind:micSensitivity configurable={true} />

<style>
    .info {
        font-size: 85%;
        margin-bottom: 10px;
    }
</style>
