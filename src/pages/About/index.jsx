import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import tmdbLogo from "../../assets/tmdbLogo.svg";
import MobileMenuPopup from "../../components/MobileMenuPopup";

export default function NotFound() {
  return (
    <>
      <MobileMenuPopup />

      <section className="AboutContainer">
        <h3>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </h3>
        <img src={tmdbLogo}></img>
      </section>
    </>
  );
}
