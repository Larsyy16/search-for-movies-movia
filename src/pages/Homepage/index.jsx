import React, { useContext } from "react";
import Slider from "../../components/FilmSlider";
import DiscoverMovies from "../../components/DiscoverMovies";
import { MenuContext } from "../../components/MenuContext";
import { Link } from "react-router-dom";

import "./style.scss";

export default function Homepage() {
  const { menuButton } = useContext(MenuContext);
  const { isLoading, images } = DiscoverMovies();

  return (
    <>
      <h1 className="homePageHeader">Trending Movies</h1>

      
      {menuButton && (
        <nav className="navMobile">
          <ul className="navMobileList">
            <li className="navMobileitem">
              <Link to="./" className="navMobileLink">
                <h2 className="home">Home </h2>
              </Link>
            </li>
            <li className="navMobileitem">
              <Link to="/Genres" className="navMobileLink">
                <h2 className="genre">Genres </h2>
              </Link>
            </li>
            <li className="navMobileitem">
              <Link to="/Favorites" className="navMobileLink">
                <h2 className="favorites">Favorites </h2>
              </Link>
            </li>
          </ul>
        </nav>
      )}
  


      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {images.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      )}
    </>
  );
}
