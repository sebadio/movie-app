<script>
    import { onMount } from "svelte";
    import { getMovieDetails } from "../helpers/getMovieDetails";
    import Rating from "./Rating.svelte";

    document.title = "Loading...";

    let id;
    let title = null;
    let image = null;
    let overview = null;
    let backdrop_image = null;
    let rating = 0;
    let cantReviews = 0;
    let tagline = null;
    let homePage = null;
    let genres = [];
    let runtime = 0;

    let loading = true;

    onMount(async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get("id");
        const movieData = await getMovieDetails(id);
        title = movieData.title;
        image = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;
        overview = movieData.overview;
        backdrop_image = `https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`;
        rating = parseFloat(movieData.vote_average);
        cantReviews = parseInt(movieData.vote_count);
        tagline = movieData.tagline;
        homePage = movieData.homepage;
        genres = movieData.genres.map((genre) => genre.name);
        runtime = movieData.runtime;

        document.title = title;

        console.log(movieData);
        loading = false;
    });
</script>

<main class="text-xl min-h-screen h-full">
    {#if loading}
        <div class="relative overflow-hidden">
            <div
                class="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat -z-10 blur-md bg-stone-800/50"
            ></div>
            <div
                class="m-auto aspect-video w-auto h-auto lg:h-96 z-10 bg-zinc-950 animate-pulse"
            ></div>
        </div>

        <div
            class="flex flex-col gap-8 m-auto p-4 w-[1000px] max-w-[calc(100%-2rem)]"
        >
            <div>
                <div
                    class="h-[4ch] bg-slate-100/40 animate-pulse rounded"
                ></div>
                <div
                    class="flex flex-wrap gap-4 justify-between items-baseline"
                >
                    <div
                        class="w-[30ch] h-[2ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                    ></div>
                    <div
                        class="w-[10ch] h-[2ch] bg-slate-100/40 rounded animate-pulse"
                    ></div>
                </div>

                <div class="mt-4">
                    <div
                        class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                    ></div>
                    <div class="flex flex-wrap gap-x-4 gap-y-1">
                        <span
                            class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                        ></span>
                        <span
                            class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                        ></span>
                        <span
                            class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                        ></span>
                        <span
                            class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                        ></span>
                        <span
                            class="w-[10ch] h-[1ch] mt-2 bg-slate-100/40 rounded animate-pulse"
                        ></span>
                    </div>
                </div>
            </div>
            <div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
                <div
                    class="h-[1ch] w-full bg-slate-100/40 animate-pulse mt-2"
                ></div>
            </div>
        </div>
    {:else}
        <div class="relative overflow-hidden">
            <div
                style={`background-image: url(${backdrop_image});`}
                class={`absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat -z-10 blur-md brightness-75`}
            ></div>
            <img
                src={backdrop_image}
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
                    <Rating {rating} {cantReviews} />
                </div>

                <div
                    class="mt-4 flex flex-wrap gap-4 justify-between items-end"
                >
                    <div>
                        <strong>Genres:</strong>
                        <div class="flex flex-wrap gap-4">
                            {#each genres as genre}
                                <span
                                    class="text-pretty font-extralight text-base"
                                    >{genre}</span
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
    {/if}
</main>
