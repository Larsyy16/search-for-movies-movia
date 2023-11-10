import { useState, useEffect } from "react";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [nowPlayingIsLoading, setNowPlayingIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setNowPlayingIsLoading(true);
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=2`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        setNowPlayingIsLoading(false);
      } catch (err) {
        console.error(err);
        setNowPlayingIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("disco");
  const nowPlayingMovies = movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      overview: movie.overview,
      imageBg: movie.backdrop_path,
      video: movie.video,
    };
  });
  return { nowPlayingIsLoading, nowPlayingMovies };
}
