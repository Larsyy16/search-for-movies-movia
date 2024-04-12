import "./style.scss";
import {useState} from 'react'

export default function SearchMovies({ movies }) {

  const [toggleCard, setToggleCard] = useState(new Array(movies.length).fill(false))
  function onClick(index) { 
    const newToggleCard = [...toggleCard];
    for (let i = 0; i < newToggleCard.length; i++) {
      if (i !== index && newToggleCard[i] === true) {
        newToggleCard[i] = false;
      }
    }
    newToggleCard[index] = !newToggleCard[index];
    setToggleCard(newToggleCard);
  }


  const movieElements = movies
    .filter((movie) => movie.poster_path)
    .map((movie, index) => (
      <div className={`card ${toggleCard[index] ? 'activeCard' : ''}`} key={movie.id} onClick={() => onClick(index)}>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <div className={`card--content ${toggleCard[index] ? 'activeContent' : ''}`}>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <h3 className="card--title">{movie.title}</h3>

          <p className="card--desc">{movie.overview ? movie.overview : "No description available"}</p>
        </div>
      </div>
    ));
  return <>{movieElements}</>;
}
