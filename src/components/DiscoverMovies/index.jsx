import { useState, useEffect } from "react";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&include_video=true`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const images = movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      overview: movie.overview,
      imageBg: movie.backdrop_path,
      video: movie.video,
    };
  });
  return { isLoading, images };
}
