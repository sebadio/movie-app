<script lang="ts">
    import { getMovies } from "../helpers/getMovies";
    import Movie from "./Movie.svelte";
</script>

<main class="m-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-xl">
    <div class="flex flex-wrap justify-around gap-y-8 max-w-[100vw]">
        {#await getMovies()}
            <p class="w-full min-h-screen text-center">Loading...</p>
        {:then movies}
            {#each movies as movie}
                <Movie {movie} />
            {/each}
        {/await}
    </div>
</main>
