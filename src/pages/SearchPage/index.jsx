import React, { useContext,useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";
import QueryMovies from "../../components/QueryMovies";
import "./style.scss";

export default function SearchPage({ setSearchPageState }) {
  console.log('hi')
  const location = useLocation();
  // const movies = location.state.movies;
  const query = location.state.query;
  const [loading, setLoading] = useState(true); // Initialize with loading state.
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
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


  // useEffect(() => {
  //   // Simulate an API call here to fetch movies.
  //   // Once the data is fetched, set loading to false.
  //   // In a real application, replace this with your actual data fetching logic.
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Simulating a 2-second delay for demonstration purposes.

  //   // Don't forget to call setSearchPageState(false) when you're done.
  //   // setSearchPageState(false);
  // }, []);

  // useEffect(() => {
  //   // Call the function to fetch movies when the component mounts
  //   fetchMovies();
  // }, []);

  return (
    <>
      <div>
        <h1>Results for {query}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MovieDetail movies={movies} />
        )}
      </div>
    </>
  );
}