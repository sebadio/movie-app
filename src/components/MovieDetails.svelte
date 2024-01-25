<script>
    import { getMovieDetails } from "../helpers/getMovieDetails";
    import Rating from "./Rating.svelte";
    import MovieDetailsPlaceholder from "./placeholders/MovieDetailsPlaceholder.svelte";

    function setDocumentTitle(title) {
        console.log("setDocumentTitle", title);
        document.title = title;
    }
    setDocumentTitle("Movie Details");
</script>

<main class="text-xl min-h-screen h-full">
    {#await getMovieDetails(new URLSearchParams(window.location.search).get("id"))}
        <MovieDetailsPlaceholder />
    {:then { backdrop_path, genres, overview, runtime, tagline, title, vote_average, vote_count }}
        <div class="relative overflow-hidden">
            <div
                style={`background-image: url(https://image.tmdb.org/t/p/w1280${backdrop_path});`}
                class={`absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat -z-10 blur-md brightness-75`}
            ></div>
            <img
                src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                width="1280"
                height="720"
                alt=""
                class="m-auto w-full h-auto lg:w-auto lg:h-96 z-10"
            />
        </div>

        <article
            class="flex flex-col gap-8 m-auto p-4 w-[1000px] max-w-[calc(100%-2rem)]"
        >
            <div>
                <h1
                    class="text-5xl text-center md:text-left font-bold text-balance"
                >
                    {title}
                </h1>
                <div class="flex flex-wrap gap-4 justify-between items-end">
                    <h2 class="mt-2 font-extralight">
                        {tagline}
                    </h2>
                    <Rating rating={vote_average} cantReviews={vote_count} />
                </div>

                <div
                    class="mt-4 flex flex-wrap gap-4 justify-between items-end"
                >
                    <div>
                        <strong>Genres:</strong>
                        <div class="flex flex-wrap gap-4">
                            {#each genres as { name }}
                                <span
                                    class="text-pretty font-extralight text-base"
                                    >{name}</span
                                >
                            {/each}
                        </div>
                    </div>

                    <div>
                        <strong>Runtime:</strong>
                        <span class="text-pretty font-extralight text-base"
                            >{runtime} min</span
                        >
                    </div>
                </div>
            </div>

            <div>
                <strong class="underline">Summary:</strong>
                <p class="text-pretty leading-7">{overview}</p>
            </div>
        </article>
    {:catch error}
        <div
            class="flex flex-col justify-center items-center gap-8 m-auto h-screen p-4 w-[1000px] max-w-[calc(100%-2rem)]"
        >
            <h1
                class="text-5xl text-center md:text-left font-bold text-balance"
            >
                404
            </h1>
            <p class="text-pretty leading-7">
                Sorry! {error.message} for movie with id: {new URLSearchParams(
                    window.location.search,
                ).get("id")}
                <br />
            </p>
            <a class="hover:text-blue-600" href="/movie-app">Go back</a>
        </div>
    {/await}
</main>
