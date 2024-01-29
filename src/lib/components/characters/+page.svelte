<script lang="ts">
    export let data;

    $: characters = data?.characters
</script>

<svelte:head>
    <title>Character</title>
</svelte:head>

<h1>Characters</h1>
<a href="/">Home</a>
<ul>
    {#each characters as {name, id, image, occupation}}
    <li>
        <a href={`/characters/${id}`} class="picture"> 
            <img src={image} alt={name} width="200" height="300">
        </a>
        <a href={`/characters/${id}`}> {name}</a>
        <p class='occupation'>{occupation ? occupation : 'Unknown'}</p>

    </li>
    {/each}
</ul>

<style>
    h1{
        color: rebeccapurple;
    }
    li {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
    }
    .picture {
        display: flex;
        height: 100px;
        width: 100px;
    }

    .picture > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    
    .occupation {
        color: grey;
    }
</style>