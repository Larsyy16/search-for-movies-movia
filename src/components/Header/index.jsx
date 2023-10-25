import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import SearchMovies from "../SearchMovies";
import MobileMenu from "../MobileMenu";
import MobileSearch from '../MobileSearch'

export default function Header({ menuButton, setMenuButton }) {

  return (

    <>
      <header className="header">
        {/* <img src={logo} className="sitePicture" /> */}
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
              <Link to="/Genres" className="nav-link">
                <h2 className="genre">Genres </h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Favorites" className="nav-link">
                <h2 className="favorites">Favorites </h2>
              </Link>
            </li>
          </ul>
        </nav>
        <SearchMovies />
      </header>
    </>
  );
}
