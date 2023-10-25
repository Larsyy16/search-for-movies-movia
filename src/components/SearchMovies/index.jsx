import React, { useState, useRef } from "react";
import "./style.scss";
import MovieDetail from "../MovieDetail";

export default function SearchMovies() {
  const inputRef = useRef(null);

  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  const [searchState, setSearchState] = useState(false);

  const search = async (event) => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  const moveCursorToInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleButtonClick = () => {
    if (query.trim() !== '') {
      setSearchState(true);
      search({ preventDefault: () => {} });
    } else {
      setSearchState(!searchState);
      if (inputRef.current) {
        setQuery(inputRef.current.value); 
      }

    }
    // inputRef.current.focus();

  };
  

  return (
    <>
      <form className="form" onSubmit={search}  >
        {/* <label htmlFor='query' className='label' >Movie Name</label> */}
        {searchState && <input
          type="text"
          className="input"
          name="query"
          placeholder="Search..."
          value={query}
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)
          }
        />}
        <button className={searchState?'buttonClick':'buttonReg'} type="button" onClick={handleButtonClick}>
          {" "}
          
        </button>
      </form>
      <div>
        <MovieDetail movies={movies} />
      </div>
    </>
  );
}

//create new hidden button that opens up options to home, genres, favorites when clicked
