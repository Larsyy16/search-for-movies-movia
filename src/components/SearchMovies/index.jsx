import React, { useState, useRef } from "react";
import "./style.scss";
import { useLocation, Navigate, Link } from "react-router-dom";
import MovieDetail from "../MovieDetail";

export default function SearchMovies() {
  const inputRef = useRef(null);

  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  const [searchState, setSearchState] = useState(false);

  const [user, setUser] = useState(null);
  const [thirdYo, setThirdYo] = useState(false);

  const [searchPageState, setSearchPageState] = useState(false);
  // const location = useLocation();

  // const { query, movies } = location.state;


  // const search = async (event) => {
  //   event.preventDefault();
  //   console.log(query)
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=${
  //     import.meta.env.VITE_API_KEY
  //   }&language=en-US&query=${query}&page=1&include_adult=false`;
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // setUser(true);
  //     setMovies(data.results);
  //     // setSearchState(false);
  //     // setQuery('')
  //     // setSearchPageState(false)
  //     console.log(movies)
  //     if (inputRef.current) {
  //       setQuery(inputRef.current.value);}

  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const moveCursorToInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleButtonClick = () => {
    event.preventDefault(); 
    if (query.trim() !== '') {

      // search();
      // setSearchPageState(false)
      setQuery(inputRef.current.value); 

      // setSearchPageState(!searchPageState)
      // console.log(searchState)
      // search({ preventDefault: () => {} });
      // <Navigate to={ "/searchPage"} />;
    } else {
      // console.log(searchState)
          // event.preventDefault();


      setSearchState(!searchState);
      // console.log(searchState)
      // setSearchPageState(true)
      // console.log(searchPageState)

      if (inputRef.current) {
        setQuery(inputRef.current.value); 
      }

    }
    // inputRef.current.focus();

  };
  

  return (
    <>
      <form className="form" onSubmit={handleButtonClick}  >
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
        {/* <button className={searchState?'buttonClick':'buttonReg'} type="button" onClick={handleButtonClick}> */}
          {" "}

          {
  searchState ? (
    <Link to="/SearchPage" className='buttonClick' state={{ movies: movies, query: query }} onClick={handleButtonClick}>
    </Link>
  ) : (
    <button className="buttonReg" onClick={handleButtonClick}>
    </button>
  )
}   {/* </button> */}
      </form>

      {/* {searchPageState&&<Navigate to="/SearchPage" state={{ movies: movies, query: query }} />} */}


    </>
  );
}



//click to open ---> false to true

//here --> true to false

//click to search 



//click to search again
