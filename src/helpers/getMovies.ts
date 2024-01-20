import type { Movie } from "../types/Movie";
const auth = import.meta.env.PUBLIC_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: auth,
  },
};

export const getMovies = async () => {
  let movies: Movie[] = [];
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const data = await res.json();
    movies = data.results;
  } catch (error) {
    console.log(error);
  }
  return movies;
};
