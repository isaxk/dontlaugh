<script>
    import "@picocss/pico";
    import "$lib/css/app.css";
</script>

<main>
    <slot />
</main>

<style>
    main {
        max-width: 600px;
        margin: auto;
        padding: 150px 20px 20px 20px;
    }
</style>
