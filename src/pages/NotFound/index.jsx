import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <h3>Sorry, the page you were looking for was not found.</h3>
      <Link to="/" className="linkButton">
        Return to Home
      </Link>
    </div>
  );
}
