import "./style.scss";
import { useState, lazy, Suspense } from "react";

const MovieDetailModal = lazy(() => import("../MovieDetailModal"))

export default function SearchMovies({ movies }) {
  const [toggleCard, setToggleCard] = useState(null);
  const [childData, setChildData] = useState(null);

  const handleMovieClick = (movie) => {
    setToggleCard(movie.id);
  };

  const onClose = () => {
    setToggleCard(null);
  };
  const handleChildData = (data) => {
    setChildData(data);
    console.log("Data received from child:", data);
  };

  return (
    <>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie, index) => (
          <div key={movie.id} className="card">
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + " poster"}
              onClick={() => handleMovieClick(movie)}
            />
            <div className="card--content">
              <h3 className="card--content--title">{movie.title}</h3>
              <p className="p-details">RATING: {movie.vote_average}</p>

              <Suspense
              fallback={<div> loading...</div>}
              
              >
              {toggleCard === movie.id && (

                <MovieDetailModal
                  id={movie.id}
                  movie={movie}
                  onClose={onClose}
                  sendDataToParent={handleChildData}
                />
              )}
              </Suspense>
            </div>
          </div>
        ))}
    </>
  );
}
