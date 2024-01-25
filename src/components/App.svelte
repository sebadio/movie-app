<script lang="ts">
    import { getMovies } from "../helpers/getMovies";
    import Movie from "./Movie.svelte";
    import MoviePosterPlaceholder from "./placeholders/MoviePosterPlaceholder.svelte";
</script>

<main class="m-auto p-4 w-[1000px] max-w-[calc(100%-2rem)] text-xl">
    <div class="flex flex-wrap justify-around gap-y-8 max-w-[100vw]">
        {#await getMovies()}
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
            <MoviePosterPlaceholder />
        {:then movies}
            {#each movies as movie}
                <Movie {movie} />
            {/each}
        {:catch error}
            <p class="w-full min-h-screen text-center">
                Error: {error.message}
            </p>
        {/await}
    </div>
</main>
