import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";
import MobileMenuPopup from "../../components/MobileMenuPopup";

export default function SearchPage({ setSearchPageState }) {
  console.log("hi");
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
      <div>
        <h1>Results for {query}</h1>
        {loading ? <p>Loading...</p> : <MovieDetail movies={movies} />}
      </div>
    </>
  );
}
