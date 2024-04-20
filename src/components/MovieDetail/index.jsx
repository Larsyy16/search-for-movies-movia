import "./style.scss";
import { useState } from "react";

export default function SearchMovies({ movies }) {
  const [exitButton, setExitButton] = useState(false);
  const [toggleCard, setToggleCard] = useState(
    new Array(movies.length).fill(false),
  );
  function onClick(index) {
    const newToggleCard = [...toggleCard];
    for (let i = 0; i < newToggleCard.length; i++) {
      if (i !== index && newToggleCard[i] === true) {
        newToggleCard[i] = false;
      }
    }
    newToggleCard[index] = !newToggleCard[index];
    setToggleCard(newToggleCard);
    setExitButton(newToggleCard[index]);
  }

  const movieElements = movies
    .filter((movie) => movie.poster_path)
    .map((movie, index) => (
      <div
        className={`card ${toggleCard[index] ? "activeCard" : ""}`}
        key={movie.id}
        onClick={() => onClick(index)}
      >
        {toggleCard[index] && (
          <button
            className="exitButton"
            onClick={(e) => {
              onClick(index);
            }}
          >
            X
          </button>
        )}
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <div
          className={`card--content ${
            toggleCard[index] ? "activeContent" : ""
          }`}
        >
          <p>RELEASE DATE: {movie.release_date}</p>
          <p>RATING: {movie.vote_average}</p>
          <h3 className="card--title">{movie.title}</h3>

          <p className="card--desc">
            {movie.overview ? movie.overview : "No description available"}
          </p>
        </div>
      </div>
    ));
  return <>{movieElements}</>;
}
