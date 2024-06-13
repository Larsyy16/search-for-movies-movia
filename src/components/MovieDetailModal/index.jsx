import { createPortal } from "react-dom";

export default function MovieDetailModal({ movie, onClose, sendDataToParent }) {
  const handleButtonClick = () => {
    // Example data to send to the parent
    const dataToSend = { message: "Child data", movieId: movie.id };
    sendDataToParent(dataToSend);
  };
  return (
    <div className="modal" onClick={onClose}>
      <button onClick={onclose}> X </button>
      <h3> {movie.title}</h3>
      <p className="p-details">RATING: {movie.vote_average}</p>

      <p className="p-details">RELEASE DATE: {movie.release_date}</p>

      {createPortal(
        <p className="card--desc">
          {movie.overview ? movie.overview : "No description available"},
        </p>,
        document.getElementById("modal"),
      )}
      <button onClick={handleButtonClick}>Send Data to Parent</button>
    </div>
  );
}
