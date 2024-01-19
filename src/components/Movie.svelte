<script>
  export let movie;
  const { poster_path, title, overview, id } = movie;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movie);
</script>

<article class="w-[200px] max-h-[400px]">
  <a
    href={`https://www.themoviedb.org/movie/${id}`}
    class="hover:underline underline-offset-4 hover:text-violet-600 transition-all duration-300"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      width="200"
      height="300"
      class="w-full rounded"
      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
      alt=""
      srcset=""
    />
    <h2 class="font-bold text-balance text-xl" {title}>
      {truncate(title, 20)}
    </h2>
  </a>
  <p title={overview} class="text-pretty text-sm overflow-hidden">
    {truncate(overview, 80)}
  </p>
</article>
