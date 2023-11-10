import React, { useContext } from "react";
import Slider from "../../components/FilmSlider";
import DiscoverMovies from "../../components/DiscoverMovies";
import NowPlaying from "../../components/NowPlaying";
import { Link } from "react-router-dom";
import MobileMenuPopup from "../../components/MobileMenuPopup";
import "./style.scss";

export default function Homepage() {
  const { isLoading, images } = DiscoverMovies();
  const { nowPlayingIsLoading, nowPlayingMovies } = NowPlaying();
  return (
    <>
      <h1 className="homePageHeader">Trending Movies</h1>

      <MobileMenuPopup />

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
      <h2 className="homePageHeader">Now Playing</h2>

      {nowPlayingIsLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {nowPlayingMovies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      )}
    </>
  );
}
