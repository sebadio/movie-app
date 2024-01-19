import type { Movie } from "../types/Movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGY2ZDFkYWJkNTQwMmU4OTgxYWU5NGQxZGZlMTM2YyIsInN1YiI6IjY1OTQ3ZDdhOTQ0YTU3MmI2ODFmM2E0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FvlnHdIpSv03DreBhp0qCz9p6UafHSbbbTbxPtP1vQ",
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
    movies = [...data.results];
  } catch (error) {
    console.log(error);
  }
  return movies;
};
