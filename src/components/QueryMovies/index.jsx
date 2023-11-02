
import React, { useState, useRef } from "react";
// import "./style.scss";
// import { useLocation, Navigate, Link } from "react-router-dom";
import MovieDetail from "../MovieDetail";

export default async function QueryMovies(query) {
  const inputRef = useRef(null);

//   const [movies, setMovies] = useState([]);

    // event.preventDefault();
    console.log(query)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setUser(true);
    //   setMovies(data.results);
      // setSearchState(false);
      // setQuery('')
      // setSearchPageState(false)

      return data.results
    //   if (inputRef.current) {
    //     setQuery(inputRef.current.value);}

    } catch (err) {
      console.error(err);
    }


    // return (movies)
  }