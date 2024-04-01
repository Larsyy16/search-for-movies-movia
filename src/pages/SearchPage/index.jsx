import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";
import MobileMenuPopup from "../../components/MobileMenuPopup";
import './style.scss'
export default function SearchPage({ setSearchPageState }) {
  const location = useLocation();
  const query = location.state.query;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <MobileMenuPopup />
      <h1>Results for {query}</h1>

      <div className="movieGroup">
        {loading ? <p>Loading...</p> : <MovieDetail movies={movies} />}
      </div>
    </>
  );
}
