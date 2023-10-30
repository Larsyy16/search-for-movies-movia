import React, {useState} from "react";
import IconCross from "../../../assets/IconCross";
import "./style.scss";


function Content ({ movie, onClose }) { return (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.imageBg})`,
        }}
      />
    </div>

    <div
      className="content__background__mobileImage"
      style={{
        backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/original${movie.image})`,
      }}/>

    <div className="content__area">
      <div className="content__area__container"   style={{
    backgroundImage: 'linear-gradient(to bottom, #000, transparent)',
    padding: '1rem'
  }}>
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.overview}</div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);
      }
export default Content;


//i need to chAnge to album image over backdrop image for mobile.