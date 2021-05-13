import { useEffect, useState } from "react";

export default async function useMoviesApi({ keyQuery }) {
  const [allMovies, setAllMovies] = useState();

  useEffect(() => {
    async function fetchdata() {
      try {
        const movies = await fetch(
          `https://imdb-api.com/en/API/SearchAll/k_6jm6mye7/${keyQuery}`
        );
        const moviesParsed = await movies.json();
        setAllMovies(moviesParsed);
      } catch (err) {
        console.log(err);
      }
    }
    fetchdata()
  }, []);

  return {
    allMovies,
    setAllMovies,
  };
}
