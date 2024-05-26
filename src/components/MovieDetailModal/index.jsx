export default function MovieDetailModal (movie, onClose) {
    <div className="modal"
    onClick={onClose}
    >

        <button onClick={onclose}> X </button>
        <h3> {movie.title}</h3>
        <p className="p-details">RATING: {movie.vote_average}</p>

        <p className="p-details">RELEASE DATE: {movie.release_date}</p>

        <p className="card--desc">
            {movie.overview ? movie.overview : "No description available"}
          </p>
    </div>
}