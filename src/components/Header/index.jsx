import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import SearchMovies from "../SearchMovies";
import MobileMenu from "../MobileMenu";

export default function Header({ menuButton, setMenuButton }) {
  return (
    <>
      <header className="header">
        <h1>Movia</h1>
        <MobileMenu menuButton={menuButton} setMenuButton={setMenuButton} />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="./" className="nav-link">
                <h2 className="home">Home </h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <h2 className="About">About</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <SearchMovies />
      </header>
    </>
  );
}
