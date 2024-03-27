import { useState, useRef } from "react";
import "./style.scss";
import {Link } from "react-router-dom";

export default function SearchMovies() {
  const inputRef = useRef(null);

  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  const [searchState, setSearchState] = useState(false);

  const handleButtonClick = (event) => {
    if (query.trim() !== "") {
      setQuery(inputRef.current.value);
      setSearchState(false);
      setQuery("");
    } else {
      event.preventDefault();
      setSearchState(!searchState);

      if (inputRef.current) {
        setQuery(inputRef.current.value);
      }
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleButtonClick}>
        {searchState && (
          <input
            type="text"
            className="input"
            name="query"
            placeholder="Search..."
            value={query}
            ref={inputRef}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        {searchState ? (
          <Link
            to="/SearchPage"
            className="buttonClick"
            state={{ movies: movies, query: query }}
            onClick={handleButtonClick}
          ></Link>
        ) : (
          <button className="buttonReg" onClick={handleButtonClick}></button>
        )}{" "}
      </form>
    </>
  );
}
