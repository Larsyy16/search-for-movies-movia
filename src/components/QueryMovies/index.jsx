import { useRef } from "react";

export default async function QueryMovies(query) {
  const inputRef = useRef(null);

  console.log(query);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.results;
  } catch (err) {
    console.error(err);
  }
}
