import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import tmdbLogo from "../../assets/tmdbLogo.svg";
import MobileMenuPopup from "../../components/MobileMenuPopup";

export default function NotFound() {
  return (
    <>
      <MobileMenuPopup />
    <h1> About</h1>
      <section className="AboutContainer">
        <h2>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </h2>
        <img src={tmdbLogo} alt="TMDB logo"></img>
      </section>
    </>
  );
}
