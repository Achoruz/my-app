<script lang="ts">
    export let data;
    import Character from './Character.svelte';

    $: character = data?.character
</script>

<svelte:head>
    <title>{character.name}</title>
</svelte:head>

<Character {...character} />
<a href="/characters">Characters</a>


<style>

</style>