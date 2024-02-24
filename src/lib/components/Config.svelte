<script lang="ts">
    import MicConfig from "./MicConfig.svelte";

    export let data: { censor: boolean; micSensitivity: number };
</script>

<div class="config">
    <h3>Config</h3>
    <form>
        <div class="setting">
            <input type="checkbox" id="censor" bind:checked={data.censor} />
            <label for="censor">hide explicit or offensive content</label>
        </div>

        <MicConfig bind:micSensitivity={data.micSensitivity} />
    </form>
</div>

<style>
    .config {
        padding: 50px 0px 50px 0px;
    }
    .setting {
        margin: 40px 0px;
    }
</style>
