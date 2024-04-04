import "./style.scss";

export default function SearchMovies({ movies }) {
  const movieElements = movies
    .filter((movie) => movie.poster_path)
    .map((movie) => (
      <div className="card" key={movie.id}>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
        <div className="card--content">
        <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <h3 className="card--title">{movie.title}</h3>

          <p className="card--desc">{movie.overview}</p>
          
        </div>
      </div>
    ));
  return <>{movieElements}</>;
}
