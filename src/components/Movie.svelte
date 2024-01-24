<script>
  export let movie;
  const { poster_path, title, overview, id } = movie;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
</script>

<article class="w-[200px] max-h-[400px]">
  <a
    href={`/movie-app/movie?id=${id}`}
    class="hover:underline underline-offset-4 hover:text-violet-600 transition-all duration-300"
    rel="noopener noreferrer"
  >
    <img
      width="200"
      height="300"
      class="w-full rounded bg-slate-600 animate-pulse"
      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
      alt=""
      srcset=""
      loading="lazy"
      on:load={(e) => {
        e.target.classList.remove("animate-pulse");
      }}
    />
    <h2 class="font-bold text-balance text-xl" {title}>
      {truncate(title, 20)}
    </h2>
  </a>
  <p title={overview} class="text-pretty text-sm overflow-hidden">
    {truncate(overview, 80)}
  </p>
</article>
